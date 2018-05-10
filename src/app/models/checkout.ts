export class Checkout {
  id: string;
  title: string;
  name: string;
  lastName: string;
  phone: number;
  email: number;
  payment: string;

  load(res: any) {
    if(res.id)
      this.id = res.id;
    
    if(res.title) 
      this.title = res.title;

    if(res.name)
      this.name = res.name;

    if(res.lastName)
      this.lastName = res.lastName;

    if(res.phone)
      this.phone = res.phone;
    
    if(res.email)
      this.email = res.email;

    if(res.payment)
      this.payment = res.payment;
  }
}