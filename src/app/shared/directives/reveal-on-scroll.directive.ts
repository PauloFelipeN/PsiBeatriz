import { AfterViewInit, Directive, ElementRef, NgZone, OnDestroy, Renderer2, inject } from '@angular/core';

/** Lightweight reveal effect; motion is disabled entirely when the user requests it. */
@Directive({ selector: '[appReveal]' })
export class RevealOnScrollDirective implements AfterViewInit, OnDestroy {
  private readonly element = inject(ElementRef<HTMLElement>);
  private readonly renderer = inject(Renderer2);
  private readonly zone = inject(NgZone);
  private observer?: IntersectionObserver;

  ngAfterViewInit(): void {
    if (typeof window === 'undefined' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    this.renderer.addClass(this.element.nativeElement, 'reveal');
    this.zone.runOutsideAngular(() => {
      this.observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          this.renderer.addClass(this.element.nativeElement, 'reveal--visible');
          this.observer?.disconnect();
        }
      }, { threshold: .08 });
      this.observer.observe(this.element.nativeElement);
    });
  }

  ngOnDestroy(): void { this.observer?.disconnect(); }
}
