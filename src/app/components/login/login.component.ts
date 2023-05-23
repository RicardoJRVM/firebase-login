import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formulario2!: FormGroup;

  constructor(private userService:UserService,private formBuilder: FormBuilder, private router:Router){
    
  } 

  ngOnInit(): void {
    this.inicializarFormulario();
  }

  private inicializarFormulario() {
    this.formulario2 = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  enviarFormulario2() {
    if (this.formulario2.valid) {
      console.log(this.formulario2)
      const response2 = this.userService.login(this.formulario2.value)
      .then(response2 =>  {
        console.log(response2)
        this.router.navigate( ['/home'] )
      })
      .catch(error2 => console.log(error2))
    }
  }

  register(){
    this.router.navigate( ['/register'] )
  }

  loginGoogle(){
    this.userService.loginWithGoogle()
    .then(response =>  {
      console.log(response)
      this.router.navigate( ['/home'] )
    })
    .catch(error2 => console.log(error2))
  }
}
