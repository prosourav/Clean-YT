const isvalidUrl = (url: string) => {
  if ((!url.startsWith("https://") || !url.startsWith("PL_")) && !url.includes("PL_")) {
    return false;
  }
  return true;
};

export default isvalidUrl;