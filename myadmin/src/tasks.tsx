import { List, Datagrid, TextField,  Create, Edit, SimpleForm, TextInput, required, SelectInput} from "react-admin";

export const taskList = () => (
  <List>
    <Datagrid rowClick="show">
      <TextField source="Task" />
      <TextField source="Description" />
      <TextField source="State" />    
    </Datagrid>
  </List>
);


export const taskCreate = () => (
    <Create>
      <SimpleForm>
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