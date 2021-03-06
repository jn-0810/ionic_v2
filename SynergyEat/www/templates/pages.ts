import {Page} from 'ionic-angular';


@Page({
  templateUrl: './build/pages/selects/basic/restaurant1.html'
})
export class BasicPage {
  gaming: string = "n64";
  gender: string = "f";
  musicAlertOpts: { title: string, subTitle: string };

  constructor() {
    this.musicAlertOpts = {
      title: '1994 Music',
      subTitle: 'Select your favorite'
    };
  }

  stpSelect() {
    console.log('STP selected');
  }
}