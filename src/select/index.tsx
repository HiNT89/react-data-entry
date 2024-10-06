"use client";
import React from "react";
import { Select, Form } from "antd";
import "../styles.css";
import CError from "../error";

interface CSelectProps {
  label?: string;
  required?: boolean;
  name: string;
  placeholder?: string;
  handleChange: (value: any) => void;
  value: string[] | string;
  labelWidth?: string;
  error?: string;
  width?: string;
  size?: "large" | "small" | "middle";
  type?: "multiple" | "single";
  options: any[];
  props?: any;
}

const CSelect: React.FC<CSelectProps> = ({
  label,
  required = false,
  name,
  placeholder,
  handleChange,
  value,
  error,
  width = "100%",
  labelWidth = "100%",
  size = "middle",
  type = "single",
  options,
  props,
}) => {
  const handleOnChange = (selectedValue: any) => {
    handleChange({ target: { value: selectedValue, name } });
    console.log("selectedValue", selectedValue);
  };

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
        <Select
          mode={type === "multiple" ? "multiple" : undefined}
          size={size}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={handleOnChange}
          options={options}
          optionRender={(option) => option.label}
          {...props}
        />
      </Form.Item>
    </div>
  );
};

export default CSelect;
