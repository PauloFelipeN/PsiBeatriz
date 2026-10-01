import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { WhatsappService } from '../../../core/services/whatsapp.service';

@Component({
  selector: 'app-whatsapp-float',
  template: `
    <a class="whatsapp-float" [href]="whatsappUrl" target="_blank" rel="noopener noreferrer" aria-label="Fale comigo pelo WhatsApp, abre em nova aba">
      <svg aria-hidden="true" viewBox="0 0 32 32" focusable="false"><path d="M16 3.25a12.4 12.4 0 0 0-10.65 18.75L4 28l6.17-1.3A12.4 12.4 0 1 0 16 3.25Zm0 22.78c-1.85 0-3.67-.5-5.25-1.43l-.38-.22-3.66.77.8-3.56-.25-.37a9.82 9.82 0 1 1 8.74 4.81Zm5.38-7.35c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07a8.08 8.08 0 0 1-2.37-1.46 8.9 8.9 0 0 1-1.64-2.04c-.17-.3-.02-.46.13-.6.14-.14.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.57-.49-.5-.67-.51h-.57c-.2 0-.52.08-.8.37-.27.3-1.04 1.02-1.04 2.47s1.07 2.86 1.22 3.06c.15.2 2.1 3.2 5.08 4.5.71.3 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.08 1.76-.72 2.01-1.42.25-.69.25-1.29.17-1.42-.07-.12-.27-.2-.57-.34Z" fill="currentColor"/></svg>
      <span>Fale comigo</span>
    </a>
  `,
  styleUrl: './whatsapp-float.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WhatsappFloatComponent {
  private readonly whatsapp = inject(WhatsappService);
  protected readonly whatsappUrl = this.whatsapp.createLink();
}
