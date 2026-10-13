import { CanActivateFn, Routes } from '@angular/router';
import { map, timer } from 'rxjs';
import { Home } from './pages/home/home';
import { Introducing } from './pages/introducing/introducing';
import { Overview } from './pages/overview/overview';
import { Industries } from './pages/industries/industries';
import { IndustryDetail } from './pages/industries/industry-detail/industry-detail';
import { industryPages } from './pages/industries/industry-pages';
import { FinancialReports } from './pages/financial-reports/financial-reports';
import { ComprehensiveComparison } from './pages/comprehensive-comparison/comprehensive-comparison';

const waitBeforeNavigation: CanActivateFn = () =>
	timer(0).pipe(map(() => true));

const industryDetailRoutes: Routes = Object.entries(industryPages).map(([path, page]) => ({
	path,
	component: IndustryDetail,
	canActivate: [waitBeforeNavigation],
	title: page.title,
	data: { topics: page.topics },
}));

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
		path: 'introducing', 
		component: Introducing, 
		canActivate: [waitBeforeNavigation],
		title: '財務名詞' 
	},
	{ 
		path: 'industries', 
		component: Industries, 
		canActivate: [waitBeforeNavigation],
		title: '產業簡介' 
	},
	{
		path: 'financial-reports',
		component: FinancialReports,
		canActivate: [waitBeforeNavigation],
		title: '財報解讀',
	},
	{
		path: 'comprehensive-comparison',
		component: ComprehensiveComparison,
		canActivate: [waitBeforeNavigation],
		title: '綜合解讀'
	},
	{
		path: 'overview',
		component: Overview,
		canActivate: [waitBeforeNavigation],
		title: '參考',
	}
	// ...industryDetailRoutes,
];
