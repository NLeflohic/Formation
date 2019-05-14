/* 
Activité : gestion des contacts
*/

// TODO : complétez le programme

class Gestionnaire {
	constructor () {
		this.tabContacts = [];
		this.tabContacts.push (new Contact ("Lévisse", "Carole"));	
		this.tabContacts.push (new Contact ("Nelssone", "Melodie"));	
	}
	
	ajouterContact (contact) {
		this.tabContacts.push(contact);
		console.log (`Le contact ${contact.nom} ${contact.prenom} à bien été ajouté`);
	}
	
	listerContacts  () {
		if (this.tabContacts.length === 0) 
			console.log ("Aucun contact présent dans le gestionnaire");
		else {
			for (let i = 0; i < this.tabContacts.length; i++) {
				console.log (this.tabContacts[i].decrire());
			}
		}
	}
	
	peuxSupprimer (index) {
		if (this.tabContacts.length >= index) 
			return true;
		else
			return false;
	}
	
	//non demandé, mais par principe.
	supprimerContact (index) {
		if (this.peuxSupprimer (index) === true){
			let contactSupprime = this.tabContacts[index-1];
			this.tabContacts.splice (index-1, 1);
			console.log (`Le constact ${contactSupprime.nom} ${contactSupprime.prenom} à bien été supprimé`);
		}
		else
			console.log ("Le contact demandé ne peut être supprimé");
	}	
}

class Contact {
	constructor (nom, prenom) {
		this.nom = nom;
		this.prenom = prenom;
	}
	
	decrire () {
		return `Nom : ${this.nom}, Prénom : ${this.prenom}`;
	}
}


function afficherMenu () {
	console.log ('1 : Lister les contacts');
	console.log ('2 : Ajouter un contact');
	console.log ('3 : Supprimer un contact');
	console.log ('0 : Quitter');
}

function ajouterContact (gestionnaireContacts) {	
	const nom = prompt ("Entrez le nom du nouveau contact");
	const prenom = prompt ("Entrez le prénom du nouveau contact");
	gestionnaireContacts.ajouterContact (new Contact (nom, prenom));	
}

const gestionnaireContacts = new Gestionnaire;
console.log ("Bienvenue dans le gestionnaire de contacts !");
let choix = -1;

while (choix !== 0) {
	afficherMenu ();
	choix = Number (prompt("Entrez votre choix :"));
	switch (choix) {
		case 1 : 
			gestionnaireContacts.listerContacts ();
			break;
		case 2 : 
			ajouterContact (gestionnaireContacts);			
			break;
		case 3 :
			const indice = Number (prompt ("Quel numéro de contact souhaitez vous supprimer ?"));			
			if (indice > 0)
				gestionnaireContacts.supprimerContact (indice);
			else
				console.log (`Le numéro de contact doit être un entier au minimum égal à 1`);
			break;
			
		case 0 :
			console.log ("Fermeture du programme");
			break;
		default :
			console.log ("Commande non reconnue");
			break;
	}
}