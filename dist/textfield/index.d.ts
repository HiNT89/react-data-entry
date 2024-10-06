import React from "react";
import "../styles.css";
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
declare const CTextField: React.FC<CTextFieldProps>;
export default CTextField;
