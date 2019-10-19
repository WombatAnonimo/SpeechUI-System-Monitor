import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProcessListRoutingModule } from './process-list-routing.module';
import { ProcessListComponent } from './process-list.component';
import { StatusComponent } from '../status/status.component';


@NgModule({
  declarations: [ProcessListComponent, StatusComponent],
  imports: [
    CommonModule,
    ProcessListRoutingModule,
  ]
})
export class ProcessListModule { }