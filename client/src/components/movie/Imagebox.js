import { Paper } from '@mui/material';
import styled from 'styled-components';
import Posterimage from './Posterimage';

const Wrapper = styled.div`
  width: 40%;
`;
const CustomPaper = styled(Paper)`
  height: 100%;
  border-radius: 15px;
`;

function Imagebox() {
  return (
    <Wrapper>
      <CustomPaper elevation={3}>
        <Posterimage />
      </CustomPaper>
    </Wrapper>
  );
}

export default Imagebox;
