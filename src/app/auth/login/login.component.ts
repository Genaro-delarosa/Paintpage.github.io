import { Component } from '@angular/core';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  showModal: boolean = false;

  toggleModal() {
    this.showModal = !this.showModal;
  }

  constructor(private modalService: ModalService) {}

  closeModal(): void {
    this.modalService.setShowModal(false);
  }
}