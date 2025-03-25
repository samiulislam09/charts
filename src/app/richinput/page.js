"use client";
import RichTextEditor from "@/components/tiptap/tiptap";
import React, { useState, useEffect } from "react";

function Page() {
  const [content, setContent] = useState("");

  useEffect(() => {
    // This code will only run on the client side
    console.log(content);
  }, [content]);

  const onChange = (content) => {
    setContent(content);
  };

  return (
    <div className="max-w-4xl mx-auto mt-4">
      <RichTextEditor content={content} onChange={onChange} />
      <p>Output</p>
      <div className="mt-4 p-4 border rounded-md bg-gray-100">
        <div  dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  );
}

export default Page;
