import { Component } from '@angular/core';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ContactInformationComponent } from './components/contact-information/contact-information.component';
import { UbicationComponent } from './components/ubication/ubication.component';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [ContactFormComponent, ContactInformationComponent, UbicationComponent],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export default class ContactUsComponent {

}
