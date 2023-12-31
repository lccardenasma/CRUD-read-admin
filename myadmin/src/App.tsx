import { Admin, Resource, } from "react-admin";
//import { dataProvider } from "./dataProvider";
import { authProvider } from "./authProvider";
import Dashboard from "./components/dashboard/dashboard";
import { taskList, taskCreate, taskEdit } from "./tasks";
import fakeDataProvider from 'ra-data-fakerest';
import theme from "./theme/theme";

const dataProvider = fakeDataProvider(
  {tasks:[]})


export const App = () => (
  <Admin dashboard={Dashboard} dataProvider={dataProvider} authProvider={authProvider} theme={theme}>
    <Resource
      name="tasks"
      list={taskList}   
      create={taskCreate}   
      edit={taskEdit}
    />
  </Admin>
);
