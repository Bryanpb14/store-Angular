import { Component } from '@angular/core';
import { Product } from './product.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  widthImg = 10;
  name = 'Nicolas';
  age = 18;
  img = 'https://www.scisports.com/wp-content/uploads/2019/06/Bayern-visual-1920-logo-1280x720.jpg';
  btnDisabled= true;
  register = {
    name: '',
    email: '',
    password: '',
  }
  login = {
    usuario: '',
    password: '',
  }
  person = {
    name: 'Nicolas',
    age: 18,
    avatar: 'https://www.scisports.com/wp-content/uploads/2019/06/Bayern-visual-1920-logo-1280x720.jpg',

  }
  names: string[] = ['Nico', 'Juli', 'Santi'];
  newName = '';
  box = {
    width: 100,
    height: 100,
    background: 'red'
  };

  deportes: string[] = ['polo', 'futbol', 'voleyball'];
  newdeporte = '';

  products: Product[] = [

      {
        id: '1',
        name: 'camiseta',
        image: 'assets/images/camiseta.png',
        title: 'Camiseta',
        price: 80000,
        description: 'bla bla bla bla bla'
      },
      {
        id: '2',
        name: 'hoodie',
        image: 'assets/images/hoodie.png',
        title: 'Hoodie',
        price: 80000,
        description: 'bla bla bla bla bla'
      },
      {
        id: '3',
        name: 'mug',
        image: 'assets/images/mug.png',
        title: 'Mug',
        price: 80000,
        description: 'bla bla bla bla bla'
      },
      {
        id: '4',
        name: 'pin',
        image: 'assets/images/pin.png',
        title: 'Pin',
        price: 80000,
        description: 'bla bla bla bla bla'
      },
      {
        id: '5',
        name: 'stickers',
        image: 'assets/images/stickers1.png',
        title: 'Stickers',
        price: 80000,
        description: 'bla bla bla bla bla'
      },
      {
        id: '6',
        name: 'sctiker2',
        image: 'assets/images/stickers2.png',
        title: 'Stickers',
        price: 80000,
        description: 'bla bla bla bla bla'
      },

  ];

  toggleButton(){
    this.btnDisabled = !this.btnDisabled;
  }
  increaseage(){
    this.person.age += 1;
  }

  onScroll(event: Event){
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  changeName(event: Event){
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }
  addName(){
    this.names.push(this.newName);
    this.newName = '';
  }
  adddeport(){
    this.deportes.push(this.newdeporte);
    this.newdeporte = '';
  }

  deleteName(index: number){
    this.names.splice(index, 1);
  }

  onRegister(){
    console.log(this.register);
  }

  onLogin(){
    console.log(this.login);
  }
}
