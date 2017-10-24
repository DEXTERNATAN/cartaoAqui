import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-config-cartao',
  templateUrl: './config-cartao.component.html',
  styleUrls: ['./config-cartao.component.css']
})
export class ConfigCartaoComponent implements OnInit {

  public exibirDivs: boolean = true;
  public exibirDivCep: boolean = true;
  public exibirDivRetirada: boolean;

  constructor() { }

  ngOnInit() {
  }

  exibeConfiguracoes(opcao){
    if(opcao)
      this.exibirDivs = opcao; 
  }

  selectShipingPlace(opcao){
    if(opcao){
      this.exibirDivCep = false;
      this.exibirDivRetirada = true;
    }else{
      this.exibirDivRetirada = false;
      this.exibirDivCep = true;
    }
    
  }

}
