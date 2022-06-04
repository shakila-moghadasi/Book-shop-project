import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import createBreakpoints from "@mui/system/createTheme/createBreakpoints";
import Paginaion from "./Pagination";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const breakpoints = createBreakpoints({
  xs: 0,
  sm: 600,
  md: 960,
  lg: 1280,
  xl: 1920
});

const theme = createTheme({
  breakpoints: {
    values: { ...breakpoints }
  },
  typography: {
    body1: {
      fontSize: 36,
      fontWeight: "bolder",
      color: "hotpink",
      [breakpoints.down("sm")]: {
        fontSize: 12,
        fontWeight: 400,
        color: "green"
      }
    }
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        body2: {
          fontSize: 36,
          fontWeight: "bolder",
          color: "red",
          [breakpoints.down("sm")]: {
            fontSize: 12,
            fontWeight: 400,
            color: "blue"
          }
        }
      }
    }
  }
});

export default function Managementcommodity() {
  return (
    <ThemeProvider theme={theme}>
      <Stack direction="row">
        <Button variant="contained">Add Commodity</Button>
        Management commodity
      </Stack>  
      <div>
        <Paginaion />
      </div>
    </ThemeProvider>
  );
}
