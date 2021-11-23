import { Component, OnInit } from '@angular/core';
import { BrokerService } from 'src/app/broker/broker.service';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime } from 'rxjs/internal/operators/debounceTime';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  
  form = new FormGroup({
    keyword: new FormControl('')
  });

  constructor(private broker: BrokerService) { }

  ngOnInit(): void {
    // Implementing a debounce time so that the logic is not called on every value change
    this.form.get('keyword')?.valueChanges
      .pipe(
        debounceTime(500)
      ).subscribe(newValue =>
        this.broker.emit('keyword', newValue.trim().toLowerCase())
      );
  }
}
