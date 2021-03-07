import styled from "styled-components";
import {colors} from "../../utils";

export const Wrapper = styled.div`
    margin: 20px 40px;
`;

export const ListItems = styled.div`
  max-height: calc(100vh - 160px);
`;

export const  Footer = styled.div`
  border-top: 2px solid ${colors.green};
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 20px;
  font-weight: bold;
`;

export const Empty = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  color: ${colors.gray};
  font-weight: bold;
`;

export const BucketCard = styled.div`
  display: flex;
  border-radius: 5px;
  background-color: ${colors.gray};
  border-left: 3px solid transparent;
  transition: all ease-in-out 0.3s;
  margin: 15px 0;
  padding: 10px 15px;
  &:hover {
    border-left: 3px solid ${colors.green};
    border-radius: 0 5px 5px 0;
    box-shadow: 0 2px 5px 0 rgba(161,161,161,1);
  }
`;

export const Image = styled.div`
  padding: 10px 20px;
  height: 100px;
  width: 100px;
  >img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const Name = styled.div`
  font-weight: bold;
  display: flex;
  align-items: center;
;`

export const Counter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  >button {
    margin: 5px 0;
  }
`
