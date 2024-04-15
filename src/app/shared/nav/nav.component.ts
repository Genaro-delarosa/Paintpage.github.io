import { Component } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { ModalService } from '../../auth/services/modal.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [MenuComponent],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  constructor(private modalService: ModalService) {}

  openModal(): void {
    this.modalService.setShowModal(true);
  }
}
