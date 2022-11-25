import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotificationService } from 'src/app/services/notification.service';
import { Collaborator } from 'src/app/interfaces/collaborator'
import { ColaboradorService } from 'src/app/services/colaborador.service';
import { Router } from '@angular/router';
import { UploadService } from 'src/app/services/upload.service';

@Component({
  selector: 'app-new-colaborador',
  templateUrl: './new-colaborador.component.html',
  styleUrls: ['./new-colaborador.component.css']
})
export class NewColaboradorComponent implements OnInit {

  public isLoading: Boolean = false
  private fotoUrl: string = ""

  public formColaborador: FormGroup;

  constructor(private fb: FormBuilder, private notification: NotificationService, private colaboradorService: ColaboradorService, private router: Router, private uploadService: UploadService) { 
    this.formColaborador = fb.group({
      nome: ['', [Validators.required]],
      cpf: ['', [Validators.required]],
      dataNascimento: ['', [Validators.required]],
      cargo: ['', [Validators.required]],
      setor: ['', [Validators.required]],
      salario: ['', [Validators.required, Validators.min(0)]],
      estado: ['', [Validators.required]],
      cidade: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],

    })
  }

  ngOnInit(): void {
  }

  public createColaborador(): void {
    if(this.formColaborador.valid) {
      const colaborador: Collaborator = this.formColaborador.value
      colaborador.fotoUrl = this.fotoUrl
      this.colaboradorService.createColaborador(colaborador).subscribe((resp) => {
        this.notification.showMessage("Cadastrado com sucesso");
        this.router.navigate(["/dashboard"])
      })
    } else {
      this.notification.showMessage("Dados inválidos")
    }
  }

  public uploadFile(event: any): void {
    this.isLoading = true; // Inicio do carregamento da foto
    const file: File = event.target.files[0];
    this.uploadService.uploadFoto(file).subscribe(uploadResult => {
      this.isLoading = false // Quando entra nesta função o carregamento da foto foi concluido.
      const storageReference = uploadResult.ref;
      const promiseFileUrl = storageReference.getDownloadURL();
      promiseFileUrl.then((fotoUrl: string) => {
        this.fotoUrl = fotoUrl
      })
    })
  }

}
