const firstLetterUp = (value: string) => {
  if (typeof value === "string") {
    return value?.charAt(0)?.toUpperCase() + value.slice(1);
  } else {
    console.error("the value is NOT a string type");
    return "";
  }
};
export default firstLetterUp;
