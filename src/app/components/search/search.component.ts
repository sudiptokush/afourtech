import { Component, OnDestroy, OnInit } from '@angular/core';
import { BrokerService } from 'src/app/broker/broker.service';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime } from 'rxjs/internal/operators/debounceTime';
import { distinctUntilChanged } from 'rxjs/internal/operators/distinctUntilChanged';
import { takeUntil } from 'rxjs/internal/operators/takeUntil';
import { Subject } from 'rxjs/internal/Subject';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {
  
  
  keyword = new FormControl('')
  
  destroy$: Subject<void> = new Subject<void>()

  constructor(private broker: BrokerService) { 
    
  }

  ngOnInit(): void {
    // Implementing a debounce time so that the logic is not called on every value change
    this.keyword.valueChanges.pipe (
      debounceTime(500), distinctUntilChanged(),takeUntil(this.destroy$)
      ).subscribe( newValue =>
        this.broker.emit('keyword', newValue.trim().toLowerCase()
      )
    );
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
