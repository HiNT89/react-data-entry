"use client";
import React from "react";
import { DatePicker, Form } from "antd";
import "../styles.css";
import CError from "../error";
import dayjs from "dayjs";
import viVN from "antd/es/date-picker/locale/vi_VN";

const { RangePicker } = DatePicker;
interface CCalendarRangeProps {
  label?: string;
  required?: boolean;
  name: string;
  placeholder?: string;
  handleChange: (e: any) => void;
  value: string[];
  labelWidth?: string;
  error?: string;
  width?: string;
  props?: any;
  format?: string;
  size?: "large" | "middle" | "small";
  formatInput?: string;
  view?: ("year" | "month" | "day")[];
  min?: Date;
  max?: Date;
}

const CCalendarRange: React.FC<CCalendarRangeProps> = ({
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
  format = "DD/MM/YYYY",
  size = "middle",
  min = new Date("1800-01-01"),
  max = new Date("5000-01-01"),
}) => {
  const onRangeChange = (dates: any, dateStrings: string[]) => {
    if (dates) {
      const startDate = dates ? dates[0].format(formatInput) : "";
      const endDate = dates ? dates[1].format(formatInput) : "";
      console.log(startDate, endDate);
      handleChange({ target: { name, value: [startDate, endDate] } });
    }
  };
  const disabledDate = (current: any) => {
    const minDate = dayjs(min);
    const maxDate = dayjs(max);
    return current && (current < minDate || current > maxDate);
  };
  const rangePresets: any = [
    { label: "Last 7 Days", value: [dayjs().add(-7, "d"), dayjs()] },
    { label: "Last 14 Days", value: [dayjs().add(-14, "d"), dayjs()] },
    { label: "Last 30 Days", value: [dayjs().add(-30, "d"), dayjs()] },
    { label: "Last 90 Days", value: [dayjs().add(-90, "d"), dayjs()] },
  ];
  console.log("value", value);
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
        <RangePicker
          name={name}
          placeholder={placeholder}
          value={
            value && value.length == 2
              ? [dayjs(value[0], formatInput), dayjs(value[1], formatInput)]
              : [null, null]
          }
          presets={[
            {
              value: () => [dayjs(), dayjs().endOf("day")], // 5.8.0+ support function
            },
            ...rangePresets,
          ]}
          onChange={onRangeChange}
          format={format}
          size={size}
          locale={viVN}
          disabledDate={disabledDate}
          {...props}
        />
      </Form.Item>
    </div>
  );
};

export default CCalendarRange;
