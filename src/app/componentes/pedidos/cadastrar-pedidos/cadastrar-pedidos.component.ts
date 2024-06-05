import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ConsultaCepService } from '../../../service/consulta-cep.service';
import { Observable, map, of, startWith } from 'rxjs';

export interface User {
  name: string;
}
/**
 * @title Display value autocomplete
 */

@Component({
  selector: 'app-cadastrar-pedidos',
  templateUrl: './cadastrar-pedidos.component.html',
  styleUrl: './cadastrar-pedidos.component.css',
})
export class CadastrarPedidosComponent implements OnInit {
  @Input() dadosPedido = {
    id: 1,
    nome: 'Ricardo Del Vecchio (TESTANDO)',
    cpf: '',
    telefone: '',
    celular: '',
    email: '',
    cep: '',
    logradouro: '',
    numero: '',
    complemento: '',
    bairro: '',
    cidade: '',
    estado: '',
    fantasia: 'Condomínio Residencial Turquesa',
    razaoSocial: 'Condomínio Turquesa',
    cnpj: '43.254.354/0001-75',
    tipoPgto: '',
    sfobras: '',
    cno: '',
    mangueira: '',
    ie: '',
    volume: '',    
    preco: '',
    ajudanteHora: '',
    observacao: '',
    modelo: 'modelo1',
  };

  // formulario!: FormGroup;

  myControl = new FormControl<string | User>('');

  options: User[] = [
    { name: 'Jerinelson' },
    { name: 'Bruno' },
    { name: 'Brunelson' },
    { name: 'Brunolindo' },
    { name: 'Ricardo 01' },
    { name: 'Ricardo 02' },
    { name: 'Ricardo 03' },
    { name: 'Ricardo Del' },
  ];

  filteredOptions: Observable<User[]> = of([]);
list: any;

  constructor(
    private router: Router,
    private consultaCepService: ConsultaCepService,
    // private formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => {
        const name = typeof value === 'string' ? value : value?.name;
        return name ? this._filter(name as string) : this.options.slice();
      }),
    );

    // this.formulario = this.formBuilder.group({
    //   conteudo: ['Formulario reativo'],
    //   autoria: [''],
    //   modelo: ['modelo1'],
    // });eit
  }

  displayFn(user: User): string {
    return user && user.name ? user.name : '';
  }

  private _filter(name: string): User[] {
    const filterValue = name.toLowerCase();

    return this.options.filter((option) =>
      option.name.toLowerCase().includes(filterValue),
    );
  }

  consultaCEP(ev: any, form: NgForm) {
    const cep = ev.target.value;
    if (cep != '') {
      this.consultaCepService.getConsultaCep(cep).subscribe((resultado) => {
        console.log(resultado);
        this.populandoEndereco(resultado, form);
      });
    }
  }

  populandoEndereco(dados: any, form: NgForm) {
    form.form.patchValue({
      logradouro: dados.logradouro,
      complemento: dados.complemento,
      bairro: dados.bairro,
      cidade: dados.localidade,
      estado: dados.uf,
    });
  }

  // cadastrar(form: NgForm){
  //   // console.log('Pedido cadastrado com sucesso!');
  //   console.log(form.controls);
  // }

  cadastrar(form: any) {
    console.log(form);
    if (form.valid) {
      this.router.navigate(['sucesso']);
      console.log('Formulário enviado');
      alert('Formulário enviado');
    } else {
      console.log('Formulário inválido');
      alert('Formulário inválido!');
    }
  }

  cancelar() {
    alert('Ação cancelada!');
  }
}
