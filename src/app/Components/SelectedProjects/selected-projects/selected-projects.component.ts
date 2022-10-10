import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selected-projects',
  templateUrl: './selected-projects.component.html',
  styleUrls: ['./selected-projects.component.css']
})
export class SelectedProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  mouseDown = false;

  startX: any;

  scrollLeft: any;

  slider = document.querySelector<HTMLElement>('.parent');

  startDragging(e, flag, el) {
    this.mouseDown = true;
    this.startX = e.pageX - el.offsetLeft;
    this.scrollLeft = el.scrollLeft;
  }
  stopDragging(e, flag) {
    this.mouseDown = false;
  }
  moveEvent(e, el) {
    e.preventDefault();
    if (!this.mouseDown) {
      return;
    }
    console.log(e);
    const x = e.pageX - el.offsetLeft;
    const scroll = x - this.startX;
    el.scrollLeft = this.scrollLeft - scroll;
  }

}
