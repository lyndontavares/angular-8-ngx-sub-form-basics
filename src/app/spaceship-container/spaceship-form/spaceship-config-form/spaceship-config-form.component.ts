import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NgxSubFormComponent, Controls, subformComponentProviders } from 'ngx-sub-form';
import { SpaceshipConfig } from '../../../shared/spaceship.interface';

@Component({
  selector: 'app-spaceship-config-form',
  templateUrl: './spaceship-config-form.component.html',
  providers: subformComponentProviders(SpaceshipConfigFormComponent)
})
export class SpaceshipConfigFormComponent extends NgxSubFormComponent<SpaceshipConfig> {
  protected getFormControls(): Controls<SpaceshipConfig> {
    return {
      maxSpeed: new FormControl(),
      nbCanons: new FormControl(),
    }
  }
}
