import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-modal-confirm',
  templateUrl: './ngbd-modal-confirm.component.html',
  styleUrls: ['./ngbd-modal-confirm.component.scss'],
})
export class NgbdModalConfirmComponent implements OnInit {

  constructor(public modal: NgbActiveModal) {}

  ngOnInit(): void {}
}
