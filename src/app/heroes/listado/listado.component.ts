import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Goku'];
  heroeBorrado: string = '';

  borrarHeroe() {
    // el heroe borrado se guarda en la variable creada arriba. 
    // El shift devuelve strin o undefined y le ponemos ||'' para que devuelva un string vacio y no de error
    this.heroeBorrado = this.heroes.shift() || '';
    
  }
 

}
