import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResetPasswordService } from 'src/app/services/reset-password.service';

@Component({
  selector: 'app-reset-page-email',
  templateUrl: './reset-page-email.component.html',
  styleUrls: ['./reset-page-email.component.scss']
})
export class ResetPageEmailComponent implements OnInit {

  
  
  email: string ='';
  constructor(private resetService:ResetPasswordService, private router: Router) { }

  ngOnInit(): void {
  }

  sendEmail(){
    this.resetService.sendEmail(this.email).subscribe(() => {
      this.router.navigate(['/login']);
  });
  }
}
