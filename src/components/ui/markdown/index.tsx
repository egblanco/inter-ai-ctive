import React from "react";
import ReactMarkdown from "react-markdown";
import "./markdown.css";

const Markdown = ({ text }: { text: string }) => {
  return <ReactMarkdown className="markdown">{text}</ReactMarkdown>;
};

export default Markdown;
