import styled from "@emotion/styled";

export const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  max-width: auto;
  position: relative;
  justify-content: center;
  align-items: center;
`;

export const SlideContainer = styled.div`
  width: 100%;
  height: 0;
  padding-bottom: 135%;
  border-radius: 10px;
  background-position: center;
  background-size: cover;
  background-image: url(${(props) => props.imageUrl});
`;

export const RightArrowStyles = styled.div`
  position: absolute;
  top: 40%;
  transform: translate(0, -50%);
  right: 10px;
  font-size: 35px;
  color: #64b1ff64;
  cursor: pointer;
`;

export const LeftArrowStyles = styled.div`
  position: absolute;
  top: 40%;
  transform: translate(0, -50%);
  left: 10px;
  font-size: 35px;
  color: #64b1ff64;
  cursor: pointer;
`;

export const DotsContainerStyles = styled.div`
  display: flex;
  justify-content: center;
  color: orange;
`;

export const DotStyles = styled.div`
  margin: 0 3px;
  cursor: pointer;
  font-size: 20px;
`;
