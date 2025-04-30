
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
    typography: {
        fontFamily: [
            '"JetBrains Mono"',
        ].join(','),
    },
    palette: {
        primary: {
            main: '#333',
        },
        secondary: {
            main: '#5c5c5c',
        },
    },
});
theme = responsiveFontSizes(theme);

export default theme;