import {
  Box,
  Modal,
  Button,
  Typography,
  Container,
  ImageList,
  ImageListItem,
} from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const CustomImageList = styled(ImageList)`
  padding: 1rem;
`;
const CustomImageListItem = styled(ImageListItem)`
  margin: 0.5rem;
  &:hover {
    & div {
      opacity: 0.75;
    }
  }
  & img {
  }
  & div {
    padding: 100px 0;
    z-index: 50;
    width: 100%;
    height: 100%;
    text-align: center;
    vertical-align: middle;
    background-color: black;
    border-radius: 15px;
    color: white;
    position: absolute;
    bottom: 0;
    opacity: 0;
  }
`;
const ModalHeader = styled(Container)`
  width: 100%;
  padding: 1rem 0;
  height: 65px;
  display: flex;
  justify-content: center;
`;
const CustomBox = styled(Box)`
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  width: 850px;
  height: 550px;
  box-shadow: 24;
  background-color: white;
  padding: 4;
  border-radius: 15px;
  overflow-y: auto;
`;
const director = [' 자비에 돌란 '];
function DirectorModal() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Button onClick={handleOpen}>{director}</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <CustomBox>
          <ModalHeader>
            <Typography variant="h5">{director.name}의 다른 작품</Typography>
          </ModalHeader>
          <CustomImageList cols={5} rowHeight={220}>
            {[1, 2, 3, 4, 5].map(item => (
              <Link to={`/movie/${item}`}>
                <CustomImageListItem>
                  <img
                    style={{ borderRadius: 15 }}
                    src="https://img.wavve.com/movieImg/MV_CW01/3/MV_CW01_CW0000011613.jpg"
                    loading="lazy"
                    alt="영화제목"
                  />
                  <div>영화제목</div>
                </CustomImageListItem>
              </Link>
            ))}
          </CustomImageList>
        </CustomBox>
      </Modal>
    </div>
  );
}

export default DirectorModal;
