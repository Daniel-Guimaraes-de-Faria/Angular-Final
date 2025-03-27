import { Component, OnInit } from '@angular/core';

export interface Item {
  id: number;
  nome: string;
  descricao: string;
}

const ELEMENT_DATA: Item[] = [
  { id: 1, nome: 'Item 1', descricao: 'Descrição 1' },
  { id: 2, nome: 'Item 2', descricao: 'Descrição 2' },
  { id: 3, nome: 'Item 3', descricao: 'Descrição 3' }
];

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  standalone: false,
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nome', 'descricao'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void { }
}
