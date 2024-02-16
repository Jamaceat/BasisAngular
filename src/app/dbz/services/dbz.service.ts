import { Injectable } from '@angular/core';
import { v4 } from 'uuid';
import { Character } from '../interfaces/character.interface';

console.log(v4());

@Injectable({ providedIn: 'root' })
export class DbzService {
  public deletedCharacter?: string;

  addCharacter(character: Character): void {
    this.characters.push({ ...character });
  }

  public characters: Character[] = [
    { name: 'Goku', power: 9500, id: v4() },
    { name: 'Krillin', power: 100, id: v4() },
  ];

  deletedCharacterById(characterId: string): void {
    this.characters = this.characters.filter(
      (x: Character) => x.id !== characterId
    );

    this.deletedCharacter = characterId;

    // console.log('Deleting', characterIndex);

    // if (characterIndex.index) this.characters.splice(characterIndex.index, 1);
    // this.deletedCharacter = characterIndex;
    // console.log('Deleting', this.deletedCharacter);
  }
}
