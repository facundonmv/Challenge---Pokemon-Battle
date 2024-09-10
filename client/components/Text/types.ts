export type TextProps = {
    value: string;
    variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "subtitle1" | "subtitle2" | "body1" | "body2" | "button" | "caption" | "overline";
    fontSize?: number;
    fontWeight?: number;
    color?: string;
    textAlign?: "left" | "right" | "center" | "justify"
}