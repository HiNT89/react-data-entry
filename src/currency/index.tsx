import React, { useState } from "react";
import { Input, Form } from "antd";
import "../styles.css";
import CError from "../error";

interface CCurrencyProps {
  label?: string;
  required?: boolean;
  name: string;
  placeholder?: string;
  handleChange: (value: any) => void;
  value: number;
  labelWidth?: string;
  error?: string;
  width?: string;
  min?: number;
  max?: number;
  size?: "large" | "small" | "middle";
  suffix?: string;
  prefix?: string;
  props?: any;
}

const CCurrency: React.FC<CCurrencyProps> = ({
  label,
  required = false,
  name,
  placeholder,
  handleChange,
  value,
  error,
  width = "100%",
  labelWidth = "100%",
  min = 0,
  max = 10000000000,
  size = "middle",
  suffix = "VND",
  props,
}) => {
  const handleOnChange = (e: any) => {
    const new_value = e.target.value.replace(/\D/g, "") ?? "0"; // Remove all non-digit characters
    let numericValue = parseFloat(new_value) || 0; // Convert to number

    // Check if the value is within the min and max range
    if (numericValue < min) {
      numericValue = min;
    } else if (numericValue > max) {
      numericValue = max;
    }

    const formattedNumber = numericValue
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, "."); // Add thousand separators with dot
    handleChange({
      target: {
        value: formattedNumber,
        name,
      },
    });
  };
  console.log("value", value, max);
  return (
    <div className="data-entry-wrapper" style={{ width }}>
      {label && (
        <label style={{ width: labelWidth }}>
          {label}
          {required && <span className="required">*</span>}
        </label>
      )}
      {/* content */}
      <Form.Item
        validateStatus={error ? "error" : undefined}
        help={error ? <CError message={error} /> : null}
        style={{ flexGrow: "1" }}
      >
        <Input
          type={"text"}
          size={size}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={handleOnChange}
          suffix={suffix}
          {...props}
        />
      </Form.Item>
    </div>
  );
};

export default CCurrency;
