import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  standalone: false,
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  cadastroForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.cadastroForm = this.fb.group({
      nome: ['', Validators.required],
      categoria: ['', Validators.required],
      ativo: [false],
      tipo: ['', Validators.required]
    });
  }

  ngOnInit(): void { }

  onSalvar(): void {
    if (this.cadastroForm.valid) {
      console.log('Dados do formulário:', this.cadastroForm.value);
      this.snackBar.open('Cadastro salvo com sucesso!', 'Fechar', {
        duration: 3000
      });
      // Opcional: Navegar para a tela de listagem após salvar
      // this.router.navigate(['/listagem']);
    } else {
      this.snackBar.open('Preencha os campos obrigatórios!', 'Fechar', {
        duration: 3000
      });
    }
  }

  onCancelar(): void {
    this.router.navigate(['/listagem']);
  }
}
