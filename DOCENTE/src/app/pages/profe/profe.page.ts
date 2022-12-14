import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-profe',
  templateUrl: './profe.page.html',
  styleUrls: ['./profe.page.scss'],
})
export class ProfePage implements OnInit {


  qrCodeString= "";
  constructor(private menuController: MenuController,
              private navController: NavController) { }

  ngOnInit() {
  }

  usuario={
    nom:'',
  }

  mostrarMenu(){
    this.menuController.open('first');

  }

  async cerrar(){
    localStorage.removeItem('ingresado');
    this.navController.navigateRoot('inicio');
  }

  GenerarQr(){
    this.qrCodeString=this.usuario.nom;
  }

}
