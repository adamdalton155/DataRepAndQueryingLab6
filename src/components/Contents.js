//Import react library
import React from "react";

//Exports class 'Contents' so it can be used in the App.js
export class Contents extends React.Component {
    render() {
        return (
            //Returns the div, hello world and the time.
            <div className="contents">
                <h1>Hello World!</h1>
                <h2>It is {new Date().toLocaleTimeString()}</h2>
            </div>
        );
    }

}