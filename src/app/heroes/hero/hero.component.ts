import { Component } from '@angular/core';

/*Este módulo se crea desde la ventana de comando escribiendo
ng g c heroes/hero*/
@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = 'ironman';
  public age: number = 45

  get capitalizedName():  string{
    // return 'Hola Mundo'.toUpperCase();
    return this.name.toUpperCase();
   }

   getHeroDescription():string {
    return `${this.name} - ${this.age}`;
   }

   changeHero():void {
    this.name = 'Spiderman';
   }

   changeAge():void {
    this.age = 25;
   }

   resetForm():void{
    this.name = 'ironman';
    this.age = 45;

    // Cambiaría todos los h1 del Dom
    // document.querySelectorAll('h1')!.forEach(element => {
    //   element.innerHTML = '<h1>Desde Angular</h1>'</h1>';
    // });

   }
}
