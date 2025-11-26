import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div *ngIf="isOpen" 
         (click)="onBackdropClick()"
         class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div (click)="$event.stopPropagation()" 
           class="bg-white rounded-lg p-8 max-w-md w-full mx-4 shadow-xl">
        <div class="flex justify-between items-center mb-4">
          <h2 *ngIf="title" class="text-2xl font-bold text-gray-800">{{ title }}</h2>
          <button 
            (click)="close()"
            class="text-gray-400 hover:text-gray-600 text-2xl"
          >
            ×
          </button>
        </div>
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styles: []
})
export class ModalComponent {
  @Input() isOpen = false;
  @Input() title = '';
  @Input() closeOnBackdrop = true;
  @Output() closeModal = new EventEmitter<void>();

  close() {
    this.isOpen = false;
    this.closeModal.emit();
  }

  onBackdropClick() {
    if (this.closeOnBackdrop) {
      this.close();
    }
  }
}

