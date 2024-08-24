import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { JuegosService } from '../../service/juegos.service';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-api-c',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './api-c.component.html',
  styleUrl: './api-c.component.css'
})
export class ApiCComponent {
 
  servicio= inject(JuegosService)
  juego:any

  
  ngOnInit(){
    
    this.servicio.getJuego().subscribe(p=>{
      this.juego=p.videojuegos
      console.log(this.juego)
    })  
  }
}
