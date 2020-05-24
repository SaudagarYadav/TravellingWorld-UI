 import { Component, OnInit } from '@angular/core';
 import { WebService } from '../../../services/web.service';
 import { ValidationService } from '../../../services/validation.service';
 import * as jQuery from 'jquery';
 
@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  public user = {
    "name":"",
    "emailId":"",
    "contactNo":"",
    "password":"",
    "confirmPassword":""
  };
  public validateData = {
    "status":true,
    "msg":""
  }
  public alertMsg:string;
  public registrationData:any;
  constructor(
    private webService:WebService, 
    private ValidationService:ValidationService) { }

  ngOnInit() {
    jQuery("#mainBodyId").addClass("mainBody");
  }

  public register():void{
    this.user.contactNo = this.user.contactNo.replace(/\s/g, "");
    if(this.validate(this.user)){
      this.webService.registerNewUser(this.user).subscribe(
        data =>{
          this.registrationData = data;
          console.log(this.registrationData);
          this.alertMsg = this.registrationData.errorMsg;
        }, error => console.log(error)
      )
    }
  }
  
  public validate(user){
    let validationFlag:boolean = true;
    validationFlag = this.validateName() && validationFlag;
    validationFlag = this.validateEmailId() && validationFlag;
    validationFlag = this .validateConatactNo() && validationFlag;
    validationFlag = this .validatePassword() && validationFlag;
    validationFlag = this .validateConfirmPassword() && validationFlag;
    return validationFlag;
  }

  public validateName(){
    if (this.ValidationService.isEmpty(this.user.name)){
      jQuery("#signupIconNameId").addClass("iconError").css("cursor","pointer").attr("title", "Name cannot be blank.");
      jQuery("#signupInputNameId").addClass("inputError");
      return false;
    } if (this.ValidationService.isInvalidTextAllowsSpace(this.user.name)){
      jQuery("#signupIconNameId").addClass("iconError").css("cursor","pointer").attr("title", "Invalid Name.");
      jQuery("#signupInputNameId").addClass("inputError");
      return false;
    } else {
      jQuery("#signupIconNameId").removeClass("iconError").removeAttr("title");
      jQuery("#signupInputNameId").removeClass("inputError");
      return true;
    }
  }

  public validateEmailId(){
    if (this.ValidationService.isEmpty(this.user.emailId)){
      jQuery("#signupIconEmailId").addClass("iconError").css("cursor","pointer").attr("title", "Email Id  cannot be blank.");
      jQuery("#signupInputEmailId").addClass("inputError");
      return false;
    } if (this.ValidationService.isInvalidEmailId(this.user.emailId)){
      jQuery("#signupIconEmailId").addClass("iconError").css("cursor","pointer").attr("title", "Invalid Email Id.");
      jQuery("#signupInputEmailId").addClass("inputError");
      return false;
    } else {
      jQuery("#signupIconEmailId").removeClass("iconError").removeAttr("title");
      jQuery("#signupInputEmailId").removeClass("inputError");
      return true;
    }
  }
  
  public validateConatactNo(){
    if (this.ValidationService.isEmpty(this.user.contactNo)){
      jQuery("#signupIconConatactNoId").addClass("iconError").css("cursor","pointer").attr("title", "Contact no cannot be blank.");
      jQuery("#signupInputConatactNoId").addClass("inputError");
      return false;
    } if (this.ValidationService.isInvalidPhoneNumber(this.user.contactNo)){
      jQuery("#signupIconConatactNoId").addClass("iconError").css("cursor","pointer").attr("title", "Invalid Contact no.");
      jQuery("#signupInputConatactNoId").addClass("inputError");
      return false;
    } else {
      jQuery("#signupIconConatactNoId").removeClass("iconError").removeAttr("title");
      jQuery("#signupInputConatactNoId").removeClass("inputError");
      return true;
    }
  }
  
  public validatePassword(){
    if (this.ValidationService.isEmpty(this.user.password)){
      jQuery("#signupIconPasswordId").addClass("iconError").css("cursor","pointer").attr("title", "Password cannot be blank.");
      jQuery("#signupInputPasswordId").addClass("inputError");
      return false;
    } if (6 > this.user.password.length || this.user.password.length >15){
      jQuery("#signupIconPasswordId").addClass("iconError").css("cursor","pointer").attr("title", "Password length should be between 6 to 15.");
      jQuery("#signupInputPasswordId").addClass("inputError");
      return false;
    } else {
      jQuery("#signupIconPasswordId").removeClass("iconError").removeAttr("title");
      jQuery("#signupInputPasswordId").removeClass("inputError");
      return true;
    }
  }
  
  public validateConfirmPassword(){
    if (this.ValidationService.isEmpty(this.user.confirmPassword)){
      jQuery("#signupIconConfirmPasswordId").addClass("iconError").css("cursor","pointer").attr("title", "Password cannot be blank.");
      jQuery("#signupInputConfirmPasswordId").addClass("inputError");
      return false;
    } if (this.user.password !== this.user.confirmPassword){
      jQuery("#signupIconConfirmPasswordId").addClass("iconError").css("cursor","pointer").attr("title", "Please make sure password match.");
      jQuery("#signupInputConfirmPasswordId").addClass("inputError");
      return false;
    } else {
      jQuery("#signupIconConfirmPasswordId").removeClass("iconError").removeAttr("title");
      jQuery("#signupInputConfirmPasswordId").removeClass("inputError");
      return true;
    }
  }

}
