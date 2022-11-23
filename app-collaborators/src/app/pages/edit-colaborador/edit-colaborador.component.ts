import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Collaborator } from 'src/app/interfaces/collaborator';
import { ColaboradorService } from 'src/app/services/colaborador.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-edit-colaborador',
  templateUrl: './edit-colaborador.component.html',
  styleUrls: ['./edit-colaborador.component.css']
})
export class EditColaboradorComponent implements OnInit {

  public colaborador!: Collaborator;

  constructor(private fb: FormBuilder, private notification: NotificationService, private colaboradorService: ColaboradorService, private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.initializeFields()
  }

  public initializeFields(): void {
    const id = this.route.snapshot.params["id"]
    this.colaboradorService.buscarPorColaborador(id).subscribe(c => {
      this.colaborador = c;
    })
  }

   public updateColaborador(form: NgForm): void {
    if(form.valid) {
      this.colaboradorService.updateColaborador(this.colaborador).subscribe((resp) => {
        this.notification.showMessage("Atualizado com sucesso");
        this.router.navigate(["/dashboard"])
      })
    } else {
      this.notification.showMessage("Dados inválidos")
    } 
  }
 
}
