import { FinancialTerm } from '../../components/financial-term';

export interface IndustryPageData {
	title: string;
	summary: FinancialTerm[];
	topics: FinancialTerm[];
}

export const industryPages: Record<string, IndustryPageData> = {
	'ic-design': {
		title: 'IC 設計',
		summary: [
			{ title: '產品組合', description: '觀察各類晶片產品的營收占比，以及產品世代更替對平均售價與毛利率的影響。' },
			{ title: '研發投入', description: '留意研發費用、工程人力與新產品時程，評估持續推出產品的能力。' },
			{ title: '市場需求', description: '搭配主要客戶需求與訂單變化，了解晶片市場景氣對營運的影響。' },
		],
		topics: [
			{ title: '產品組合', description: '觀察各類晶片產品的營收占比，以及產品世代更替對平均售價與毛利率的影響。' },
			{ title: '研發投入', description: '留意研發費用、工程人力與新產品時程，評估持續推出產品的能力。' },
			{ title: '客戶集中度', description: '檢視主要客戶的營收比重與需求變化，了解訂單集中可能帶來的波動。' },
		],
	},
	'physical-retail': {
		title: '實體通路',
		summary: [
			{ title: '同店營收', description: '比較既有門市在相同期間的銷售變化，排除新開店數量造成的影響。' },
			{ title: '存貨效率', description: '觀察商品周轉速度與庫存水位，並留意滯銷品和折扣對毛利的影響。' },
			{ title: '展店品質', description: '比較新店投資、開店速度與回收表現，判斷擴張是否帶來有效成長。' },
		],
		topics: [
			{ title: '同店營收', description: '比較既有門市在相同期間的銷售變化，排除新開店數量造成的影響。' },
			{ title: '存貨周轉', description: '觀察商品從進貨到售出的速度，並留意滯銷品與折扣對毛利的影響。' },
			{ title: '展店效率', description: '比較新店投資、開店速度與回收表現，判斷擴張是否帶來有效成長。' },
		],
	},
	'chain-restaurants': {
		title: '連鎖餐飲',
		summary: [
			{ title: '營收動能', description: '拆解營收變化來自門市數、消費人次或客單價，了解促銷和菜單調整的效果。' },
			{ title: '營運成本', description: '觀察食材、人力與租金成本占營收的比例，評估成本變動對獲利的影響。' },
			{ title: '營運模式', description: '比較加盟和直營門市的收入來源、資本需求與管理方式。' },
		],
		topics: [
			{ title: '客單價與來客數', description: '拆解營收變化來自消費人次或每筆消費金額，了解促銷和菜單調整的效果。' },
			{ title: '食材與人力成本', description: '觀察主要原物料、人力成本和營收的比例，評估成本變動對店舖獲利的影響。' },
			{ title: '加盟與直營', description: '比較加盟和直營門市的收入來源、資本需求與管理方式。' },
		],
	},
	'biotechnology-and-healthcare': {
		title: '生技醫療',
		summary: [
			{ title: '研發管線', description: '依產品階段整理候選藥物或醫材的進度，留意各階段的成功風險與時間。' },
			{ title: '臨床與取證', description: '追蹤試驗、審查和上市時程，這些里程碑可能影響後續商業化規劃。' },
			{ title: '資金運用', description: '比較研發支出、營業現金流與可用資金，了解持續推進產品所需的資金彈性。' },
		],
		topics: [
			{ title: '研發管線', description: '依產品階段整理候選藥物或醫材的進度，留意各階段的成功風險與時間。' },
			{ title: '臨床與取證進度', description: '追蹤試驗、審查和上市時程，這些里程碑可能影響後續商業化規劃。' },
			{ title: '營運資金', description: '比較研發支出、營業現金流與可用資金，了解持續推進產品所需的資金彈性。' },
		],
	},
	banking: {
		title: '銀行',
		summary: [
			{ title: '利差與收入', description: '觀察資金運用收益與資金成本的差距，以及利率環境對利息收入的影響。' },
			{ title: '資產品質', description: '檢視逾期或可能無法收回的放款占比，搭配備抵呆帳評估授信風險。' },
			{ title: '資本狀況', description: '了解資本相對於風險性資產的緩衝程度，觀察承受損失與支持業務的能力。' },
		],
		topics: [
			{ title: '淨利差', description: '觀察資金運用收益與資金成本的差距，以及利率環境對利息收入的影響。' },
			{ title: '逾期放款比率', description: '檢視逾期或可能無法收回的放款占比，搭配備抵呆帳評估授信風險。' },
			{ title: '資本適足性', description: '了解資本相對於風險性資產的緩衝程度，觀察承受損失與支持業務的能力。' },
		],
	},
	'life-insurance': {
		title: '壽險',
		summary: [
			{ title: '新契約價值', description: '觀察新承保業務預期創造的價值，解讀時需留意假設和產品組合。' },
			{ title: '投資收益', description: '觀察投資資產的收益與市場變化，並考量資產報酬和保單負債成本的配合。' },
			{ title: '資本與清償能力', description: '檢視資本是否足以支應保險責任和市場風險，留意制度及利率變動的影響。' },
		],
		topics: [
			{ title: '新契約價值', description: '用來觀察新承保業務預期創造的價值，解讀時需留意假設和產品組合。' },
			{ title: '投資收益', description: '觀察投資資產的收益與市場變化，並考量資產報酬和保單負債成本的配合。' },
			{ title: '資本與清償能力', description: '檢視資本是否足以支應保險責任和市場風險，留意制度及利率變動的影響。' },
		],
	},
};
