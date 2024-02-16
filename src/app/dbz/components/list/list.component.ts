import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

import { v4 } from 'uuid';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  @Input()
  public characterList: Character[] = [{ name: 'Trunks', power: 10, id: v4() }];

  @Output()
  onDeleteCharacter: EventEmitter<string> = new EventEmitter();

  emitDelete(character: Character, index: number): void {
    console.log(character, index);
    this.onDeleteCharacter.emit(character.id);
  }
}
