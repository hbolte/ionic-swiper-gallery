import {Component} from '@angular/core';
import {ModalController, NavController} from 'ionic-angular';
import {GalleryPage} from "../gallery/gallery";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public title: string = '';

  constructor(public navCtrl: NavController, private modalCtrl: ModalController) {

  }

  openGallery() {
    this.modalCtrl.create(GalleryPage, {
      index: 1
    }).present();
  }

}
