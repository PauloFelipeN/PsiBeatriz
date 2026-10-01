import { Injectable } from '@angular/core';
import { contactConfig } from '../config/contact.config';

/** Centraliza a criação de links de conversa para todos os pontos de contato. */
@Injectable({ providedIn: 'root' })
export class WhatsappService {
  readonly number = contactConfig.number;
  readonly message = contactConfig.defaultMessage;
  readonly baseUrl = contactConfig.baseUrl;

  createLink(message = this.message): string {
    const encodedMessage = encodeURIComponent(message);
    const destination = this.number ? `/${this.number}` : '/';

    return `${this.baseUrl}${destination}?text=${encodedMessage}`;
  }
}
