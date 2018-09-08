import React, { Component } from "react";

export default class PathError extends Component{
    render(){
        return(
            <div>
                <h3>Error:</h3>
                <p>Path does not exists</p>
            </div>
        );
    }
}