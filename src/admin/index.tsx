import { Admin, Resource, Layout, CustomRoutes } from 'react-admin';

import { authProvider, dataProvider, storage } from '../provider';
import SwitchAccountIcon from '@mui/icons-material/SwitchAccount';
import { Dashboard } from '../components/Dashboard';
import { DishEdit } from '../crud/edit/DishEdit';
import MyLoginPage from '../pages/Login';
import DishesList from '../pages/Dishes';
import { ReactQueryDevtools } from 'react-query/devtools';
import { DishCreate } from '../crud/create/DishCreate';
import RamenDiningIcon from '@mui/icons-material/RamenDining';
import FilterFramesIcon from '@mui/icons-material/FilterFrames';
import { OrderList } from '../pages/Orders';
import { OrderEdit } from '../crud/edit/OrderEdit';
import { OrderCreate } from '../crud/create/OrderCreate';
import { UserList } from '../pages/UserList';
import { UserEdit } from '../crud/edit/UserEdit';
import { UserCreate } from '../crud/create/UserCreate';
import { Route } from 'react-router-dom';
import { CustomerList } from '../pages/Customer';
import { EmployeeList } from '../pages/Employee';
import { RoleList } from '../pages/Role';
import ChangePWD from '../crud/edit/Changepwd';
import MyAppBar from '../components/CustomAppBar';
import i18nProvider from '../provider/i18nProvider';

export const MyLayout = (props: any) => (
  <>
    <Layout appBar={MyAppBar} {...props} />
    <ReactQueryDevtools initialIsOpen={false} />
  </>
);

const App = () => {
  // const history = createBrowserHistory();
  return (
    <Admin
      dataProvider={dataProvider as any}
      i18nProvider={i18nProvider}
      dashboard={Dashboard}
      loginPage={MyLoginPage}
      layout={MyLayout}
      basename="/"
      authProvider={authProvider}
    >
      {(permissions) => (
        <>
          {permissions === 'admin' || permissions == 'employee' ? (
            <Resource
              name="dishes"
              list={DishesList}
              edit={DishEdit}
              create={DishCreate}
              icon={RamenDiningIcon}
            />
          ) : (
            <Resource name="dishes" list={DishesList} icon={RamenDiningIcon} />
          )}

          {permissions === 'employee' || permissions === 'admin' ? (
            <>
              <Resource
                name="customers"
                list={CustomerList}
                recordRepresentation="name"
              />
              <Resource
                name="orders"
                list={OrderList}
                edit={OrderEdit}
                create={OrderCreate}
                icon={FilterFramesIcon}
              />
            </>
          ) : null}
          <CustomRoutes>
            <Route path="/changePWD" element={<ChangePWD />} />
          </CustomRoutes>
          {permissions === 'admin' ? (
            <>
              <Resource
                name="users"
                list={UserList}
                edit={UserEdit}
                create={UserCreate}
                icon={SwitchAccountIcon}
                recordRepresentation="username"
              />
              <Resource
                name="employees"
                list={EmployeeList}
                recordRepresentation={(record: any) => `${record.name} `}
              />
              <Resource
                name="roles"
                list={RoleList}
                recordRepresentation="name"
              />
            </>
          ) : null}
        </>
      )}
    </Admin>
  );
};
export default App;
