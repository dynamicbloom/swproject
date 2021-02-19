import { createMuiTheme } from '@material-ui/core/styles';

const Theme = createMuiTheme({
  typography: {
    fontFamily: 'Montserrat',
    color: 'inherit'
  },
  palette: {
    background: {
      default: "#1A1A1A"
    },
  },
});

export default Theme;