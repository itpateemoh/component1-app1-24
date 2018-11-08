import { Component } from '@angular/core';
import { AlertController, NavController, ActionSheetController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public AlertCtrl : AlertController,
    public ActionSheet: ActionSheetController,
    public navCtrl: NavController) {

  }

  showAction(){
    const acsheet = this.ActionSheet.create({
      title: 'test Action',
      buttons: [
        {
         
          text: 'information',    
          role: 'Info',
          handler: () => {
            console.log('Info clicked');
          }
        }
      ]
    });
  acsheet.present();
  }

  showAlert1(){
    const alert = this.AlertCtrl.create({
      title : 'confirm Answer !!',
      subTitle: 'fateemoh mama',
      buttons: [
        {
          text:'ok'
        },{
          text: 'cencel',
          handler: ()=> {
          console.log("cancel");
          }
        }
      ]
    });
    alert.present();
  }
}


   