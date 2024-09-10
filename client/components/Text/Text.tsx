import { Typography } from "@mui/material";
import { TextProps } from "./types";

const DEFAULT_ALIGN = "left";
const DEFAULT_COLOR = "#fff";
const DEFAULT_WEIGHT = 300;

export default function Text(props:TextProps) {

    const { value, variant, fontSize, fontWeight={DEFAULT_WEIGHT}, color=DEFAULT_COLOR, textAlign=DEFAULT_ALIGN } = props;

  return (
    <Typography 
        variant={variant}
        fontSize={fontSize}
        fontWeight={fontWeight}
        textAlign={textAlign}
    >
        {value}
    </Typography>
  )
}
