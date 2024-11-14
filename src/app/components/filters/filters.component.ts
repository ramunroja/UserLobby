import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent {

  @Input() status: string[] = []; 
  @Output() filterChange = new EventEmitter<string>();

  selectedStatus: string = '';

  ngOnInit(): void {
   
  }

  onFilterChange(): void {
    this.filterChange.emit(this.selectedStatus);
  }

}
