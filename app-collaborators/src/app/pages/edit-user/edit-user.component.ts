import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  public editForm: FormGroup;
  userRef: any

  constructor(
    public userService: AuthService,
    public formBuilder: FormBuilder,
    private act: ActivatedRoute,
    private router: Router
  ) { 
    this.editForm = this.formBuilder.group({
      nome:[''],
      email:[''],
      senha: ['']
    })
  }

  ngOnInit(): void {
    const id = this.act.snapshot.paramMap.get('id') as string;

    this.userService.getUserDoc(id).subscribe((res) => {
      this.userRef = res;
      this.editForm = this.formBuilder.group ({
        nome: [this.userRef.nome],
        email: [this.userRef.email],
        senha: [this.userRef.senha]
      })
    })
  }

  onSubmit(){
    const id = this.act.snapshot.paramMap.get('id') as string;

    this.userService.updateUser(this.editForm.value, id);
    this.router.navigate(['home'])
  }


}
