import { Paper } from '@mui/material';
import styled from 'styled-components';
import Infotable from './Infotable';

const CustomPaper = styled(Paper)`
  width: 60%;
  height: 100%;
  border-radius: 15px;
  border: 1px;
  margin: 10px;
  background-color: white;
`;

function Infobox() {
  return (
    <CustomPaper className="infobox" elevation={3}>
      <Infotable />
    </CustomPaper>
  );
}

export default Infobox;
