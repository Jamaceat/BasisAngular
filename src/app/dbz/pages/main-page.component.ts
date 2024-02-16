import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'dbz-heroes',
  templateUrl: 'main-page.component.html',
})
export class MainPageComponent {
  constructor(private dbzService: DbzService) {}

  public get characters(): Character[] {
    return [...this.dbzService.characters];
  }

  public get deletedCharacter(): string | undefined {
    return this.dbzService.deletedCharacter;
  }

  onDeleteCharacter(id: string) {
    this.dbzService.deletedCharacterById(id);
  }

  onNewCharacter(character: Character) {
    this.dbzService.addCharacter(character);
  }
}
