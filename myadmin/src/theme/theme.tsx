import { defaultTheme } from 'react-admin';
import { Button } from './Button'; 
import { Title } from "./Title";

const theme  = {
  ...defaultTheme,
 components: {
    ...defaultTheme.components,
    ...Button,
    ...Title
 }
 }

export default theme