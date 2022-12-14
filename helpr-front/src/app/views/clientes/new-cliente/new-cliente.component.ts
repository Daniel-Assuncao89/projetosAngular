import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/interfaces/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-new-cliente',
  templateUrl: './new-cliente.component.html',
  styleUrls: ['./new-cliente.component.css']
})
export class NewClienteComponent implements OnInit {

  public formCliente: FormGroup

  constructor(fb: FormBuilder, private clienteService: ClienteService, private router: Router) {
    this.formCliente = fb.group({
      nome: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      cpf: ['', [Validators.required]],
      telefone: ['', [Validators.required]],
      senha: ['', [Validators.required]]
    })
   }

  ngOnInit(): void {
  }

  public create(): void {
    if(this.formCliente.valid) {
      const cliente: Cliente = this.formCliente.value
      this.clienteService.create(cliente).subscribe(response => {
        alert('Cliente cadastrado com sucesso!')
        this.router.navigate(["/clientes"])
      })
    } else {
      alert('Dados invalidos.')
    }
  }
}
