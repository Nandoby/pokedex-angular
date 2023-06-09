import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Pokedex } from 'src/app/models/pokedex';
import { PokemonService } from 'src/app/service/pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
})
export class PokemonListComponent implements OnInit {
  constructor(private _pokeService: PokemonService) {}

  pokemons!: Pokedex;
  previousDisabled!: boolean;
  nextDisabled!: boolean;

  ngOnInit(): void {
    this.loadItems('https://pokeapi.co/api/v2/pokemon');
  }

  @Output() selectPokemon : EventEmitter<string> = new EventEmitter<string>()

  loadItems(url: string) {
    this._pokeService.get(url).subscribe({
      next: (data) => (this.pokemons = data),
    });
  }

  pokeSelected(url: string) {
    this.selectPokemon.emit(url)
  }

  prev(): void {
    if (this.pokemons.previous) this.loadItems(<string>this.pokemons.previous);
  }

  next(): void {
    if (this.pokemons.next) this.loadItems(<string>this.pokemons.next);
  }
}
