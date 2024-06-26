const isvalidUrl = (url: string) => {
  if ((!url.startsWith("https://") || !url.startsWith("PL")) && !url.includes("PL")) {
    return false;
  }
  return true;
};

export default isvalidUrl;