//Import react library
import React from "react";

//Exports class 'Footer' so it can be used in the App.js
export class Footer extends React.Component{
    render(){
        //Returns the div and the h1 text
        return(
            <div className="footer">
                <h1>My Footer is in another Component</h1>
            </div>
            
        );
    }

}