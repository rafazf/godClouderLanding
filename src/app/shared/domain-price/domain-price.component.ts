import { Component } from '@angular/core';

@Component({
  selector: 'app-domain-price',
  templateUrl: './domain-price.component.html',
  styleUrls: ['./domain-price.component.css']
})
export class DomainPriceComponent {
  isMonthly: boolean = true; // Por defecto, asumimos que está seleccionado "Mensual"

  togglePlanPrice(event: Event): void {
    this.isMonthly = (event.target as HTMLInputElement).checked;
  }
}
