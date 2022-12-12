import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss'],
})
export class QRPage implements OnInit {

  qrCodeString= "";
  scannedResult: any;
  constructor(private menuController: MenuController) { }


  usuario={
    modulo:'',
    seccion:'',
    fecha:'',
  }

  ngOnInit() {
  }

  mostrarMenu(){
    this.menuController.open('first');

  }

  GenerarQr(){
    this.qrCodeString=this.usuario.modulo+this.usuario.seccion+this.usuario.fecha;
  }


}
