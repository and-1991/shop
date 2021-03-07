import styled from 'styled-components';
import {colors} from "../../utils";

export const Wrapper = styled.div`
  border-radius: 5px;
  background-color: ${colors.gray};
  border-left: 3px solid transparent;
  transition: all ease-in-out 0.3s;
  &:hover {
    border-left: 3px solid ${colors.green};
    border-radius: 0 5px 5px 0;
    box-shadow: 0 2px 5px 0 rgba(161,161,161,1);
  }
`;

export const Header = styled.div`
  border-bottom: 1px solid ${colors.white};
  font-weight: bold;
  font-size: 24px;
  padding: 10px;
  text-align: center;
`;

export const Body = styled.div`
  padding: 10px 20px;
  height: 250px;
  >img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const Footer = styled.div`
  border-top: 1px solid ${colors.white};
  padding: 5px 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const Price = styled.div`
  font-weight: bold;
  >span {
    margin-left: 3px;
    color: ${colors.black};
  }
`


export const FooterActions = styled.div`
  margin: 5px 0;
  display: flex;
  align-items: center;
  >div {
    font-weight: bold;
    margin: 0 5px;
    user-select: none;
  }
`
