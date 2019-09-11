import { Component, OnInit } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { ModalComponent } from 'src/app/modal/modal.component';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {

  constructor(
    private navCtrl: NavController,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
  }

  onNavigateToAnother() {
    this.navCtrl.navigateForward('/tabs/tab1/another');
  }

  async onOpenModal() {
    const modal = await this.modalCtrl.create({
      component: ModalComponent
    });
    return await modal.present();
  }

}
