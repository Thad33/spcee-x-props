import React from "react";
import ("../Components/Nav.css")

export default function Nav(props) {
    return (
        <>

            <div className="nav">

                <div className="logo">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"><g fill="none" fill-rule="evenodd"><circle cx="24" cy="24" r="24" fill="#FFF"/><path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"/></g></svg>   
                </div>

                <div className="nav-div">
                    <ul className="nav-li">
                        <li className="#"><span>{props.sp}</span>{props.h}</li>
                        <li className="#"><span>01</span>{props.d}</li>
                        <li className="#"><span>02</span>{props.c}</li>
                        <li className="#"><span>03</span>{props.t}</li>
                    </ul>
                </div>
            </div>

        </>
    )
    
}

// I am now a junior props developer looking forward to becoming a senior props handler
// Coming soon.