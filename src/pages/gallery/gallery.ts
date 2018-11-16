import {Component} from '@angular/core';
import {NavController, NavParams, ViewController} from 'ionic-angular';
import {default as Swiper, SwiperOptions} from "swiper";

@Component({
  selector: 'page-gallery',
  templateUrl: 'gallery.html',
})
export class GalleryPage {

  public swiper: Swiper;
  public title: string = '';

  public config: SwiperOptions = {
    direction: 'horizontal',
    slidesPerView: 1,
    scrollbar: false,
    zoom: {
      minRatio: 1,
      maxRatio: 3
    },
    pagination: {
      el: '.swiper-pagination'
    }
  };

  constructor(public navCtrl: NavController, private navParams: NavParams, public viewCtrl: ViewController) {

  }

  ngOnInit() {
    this.swiper = new Swiper('.swiper-container', this.config);
    this.swiper.on('slideChange', this.onSlideChange.bind(this));
    this.swiper.on('doubleTap', this.onDoubleTap.bind(this));
    this.swiper.on('touchStart', this.onTouchStart.bind(this));
    this.swiper.on('touchEnd', this.onTouchEnd.bind(this));
    this.swiper.on('touchMove', this.onTouchMove.bind(this));
    this.swiper.on('sliderMove', this.onSliderMove.bind(this));

    // set start index
    let index = this.navParams.data.index;
    this.swiper.slideTo(index, 500);
  }

  onSlideChange() {
    console.log('onSlideChange: index = ' + this.swiper.activeIndex);
    this.title = 'Page ' + (this.swiper.activeIndex + 1);
  }

  onDoubleTap(touchend: TouchEvent) {
    console.log('onDoubleTap');
  }

  onTouchStart(touchstart: TouchEvent) {
    let touch = touchstart.targetTouches[0];
    if (touch) {
      const x = touch.pageX + 'px';
      const y = touch.pageY + 'px';
      console.log('onTouchStart: x:' + x + ', y:' + y);
    }
  }

  onTouchEnd(touchend: TouchEvent) {
    let touch = touchend.targetTouches[0];
    if (touch) {
      const x = touch.pageX + 'px';
      const y = touch.pageY + 'px';
      console.log('onTouchEnd: x:' + x + ', y:' + y);
    }
  }

  onTouchMove(touchmove: TouchEvent) {
    let touch = touchmove.targetTouches[0];
    if (touch) {
      const x = touch.pageX + 'px';
      const y = touch.pageY + 'px';
      console.log('onTouchMove: x:' + x + ', y:' + y);
    }
  }

  onSliderMove(touchmove: TouchEvent) {
    let touch = touchmove.targetTouches[0];
    if (touch) {
      const x = touch.pageX + 'px';
      const y = touch.pageY + 'px';
      console.log('onSliderMove: x:' + x + ', y:' + y);
    }
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }

}
