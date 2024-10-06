import React from "react";
import "../styles.css";
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
declare const CSelect: React.FC<CSelectProps>;
export default CSelect;
