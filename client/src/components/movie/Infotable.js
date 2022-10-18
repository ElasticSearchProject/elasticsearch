import { Box, List, ListItem, Divider } from '@mui/material';
import styled from 'styled-components';
import ActorModal from './Actormodal';
import DirectorModal from './Directormodal';
import MovieStory from './MovieStory';
import ActorList from './ActorList.json';

const CustomBox = styled(Box)`
  width: 100%;
  height: 400px;
  background-color: white;
  border-radius: 15px;
`;
const Customdiv = styled.div`
  height: 8%;
  max-width: 80%;
`;
const Customdiv2 = styled.div`
  height: 10%;
  max-width: 80%;
  margin: auto;
  display: block;
  text-align: center;
`;
const Navdiv = styled.div`
  display: flex;
  width: 7%;
`;

function Infotable() {
  console.log(ActorList, typeof ActorList);

  return (
    <CustomBox>
      <Customdiv2>상영상태 표시</Customdiv2>
      <Divider />
      <List>
        <ListItem>
          <Navdiv>감독</Navdiv>
          <Customdiv>
            <DirectorModal />
          </Customdiv>
        </ListItem>
        <Divider />
        <ListItem>
          <Navdiv>출연</Navdiv>
          <Customdiv>
            <ActorModal actor={ActorList} />
          </Customdiv>
        </ListItem>
        <Divider />
        <ListItem style={{ justifyContent: 'center' }}>
          <Navdiv>소개</Navdiv>
        </ListItem>
        <Divider />
        <ListItem>
          <MovieStory />
        </ListItem>
      </List>
    </CustomBox>
  );
}

export default Infotable;
