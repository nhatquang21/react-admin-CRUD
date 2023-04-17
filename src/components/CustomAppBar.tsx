import {
  AppBar,
  TitlePortal,
  UserMenu,
  Logout,
  Link,
  useTranslate,
} from 'react-admin';
import { MenuItem, ListItemIcon, ListItemText } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';

const SettingsMenuItem = () => {
  const translate = useTranslate();
  return (
    <MenuItem>
      <ListItemIcon>
        <SettingsIcon fontSize="small" />
      </ListItemIcon>
      <ListItemText>
        <Link sx={{ color: 'black' }} to="/changePWD">
          {translate('buttons.changePWD')}
        </Link>
      </ListItemText>
    </MenuItem>
  );
};

const MyAppBar = () => (
  <AppBar
    userMenu={
      <UserMenu>
        <SettingsMenuItem />
        <Logout />
      </UserMenu>
    }
  >
    <TitlePortal />
  </AppBar>
);

export default MyAppBar;
