import { Injectable } from '@angular/core';
import { Character, CharacterIndex } from '../interfaces/character.interface';

@Injectable({ providedIn: 'root' })
export class DbzService {
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
