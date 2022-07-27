import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Collection } from '../app.model';
import { AppService } from '../app.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  @Input() collections: Collection[];
  @Output() selectedCollection: EventEmitter<Collection> = new EventEmitter();

  selectedCollectionId: string;

  constructor(
    private appService: AppService
  ) { }

  ngOnInit() {
    if (this.collections.length > 0) {
      this.selectCollection(this.collections[0]);
    }
  }

  selectCollection(collection: Collection) {
    this.selectedCollectionId = collection.id;
    this.selectedCollection.emit(collection);
  }

  renameCollection(newName: string) {
    if (newName) {
      this.appService.saveCollections(this.appService.collections);
    }
  }
}
