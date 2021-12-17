import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { POKEMONS } from '../bdd/pokedex';
import { Pokemon } from '../modeles/pokemon';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  pokemons = POKEMONS;
  @Input() pokemon:Pokemon = new Pokemon(); //@Input() sert de fentre entre les input du formulaire et les proprités de la class pokemon
  //@input est relié directement à [(ngModel)]="pokemon.fullname" qui se trouve dans le 

  constructor(private route: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {

    this.pokemons = POKEMONS;

    let id = this.route.snapshot.params['id'];

    for(let i=0; i <this.pokemons.length; i++){
      if(this.pokemons[i].id == id){
        this.pokemon = this.pokemons[i];
      }
    } 
  }


  onSubmit(f:NgForm){ //Ici on vient de définir le type du paramètre de cette fonction. On lui dit que le paramètre est typé formulaire (=NgForm) 
    
    let link = ['/detail', this.pokemon.id];
    this.router.navigate(link);
  }

  
}
