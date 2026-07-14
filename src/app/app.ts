import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SimpleEmployee } from './component/simple-employee/simple-employee';

@Component({
  selector: 'app-root',
  imports: [SimpleEmployee],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('employee-management');
}
