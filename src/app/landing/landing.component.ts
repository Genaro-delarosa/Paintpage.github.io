import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavComponent } from '../shared/nav/nav.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { MenuComponent } from '../shared/menu/menu.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [RouterModule, NavComponent, FooterComponent, MenuComponent, ],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css',
})
export default class LandingComponent {}
