"use client";

import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import TextAlign from "@tiptap/extension-text-align";
import React from "react";
import MenuBar from "./menu";
import Highlight from "@tiptap/extension-highlight";

export default function RichTextEditor({ content, onChange }) {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        bulletList: {
          HTMLAttributes: { class: "list-disc ml-3" },
        },
        orderedList: {
          HTMLAttributes: { class: "list-decimal ml-3" },
        },
      }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Highlight,
    ],
    content,
    editorProps: {
      attributes: {
        class: "min-h-[156px] border rounded-md bg-slate-50 py-2 px-3",
      },
    },
    onUpdate: ({ editor }) => {
      if (onChange) {
        // ✅ Prevents error if onChange is missing
        onChange(editor.getHTML());
      }
    },
  });

  return (
    <div>
      {editor && <MenuBar editor={editor} />}
      <EditorContent editor={editor} />
    </div>
  );
}
