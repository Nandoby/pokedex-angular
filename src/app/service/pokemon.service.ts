import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokedex } from '../models/pokedex';
import { Pokemon } from '../models/pokemon';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(private _client: HttpClient) {}

  url: string = "https://pokeapi.co/api/v2/pokemon"

  get(url : string): Observable<Pokedex> {
    return this._client.get<Pokedex>(url)
  }

  getOne(url: string): Observable<Pokemon> {
    return this._client.get<Pokemon>(url)
  }


}
