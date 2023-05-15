import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-acrc-de',
  templateUrl: './acrc-de.component.html',
  styleUrls: ['./acrc-de.component.css']
})
export class AcrcDeComponent implements OnInit{
  persona: persona = new persona("","","","");
  
  constructor(public personaService: PersonaService, private tokenService: TokenService){ }
  isLogged = false;

  ngOnInit(): void {
    this.cargarPersona();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else{
      this.isLogged = false;
    }
  }


  cargarPersona(){
    this.personaService.detail(1).subscribe(data =>
      {this.persona = data}
      )
  }

}
