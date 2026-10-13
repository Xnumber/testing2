import { FinancialTerm } from '../../components/financial-term';

export interface FinancialReportPageData {
	title: string;
	summary: FinancialTerm[];
}

export const financialReportPages: Record<string, FinancialReportPageData> = {
	"cash-flow": {
		title: '現金流量表',
		summary: [
			{ title: '分類項目', description: '午後光線落在緩慢流動的色塊上，串起分散的參考訊息。' },
			{ title: '數字變化', description: '相鄰欄位以不同節拍切換，記錄一組尚待解讀的示意資料。' },
			{ title: '補充觀察', description: '遠方傳來微弱回聲，提示這裡仍有新的內容可以填入。' },
		],
	},
	"balance-sheet": {
		title: '結構性獲利能力',
		summary: [
			{ title: '分類項目', description: '霧藍色標記映照紙頁邊緣，數個片語按照各自的節奏排列。' },
			{ title: '數字變化', description: '山脊線條延伸至遠方，途中交會幾個尚未命名的資料節點。' },
			{ title: '補充觀察', description: '留白與符號相互呼應，暫時保留後續補充說明的空間。' },
		],
	},
	cs: {
		title: '經營品質',
		summary: [
			{ title: '分類項目', description: '青岑資料沿著星圖排列，遠岸訊息在薄霧之中逐步展開。' },
			{ title: '數字變化', description: '循環線索與靜態標記彼此交錯，形成一段尚待補上的描述。' },
			{ title: '補充觀察', description: '微光穿過層疊片段，留下可供日後整理的參考位置。' },
		],
	},
	overview: {
		title: '負債比',
		summary: [
			{ title: '分類項目', description: '銀白色線條穿過藍綠色方格，連接幾個彼此獨立的段落。' },
			{ title: '數字變化', description: '小徑在轉角處分岔，沿線分布著不同形式的文字與標記。' },
			{ title: '補充觀察', description: '這份示意內容先保留彈性，之後可替換為正式解讀資料。' },
		],
	},
	"real-value": {
		title: '公司的真實價值',
		summary: [
			{ title: '分類項目', description: '銀白色線條穿過藍綠色方格，連接幾個彼此獨立的段落。' },
			{ title: '數字變化', description: '小徑在轉角處分岔，沿線分布著不同形式的文字與標記。' },
			{ title: '補充觀察', description: '這份示意內容先保留彈性，之後可替換為正式解讀資料。' },
		],
	},
};
