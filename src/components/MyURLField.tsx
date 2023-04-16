import { log } from 'console';
import { useRecordContext } from 'react-admin';
import LaunchIcon from '@mui/icons-material/Launch';
import { Link } from '@mui/material';

const MyUrlField = (props: { source: string }) => {
  const { source } = props;

  const record = useRecordContext();
  return record ? (
    <Link sx={{ textDecoration: 'none' }} href={record[source]}>
      {record[source]}
      <LaunchIcon sx={{ marginLeft: '10px', fontSize: '10px' }} />
    </Link>
  ) : null;
};

export default MyUrlField;
