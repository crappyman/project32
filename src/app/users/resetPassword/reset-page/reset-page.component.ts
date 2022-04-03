import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ResetPasswordService } from 'src/app/services/reset-password.service';

@Component({
  selector: 'app-reset-page',
  templateUrl: './reset-page.component.html',
  styleUrls: ['./reset-page.component.scss']
})
export class ResetPageComponent implements OnInit {

  private token: String ='';
  validToken: boolean = true;
  
  userId: number = 0;
  password: string ='';
  constructor(private route: ActivatedRoute, private resetService:ResetPasswordService, private router: Router) { }
  
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.token=params['token']
      
    });
    this.resetService.checkTokenValidity(this.token).subscribe(response => {
      if(response== null){
        this.validToken= false ;
      }
      else 
        this.userId = response.user_id
    });

  }
  onSubmit(){
  
    this.resetService.updatePassword(this.password, this.userId).subscribe(() => {
        this.router.navigate(['/login']);
    });
    // She will call the service   http://localhost:7777/api/reset_password/updatePassword 
    // set as a body an object {'password': , 'user_id'}
  }

}
