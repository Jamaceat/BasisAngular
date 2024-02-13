import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'dbz-heroes',
  templateUrl: 'main-page.component.html',
})
export class MainPageComponent {
  onNewCharacter(character: Character): void {
    this.characters.push(character);
  }

  public characters: Character[] = [
    { name: 'Goku', power: 9500 },
    { name: 'Krillin', power: 100 },
  ];
}
