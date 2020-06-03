import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {Component, EventEmitter, Input, OnInit, Output, TemplateRef} from '@angular/core';
import {JoinUsEvent} from '../../Model/JoinUsEvent';

@Component({
  selector: 'app-event-modal',
  templateUrl: './event-modal.component.html',
  styleUrls: ['./event-modal.component.css']
})
export class EventModalComponent implements OnInit {
  modalRef: BsModalRef;
  indexEvent: JoinUsEvent;
  @Output() joinUsEventEmitter = new EventEmitter();
  constructor(private modalService: BsModalService) {
  }

  ngOnInit(): void {
  }

  openModalWithClass(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, {class: 'grey modal-lg'})
    );
  }
  // emmettre un event et y injecter l'event joinUs
  sendJoinUsEvent() {
    this.joinUsEventEmitter.emit(this.indexEvent);
  }
  addEvent(name: string, date: string, hour: string, description: string) {
    this.indexEvent = new JoinUsEvent(name, date, hour, description);
    console.log(this.indexEvent);
    this.sendJoinUsEvent();
    this.modalRef.hide();
  }
}
