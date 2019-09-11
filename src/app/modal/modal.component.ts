import { Component, OnInit } from '@angular/core';
import { ModalPage1Component } from './modal-page1/modal-page1.component';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  root = ModalPage1Component;

  constructor() { }

  ngOnInit() {}

}
