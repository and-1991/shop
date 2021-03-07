import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { colors } from "../../utils";

export const Wrapper = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  background: rgb(255, 255, 255);
  box-shadow: 0 2px 5px 0 rgba(161,161,161,1);
`;

export const StyledNavLink = styled(NavLink)`
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: ${colors.black};
  font-weight: bold;
  padding: 5px;
  border-left: 3px solid ${colors.white};
  transition: all ease-in-out 0.3s;
  position: relative;
  &:hover {
    color: ${colors.green};
  }
  &.selected {
    border-left: 3px solid ${colors.green};
  }
  >div.counter {
    font-size: 10px;
    position: absolute;
    border-radius: 50%;
    width: 15px;
    height: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    bottom: 0;
    right: -10px;
    background-color: red;
    color: white;
  }
`;
