import { Injectable } from '@angular/core';
import { BreakpointObserver,Breakpoints, LayoutModule } from '@angular/cdk/layout';
import { merge} from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  constructor( private breackpoint: BreakpointObserver, private layout:LayoutModule ) { }
  
  getLayout() {
  }

  getHandsetLayout(): LayoutModule {
    return {
      name: 'Handset',
      gridColumns: 1,
      layoutItem: [
        { title: 'Card 1', cols: 1, rows: 1 },
        { title: 'Card 2', cols: 1, rows: 1 },
        { title: 'Card 3', cols: 1, rows: 1 },
        { title: 'Card 4', cols: 1, rows: 1 },
        { title: 'Card 5', cols: 1, rows: 1 },
        { title: 'Card 6', cols: 1, rows: 1 },
        { title: 'Card 7', cols: 1, rows: 1 }
      ]
    };
  }

  getTabletLayout(): LayoutModule {
    return {
      name: 'Tablet',
      gridColumns: 4,
      layoutItem: [
        { title: 'Card 1', cols: 2, rows: 1 },
        { title: 'Card 2', cols: 2, rows: 1 },
        { title: 'Card 3', cols: 2, rows: 1 },
        { title: 'Card 4', cols: 2, rows: 1 },
        { title: 'Card 5', cols: 1, rows: 1 },
        { title: 'Card 6', cols: 1, rows: 1 },
        { title: 'Card 7', cols: 1, rows: 1 }
      ]
    };
  }

  getWebLayout(): LayoutModule {
    return {
      name: 'Web',
      gridColumns: 6,
      layoutItem: [
        { title: 'Card 1', cols: 2, rows: 1 },
        { title: 'Card 2', cols: 2, rows: 1 },
        { title: 'Card 3', cols: 2, rows: 1 },
        { title: 'Card 4', cols: 2, rows: 1 },
        { title: 'Card 5', cols: 2, rows: 1 },
        { title: 'Card 6', cols: 2, rows: 1 },
        { title: 'Card 7', cols: 1, rows: 1 }
      ]
    };
  }
}
