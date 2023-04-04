import React, {Component} from "react";
import { ThemeContext } from "./App";

export default class Counter extends Component{
    constructor(props){
        super(props);
        this.state = {
            count: props.initCnt
        }
    }
    render(){
        return (
            <ThemeContext>
                {theme => (
                    <>
                        <button style = {theme} onClick={() => this.changeCnt(-1)}>-</button>
                        <span>{this.state.count}</span>
                        <button style = {theme} onClick={() => this.changeCnt(1)}>+</button>
                    </>
                )}
            </ThemeContext>
        )
    }

    changeCnt(amt){
        this.setState({count: this.state.count + amt})
    }
}