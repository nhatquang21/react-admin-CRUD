import {
  AppBar,
  TitlePortal,
  ToggleThemeButton,
  defaultTheme,
  useUserMenu,
  UserMenu,
  Logout,
  useRedirect,
  Link,
} from 'react-admin';
import { MenuItem, ListItemIcon, ListItemText } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';

const SettingsMenuItem = () => {
  return (
    <MenuItem>
      <ListItemIcon>
        <SettingsIcon fontSize="small" />
      </ListItemIcon>
      <ListItemText>
        <Link sx={{ color: 'black' }} to="/changePWD">
          Change password
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
  />
);

export default MyAppBar;
