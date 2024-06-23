const formatUrl = (url: string) => {
  if (url.includes('https://') && url.includes('='))
    return url.split("=")[1];
  else return url;
};

export default formatUrl;