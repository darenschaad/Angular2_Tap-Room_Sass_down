import { Component, EventEmitter } from 'angular2/core';
import { Keg } from './keg.model';
import { KegComponent } from './keg.component'
import { EditKegPriceComponent } from './edit-keg-price.component';
import { NewKegComponent } from './new-keg.component';
import { ChangePipe } from './change.pipe';
import { AbvPipe } from './abv.pipe';


@Component({
  selector: 'keg-list',
  inputs: ['kegList'],
  outputs: ['onKegSelect'],
  pipes: [ChangePipe, AbvPipe],
  directives: [KegComponent, EditKegPriceComponent, NewKegComponent],
  template: `
  <select class="changeKeg" (change)="onChange($event.target.value)">
    <option value="all">Show All</option>
    <option value="low">Show kegs with 10 pints or less</option>
  </select>
  <select class="abv" (change)="onAbv($event.target.value)">
    <option value="all">Show All</option>
    <option value="low">Below 5% ABV </option>
    <option value="medium">Between 5% & 8% ABV </option>
    <option value="high">Above 8% ABV </option>
  </select>
  <keg-display *ngFor="#currentKeg of kegList | change:filterLow | abv:filterAbv"
    (click)= "kegClicked(currentKeg)"
    [class.selected]="currentKeg === selectedKeg"
    [keg]="currentKeg">
  </keg-display>
  <edit-keg-price *ngIf="selectedKeg" [keg]="selectedKeg">
  </edit-keg-price>
  <new-keg (onSubmitNewKeg)="createKeg($event)"></new-keg>
  `
})

export class KegListComponent {
  public kegList: Keg[];
  public onKegSelect: EventEmitter<Keg>;
  public selectedKeg: Keg;
  public filterLow : string = "all";
  public filterAbv : string = "all";
  constructor() {
    this.onKegSelect = new EventEmitter();
  }
  kegClicked(clickedKeg: Keg): void {
    console.log('child', clickedKeg);
    this.selectedKeg = clickedKeg;
    this.onKegSelect.emit(clickedKeg);
  }
  createKeg([beerName, beerBrand, price, abv]): void {
    this.kegList.push(
      new Keg(beerName, beerBrand, price, abv, this.kegList.length)
    );
  }
  onChange(filterOption) {
    this.filterLow = filterOption;
    console.log(this.filterLow);
  }
  onAbv(filterOption) {
    this.filterAbv = filterOption;
  }
}
