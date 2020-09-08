import { createMuiTheme } from "@material-ui/core/styles";

const arcBlue = "#0b8c88";
const arcWhiteBlue = "#10C9C3";

const arcGrey='#868686'
export default createMuiTheme({
  palette: {
    common: {
        arcBlue: arcBlue,
        arcWhiteBlue: arcWhiteBlue,
        arcGrey: arcGrey
    },
    primary: {
        main: arcWhiteBlue,
    },
    secondary: {
        main: arcWhiteBlue,
    },
    typography: {
        subtitle1:{
            fontSize: "1rem",
            fontWeight: 200,
            color: arcGrey
        },
    }
}
})