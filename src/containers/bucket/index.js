import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Wrapper, ListItems, Footer, Empty, BucketCard, Image, Name, Counter } from "./style";
import { VscInbox } from "react-icons/vsc";
import Button from "../../components/button";
import {REMOVE_PRODUCT, SELECT_PRODUCT} from "../../store/constants";
import {AiOutlineMinusCircle, AiOutlinePlusCircle} from "react-icons/ai";

const ITEM_BASE_URL = "https://murmuring-tor-81614.herokuapp.com";

const Bucket = () => {
    const [groupItems, setGroupItems] = useState([]);
    const dispatch = useDispatch();

    const productsListData = useSelector(state => state.products);
    const { selectedItems } = productsListData;

    useEffect(() => {
        const map = selectedItems.reduce((selected, group) => {
            selected[group.name] = selected[group.name] || [];
            selected[group.name].push(group);
            return selected;
        }, {});
        let arr = [];
        for (let key in map) {
            arr.push(map[key]);
        }
        setGroupItems(arr);
    }, [selectedItems])

    const sum = () => {
        return selectedItems.reduce((sum, elem) => sum + elem.price, 0);
    };

    return (
            <Wrapper>
                {selectedItems.length === 0 ? (
                        <Empty>
                            <ListItems>
                                <VscInbox size={100} />
                                <div>
                                    Bucket Empty
                                </div>
                            </ListItems>
                        </Empty>
                ) : (
                        <>
                            {groupItems.map((el, index) => {
                                const item = el[0]
                                return (
                                        <BucketCard key={index}>
                                            <Image>
                                                <img src={`${ITEM_BASE_URL}${item.image}`} alt=""/>
                                            </Image>
                                            <Name>
                                                {item.name}
                                            </Name>
                                            <Counter>
                                                <Button onClick={() => dispatch({type: REMOVE_PRODUCT, payload: item})}>
                                                    <AiOutlineMinusCircle size={20}/>
                                                </Button>
                                                <div>{el.length}</div>
                                                <Button onClick={() => dispatch({type: SELECT_PRODUCT, payload: item})}>
                                                    <AiOutlinePlusCircle size={20}/>
                                                </Button>
                                            </Counter>
                                        </BucketCard>
                                )
                            })}
                        </>
                )}
                <Footer>
                    Total: {sum()}
                </Footer>
            </Wrapper>
    )
}

export default Bucket;
