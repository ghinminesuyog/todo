import { Component, OnInit } from '@angular/core';
import { Collection } from './app.model';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  showSidebar = true;
  collections: Collection[] = [];
  selectedCollection: Collection;

  constructor(
    private appService: AppService
  ) { }

  ngOnInit(): void {
    this.getCollections();
  }

  getCollections() {
    this.appService.getCollections().subscribe(
      (collections) => {
        this.collections = collections;
      }
    );
  }

  toggleSidebar(toggle: boolean) {
    this.showSidebar = toggle;
  }

  selectCollection(collection: Collection) {
    this.selectedCollection = collection;
  }

  saveAllCollections(collection: Collection) {
    this.appService.saveCollections(this.collections).subscribe(
      (response) => {
        // this.getCollections();
      });
  }
}
