import React from 'react';
import {Link} from 'react-router-dom';


export default function DeleteLanding(){
    return(
    <div className="delete-book-wrapper">
        <h1>You Deleted a book!</h1>
        <Link to={"/"}>View All Books</Link>
    </div>
    );
}