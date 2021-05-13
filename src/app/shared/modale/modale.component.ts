import { Component, Input, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modale',
  templateUrl: './modale.component.html',
  styleUrls: ['./modale.component.scss']
})
export class ModaleComponent implements OnInit {
  @Input() textButton!: string;
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  open(content: any): void {
    this.modalService.open(content);
  }

  hide(){
    this.modalService.dismissAll();
  }

}
