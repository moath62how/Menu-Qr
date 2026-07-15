import { Component, inject, signal } from '@angular/core';
import { TopNavBar } from './layout/top-nav-bar/top-nav-bar';
import { Footer } from './layout/footer/footer';
import { Supabase } from './core/services/supabase';

@Component({
  selector: 'app-root',
  imports: [TopNavBar, Footer],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {
  protected readonly title = signal('Menu-Qr');
  private supabase = inject(Supabase);

  async ngOnInit() {
    const { data, error } = await this.supabase.client.from('items').select('*');

    console.log(data);
    console.log(error);
  }
}
