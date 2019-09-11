import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-page2',
  templateUrl: './modal-page2.component.html',
  styleUrls: ['./modal-page2.component.scss'],
})
export class ModalPage2Component implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  onClose() {
    this.modalCtrl.dismiss();
  }
}
