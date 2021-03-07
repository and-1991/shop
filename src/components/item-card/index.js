import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Body, Footer, FooterActions, Header, Price, Wrapper} from "./style";
import Button from "../button";
import {SELECT_PRODUCT, REMOVE_PRODUCT} from "../../store/constants";
import {AiOutlineMinusCircle, AiOutlinePlusCircle} from "react-icons/ai"

const ITEM_BASE_URL = "https://murmuring-tor-81614.herokuapp.com"

const ItemCard = ({ item }) => {
    const dispatch = useDispatch();
    const productsListData = useSelector(state => state.products)
    const { selectedItems } = productsListData;

    const getItemInSelected = () => {
        const filteredArray = selectedItems.filter((el) => el.name === item.name)
        return filteredArray.length
    }

    return (
            <Wrapper>
                <Header>{item.name}</Header>
                <Body>
                    <img loading="lazy" src={`${ITEM_BASE_URL}${item.image}`} alt=""/>
                </Body>
                <Footer>
                    <Price>
                        Price:
                        <span>{item.price}$</span>
                    </Price>
                    <FooterActions>
                        <Button onClick={() => dispatch({type: REMOVE_PRODUCT, payload: item})}>
                            <AiOutlineMinusCircle size={20}/>
                        </Button>
                        <div>
                            {getItemInSelected()}
                        </div>
                        <Button onClick={() => dispatch({type: SELECT_PRODUCT, payload: item})}>
                            <AiOutlinePlusCircle size={20}/>
                        </Button>
                    </FooterActions>

                </Footer>
            </Wrapper>
    )
}

export default ItemCard;
