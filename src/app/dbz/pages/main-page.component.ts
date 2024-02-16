import { Component } from '@angular/core';
import { Character, CharacterIndex } from '../interfaces/character.interface';

@Component({
  selector: 'dbz-heroes',
  templateUrl: 'main-page.component.html',
})
export class MainPageComponent {
  public deletedCharacter?: CharacterIndex;

  onNewCharacter(character: Character): void {
    this.characters.push(character);
  }

  public characters: Character[] = [
    { name: 'Goku', power: 9500 },
    { name: 'Krillin', power: 100 },
  ];

  deletedCharacterReceived(characterIndex: CharacterIndex): void {
    console.log('Deleting', characterIndex);
    this.characters.splice(characterIndex.index, 1);
    this.deletedCharacter = characterIndex;
    console.log('Deleting', this.deletedCharacter);
  }
}
