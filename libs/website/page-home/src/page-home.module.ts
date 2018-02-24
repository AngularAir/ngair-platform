import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import {CommonUiModule} from "@ngair-platform/website/common-ui";

@NgModule({
  imports: [CommonModule, CommonUiModule],
  declarations: [HomeComponent]
})
export class PageHomeModule {}
