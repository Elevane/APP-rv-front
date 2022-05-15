import React from "react";
import Header from "./Header";


export default function NotFound(){
    return(
        <div>
                <Header></Header>
                <h1>
                    Oops!</h1>
                <h2>
                    404 Not Found</h2>
                <div class="error-details">
                    Sorry, an error has occured, Requested page not found!
                </div>
        </div>
    );
}