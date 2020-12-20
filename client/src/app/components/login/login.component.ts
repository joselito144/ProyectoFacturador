// Components
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UnitsService} from '../../services/units.service';
import { User } from '../../models/users';
import { NavigationComponent } from '../navigation/navigation.component';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
  navigationComponent: NavigationComponent;
  logged: any;
  user: User = {
    usuario: '',
    contrasenia: ''
  };
  mensaje = '';


  constructor(private router: Router, private unitsService: UnitsService) { }

  ngOnInit() {
  }

  // Exception capture of empty fields
  private iniciarSesion(nUser, nPass) {
    if (nUser.value === '' || nPass.value === '') {
      this.mensaje = 'El usuario y/o la clave no pueden estar vacíos';
    } else {
      this.unitsService.validateUser(this.user).subscribe(
         res => {
          this.logged = res.toString;
          console.log(this.user)
          if (res) {
            localStorage.clear();
            localStorage.setItem('user', JSON.stringify(nUser.value));
            this.user = JSON.parse(localStorage.getItem('user'));
            this.router.navigate(['/']);
            this.navigationComponent.getUser();
          } else {
            this.mensaje = 'Usuario o clave incorrecta';
          }
        },
        err => console.log(err)
      );
    }
  }

}

