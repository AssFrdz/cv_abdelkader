import { Experience } from "./classExp.js";
import { Formation } from "./classFormation.js";
import { Competence } from "./classComp.js";



document.addEventListener('DOMContentLoaded', () => {
    var expDiv = document.querySelector(".exp");
    var formationDiv = document.querySelector(".formation");
    var compDiv = document.querySelector(".competences");

    var arrayExp = [
        new Experience("Opérateur Numérique Support utilisateurs", "ACCES INCLUSIVE TECH chez EDF Nanterre", "2023 - Aujourd’hui", [
            "Traiter les demandes des utilisateurs",
            "Labelliser des documents",
            "Numériser et classer les documents",
            "Établir des comptes",
            "Actualiser les informations",
            "Gerer des tickets Itzmi"
        ]),
        new Experience("DUODAY Opérateur Administratif de GED", "La Cour administrative d'appel de Paris", "Décembre 2024"),
        new Experience("INCLU PRO Pôle emploi Mitry-Mory: Projet de reconversion professionnelle", "Immersion chez ACCES INCLUSIVE TECH Saint Denis", "Octobre 2022 - Mars 2023", [
            "Labellisation et classement de documents Machine Learning AXA."
        ]),
        new Experience("Préparateur de commandes", "Crit Intérim Mitry-Mory", "2018 - 2021"),
        new Experience("Employé administratif / Agent d’archivage", "Aigle Azur, Tremblay en France", "2010 - 2017", [
            "Gérer les dossiers administratifs",
            "Vérifier les paiements des clients et des fournisseurs",
            "Traiter le courrier et organiser les e-mails",
            "Archiver les enveloppes de vol",
            "Classer et archiver les pièces comptables (physiques et informatiques)",
            "Faire l'inventaire et désarchiver des documents"
        ]),
        new Experience("Professeur d’espagnol", "Algérie", "1987 - 2001", [
            "Enseigner aux étudiants à parler, comprendre et écrire dans la langue espagnole",
            "Elaborer le programme d’enseignement de l’espagnol Cycle lycée "
        ])
    ];

    var arrayFormation = [
        new Formation("Maitrise en langue espagnole","Université d’Oran, Algérie","1987"),
        new Formation("Stage Métiers du Livre","Bibliothèque Georges Brassens, Mitry-Mory", "2007"),
        new Formation("Secrétaire Assistant","Centre Jean Moulin - Sainte Geneviève des Bois","2008 - 2009")
    ];

    var arrayComp = [
        new Competence("Bureautique - Logiciels", [
            "Word", "Excel", "PowerPoint", "Internet", "Itzmi", "Teams", "ITeamViewer", "MS365", "Packet Tracer", "Windows"
        ]),
        new Competence("Compétences transverses",[
            "Adaptabilité", "Travail en équipe", "Rigueur", "Patience"
        ]),
        new Competence("Langues maîtrisées",["Français", "Arabe", "Espagnol"])
    ];

    arrayExp.forEach(e => {
        expDiv.insertAdjacentHTML('beforeend', e.getDiv());
    });

    arrayFormation.forEach(e => {
        formationDiv.insertAdjacentHTML('beforeend', e.getDiv());
    });

    arrayComp.forEach(e => {
        compDiv.insertAdjacentHTML('beforeend', e.getDiv());
    });






});
