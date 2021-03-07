import React from "react";
import { Wrapper, StyledNavLink } from "./style";
import { useSelector } from "react-redux";

const Header = () => {
    const productsListData = useSelector(state => state.products);
    const { loading, selectedItems } = productsListData;
    return (
            <Wrapper>
                <StyledNavLink to="/" exact activeClassName="selected">
                    Main
                </StyledNavLink>
                <StyledNavLink to="/bucket" exact activeClassName="selected">
                    Bucket
                    {!loading && selectedItems.length > 0 && (
                            <div className="counter">{selectedItems.length}</div>
                    )}
                </StyledNavLink>
            </Wrapper>
    )
}

export default Header
