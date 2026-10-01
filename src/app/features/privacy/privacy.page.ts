import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BrandLockupComponent } from '../../shared/ui/brand-lockup/brand-lockup.component';

@Component({
  selector: 'app-privacy-page',
  imports: [BrandLockupComponent, RouterLink],
  template: `<header class="privacy-header"><div class="container"><app-brand-lockup /></div></header><main class="privacy section"><div class="container"><p class="eyebrow">Informações legais</p><h1>Política de Privacidade</h1><p>Este site institucional não possui formulários nem realiza cadastro de visitantes. O contato para atendimento é iniciado voluntariamente pela visitante por meio do WhatsApp.</p><p>Ao escolher iniciar uma conversa, o tratamento das informações compartilhadas no WhatsApp segue as políticas da própria plataforma. Nenhuma informação de saúde deve ser enviada por este site.</p><a routerLink="/" fragment="inicio">Voltar para a página inicial</a></div></main>`,
  styleUrl: './privacy.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PrivacyPage {}
