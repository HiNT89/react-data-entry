import React from "react";
import "../styles.css";
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
declare const CCurrency: React.FC<CCurrencyProps>;
export default CCurrency;
