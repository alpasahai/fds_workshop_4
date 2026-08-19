export interface Loginrequest {
    email:string;
    pwd:string;
    userId:string|null;
}

export interface LoginResponse {
  //Updating to accomodate with Week 5
  message: string;
  valid: boolean;
  username?: string;
  birthdate?: string;
  age?: number;
  email?: string;
}
