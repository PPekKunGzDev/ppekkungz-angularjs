import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  // title = 'Blog-Angular';
  // desc = 'Hello Desc';

  // hello() {
  //   alert(this.desc);
  //   console.log('Hello World: ', this.desc);
  // }

  // changeHello(name: string) {
  //   this.desc = name;
  // }
}
