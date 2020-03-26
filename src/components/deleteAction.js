import React from 'react';
import {Link} from 'react-router-dom';

export default function DeleteAction(props){

    function handleClick(){
        fetch(`https://book-index-tw.herokuapp.com/delete/${props.id}`,{
            method: "DELETE",
            headers:{
                "Content-Type": "application/json"
            }
        }).then(response => {
            return response.json()
        }).catch(error => {
            console.log('Fetch delete error', error)
        })
    }

    return(
    <div>
        <Link onClick={handleClick} to ={"/deleted_book"}>Delete Action</Link>
    </div>
    );
}