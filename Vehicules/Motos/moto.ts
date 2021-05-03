
import { Vehicule } from "../vehicule";
import { Moteur} from "../../Moteurs/moteur";

export class Moto extends Vehicule{

    constructor (marque : string, couleur : string, prix : number,
        moteur : Moteur) {
            super (marque, couleur, prix, moteur);
}
}