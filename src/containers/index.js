import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { target } from "../target";
import Header from "../components/header";
import ListProducts from "./list-products";
import Bucket from "./bucket";
import {useDispatch} from "react-redux";
import { LOAD_DEALERS } from "../store/constants";

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const dealers = target.dataset.dealers;
        if(dealers) {
            // mb need more cleverly
            const str = dealers.split(' ');
            console.log("str", str)
            dispatch({type: LOAD_DEALERS, payload: dealers})
        }
    }, [dispatch])

    return (
            <div>
                <Header/>
                <main>
                    <Switch>
                        <Route exact path="/" component={ListProducts}/>
                        <Route exact path="/bucket" component={Bucket}/>
                    </Switch>
                </main>
            </div>
    )
};

export default App;
