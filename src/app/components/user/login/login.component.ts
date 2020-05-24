import { Component, OnInit } from '@angular/core';
import { WebService } from '../../../services/web.service';
import { ValidationService } from '../../../services/validation.service';
import * as jQuery from 'jquery';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  public user = {
    "userName":"",
    "password":""
  };
  public loginData:any;
  public alertMsg:string;

  constructor(
    private webService:WebService, 
    private ValidationService:ValidationService) { }

  ngOnInit() {
    jQuery("#mainBodyId").addClass("mainBody");
  }

  public login():void{
    let validateData = this.validate(this.user);
    if(validateData){
      this.webService.loginUser(this.user).subscribe(
        data =>{ this.loginData = data;
          console.log(this.loginData);
          this.alertMsg = this.loginData.errorMsg;
        }, error => console.log(error)
      )
    }
  }

  public validate(user){ 
    let validationFlag:boolean = this.validateUsername();
    validationFlag = this.validatePwd() && validationFlag;  
    return validationFlag;
  }

  public validateUsername(){
    if (this.ValidationService.isEmpty(this.user.userName)){
      jQuery("#loginIconUsernameId").addClass("iconError").css("cursor","pointer").attr("title", "UserName cannot be blank");
      jQuery("#loginInputUsernameId").addClass("inputError");
      return false;
    } else {
      jQuery("#loginIconUsernameId").removeClass("iconError").removeAttr("title");
      jQuery("#loginInputUsernameId").removeClass("inputError");
      return true;
    }
  }

  public validatePwd(){
    if (this.ValidationService.isEmpty(this.user.password)){
      jQuery("#loginIconPwdId").addClass("iconError").css("cursor","pointer").attr("title", "Password cannot be blank");
      jQuery("#loginInputPwdId").addClass("inputError");
      return false;
    } else {
      jQuery("#loginIconPwdId").removeClass("iconError").removeAttr("title");
      jQuery("#loginInputPwdId").removeClass("inputError");
      return true;
    }
  }
}

