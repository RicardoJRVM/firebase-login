import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  formulario!: FormGroup;

  constructor(
    private userService:UserService,
    private formBuilder: FormBuilder,
    private router:Router){
  } 

  ngOnInit(): void {
    this.inicializarFormulario();
  }

  private inicializarFormulario() {
    this.formulario = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  enviarFormulario() {
    if (this.formulario.valid) {
      const response = this.userService.register(this.formulario.value)
      .then(response =>  {
        console.log(response)
        this.router.navigate(['login'])
      })
      .catch(error => console.log(error))
    }
  }

  login(){
    this.router.navigate( ['/login'] )
  }
}
