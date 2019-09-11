import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Tab1Page } from './tab1.page';
import { ModalComponent } from 'src/app/modal/modal.component';
import { ModalPage1Component } from 'src/app/modal/modal-page1/modal-page1.component';
import { ModalPage2Component } from 'src/app/modal/modal-page2/modal-page2.component';

const routes: Routes = [
  {
    path: '',
    component: Tab1Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  entryComponents: [ModalComponent, ModalPage1Component, ModalPage2Component],
  declarations: [Tab1Page, ModalComponent, ModalPage1Component, ModalPage2Component]
})
export class Tab1PageModule {}
