import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from 'src/app/components/nav-bar/nav-bar.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { MaterialModule } from 'src/app/materials/material/material.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ComponentsModule,
    MaterialModule
  ]
})
export class HomeModule { }
