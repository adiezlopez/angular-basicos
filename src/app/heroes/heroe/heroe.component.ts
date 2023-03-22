import { Component } from "@angular/core";


@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'

})

export class HeroeComponent{

    nombre: string = 'Ironman';
    edad: number = 45;

    get nombreCapitalizado(): string {
        return this.nombre.toLocaleUpperCase();
    }

    ontenerNombre(): string {
        // return this.nombre + ' - ' + this.edad;
        // Es lo mismo que arriba pero es mas facil insertar valores
        return`${this.nombre } - ${this.edad }`;
    }

    cambiarNombre():void {
        this.nombre = 'Spiderman';
    }

    cambiarEdad():void {
        this.edad = 30;
    }

}