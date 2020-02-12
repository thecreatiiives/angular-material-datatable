# Angular Material Datatable

Angular material data table with pre-integrated search, sort, pagination server side and also with customized columns width, colors, font and border style...

## Instalation

This instruction will allow you to use our awesome data table:

First you need to install 
[Dropwizard](https://www.npmjs.com/package/@angular/material) - Angular Material Package
With this commande:

```
npm i @angular/material
```

Choose any theme you want we recommend deeppurple-amber

and tap yes for the next tow steps

and then install our package

```
npm i @thecreatiiives/angular-material-datatable
```

and import it in your app module
```
import { AngularMaterialDatatableModule } from 'angular-material-datatable';
....
@NgModule({
  ....
  imports: [
    ....
    AngularMaterialDatatableModule,
    ....
  ],
  ....
})
```

cheers now you can use the datatable ^ ^

## Usage

First you need to create a service

Example

```
getDatas(search, sortType, sortBy, page, maxRows) {
    return this.http.post('http://datatablepagination.test/api/users', {
        search,
        page,
        maxRows,
        sortBy,
        sortType
    });
}
```

and also a Datasource

Example

```
import {CollectionViewer, DataSource} from '@angular/cdk/collections';
import { BehaviorSubject, Observable } from 'rxjs';
import { ExampleDataTableService } from './example-data-table.service';

export class ExampleDataTableDatasource implements DataSource<any> {
    public datasSubject = new BehaviorSubject([]);
    public loadingSubject = new BehaviorSubject<boolean>(false);

    constructor(private exampleDataTableService: ExampleDataTableService) {}

    connect(collectionViewer: CollectionViewer): Observable<any> {
        return this.datasSubject.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
        this.datasSubject.complete();
        this.loadingSubject.complete();
    }

    loadDatas(
        filter = '',
        sortDirection = 'asc',
        column = 'firstname',
        pageIndex = 0,
        pageSize = 5
    ) {
        this.loadingSubject.next(true);

        return this.exampleDataTableService.getDatas(
            filter,
            sortDirection.toUpperCase(),
            column,
            pageIndex,
            pageSize
        );
    }
}
```

and finaly use the datatable in your component

Component.ts
```
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { ExampleDataTableDatasource } from './example-data-table.datasource';
import { ExampleDataTableService } from './example-data-table.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-example-data-table',
  templateUrl: './example-data-table.component.html',
  styleUrls: ['./example-data-table.component.styl']
})
export class ExampleDataTableComponent implements OnInit {
  dataSource: ExampleDataTableDatasource;
  columns = [
    {
      key: 'firstname',
      value: 'First Name',
      width: '100px'
    }
    ....
  ];
  actions = [
    {
      code: 'add',
      classe: 'add-class',
      icone: 'add',
      name: 'Add'
    }
    ....
  ];
  constructor(private matSnackBar: MatSnackBar, private router: Router, private exampleDataTableService: ExampleDataTableService) {
    this.dataSource = new ExampleDataTableDatasource(this.exampleDataTableService);
  }

  ngOnInit() {
  }

  sendAction($event) {
    console.log($event[0]);
    this.matSnackBar.open($event[1].firstname, $event[0], {
      duration: 3000,
    });
  }

}
```

Component.html

```
<div class="container">
    <h3>Data Table Demo</h3>
    <mat-datatable
        [datasource]="dataSource"
        (sendAction)="sendAction($event)"
        cssClass='custom-datatable'
        [columns]='columns'
        [actions]='actions'
        [search]="true"
    >
    </mat-datatable>
</div>
```

that's all now you can you use our data table with predefined server pagination search sort ...

Hope you like it ^ ^