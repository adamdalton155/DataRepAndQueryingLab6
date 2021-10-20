import React from "react";
import axios from "axios";

export class Create extends React.Component {

    constructor() {
        super();
        //Binds the data for the new movie name, year and poster to methods
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChangeMovieName = this.onChangeMovieName.bind(this);
        this.onChangeMovieYear = this.onChangeMovieYear.bind(this);
        this.onChangePoster = this.onChangePoster.bind(this);
        this.state = {
            Title: '',
            Year: '',
            Poster: ''
        }
    }

    handleSubmit(event) {
        //Displays an dialog box that shows the user that the movie has been added to the read page
        alert(this.state.Title + ', Made in ' + this.state.Year + ' added')
        event.preventDefault();
    }

    onChangeMovieName(event) {
        //Method that sets the movie title
        this.setState({
            Title: event.target.value
        })
    }

    onChangeMovieYear(event) {
        //Method that sets the movie year
        this.setState({
            Year: event.target.value
        })
    }

    onChangePoster(event) {
        //Method that sets the movie poster URL
        this.setState({
            Poster: event.target.value
        })
    }

    render() {
        return (
            <div>
                <h1>Create component</h1>
                <form onSubmit={this.handleSubmit}>
                    {/*Input box that allows us to enter and save a new film title*/}
                    <div className="form-grAoup">
                        <label>Add Movie Name: </label>
                        {/*Save the url to the method onChangeMovieName*/}
                        <input type="text"
                            className="form-control"
                            value={this.state.Title}
                            onChange={this.onChangeMovieName}
                        />
                    </div>

                    {/* Input box that allows us to enter and save a new film year*/}
                    <div className="form-group">
                        <label> Add Movie Year: </label>
                        {/*Save the year to the method onChangeYear*/}
                        <input type="text" className="form-control" value={this.state.Year}
                            onChange={this.onChangeMovieYear}></input>
                    </div>

                    {/* Input box that allows us to enter and get a films URL*/}
                    <div className="form-group">
                        <label>Add Movie Poster (URL):</label>
                        {/*Save the url to the method onChangePoster*/}
                        <input type="text" className="form-control" value={this.state.Poster}
                            onChange={this.onChangePoster} />
                        <br></br>
                    </div>
                    <div>
                        <input type="submit" value="Add new movie" className="btn btn-primary">
                        </input>
                    </div>
                </form>
            </div>


        );
    }




}
