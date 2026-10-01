import { ChangeDetectionStrategy, Component, isDevMode, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SiteHeaderComponent } from '../../shared/ui/site-header/site-header.component';
import { WhatsappCtaComponent } from '../../shared/ui/whatsapp-cta/whatsapp-cta.component';
import { WhatsappFloatComponent } from '../../shared/ui/whatsapp-float/whatsapp-float.component';
import { RevealOnScrollDirective } from '../../shared/directives/reveal-on-scroll.directive';

interface FaqItem { question: string; answer: string; }

@Component({
  selector: 'app-home-page',
  imports: [SiteHeaderComponent, WhatsappCtaComponent, WhatsappFloatComponent, RevealOnScrollDirective, RouterLink],
  templateUrl: './home.page.html',
  styleUrl: './home.page.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage {
  protected readonly currentYear = new Date().getFullYear();
  protected readonly isDevelopment = isDevMode();
  protected readonly openFaq = signal<number | null>(null);

  protected readonly concerns = [
    'Ansiedade e pensamentos excessivos', 'Dificuldade para estabelecer limites',
    'Autocobrança e perfeccionismo', 'Insegurança e baixa autoestima',
    'Dificuldades nos relacionamentos', 'Sobrecarga emocional',
    'Dificuldade para compreender as próprias emoções', 'Momentos de mudança e tomada de decisões',
  ];

  protected readonly faqItems: FaqItem[] = [
    { question: 'Como funciona a terapia online?', answer: 'O atendimento é realizado em um ambiente virtual seguro. Para conhecer os detalhes e verificar se esse formato faz sentido para você, entre em contato pelo WhatsApp.' },
    { question: 'Quanto tempo dura uma sessão?', answer: 'A duração é informada no primeiro contato, de acordo com a organização do atendimento.' },
    { question: 'Como funciona a primeira sessão?', answer: 'É um primeiro encontro para conhecer sua história, compreender suas necessidades e conversar sobre seus objetivos.' },
    { question: 'A terapia é somente para mulheres?', answer: 'Sim. O atendimento psicológico de Graça Beatriz é exclusivo para mulheres.' },
    { question: 'Como saber se preciso fazer terapia?', answer: 'Você não precisa ter todas as respostas para buscar um espaço de escuta. Se sente que gostaria de olhar com mais cuidado para o que está vivendo, podemos conversar.' },
    { question: 'Qual o valor da sessão?', answer: 'Para receber informações atualizadas sobre valores e disponibilidade, entre em contato pelo WhatsApp.' },
    { question: 'Como faço para agendar?', answer: 'Clique em “Agendar conversa” ou em qualquer botão de contato desta página para iniciar a conversa pelo WhatsApp.' },
  ];

  protected toggleFaq(index: number): void {
    this.openFaq.update((current) => current === index ? null : index);
  }
}
