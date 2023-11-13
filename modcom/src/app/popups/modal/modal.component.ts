import {
  Component,
  OnInit,
  ElementRef,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  @Output() closeModal = new EventEmitter();

  constructor(private elem: ElementRef) {}
  ngOnInit(): void {
    //htmlde olan modal bodynin bir parchasi olsun deye bele edirik. yeni htmlde herhansi bir elementi goturmek uchun bele edirik.
    document.body.appendChild(this.elem.nativeElement);

    //parent componentden child componente data gechdiyinde ngOnInit ulashiyoruz buna
  }
  ngOnDestroy(): void {
    this.elem.nativeElement.remove();
  }

  //ngOnChanges de parentdeki datada nese deyishiklik olduqda ngOnChangesde ulashiyoruz
  //ngOnDestroy() bozulmak uzereyken. yeni  componentin chalishmasini burakmak uzereyken, yeni bu route den bashqa bir routeye getdiyinde artik chalishmasini burakmak uzereyken

  onCloseClick() {
    this.closeModal.emit();
  }
}
