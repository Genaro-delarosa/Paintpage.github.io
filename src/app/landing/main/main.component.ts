import { Component } from '@angular/core';
import { SliderComponent } from '../components/slider/slider.component';
import { BestPaintsComponent } from '../components/best-paints/best-paints.component';
import { TipDesingesComponent } from '../components/tip-desinges/tip-desinges.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [SliderComponent, BestPaintsComponent, TipDesingesComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export default class MainComponent {

}
