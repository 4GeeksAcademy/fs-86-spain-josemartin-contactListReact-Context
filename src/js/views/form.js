import React from "react";
import "../../styles/form.css"
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import { Context } from '../store/appContext';
import { useEffect, useContext } from "react";
import { useNavigate } from "react-router";

export const Form = () => {

    const {store, actions} = useContext(Context)

    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [address, setAddress] = useState("")

    const navigate = useNavigate();


    return (<div className="form">
        <h2 className="form-title">Add a new contact</h2>
        <div>
            <div className="form-each">
                <p>Full name</p>
                <input className="form-input" placeHolder="Full Name" type="text" onChange={(e) => {setName(e.target.value)}}/>
            </div>
            <div className="form-each">
                <p>Email</p>
                <input className="form-input" placeHolder="Email" type="email" onChange={(e) => {setEmail(e.target.value)}}/>
            </div>
            <div className="form-each">
                <p>Phone</p>
                <input className="form-input" placeHolder="Phone" type="number" onChange={(e) => {setPhone(e.target.value)}}/>
            </div>
            <div className="form-each">
                <p>Adress</p>
                <input className="form-input" placeHolder="Address" type="text" onChange={(e) => {setAddress(e.target.value)}}/>
            </div>
        </div>
        <button className="form-button" onClick={() => {actions.createContact(name, phone, email, address, navigate)}}><strong>SAVE</strong></button>
        <Link to="/">
            <button className="form-button-comeback"><strong>COME BACK</strong></button>
        </Link>
    </div>);
};





/*useParams y queryparam
probar nesting
useContext*/