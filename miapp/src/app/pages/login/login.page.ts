import { Component, OnInit } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  animations: [
    trigger('moveRight', [
      transition('* => *', [
        style({ transform: 'translateX(0)' }),
        animate('1s ease-in-out', style({ transform: 'translateX(100px)' })) // Ajusta la duración y distancia de movimiento
      ])
    ])
  ]
})
export class LoginPage implements OnInit {
  username: string = '';

  constructor(private router: Router) { }
  
  loginUser() {
    const navigationExtras = {
      state: {
        username: this.username,
      },
    };
    this.router.navigate(['/perfil'], navigationExtras);
  }

  ngOnInit() {
  }

}

