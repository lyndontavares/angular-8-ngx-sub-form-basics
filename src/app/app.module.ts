import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SpaceshipContainerComponent } from './spaceship-container/spaceship-container.component';
import { SpaceshipFormComponent } from './spaceship-container/spaceship-form/spaceship-form.component';
import { SpaceshipConfigFormComponent } from './spaceship-container/spaceship-form/spaceship-config-form/spaceship-config-form.component';

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule],
  declarations: [AppComponent, SpaceshipContainerComponent, SpaceshipFormComponent, SpaceshipConfigFormComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
