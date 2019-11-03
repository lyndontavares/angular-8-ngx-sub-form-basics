import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgxRootFormComponent, Controls, DataInput } from 'ngx-sub-form';
import { Spaceship } from '../../shared/spaceship.interface';

@Component({
  selector: 'app-spaceship-form',
  templateUrl: './spaceship-form.component.html',
})
export class SpaceshipFormComponent extends NgxRootFormComponent<Spaceship> {
  @DataInput()
  @Input('spaceship')
  public dataInput: Spaceship | null | undefined;

  @Output('spaceshipUpdated')
  public dataOutput: EventEmitter<Spaceship> = new EventEmitter();

  protected getFormControls(): Controls<Spaceship> {
    return {
      name: new FormControl(),
      builtInYear: new FormControl(),
      config: new FormControl(),
    }
  }
}
