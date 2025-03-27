import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  standalone: false,
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  cadastroForm: FormGroup;
  nome: string = '';
  categoria: string = '';

  constructor(private router: Router,
    private fb: FormBuilder,
    private snackBar: MatSnackBar
  ) {
    this.cadastroForm = this.fb.group({
      nome: ['', Validators.required],
      categoria: ['', Validators.required],
      ativo: [false],
      tipo: ['', Validators.required]
    });
  }

  salvar() {
    if (this.nome && this.categoria) {
      const newItem = {
        nome: this.nome,
        categoria: this.categoria
      };

      const storedItems = localStorage.getItem('itens');
      let itens = storedItems ? JSON.parse(storedItems) : [];

      itens.push(newItem);

      localStorage.setItem('itens', JSON.stringify(itens));

      this.router.navigate(['/listagem']);
    }
  }

  cancelar() {
    this.router.navigate(['/listagem']);
  }
}
