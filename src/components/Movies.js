import React from 'react';
import {MovieItem} from './MovieItem';

export class Movies extends React.Component{
//Arrow function and map takes each part of JSON and creates a unique component for them to be displayed
    render(){
        return this.props.films.map((film)=>{
            return <MovieItem movie={film} key={film.imdb}></MovieItem>
        })
        
    }


}