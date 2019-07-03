import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
@Output() cancelRegister = new EventEmitter();
model: any = {};
  constructor(private authService: AuthService, private alrtify: AlertifyService) { }

  ngOnInit() {
  }

  register() {
    this.authService.register(this.model).subscribe(() => {
      this.alrtify.success('registeration successful');
    }, error => {
      this.alrtify.error(error);
    });
  }

  cancel() {
    this.cancelRegister.emit(false);    
  }

}
