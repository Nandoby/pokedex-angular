import { Component } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon';
import { PokemonService } from 'src/app/service/pokemon.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent {

  constructor(private _pokeService: PokemonService) {}

  pokemon!: Pokemon

  loadItem(url: string) {
    this._pokeService.getOne(url).subscribe({
      next: (data) => this.pokemon = data
    })
  }
}
