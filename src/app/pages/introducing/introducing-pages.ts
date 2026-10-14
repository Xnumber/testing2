import { FinancialTerm } from '../../components/financial-term';

export interface IntroducingPageData {
	title: string;
	summary: FinancialTerm[];
}

export const introducingPages: Record<string, IntroducingPageData> = {
	// profitability: {
	// 	title: '毛利率',
	// 	summary: [
	// 		{ title: '毛利率', description: '毛利佔營收的比例，反映企業在扣除直接成本後的獲利能力。' },
	// 		{
	// 			title: '營業利益率', description: '營業利益=營業收入-營業成本-營業費用，營業利益率=營業利益/營業收入' },
	// 		{ title: '推銷費用率', description: '推銷費用占營收的比例，可觀察企業為促成銷售投入的成本及其變化，並需搭配營收成長與產業特性判讀。' },
	// 		{ title: 'ROA', description: '資產報酬率，衡量企業運用全部資產創造獲利的能力。通常以稅後淨利除以平均總資產計算。' },
	// 		{ title: 'ROE', description: '股東權益報酬率，呈現股東投入的權益資本為企業帶來多少獲利。常以稅後淨利除以平均股東權益計算。' },
	// 		{ title: 'ROIC', description: '投入資本報酬率，衡量企業運用營運所需資本創造報酬的效率，有助於評估本業投資的成果。' },
	// 	],
	// },
	profitability: {
		title: '獲利能力',
		summary: [
			{ title: '毛利率', description: '營業收入 - 營業成本 / 營業收入。毛利佔營收的比例。' },
			{ title: '營業利益率', description: '營業利益 = 營業收入 - 營業成本 - 營業費用，營業利益率=營業利益/營業收入' },
			// { title: '推銷費用率', description: '推銷費用占營業收入的比例' },
			{ title: 'ROA', description: '資產報酬率，稅後淨利/平均總資產。' },
			{ title: 'ROE', description: '股東權益報酬率，稅後淨利/平均股東權益計算' }
		],
	},
	'financial-structure': {
		title: '財務結構與償債能力',
		summary: [
			{ title: '負債比率', description: '總負債/總資產' },
			{ title: '股東權益', description: '淨值。' },
			{ title: '流動比率', description: '流動資產/流動負債。' },
		],
	},
	efficiency: {
		title: '營運效率',
		summary: [
			{ title: '應收帳款周轉天數', description: '營業收入/平均應收帳款餘額' },
			{ title: '存貨周轉天數', description: '平均存貨/銷貨成本。估算存貨平均在庫多少天才售出。' },
		],
	},
	// 'statements-and-items': {
	// 	title: '報表與會計科目',
	// 	summary: [
	// 		{ title: '資產負債表', description: '呈現特定日期企業的資產、負債與股東權益，是觀察財務結構與償債能力的重要報表。' },
	// 		{ title: '營業費用', description: '企業為銷售商品或提供服務及維持營運所發生的費用，例如銷售、管理與研發費用；可觀察其占營收比重及變化，評估費用控管與營運效率。' },
	// 		{ title: '現金流量表', description: '呈現一段期間現金及約當現金的流入與流出，並分為營業、投資及籌資活動。' },
	// 		{ title: '現金與約當現金', description: '包含庫存現金、活期存款，以及可迅速轉換為已知金額現金且價值變動風險很低的短期投資。' },
	// 		{ title: '無形資產', description: '沒有實體形態、可辨認且由企業控制的非貨幣性資產，例如專利、商標或符合認列條件的軟體。' },
	// 	],
	// },
};
