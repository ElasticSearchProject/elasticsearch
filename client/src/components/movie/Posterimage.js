import styled from 'styled-components';

const Box = styled.div`
  height: 50vh;
  margin: 15px;

  & img {
    width: 75%;
    height: 100%;
    margin: auto;
    display: block;
    border-radius: 15px;
  }
`;

function Posterimage() {
  return (
    <Box>
      <img src="https://movie-phinf.pstatic.net/20200707_140/1594088533585ADVHN_JPEG/movie_image.jpg?type=m203_290_2" />
    </Box>
  );
}

export default Posterimage;
