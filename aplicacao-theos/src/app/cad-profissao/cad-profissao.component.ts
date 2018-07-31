import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { HttpClient } from '../../../node_modules/@angular/common/http';

@Component({
  selector: 'app-cad-profissao',
  templateUrl: './cad-profissao.component.html',
  styleUrls: ['./cad-profissao.component.css']
})
export class CadProfissaoComponent implements OnInit {
  formCadastro: FormGroup;
  listaEstados: any[];
  listaProfissao: any[];
  datePickerConfig: Partial<BsDatepickerConfig>;
  closeResult: string;

  constructor(
    private fb: FormBuilder,
    private http: HttpClient ) { }

  ngOnInit() {
    this.formCadastro = this.fb.group({
      cNome: [null, Validators.required],
      cSobrenome: [null, Validators.required],
      cEmail: [null, Validators.required],
      cSexo: [null],
      dttCadastro: [null, Validators.required],
      endereco: this.fb.group({
        cCidade: [null],
        cEstado: [null],
      }),
      cAreaFormacao: [null, Validators.required],
      cProfissao: [null, Validators.required],
    });

    this.datePickerConfig = Object.assign({},
      { containerClass: 'theme-dark-blue',
        showWeekNumbers: false,
        minDate: new Date(1900, 0, 1)
      });

    this.http.get('assets/dados/estados.json')
      .subscribe(dados => this.listaEstados = dados);

    this.listaProfissao = [
      { cDescricao: 'Desenvolvedor' },
      { cDescricao: 'Analista' },
      { cDescricao: 'WebDesign' },
    ];
  }

  saveDataForm() {
    if (this.formCadastro.valid) {
      this.http
        .post('https://httpbin.org/post', JSON.stringify(this.formCadastro.value))
        .subscribe(
          dados => {
            console.log(dados);
            this.formCadastro.reset();
            alert('Dados gravados com sucesso!');
          },
          (error: any) => alert('Erro ao gravar dados!')
        );
    } else {
      console.log('Formulário inválido!');
    }
  }

  limparForm() {
    this.formCadastro.reset();
  }
}
