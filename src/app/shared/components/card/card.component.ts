import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [class]="getCardClasses()">
      <ng-content></ng-content>
    </div>
  `,
  styles: []
})
export class CardComponent {
  @Input() hover = false;
  @Input() padding: 'none' | 'sm' | 'md' | 'lg' = 'md';

  getCardClasses(): string {
    const baseClasses = 'bg-white rounded-lg shadow-md';
    const hoverClass = this.hover ? 'hover:shadow-xl transition cursor-pointer' : '';
    
    const paddingClasses = {
      none: '',
      sm: 'p-2',
      md: 'p-4',
      lg: 'p-6'
    };
    
    return `${baseClasses} ${hoverClass} ${paddingClasses[this.padding]}`;
  }
}

