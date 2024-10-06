import React from "react";
import "react-quill/dist/quill.snow.css";
import "../styles.css";
interface CEditorProps {
    label?: string;
    required?: boolean;
    name: string;
    placeholder?: string;
    handleChange: (value: any) => void;
    value: string;
    labelWidth?: string;
    error?: string;
    width?: string;
    props?: any;
    uploadImage?: (file: File[]) => Promise<string[]>;
}
declare const CEditor: React.FC<CEditorProps>;
export default CEditor;
