import { ChangeDetectionStrategy, ChangeDetectorRef, Component, NgZone } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  overlayIsOpen = false;

  constructor(
    private readonly changeDetectorRef: ChangeDetectorRef
  ) {
  }

  handleTriggerClick() {
    this.overlayIsOpen = true;
  }

  handleBackdropClick() {
    this.overlayIsOpen = false;
    // this.changeDetectorRef.markForCheck();
  }
}
