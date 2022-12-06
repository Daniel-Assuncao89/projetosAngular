import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChamadosRoutingModule } from './chamados-routing.module';
import { ChamadosComponent } from './chamados/chamados.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { MaterialModule } from 'src/app/materials/material/material.module';
import { NewChamadoComponent } from './new-chamado/new-chamado.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ChamadosComponent,
    NewChamadoComponent
  ],
  imports: [
    CommonModule,
    ChamadosRoutingModule,
    ComponentsModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class ChamadosModule { }
