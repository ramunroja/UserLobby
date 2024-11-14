import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../services/user.service';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users: any[] = [];
  filteredUsers: any[] = [];
  pagedUsers: any[] = [];
  
  searchTerm: string = '';
  selectedStatus: string = '';
  
  currentPage: number = 0; 
  limit: number = 10;      
  isLoading: boolean = false;
  hasMoreUsers: boolean = true;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadUsers(); 
  }

  loadUsers(): void {
    if (this.isLoading) return;
    
    this.isLoading = true;
    this.userService.getUsers(this.currentPage + 1, this.limit).subscribe(
      response => {
        const newUsers = response.data || [];

        if (newUsers.length < this.limit) {
          this.hasMoreUsers = false;
        }

        this.users = [...this.users, ...newUsers];
        this.applyFilters(); 
        this.isLoading = false;
      },
      error => {
        console.error('Failed to load users:', error);
        this.isLoading = false;
      }
    );
  }

  onSearchChange(searchTerm: string): void {
    this.searchTerm = searchTerm;
    this.applyFilters(); 
  }

  onStatusChange(event: any): void {
    this.selectedStatus = event.value;
    this.currentPage = 0;  
    this.applyFilters();   
  }

  onRefresh(): void {
    console.log(this.selectedStatus = 'all')
    this.selectedStatus = 'all';
    this.searchTerm = '';
    this.selectedStatus = '';
    this.currentPage = 0;
    this.hasMoreUsers = true;
    this.users = [];
    this.filteredUsers = [];
    this.loadUsers(); 
    
  }

  applyFilters(): void {
    if (this.selectedStatus === 'all') {
     this.filteredUsers = this.users.filter(user => 
        user.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
     this.filteredUsers = this.users.filter(user => 
        user.name.toLowerCase().includes(this.searchTerm.toLowerCase()) &&
        (this.selectedStatus ? user.status === this.selectedStatus : true)
      );
    }
  
   this.setPagedUsers(this.filteredUsers);
  }
  

  setPagedUsers(filteredUsers: any[]): void {
   const startIndex = this.currentPage * this.limit;
    const endIndex = startIndex + this.limit;
    this.pagedUsers = filteredUsers.slice(startIndex, endIndex);
  }

  onPageChange(event: PageEvent): void {
    this.currentPage = event.pageIndex;
    this.limit = event.pageSize;
    this.applyFilters();  
  }
}
