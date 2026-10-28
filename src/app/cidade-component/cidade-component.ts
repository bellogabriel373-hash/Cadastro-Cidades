import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Cidade } from '../model/cidade';

@Component({
  selector: 'app-cidade-component',
  standalone: false,
  templateUrl: './cidade-component.html',
  styleUrl: './cidade-component.css',
})
export class CidadeComponent {

  Cidades: Cidade[] = [];
  formGroupCidade: FormGroup;

   constructor(private formBuilder: FormBuilder) {

    this.formGroupCidade = formBuilder.group({
      id: [''],
      nome: [''],
      estado: [''],
      populacao: [''],
      capital: ['']
    });

  }

   save() {
    this.Cidades.push(this.formGroupCidade.value);
    this.formGroupCidade.reset();
  }

}
