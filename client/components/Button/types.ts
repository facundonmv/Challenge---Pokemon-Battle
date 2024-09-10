export type ButtonProps = {
    text: string;
    variant?: "contained" | "outlined" | "text";
    color?: "primary" | "inherit" | "secondary" | "success" | "error" | "info" | "warning";
    sx?: object;
    onClick?: () => void;
}