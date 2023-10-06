export class Ecrit1 {
    nom: string;
    telephone: string;
    prenom: string;
    adresse: string;
    email: string;
    lieuDeNaissance: string;
    cin: string;
    cne: string;
    genre: string; // You can use "Masculin" or "Féminin" as values
    dateDeNaissance: string; // Format: mm/dd/yyyy
    nationalite: string; // Assuming "Marocaine" as the default value
  
    constructor() {
      this.nom = '';
      this.telephone = '';
      this.prenom = '';
      this.adresse = '';
      this.email = '';
      this.lieuDeNaissance = '';
      this.cin = '';
      this.cne = '';
      this.genre = ''; // You can initialize it with 'Masculin' or 'Féminin' if needed
      this.dateDeNaissance = ''; // Initialize with the desired date format
      this.nationalite = 'Marocaine'; // Default value
    }
  }
  