import { Toolbar, SaveButton } from 'react-admin';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

export const MyToolbar = () => (
    <Toolbar>
        <SaveButton label="Create" icon={<AddCircleOutlineIcon />} />
    </Toolbar>
);