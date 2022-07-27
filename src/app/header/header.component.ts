import { Component, Output, OnInit, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material';
import { TranslateService } from '@ngx-translate/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() toggleSidebar: EventEmitter<boolean> = new EventEmitter();

  dialog: MatDialog;
  showSideBar = true;

  constructor(
    private appService: AppService,
    private translateService: TranslateService
  ) { }

  ngOnInit() {
  }

  toggleSidebarMenu() {
    this.showSideBar = !this.showSideBar;
    this.toggleSidebar.emit(this.showSideBar);
  }

  addNewCollection() {
    const collectionName = this.translateService.instant('collections.newCollection');
    this.appService.addCollection(collectionName);
    this.appService.saveCollections(this.appService.collections);
  }
}
