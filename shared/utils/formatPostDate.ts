import dayjs from "dayjs";
import "dayjs/locale/en";

const formatPostDate = (date: string | undefined) => {
  const dateFormat = "MMMM D , YYYY";
  return date ? dayjs(date).locale("en").format(dateFormat) : "";
};
export default formatPostDate;
