import { defaultTheme } from 'react-admin';
import { Button } from './Button';

const theme  = {
  ...defaultTheme,
 components: {
    ...defaultTheme.components,
    ...Button
    
 }
}

export default theme