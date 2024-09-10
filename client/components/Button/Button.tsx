import { Button as MUIButton } from "@mui/material";
import { ButtonProps } from "./types";

export default function Button(props:ButtonProps) {

    const { text, variant, color, sx, onClick } = props;

  return (
    <MUIButton sx={sx} variant={variant} color={color} onClick={onClick}>
      {text}
    </MUIButton>
  )
}
