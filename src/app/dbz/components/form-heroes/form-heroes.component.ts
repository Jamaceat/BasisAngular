import { Component } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-form-heroes',
  templateUrl: './form-heroes.component.html',
  styleUrl: './form-heroes.component.css',
})
export class FormHeroesComponent {
  public character: Character = { name: 'Vegeta', power: 7000 };
}
