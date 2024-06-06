export type RegistrationForm = {
  name: string;
  surname: string;
  email: string;
  password: string;
  rePassword: string;
};

export interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  repassword: string;
}
