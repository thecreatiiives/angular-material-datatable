import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'mat-datatable',
  templateUrl: './angular-material-datatable.component.html',
  styleUrls: ['./angular-material-datatable.component.styl']
})
export class AngularMaterialDatatableComponent implements OnInit {
  displaycolumns: string[] = [];
  paginatorData = {totalData: 0, dataSize: 5};
  @Input() datasource;
  @Input() cssClass;
  @Input() columns;
  @Input() actions;
  @Input() search = false;
  @Output() sendAction = new EventEmitter();
  datas;
  datatablesearch;
  pageSizeOptions: number[] = [5, 10, 25, 50, 100];
  loading = false;

  constructor() { }

  pageEvent;

  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

  ngOnInit() {
    this.loading = true;
    this.datasource.loadDatas().subscribe(datas => {
      this.datasource.loadingSubject.next(false);
      this.datas = new MatTableDataSource(datas.data);
      this.loading = false;
      this.paginatorData.totalData = datas.total;
      this.paginatorData.dataSize = datas.per_page;
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < this.columns.length; i++) {
        this.displaycolumns.push(this.columns[i].key);
      }
    });
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngAfterViewInit() {
    this.sort.sortChange.subscribe(() => this.loadCandidats());
  }

  loadCandidats(): void {
    this.loading = true;
    this.datasource.loadDatas(
      this.datatablesearch,
      this.sort.direction,
      this.sort.active,
      this.paginator.pageIndex + 1,
      this.paginator.pageSize
    ).subscribe(datas => {
      this.datasource.loadingSubject.next(false);
      this.datas = new MatTableDataSource(datas.data);
      this.loading = false;
      this.paginatorData.totalData = datas.total;
      this.paginatorData.dataSize = datas.per_page;
    });
  }

  fireSendAction(action, row) {
    this.sendAction.next([action, row]);
  }

}
