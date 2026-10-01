import { ChangeDetectionStrategy, Component, HostListener, signal } from '@angular/core';
import { BrandLockupComponent } from '../brand-lockup/brand-lockup.component';
import { WhatsappCtaComponent } from '../whatsapp-cta/whatsapp-cta.component';

@Component({
  selector: 'app-site-header',
  imports: [BrandLockupComponent, WhatsappCtaComponent],
  templateUrl: './site-header.component.html',
  styleUrl: './site-header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiteHeaderComponent {
  protected readonly isMenuOpen = signal(false);
  protected readonly isScrolled = signal(false);
  protected toggleMenu(): void { this.isMenuOpen.update((isOpen) => !isOpen); }
  protected closeMenu(): void { this.isMenuOpen.set(false); }
  @HostListener('window:scroll') protected onWindowScroll(): void { this.isScrolled.set(window.scrollY > 12); }
}
