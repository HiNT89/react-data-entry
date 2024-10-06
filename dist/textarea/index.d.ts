import React from "react";
import "../styles.css";
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
declare const CTextarea: React.FC<CTextareaProps>;
export default CTextarea;
