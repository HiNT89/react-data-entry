import React from "react";
import "../styles.css";
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
declare const CCalendar: React.FC<CCalendarProps>;
export default CCalendar;
