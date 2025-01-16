const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts : []
		},
		actions: {
			createAgenda : async () => {
				const response = await fetch('https://playground.4geeks.com/contact/agendas/josemartin', {
					method: 'POST',
					body: JSON.stringify(),  // la variable dataToSend puede ser un 'string' o un {objeto} que proviene de algún lugar más arriba en nuestra aplicación
					headers: {
					   'Content-Type': 'application/json'
					}
				});
				if (response.ok) {
					const data = await response.json();
					return data;
				} else {
					console.log('error: ', response.status, response.statusText);
					/* Realiza el tratamiento del error que devolvió el request HTTP */
					return {error: {status: response.status, statusText: response.statusText}};
				};
			},
			createContact : async (name, phone, email, address, navigate) => {
				const response = await fetch('https://playground.4geeks.com/contact/agendas/josemartin/contacts', {
					method: 'POST',
					body: JSON.stringify({
						name: name,
						phone: phone,
						email: email,
						address: address
					}),  // la variable dataToSend puede ser un 'string' o un {objeto} que proviene de algún lugar más arriba en nuestra aplicación
					headers: {
					   'Content-Type': 'application/json'
					}
				});
				if (response.ok) {
					const data = await response.json();
					getActions().getAgendaContacts()
					navigate("/")
				} else {
					console.log('error: ', response.status, response.statusText);
					/* Realiza el tratamiento del error que devolvió el request HTTP */
					return {error: {status: response.status, statusText: response.statusText}};
				};
			},
			getAgendaContacts: async() => {
				const response = await fetch("https://playground.4geeks.com/contact/agendas/josemartin/contacts")
				if (response.ok) {
					const data = await response.json();
					setStore({contacts: data.contacts})
					return data;
				} else {
					console.log('error: ', response.status, response.statusText);
					return {error: {status: response.status, statusText: response.statusText}};
				};
			},
			deleteAgenda: (id) => {
				fetch(`https://playground.4geeks.com/contact/agendas/josemartin/contacts/${id}`,{
					method: "DELETE"
				})
				getActions().getAgendaContacts()
			},
		}
	};
};



export default getState;
