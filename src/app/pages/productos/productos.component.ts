import { Component, inject } from '@angular/core';
import { AutosService } from '../../service/autos.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
  service=inject(AutosService)

  auto: any
  
  ngOnInit()
  {
    console.log("hola")
   this.service.getAutosTabla().subscribe(data =>{
      this.auto=data
    })
  }
  eliminar(id:any){
    this.service.deleteAutosTabla(id).subscribe()
  }
}
