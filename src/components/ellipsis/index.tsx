const TruncatedText = ({ text, maxLength }: {text: string, maxLength: number}) => {
  if (text.length > maxLength) {
    return <>{text.substring(0, maxLength)}...</>;
  } else {
    return <>{text}</>;
  }
};

export default TruncatedText;
