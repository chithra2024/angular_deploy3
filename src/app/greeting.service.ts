import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GreetingService {

  getGreeting(): string {
    return 'Hello from GreetingService!';
  }
}
