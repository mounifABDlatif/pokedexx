import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { POKEMONS } from '../bdd/pokedex';
import { Pokemon } from '../modeles/pokemon';

@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.scss']
})
export class AjouterComponent implements OnInit {

  pokemons = POKEMONS;
  @Input() pokemon: Pokemon = new Pokemon();

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm) {

    this.pokemons.unshift(this.pokemon);

    this.router.navigate(['']);
  }

}
