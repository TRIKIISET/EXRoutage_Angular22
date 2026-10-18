import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Menu } from './components/front/menu/menu';

@Component({
  imports: [RouterOutlet, Menu],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('TProutage');
//     novels = signal<Novel[]>([
//   { id: 10, title: '17 ramadan', author: 'Georgi Zaydane', category: 'historique', price: 4.3, isNew: false },
//   { id: 20, title: 'pivoine', author: 'Pearl Buck', category: 'roman', price: 24.2, isNew: false },
//   { id: 30, title: 'Vent d\'Est Vent d\'Ouest', author: 'Pearl Buck', category: 'roman', price: 25.3, isNew: true },
//   { id: 40, title: 'La tresse', author: 'Laetitia Colombani', category: 'roman', price: 18.6, isNew: false },
//   { id: 50, title: 'Haroun Erachid', author: 'Gorgi Zaydane', category: 'historique', price: 5.8, isNew: false },
//   { id: 60, title: 'Terre chinoise', author: 'Pearl Buck', category: 'roman', price: 26.4, isNew: true }
// ]);
}
