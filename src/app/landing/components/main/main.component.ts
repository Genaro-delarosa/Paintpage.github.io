import { Component } from '@angular/core';
import { SliderComponent } from '../slider/slider.component';
import { BestPaintsComponent } from '../best-paints/best-paints.component';
import { TipDesingesComponent } from '../tip-desinges/tip-desinges.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [SliderComponent, BestPaintsComponent, TipDesingesComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export default class MainComponent {

}
