import { Stack } from "@mui/material";
import { styled } from '@mui/material/styles';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { BorderLinerProps } from "./types";

const CustomLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: theme.palette.mode === 'light' ? '#7CFC00' : '#2b901f',
    },
  }));

  export default function BorderLinearProgress(props:BorderLinerProps) {

    const { value } = props;

    return (
      <Stack spacing={2} sx={{ flexGrow: 1 }}>
        <CustomLinearProgress variant="determinate" value={value} />
      </Stack>
    );
  }