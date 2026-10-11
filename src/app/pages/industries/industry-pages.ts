import { FinancialTerm } from '../../components/financial-term';

export interface IndustryPageData {
	title: string;
	summary: string;
	topics: FinancialTerm[];
}

export const industryPages: Record<string, IndustryPageData> = {
	'ic-design': {
		title: 'IC 設計',
		summary: '以晶片架構、產品設計與研發為核心，常見觀察面向包括產品組合、研發投入和市場需求。',
		topics: [
			{ title: '產品組合', description: '觀察各類晶片產品的營收占比，以及產品世代更替對平均售價與毛利率的影響。' },
			{ title: '研發投入', description: '留意研發費用、工程人力與新產品時程，評估持續推出產品的能力。' },
			{ title: '客戶集中度', description: '檢視主要客戶的營收比重與需求變化，了解訂單集中可能帶來的波動。' },
		],
	},
	'physical-retail': {
		title: '實體通路',
		summary: '以門市銷售和商品周轉為主，可從同店營收、存貨效率及展店品質理解營運。',
		topics: [
			{ title: '同店營收', description: '比較既有門市在相同期間的銷售變化，排除新開店數量造成的影響。' },
			{ title: '存貨周轉', description: '觀察商品從進貨到售出的速度，並留意滯銷品與折扣對毛利的影響。' },
			{ title: '展店效率', description: '比較新店投資、開店速度與回收表現，判斷擴張是否帶來有效成長。' },
		],
	},
	'chain-restaurants': {
		title: '連鎖餐飲',
		summary: '營收受門市數、來客與客單價影響，成本端則需留意食材、人力和租金。',
		topics: [
			{ title: '客單價與來客數', description: '拆解營收變化來自消費人次或每筆消費金額，了解促銷和菜單調整的效果。' },
			{ title: '食材與人力成本', description: '觀察主要原物料、人力成本和營收的比例，評估成本變動對店舖獲利的影響。' },
			{ title: '加盟與直營', description: '比較加盟和直營門市的收入來源、資本需求與管理方式。' },
		],
	},
	'biotechnology-and-healthcare': {
		title: '生技醫療',
		summary: '產品開發週期長且投入需求高，可追蹤研發管線、臨床進度和資金運用。',
		topics: [
			{ title: '研發管線', description: '依產品階段整理候選藥物或醫材的進度，留意各階段的成功風險與時間。' },
			{ title: '臨床與取證進度', description: '追蹤試驗、審查和上市時程，這些里程碑可能影響後續商業化規劃。' },
			{ title: '營運資金', description: '比較研發支出、營業現金流與可用資金，了解持續推進產品所需的資金彈性。' },
		],
	},
	banking: {
		title: '銀行',
		summary: '以存放款、利差與金融服務為主要觀察面向，資產品質和資本也相當重要。',
		topics: [
			{ title: '淨利差', description: '觀察資金運用收益與資金成本的差距，以及利率環境對利息收入的影響。' },
			{ title: '逾期放款比率', description: '檢視逾期或可能無法收回的放款占比，搭配備抵呆帳評估授信風險。' },
			{ title: '資本適足性', description: '了解資本相對於風險性資產的緩衝程度，觀察承受損失與支持業務的能力。' },
		],
	},
	'life-insurance': {
		title: '壽險',
		summary: '透過保費收入與長期資產配置經營保險保障，需一併考量負債和資本狀況。',
		topics: [
			{ title: '新契約價值', description: '用來觀察新承保業務預期創造的價值，解讀時需留意假設和產品組合。' },
			{ title: '投資收益', description: '觀察投資資產的收益與市場變化，並考量資產報酬和保單負債成本的配合。' },
			{ title: '資本與清償能力', description: '檢視資本是否足以支應保險責任和市場風險，留意制度及利率變動的影響。' },
		],
	},
};
