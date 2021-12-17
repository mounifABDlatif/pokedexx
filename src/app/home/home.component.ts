import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { POKEMONS } from '../bdd/pokedex';
import { Pokemon } from '../modeles/pokemon';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
pokemons = POKEMONS;
pokemon:Pokemon = new Pokemon();
  constructor(private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.pokemons = POKEMONS;
  }

  colorchange(type:string){
    var result:string ='';
    switch(type){
      case "eau":
        result="blue";
      break;
      case "feu":
        result="red";
      break;
      case "plante":
        result="green";
      break;
      case "insecte":
        result="greygreen";
      break;
      case "poison":
        result="purple";
      break;
      case "vol":
        result="skyblue";
      break;
      case "Normal":
        result="grey";
      break;
      case "tenebre":
        result="dark";
      break;
      case "electrik":
        result="yellow";
      break;
      case "sol":
        result="sand";
      break;
      case "fée":
        result="pink";
      break;
    }
    return result;
  }

  ajouter(){
//redirection vers ajout
let link = ['/ajout']
this.router.navigate(link);
  }
}
