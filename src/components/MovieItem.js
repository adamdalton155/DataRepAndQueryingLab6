import React from "react";
import Card from 'react-bootstrap/Card'

//Exports the class to used in other components
export class MovieItem extends React.Component {
    render() {
        return (
            //Card displays the movie title in a card
            //All tags outputs the information from movies JSON array to the screen
            <div>
                <Card>
                    <Card.Body>{this.props.movie.Title}</Card.Body>
                </Card>
                <br></br>
                <img src={this.props.movie.Poster}></img>
                <p>{this.props.movie.Year}</p>
            </div>
        );
    }
}