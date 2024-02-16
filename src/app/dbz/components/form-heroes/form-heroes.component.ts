import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { v4 } from 'uuid';

@Component({
  selector: 'dbz-form-heroes',
  templateUrl: './form-heroes.component.html',
  styleUrl: './form-heroes.component.css',
})
export class FormHeroesComponent {
  @Output()
  onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = { name: 'Vegeta', power: 7000, id: v4() };

  emitCharacter(): void {
    console.log(this.character);
    if (this.character.name.length === 0) return;
    this.character.id = v4();
    this.onNewCharacter.emit({ ...this.character });
    this.character.power = 0;
    this.character.name = '';
  }
}
