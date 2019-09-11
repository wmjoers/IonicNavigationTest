import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalPage2Component } from '../modal-page2/modal-page2.component';

@Component({
  selector: 'app-modal-page1',
  templateUrl: './modal-page1.component.html',
  styleUrls: ['./modal-page1.component.scss'],
})
export class ModalPage1Component implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  navigateToPage2() {
    const nav = document.querySelector('ion-nav');
    nav.push(ModalPage2Component);
  }

  onClose() {
    this.modalCtrl.dismiss();
  }


}
