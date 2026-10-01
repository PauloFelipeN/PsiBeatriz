import { ChangeDetectionStrategy, Component, inject, input } from '@angular/core';
import { WhatsappService } from '../../../core/services/whatsapp.service';

@Component({
  selector: 'app-whatsapp-cta',
  template: `<a class="cta" [class.cta--quiet]="variant() === 'quiet'" [href]="whatsappUrl" target="_blank" rel="noopener noreferrer" [attr.aria-label]="label() + ': abrir conversa no WhatsApp'"><span class="cta__icon" aria-hidden="true">◔</span>{{ label() }}</a>`,
  styleUrl: './whatsapp-cta.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WhatsappCtaComponent {
  readonly label = input('Conversar pelo WhatsApp');
  readonly variant = input<'primary' | 'quiet'>('primary');
  private readonly whatsapp = inject(WhatsappService);
  protected readonly whatsappUrl = this.whatsapp.createLink();
}
