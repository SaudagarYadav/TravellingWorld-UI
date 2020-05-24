import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  private phoneNumberPattern = /^(\+?\d+-?)+\d+$/;
  private textPattern = /^[a-zA-Z]*$/;
  private textPatternWithSpace = /^[A-z ]+$/;
  private pwdPattern: string = '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$';
  private alphaNumPattern = /^[a-zA-Z0-9]*$/;
  private numberCheck = /^\d*$/;
  private alphaNumPatternWithSpace = /^[a-zA-Z0-9 ]*$/;
  private emailIdPattern = /^[\w\d]+(\.[\w\d]+)*@[\w\d-]+(\.[\w\d-]+)*(\.[\w]{2,50})$/;


  constructor() { }

isInvalidPhoneNumber(field: any) {
  return !this.isEmpty(field) && !this.phoneNumberPattern.test(field);
}

isInvalidText(field: any) {
  return !this.textPattern.test(field);
}

isInvalidTextAllowsSpace(field: any) {
  return !this.textPatternWithSpace.test(field);
}

isInvalidAlphaNum(field: any) {
  return !this.alphaNumPattern.test(field);
}

isInvalidAlphaNumWithSpace(field: any) {
  return !this.alphaNumPatternWithSpace.test(field);
}

isEmpty(field: any) {
  if (field === undefined || field === "" || field === null ) {
    return true;
  } else {
    return false;
  }
} 

isInvalidLength(field: any, minLength, maxLength) {
  if (minLength !== undefined && maxLength !== undefined) {
    if (field.length < minLength || field.length > maxLength) {
      return true
    } else {
      return false;
    }
  } else if (minLength !== undefined && maxLength === undefined) {
    if (field.length < minLength) {
      return true
    } else {
      return false;
    }
  } else if (field.length > maxLength) {
    return true
  } else {
      return false;
  }
}

  isInvalidPassword(password, min, max) {
    if (password.length < min || password.length > max || !password.match(this.pwdPattern)) {
      return true;
    }
    else {
    return false;
    }
}
  
  isInvalidEmailId(emailId) {
    return !this.emailIdPattern.test(emailId);
  }

  isObject(obj: any) {
    return obj !== null && typeof obj === 'object';
  }

  isUndefined(obj: any) {
    return typeof obj === "undefined";
  }

  isDefined(obj: any) {
    return typeof obj !== "undefined";
  }

  isFunction(method: any): method is Function {
    return typeof method === 'function';
  }

  isString(value: string): value is string {
    return typeof value === 'string';
  }

  isInteger(value: number): value is number {
    return this.isNumber(value) && Math.floor(value) === value;
  }

  isNumber(value: number): value is number {
    return typeof value === 'number' && isFinite(value);
  }

  isUndefinedOrEmptyString(data: string) {
    return (this.isUndefined(data) || data === '');
  }

  isUndefinedOrEmptyObject(data: Object) {
    return (this.isUndefined(data) || Object.keys(data).length === 0);
  }

  isArray(data: any): boolean {
    return Array.isArray(data) || data instanceof Array; 
  }

  isUndefinedOrNull(data: any) {
    return (this.isUndefined(data) || data === null);
  }

  public convertStringToBoolean(data: string): boolean {
    return data.toLowerCase() === "true" || data.toLowerCase() === "y";
  }


}
