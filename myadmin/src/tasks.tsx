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
      <TextInput source="Task" validate={[required()]} fullWidth />
      <TextInput source="Description" validate={[required()]} multiline fullWidth />
      <SelectInput source="State" validate={[required()]} choices={[
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
      <TextInput source="Task" validate={[required()]} fullWidth />
      <TextInput source="Description" validate={[required()]} multiline fullWidth />
      <SelectInput source="State" choices={[
        { id: 'done', name: 'Done' },
        { id: 'process', name: 'In progress' },
        { id: 'pending', name: 'Pending' },
      ]} />
    </SimpleForm>
  </Edit>
);