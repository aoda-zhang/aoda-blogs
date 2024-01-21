import fs from "fs";
import path from "path";
import grayMatter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkHTML from "remark-html";
import { promisify } from "util";
import { MDFileItemType, MDFileOption } from "../types";

const readdir = promisify(fs.readdir);
const readFile = promisify(fs.readFile);

const getSingleMDFileContent = async (
  filePath: string,
): Promise<MDFileItemType> => {
  const fileContent = await readFile(filePath, "utf-8");
  const { data = {}, content } = grayMatter(fileContent);
  const processor = unified().use(remarkParse).use(remarkHTML);
  const htmlContent = await processor.process(content);
  const contentHtml = htmlContent.toString();
  return {
    title: data?.title ?? null,
    summary: data?.summary ?? null,
    date: data?.date ?? null,
    content: contentHtml,
    ...data,
  };
};

const getMDFolderContents = async (
  filePath: string,
): Promise<MDFileItemType[]> => {
  try {
    const files = await readdir(filePath);
    const markdownFiles = files.filter(file => file.endsWith("md"));
    const contentPromises = markdownFiles.map(async file => {
      const fileFullPath = path.join(filePath, file);
      return getSingleMDFileContent(fileFullPath);
    });
    const allContents = await Promise.all(contentPromises);
    return allContents;
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
};

const getMDFileContent = async (fileOption: string | MDFileOption[]) => {
  try {
    if (typeof fileOption === "string") {
      const stats = await promisify(fs.stat)(fileOption);
      if (stats.isFile()) {
        return {
          props: {
            datas: await getSingleMDFileContent(fileOption),
          },
        };
      }
      if (stats.isDirectory()) {
        return {
          props: {
            datas: await getMDFolderContents(fileOption),
          },
        };
      }
    }

    if (Array.isArray(fileOption)) {
      const filesPromises = fileOption?.map(async item => ({
        [item?.name]: await getMDFolderContents(item?.path),
      }));
      const files = await Promise.all(filesPromises);
      const result = files.reduce((acc, curr) => ({ ...acc, ...curr }), {});
      return {
        props: {
          datas: result,
        },
      };
    }
  } catch (error) {
    console.error("Error:", error);
    return {
      props: {
        datas: [],
      },
    };
  }
};

export default getMDFileContent;
