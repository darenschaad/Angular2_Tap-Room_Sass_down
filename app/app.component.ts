import { Component, EventEmitter } from 'angular2/core';
import { Keg } from './keg.model';
import { KegListComponent } from './keg-list.component';

@Component({
  selector: 'my-app',
  directives: [KegListComponent],
  template:`
  <nav class="navbar navbar-default">
    <div class="container-fluid">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <span class="navbar-brand" href="#"><keg-alcohol id="logo"></keg-alcohol></span>
      </div>
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav">
          <li (click)="clickBar()"[class.active]="selectedDiv === 'barSide'"><a href="#" class="barSlide">Tap Room</a></li>
          <li (click)="clickInventory()" [class.active]="selectedDiv === 'inventorySide'"><a href="#" class="inventorySlide">Wiggle Room</a></li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="container">
    <div class="barSide">
      <h1>Beer List</h1>
      <keg-list
        [kegList]= "kegs"
        (onKegSelect)="kegWasSelected($event)">
      </keg-list>
    </div>
    <div class="inventorySide">
      <img class="wiggle" src="https://www.wpclipart.com/people/vice/drunk_with_bottle.png" alt="Drunk Person" />
      <img class="wiggle" src="https://cdn3.iconfinder.com/data/icons/i-m-sick/512/sick_3-512.png" alt="Drunk Person" />
      <img class="wiggle" src="http://img00.deviantart.net/a251/i/2007/347/c/8/drunk_santa_by_yakuks.png" alt="Drunk Person" />

    </div>
  </div>
  `
})

export class AppComponent {
  public kegs: Keg[];
  public selectedDiv: string = "barSide"
  constructor(){
    this.kegs = [
      new Keg("Rainier", "Rainier", 2.50, 4.7, 0),
      new Keg("Apocolyspe IPA", "10 Barrel", 5, 6.7, 1),
      new Keg("Four", "Upright", 5, 6.2, 2),
      new Keg("Tecate", "Tecate", 3, 4.3, 3),
      new Keg("Tricerahops", "Ninkasi", 5, 8.1, 4),
      new Keg("Pliny the Younger", "Russian River Brewery", 10, 11, 5)
    ];
  }
  kegWasSelected(clickedKeg: Keg): void {
  console.log("parent", clickedKeg)
  }
  clickBar() {
    this.selectedDiv = "barSide";
  }
  clickInventory() {
    this.selectedDiv = "inventorySide";
  }
}
