import React from 'react';
import { Container } from '@mui/material';
import styled from 'styled-components';
import ReviewBox from '../components/movie/Reviewbox';
import Imagebox from '../components/movie/Imagebox';
import WordCloudBox from '../components/movie/Wordcloudbox';
import Layout from '../components/common/Layout';
import FloatingButton from '../components/search/FloatingButton';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Infobox from '../components/movie/Infobox';

const Wrapper = styled(Container)`
  display: flex;
  margin: 3rem auto 0 auto;
  flex-direction: column;
`;

const Header = styled(Container)`
  display: flex;
  align-items: center;
  margin: 2rem 0;
`;

function Movie() {
  /*const [movie, setMovie] = useState([]);

  useEffect(() => {
    axios
      .get('http://192.168.0.110:5601/app')
      .then(res => console.log(res.data));
  });*/
  return (
    <>
      <Layout isNavSearch={true} isMain={false}>
        <Wrapper>
          <Header>
            <Imagebox />
            <Infobox />
          </Header>
          <ReviewBox />
          <WordCloudBox />
          <FloatingButton />
        </Wrapper>
      </Layout>
    </>
  );
}

export default Movie;

/*const [movie, setMovie] = useState([]);
  const params = useParams();

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/photos').then(res => {
      const item = res.data.filter(item => item.id === parseInt(params.id));

      setMovie(...item);
    });
  }, []);*/
