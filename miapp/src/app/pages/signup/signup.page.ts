import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
 } from '@angular/forms';
 import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  formularioRegistro: FormGroup;

  constructor(public formBuilder: FormBuilder,
    public alertController : AlertController,
    public navCtrl: NavController) { 

    this.formularioRegistro = this.formBuilder.group({
      'nombre': new FormControl("",Validators.required),
      'correo': new FormControl("",Validators.required),
      'contrasena': new FormControl("",Validators.required),

    });

  }

  ngOnInit() {
  }

  async guardar(){
    var reg = this.formularioRegistro.value;

    if(this.formularioRegistro.invalid){
      console.log('El formulario es inválido');
      const alert = await this.alertController.create({
        header: 'Te faltan datos',
        message: 'Llena todos los campos',
        buttons: ['Aceptar']
      });

      await alert.present();
      return;
    }

    var usuario = {
      nombre: reg.nombre,
      correo: reg.correo,
      contrasena: reg.contrasena
    }
    localStorage.setItem('usuario',JSON.stringify(usuario));

    localStorage.setItem('ingresado', 'true');
    this.navCtrl.navigateRoot('login');
  }

}

