import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent {
  userId: number | null = null;
  userDetails: any = null;  
  isLoading: boolean = true;  
  errorMessage: string | null = null; 

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit(): void {
 
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      
      if (id) {
        this.userId = +id; 
      } else {
        this.userId = null; 
      }
      
      this.fetchUserDetails();
    });
  }

  fetchUserDetails(): void {
    if (this.userId) {
      this.isLoading = true;
      this.errorMessage = null;  

      this.userService.getUserById(this.userId).subscribe({
        next: (response) => {
          this.userDetails = response.data;  
          this.isLoading = false;  
        },
        error: (error) => {
          this.errorMessage = 'Failed to load user details. Please try again later.';  
          this.isLoading = false;
        }
      });
    } else {
      this.errorMessage = 'Invalid user ID.';
      this.isLoading = false;
    }
  }
}
