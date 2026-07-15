import { Component, signal } from '@angular/core';
import { TopNavBar } from './layout/top-nav-bar/top-nav-bar';
import { Footer } from './layout/footer/footer';

@Component({
  selector: 'app-root',
  imports: [TopNavBar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('Menu-Qr');
}
