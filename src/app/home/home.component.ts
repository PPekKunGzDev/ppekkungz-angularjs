import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  title = "@PPekKunGzDev"
  full = "Kittiphat Lintajaka"
  desc = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit exercitationem ipsa, quae beatae praesentium eveniet nihil corporis quaerat voluptatem assumenda ut facere voluptas minus sint illo excepturi aperiam quo dolorum.`
}
