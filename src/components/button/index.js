import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
     outline: none;
     border: none;
     color: black;
     cursor: pointer;
     display: flex;
     align-items: center;
     justify-content: center;
     &:hover {
      color: green;
     }
`;

const Button = ({ text =null, onClick, children = null }) => {
    return (
            <StyledButton type="button" onClick={onClick}>
                { text }
                {children && (children) }
            </StyledButton>
    )
}

export default Button;
