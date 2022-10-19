import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

const GenreItem = styled.div`
  height: 100%;
  cursor: pointer;
  color: gray;
  border: 1px solid lightgray;
  border-radius: 5px;
  padding: 5px 2px;
  text-align: center;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  max-height: min-content;
  &:hover {
    background-color: lightgray;
    color: white;
  }
  background-color: ${props =>
    props.clickedGenre.includes(props.item) ? 'lightgray' : ''};
`;

function GenreButton({ item, setClickedGenre, clickedGenre }) {
  const navigation = useNavigate();
  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');
  const sortType = searchParams.get('sort');
  const nationFlag = searchParams.get('nationFlag');
  const showTimeFilter = searchParams.get('showTimeFilter');
  const openDateFilter = searchParams.get('openDateFilter');

  const onClickGenre = () => {
    let clickItem = [];
    clickItem = clickedGenre;
    if (clickItem.includes(item)) {
      clickItem = clickItem.filter(gen => gen !== item);
    } else {
      clickItem.push(item);
    }

    setClickedGenre([...clickItem]);
    const genreFilter = clickItem.join(',');

    navigation(
      `/search?query=${query}&page=${1}&nationFlag=${nationFlag}&sort=${sortType}&genreFilter=${genreFilter}&showTimeFilter=${showTimeFilter}&openDateFilter=${openDateFilter}&size=${30}`,
    );
  };
  return (
    <GenreItem clickedGenre={clickedGenre} item={item} onClick={onClickGenre}>
      {item}
    </GenreItem>
  );
}

export default GenreButton;
