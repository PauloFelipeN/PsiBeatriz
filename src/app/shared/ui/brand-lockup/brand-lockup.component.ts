import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-brand-lockup',
  template: `<a class="brand" href="#inicio" aria-label="Graça Beatriz, página inicial"><img src="assets/brand/logo-gb-horizontal.svg" width="440" height="120" alt="Graça Beatriz, Psicóloga" /></a>`,
  styleUrl: './brand-lockup.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BrandLockupComponent {}
