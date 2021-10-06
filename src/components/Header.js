//Import react library
import React from "react";

//Exports class 'Header' so it can be used in the App.js
export class Header extends React.Component{
    render(){
        //Returns the div and the h1 text
        return(
            <div className="header">
                <h1>Header is in another Component</h1>
            </div>
            
        );
    }
}