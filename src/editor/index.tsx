import React, { useRef, useState, useCallback } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "../styles.css"; // Import the regular SCSS file
import CError from "../error";
import { Form } from "antd";
interface CEditorProps {
  label?: string;
  required?: boolean;
  name: string;
  placeholder?: string;
  handleChange: (value: any) => void;
  value: string;
  labelWidth?: string;
  error?: string;
  width?: string;
  props?: any;
  uploadImage?: (file: File[]) => Promise<string[]>;
}
const CONTAINER = [
  [{ header: "1" }, { header: "2" }, { font: [] }],
  [{ size: [] }],
  ["bold", "italic", "underline", "strike", "blockquote"],
  [{ list: "ordered" }, { list: "bullet" }, { indent: "-1" }, { indent: "+1" }],

  ["code-block"],
  ["clean"],
];
const CEditor: React.FC<CEditorProps> = ({
  label,
  required = false,
  name,
  placeholder,
  handleChange,
  value,
  error,
  width = "100%",
  labelWidth = "100%",
  props,
  uploadImage,
}) => {
  const [editorData, setEditorData] = useState(value || "");
  const reactQuillRef = useRef<ReactQuill>(null);

  const handleEditorChange = useCallback(
    (value: any) => {
      setEditorData(value);
      handleChange({ target: { name, value } });
    },
    [handleChange, name]
  );
  const imageHandler = useCallback(() => {
    if (!uploadImage) return;
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();
    input.onchange = async () => {
      if (input !== null && input.files !== null) {
        const file = input.files[0];
        const imageUrl = await uploadImage([file]);
        const quill = reactQuillRef.current;
        if (quill) {
          const range = quill.getEditorSelection();
          range &&
            quill.getEditor().insertEmbed(range.index, "image", imageUrl);
        }
      }
    };
  }, []);
  if (uploadImage) CONTAINER.push(["link", "image", "video"]);
  return (
    <div className="data-entry-wrapper" style={{ width }}>
      {label && (
        <label style={{ width: labelWidth }}>
          {label}
          {required && <span className="required">*</span>}
        </label>
      )}
      <Form.Item
        validateStatus={error ? "error" : undefined}
        help={error ? <CError message={error} /> : null}
        style={{ flexGrow: "1" }}
      >
        <ReactQuill
          ref={reactQuillRef}
          theme="snow"
          placeholder={placeholder}
          modules={{
            toolbar: {
              container: CONTAINER,
              handlers: {
                image: imageHandler, // <-
              },
            },
            clipboard: {
              matchVisual: false,
            },
          }}
          formats={[
            "header",
            "font",
            "size",
            "bold",
            "italic",
            "underline",
            "strike",
            "blockquote",
            "list",
            "bullet",
            "indent",
            "link",
            "image",
            "video",
            "code-block",
          ]}
          value={editorData}
          onChange={handleEditorChange}
          {...props}
        />
      </Form.Item>
    </div>
  );
};

export default CEditor;
