import { Component, OnInit } from '@angular/core';
import { ClienteService } from './cliente.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'list-async-test';
  public clientes$: any = [];


  constructor(public clienteService: ClienteService) { }
  ngOnInit() {

    this.clienteService.GetIssues().subscribe((data: {}) => {
      this.clientes$ = data;
    });

    console.log(this.clientes$);

  }

}
