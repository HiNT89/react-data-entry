"use client";
import React from "react";
import { Form } from "antd";
import "../styles.css";
import CError from "../error";
import TextArea from "antd/es/input/TextArea";

interface CTextareaProps {
  label?: string;
  required?: boolean;
  type?: "text" | "password" | "number";
  name: string;
  placeholder?: string;
  handleChange: (e: any) => void;
  value: string | number;
  labelWidth?: string;
  error?: string;
  width?: string;
  props?: any;
  maxLength?: number;
}

const CTextarea: React.FC<CTextareaProps> = ({
  label,
  required = false,
  name,
  placeholder,
  handleChange,
  value,
  error,
  width = "100%",
  labelWidth = "100%",
  maxLength,
  props,
}) => {
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
        <TextArea
          name={name}
          value={value}
          rows={4}
          placeholder={placeholder}
          onChange={handleChange}
          maxLength={maxLength}
          {...props}
        />
      </Form.Item>
    </div>
  );
};

export default CTextarea;
