import { Component, signal } from '@angular/core';
import { TopNavBar } from './layout/top-nav-bar/top-nav-bar';

@Component({
  selector: 'app-root',
  imports: [TopNavBar],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('Menu-Qr');
}
