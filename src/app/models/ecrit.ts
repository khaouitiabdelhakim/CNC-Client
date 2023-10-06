export class Ecrit {
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
    anneeBac: number;
    serieBac: string;
    typeBac: string;
    moyenne: number;
    filiere: string;
    centreCpge: number;
    classe: string;
    situation: string;

    // Properties for the 1ère année des CPGE
    annee1cpge: number;
    filiere1cpge: string;
    centreCpge1cpge: number;
    classe1cpge: string;

    // Properties for the 2ème année des CPGE
    annee2cpge: number;
    filiere2cpge: string;
    centreCpge2cpge: number;
    classe2cpge: string;

    // Properties for the section réservée aux 5/2 et 7/2
    annee3cpge: number;
    filiere3cpge: string;
    centreCpge3cpge: number;
    classe3cpge: string;
    
    annee4cpge: number;
    filiere4cpge: string;
    centreCpge4cpge: number;
    classe4cpge: string;

    // Properties for the 1ère Participation antérieure au CNC 2024
    annee1Participation: number;
    typeDe1candidature: string;
  
    // Properties for the 2ème Participation antérieure au CNC 2024
    annee2Participation: number;
    typeDe2candidature: string;
  
    

    titreTIPE: string;
    motivationTIPE: string;
    ancrageTIPE: string;
    encadrantTIPE: string;
  
    
  
    
  
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

      this.anneeBac = 2022; // Default value
      this.serieBac = '';
      this.typeBac = '';
      this.moyenne = 0;
      this.filiere = '';
      this.centreCpge = 0;
      this.classe = '';
      this.situation = '';

       // Initialize properties for the 1ère Participation antérieure
       this.annee1Participation = 2023; // Default value
       this.typeDe1candidature = 'Regulier'; // Default value
       
       // Initialize properties for the 2ème Participation antérieure
       this.annee2Participation = 2023; // Default value
       this.typeDe1candidature = 'Regulier'; // Default value

       this.titreTIPE = '';
      this.motivationTIPE = '';
      this.ancrageTIPE = '';
      this.encadrantTIPE = '';


    }
}
