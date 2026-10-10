import { CanActivateFn, Routes } from '@angular/router';
import { map, timer } from 'rxjs';
import { Home } from './pages/home/home';
import { Introducing } from './pages/introducing/introducing';
import { Overview } from './pages/overview/overview';

const waitBeforeNavigation: CanActivateFn = () =>
	timer(0).pipe(map(() => true));

export const routes: Routes = [
	{
		path: '',
		redirectTo: 'home',
		pathMatch: 'full',
		title: '首頁'
	},
	{
		path: 'home',
		component: Home,
		canActivate: [waitBeforeNavigation],
		title: '首頁'
	},
	{
		path: 'overview',
		component: Overview,
		canActivate: [waitBeforeNavigation],
		title: '總覽',
	},
	{ 
		path: 'introducing', 
		component: Introducing, 
		canActivate: [waitBeforeNavigation],
		title: '相關名詞說明' 
	},
];
