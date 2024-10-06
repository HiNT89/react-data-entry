"use client";
import React from "react";
import { DatePicker, DatePickerProps, Form } from "antd";
import "../styles.css";
import CError from "../error";
import dayjs from "dayjs";
import viVN from "antd/es/date-picker/locale/vi_VN";
interface CCalendarProps {
  label?: string;
  required?: boolean;
  name: string;
  placeholder?: string;
  handleChange: (e: any) => void;
  value: string;
  labelWidth?: string;
  error?: string;
  width?: string;
  props?: any;
  picker?: "week" | "month" | "year" | "quarter" | "day";
  format?: string;
  size?: "large" | "middle" | "small";
  formatInput?: string;
  view?: ("year" | "month" | "day")[];
  min?: Date;
  max?: Date;
}

const CCalendar: React.FC<CCalendarProps> = ({
  label,
  required = false,
  name,
  placeholder,
  handleChange,
  value,
  formatInput = "YYYY-MM-DD",
  error,
  width = "100%",
  labelWidth = "100%",
  props,
  picker = "day",
  format = "DD/MM/YYYY",
  size = "middle",
  min,
  max,
}) => {
  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    const dateS = date ? date.format(formatInput) : "";

    handleChange({ target: { name, value: dateS } });
  };
  const disabledDate = (current: any) => {
    const minDate = dayjs(min);
    const maxDate = dayjs(max);
    return current && (current < minDate || current > maxDate);
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
        <DatePicker
          style={{ width: "100%" }}
          name={name}
          placeholder={placeholder}
          value={value ? dayjs(value, formatInput) : null}
          onChange={onChange}
          picker={picker}
          format={format}
          size={size}
          locale={viVN}
          needConfirm
          disabledDate={disabledDate}
          {...props}
        />
      </Form.Item>
    </div>
  );
};

export default CCalendar;
