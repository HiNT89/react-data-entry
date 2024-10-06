import React from "react";
import "../styles.css";
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
declare const CCalendarRange: React.FC<CCalendarRangeProps>;
export default CCalendarRange;
