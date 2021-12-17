import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { POKEMONS } from '../bdd/pokedex';
import { Pokemon } from '../modeles/pokemon';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  pokemons = POKEMONS;
  pokemon: Pokemon = new Pokemon();
  //on a créé une nouvel instance pkomon typé :Pokemon qui correspond à la class Pokemon() dans le fichier ts du component modeles

  constructor(private route: ActivatedRoute) { }
  // private permet de rendre la variable 'route' d'être privée (protégé)
  // route: <= ici on a typé la variable route (e.g num1:number etc.) on lui donnant le type ActivatedRoute
  // route: ActivatedRoute <= ici route est typé de ActivatedRoute que lui même s'agit d'un fichier qui comporte des propriétés et des méthodes qui sont désormais stockés dans route

  ngOnInit(): void { //ngOnInit() est une fonction qui permet de se lancer automatiquement lors du chargement de la page
    this.pokemons = POKEMONS;
    let id = this.route.snapshot.params['id']
    // .snapshot.paramMap.getAll() : sont des propriétés et méthodes qui existent dans route grâce au fichier ActivatedRoute
    //  "                             ils permettent de récupérer les données dans l'url
    // =+ permet de conserver les données dans 

    for (let i = 0; i < this.pokemons.length; i++) {
      if (this.pokemons[i].id == id) { //le id du pokemon est égale à l'id dans l'url 

        this.pokemon = this.pokemons[i]
      }

    }


  }

  supprimer() {
    this.pokemons = POKEMONS;
    let id = this.route.snapshot.params['id']

    for (let i = 0; i < this.pokemons.length; i++) {
      if (this.pokemons[i].id == id) {
        this.pokemons.splice(i, 1);
      }
    }
  }

  
}
