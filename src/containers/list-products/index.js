import React, { useEffect } from "react";
import { Wrapper } from "./style";
import { useDispatch, useSelector } from 'react-redux'
import ItemCard from "../../components/item-card";
import { getList } from "../../utils";

const ListProducts = () => {
    const productsListData = useSelector(state => state.products);
    const { dealers } = productsListData;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getList(dealers))
    }, [dispatch, dealers])

    const {loading, listProducts } = productsListData;

    if(loading) {
        return <div>Loading...</div>
    }

    return (
            <Wrapper>
                {listProducts.length === 0 ? (<div>List empty</div>) : (
                        <>
                            {listProducts.map((el, index) => (
                                    <ItemCard item={el} key={index} />
                                    ))
                            }
                            </>
                )}
            </Wrapper>
    )
};

export default ListProducts;
