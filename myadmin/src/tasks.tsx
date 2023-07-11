import {
  List,
  Datagrid,
  TextField,
  Create,
  Edit,
  SimpleForm,
  TextInput,
  required,
  SelectInput,
  CreateButton,
  TopToolbar
} from "react-admin";
import { MyToolbar } from './MyToolbar';
import { Box } from "@material-ui/core";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { Typography } from '@mui/material';


const ListActions = () => (
  <TopToolbar>
    <CreateButton label="Create" icon={<AddCircleOutlineIcon/>} />
  </TopToolbar>
);

const Empty = () => (
  <Box className="empty" textAlign="center" justifyContent="center">
      <CreateButton label="Create" sx={{
        margin: '20px'
      }} icon={<AddCircleOutlineIcon/>} />
  </Box>
);


export const taskList = () => (
  <List empty={<Empty/>} actions={<ListActions />}>
    <Datagrid rowClick="edit">
      <TextField source="Task" />
      <TextField source="Description" />
      <TextField source="State" />
    </Datagrid>
  </List>
);


export const taskCreate = () => (
  <Create>
    <SimpleForm toolbar={<MyToolbar />}>
      <Typography variant="h4" className="label-field">Task</Typography>
      <TextInput source="Task" prefix="Tarea" variant="outlined" validate={[required()]} fullWidth />
      <Typography variant="h4" className="label-field">Description</Typography>
      <TextInput source="Description" label="Description" variant="outlined" validate={[required()]} multiline minRows={3} maxRows={3} fullWidth />
      <Typography variant="h4" className="label-field">State</Typography>
      <SelectInput source="State" variant="outlined" validate={[required()]} choices={[
        { id: 'done', name: 'Done' },
        { id: 'process', name: 'In progress' },
        { id: 'pending', name: 'Pending' },
      ]} />
    </SimpleForm>
  </Create>
);
export const taskEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="Task" variant="outlined" validate={[required()]} fullWidth />
      <TextInput source="Description" variant="outlined" validate={[required()]} multiline minRows={3} maxRows={3} fullWidth />
      <SelectInput source="State" variant="outlined" choices={[
        { id: 'done', name: 'Done' },
        { id: 'process', name: 'In progress' },
        { id: 'pending', name: 'Pending' },
      ]} />
    </SimpleForm>
  </Edit>
);