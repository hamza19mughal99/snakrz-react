/**
 * Rct Theme Provider
 */
import React, { Fragment } from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';

// App locale

// themes
import primaryTheme from './themes/primaryTheme';
import darkTheme from './themes/darkTheme';
import secondaryTheme from './themes/secondaryTheme';
import warningTheme from './themes/warningTheme';
import dangerTheme from './themes/dangerTheme';
import infoTheme from './themes/infoTheme';
import successTheme from './themes/successTheme';

function RctThemeProvider(props) {
   const settings = useSelector(state => state.settings);
   const { darkMode, activeTheme } = settings;
   const { children } = props;

   // theme changes
   let theme = '';
   switch (activeTheme.id) {
      case 1:
         theme = primaryTheme
         break;
      case 2:
         theme = secondaryTheme
         break;
      case 3:
         theme = warningTheme
         break;
      case 4:
         theme = infoTheme
         break;
      case 5:
         theme = dangerTheme
         break;
      case 6:
         theme = successTheme
         break;
      default:
         break;
   }

   if (darkMode) {
      theme = darkTheme
   }



   return (
      <MuiThemeProvider theme={theme}>
         <Fragment>
            {children}
         </Fragment>
      </MuiThemeProvider>
   );
}

export default RctThemeProvider;
