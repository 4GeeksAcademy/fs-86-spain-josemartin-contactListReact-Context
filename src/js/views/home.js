import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import { useEffect, useContext } from "react";
import { Context } from '../store/appContext'

export const Home = () => {
	const {store, actions} = useContext(Context)

	useEffect(() => {
		actions.createAgenda()
		actions.getAgendaContacts()
	},[])

	const eliminarContacto = (id) => {
        actions.deleteAgenda(id);
    };

	return(
		<div className="home-background">
		<div className="home">
			<div>
				<Link to="/forms">
					<button className="home-buttom">Add new contact</button>
				</Link>
			</div>
			{store.contacts.map((contact) => {
				return(<>
					<div className="home-cards">
						<img className="home-cards-img" src="https://img.asmedia.epimg.net/resizer/v2/ZR7EQHI4JNNWJI3SLLY6LYXJW4.jpg?auth=28366329540db80e211cd9fd2db64b5e9712b21305297b6d326e9413c32e9362&width=1200&height=1200&focal=334%2C194"></img>
						<div className="home-cards-texts">
							<h4 className="home-cards-texts-h4">{contact.name}</h4>
							<p><i className="fa-solid fa-location-dot"></i> {contact.phone}</p>
							<p><i className="fa-solid fa-phone"></i> {contact.email}</p>
							<p><i className="fa-solid fa-envelope"></i> {contact.address}</p>
						</div>
						<div className="home-cards-emojis">
							<i className="fa-solid fa-pencil fa-lg" style={{color: "white"}}></i>
							<i className="fa-regular fa-trash-can fa-lg" onClick={() => eliminarContacto(contact.id)} style={{color: "white"}}></i>
						</div>
					</div>
				</>)
			})}
		</div>
	</div>
	)
};
