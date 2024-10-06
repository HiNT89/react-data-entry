import React, { useState } from "react";
import { Input, Form } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import "../styles.css";
import CError from "../error";

interface CTextFieldProps {
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
  suffix?: React.ReactNode;
  size?: "large" | "small" | "middle";
  props?: any;
}

const CTextField: React.FC<CTextFieldProps> = ({
  label,
  required = false,
  type = "text",
  name,
  placeholder,
  handleChange,
  value,
  error,
  width = "100%",
  labelWidth = "100%",
  suffix,
  size = "middle",
  props,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const getInputType = () => {
    if (type === "password") {
      return showPassword ? "text" : "password";
    }
    return type;
  };

  const renderSuffix = () => {
    if (type === "password") {
      return (
        <FontAwesomeIcon
          icon={showPassword ? faEyeSlash : faEye}
          onClick={togglePasswordVisibility}
          style={{ cursor: "pointer" }}
        />
      );
    }
    return suffix;
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
        <Input
          type={getInputType()}
          size={size}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
          suffix={renderSuffix()}
          {...props}
        />
      </Form.Item>
    </div>
  );
};

export default CTextField;
