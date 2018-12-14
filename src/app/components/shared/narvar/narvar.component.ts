import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-narvar',
  templateUrl: './narvar.component.html'
})
export class NarvarComponent implements OnInit {

  constructor( private router:Router ) { }

  ngOnInit() {
  }

  buscarHeroe ( termino:string ){

    this.router.navigate( ['/buscar',termino ] );

  }

}
