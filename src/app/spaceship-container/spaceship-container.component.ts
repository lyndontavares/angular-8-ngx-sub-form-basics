import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Spaceship } from '../shared/spaceship.interface';


// only to demo that passing a value as input will update the form
// but this info might come from a server for ex when you want to
// edit an existing value
const getDefaultSpaceship = (): Spaceship => ({
  name: 'Galactico',
  builtInYear: 2500,
  config: {
    maxSpeed: 8000,
    nbCanons: 10,
  },
});

@Component({
  selector: 'app-spaceship-container',
  templateUrl: './spaceship-container.component.html',
})
export class SpaceshipContainerComponent {
  public spaceship$: Subject<Spaceship> = new Subject();

  public preFillForm(): void {
    this.spaceship$.next(getDefaultSpaceship());
  }

  public spaceshipUpdated(spaceship: Spaceship): void {
    // from here, you can pass that value to a
    // service to save/update it on a backend for ex
    console.log(spaceship);
  }
}
