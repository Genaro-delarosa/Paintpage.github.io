// modal.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private showModalSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }

  getShowModal(): Observable<boolean> {
    return this.showModalSubject.asObservable();
  }

  setShowModal(showModal: boolean): void {
    this.showModalSubject.next(showModal);
  }
}