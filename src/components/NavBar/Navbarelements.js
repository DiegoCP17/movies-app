import styled from "@emotion/styled";

export const ContainerIcon = styled.div`
  @media (min-width: 768px) {
    display: ${(props) =>
      props?.showInScreen === "mobile" ? "none" : "block"};
  }
`;
export const Container = styled.div`
  width: 100%;
  height: 50px;
  background-color: #141a32;
`;

export const Wrapper = styled.div`
  margin: auto;
  width: 100%;
  max-width: 1300px;
  height: 100%;
  align-items: center;
  display: flex;
  justify-content: space-between;
`;

export const LogoContainer = styled.div`
  margin-left: 0.5rem;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  font-family: sans-serif;
  width: 70%;

  p {
    &:nth-child(2) {
      color: #fff;
    }

    &:nth-child(3) {
      font-size: 1.8rem;
      font-weight: 500;
      color: #e07924;
    }
  }
`;
export const Menu = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  list-style: none;
  z-index: 1;

  @media (max-width: 768px) {
    background-color: #23394d;
    position: absolute;
    top: 49px;
    left: ${({ open }) => (open ? "0" : "-100%")};
    width: 100%;
    height: 100%;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    transition: 0.5s all ease;
  }
`;
export const MenuItem = styled.li`
  height: 100%;

  @media (max-width: 768px) {
    width: 100%;
    height: 78px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (min-width: 769px) {
    display: flex;
    align-items: center;
  }
`;
export const MenuItemLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0;
  color: #64b2ff;
  font-family: sans-serif;
  font-size: 1rem;
  font-weight: 300;
  cursor: pointer;
  transition: 0.5s all ease;
  box-sizing: border-box;

  &:hover {
    color: #e0792a;
    transition: 0.5s all ease;

    div svg {
      fill: #64b2ff;
    }
  }

  div {
    width: 100%;
    svg {
      display: none;
    }
  }

  @media (max-width: 768px) {
    width: 100%;

    div {
      width: auto;
      svg {
        display: flex;
      }
    }
  }
`;

export const SearchInput = styled.input`
  border: none;
  border-radius: 4px;
  padding: 0.25rem;
  font-size: 1rem;
  margin-left: 0.5rem;
  color: #e0792ad8;
  position: relative;
  width: 6rem;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:focus {
    outline: none;
    box-shadow: 0 0 5px rgba(100, 178, 255, 0.7);
    background-color: #64b1ff23;
  }

  &::placeholder {
    color: #64b2ff;
  }
`;

export const MobileIcon = styled.div`
  display: none;
  height: 100%;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
`;
