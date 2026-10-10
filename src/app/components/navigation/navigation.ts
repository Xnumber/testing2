import { isPlatformBrowser } from '@angular/common';
import { Component, PLATFORM_ID, signal, inject } from '@angular/core';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { routes } from '../../app.routes';
import { toSignal } from '@angular/core/rxjs-interop';
import { filter, map, startWith } from 'rxjs';

interface NavigationItem {
  label: string;
  path: string;
}

@Component({
  imports: [RouterLink, RouterLinkActive],
  selector: 'app-navigation',
  styleUrl: './navigation.css',
  templateUrl: './navigation.html',
  host: {
    '[class.navigation-host--collapsed]': 'collapsed()',
  },
})
export class Navigation {
  protected readonly items: NavigationItem[] = routes
    .filter((route) => route.path && typeof route.title === 'string')
    .map((route) => ({
      label: route.title as string,
      path: route.path as string,
    }));
  protected readonly collapsed = signal(false);
  private readonly router = inject(Router);
  private readonly platformId = inject(PLATFORM_ID);
  protected readonly currentRouteIndex = toSignal(
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd),
      map(() => this.findCurrentRouteIndex()),
      startWith(this.findCurrentRouteIndex()),
    ),
    { initialValue: this.findCurrentRouteIndex() },
  );

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      this.collapsed.set(window.innerWidth <= 760);
    }
  }

  protected toggle(): void {
    this.collapsed.update((isCollapsed) => !isCollapsed);
  }

  protected canNavigate(direction: -1 | 1): boolean {
    const nextIndex = this.currentRouteIndex() + direction;
    return nextIndex >= 0 && nextIndex < this.items.length;
  }

  protected navigateRoute(direction: -1 | 1): void {
    const nextIndex = this.currentRouteIndex() + direction;
    const nextItem = this.items[nextIndex];

    if (nextItem) {
      void this.router.navigateByUrl(`/${nextItem.path}`);
    }
  }

  private findCurrentRouteIndex(): number {
    const currentPath = this.router.url.split(/[?#]/, 1)[0].replace(/^\/+|\/+$/g, '');
    const routeIndex = this.items.findIndex((item) => item.path === currentPath);
    return routeIndex < 0 ? 0 : routeIndex;
  }
}
