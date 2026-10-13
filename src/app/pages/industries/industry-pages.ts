export interface IndustryPageTerm {
	title: string;
	description: string[];
}


export interface IndustryPageData {
	title: string;
	summary: IndustryPageTerm[];
	topics: IndustryPageTerm[];
}

export const industryPages: Record<string, IndustryPageData> = {
	'electronic-assembly': {
		title: '電子組裝',
		summary: [
			{
				title: '廠商', 
				description: [
					'鴻海',
					'和碩',
					'廣達',
					'仁寶',
					'緯創'
				]
			},
			{
				title: '資產負債表', 
				description: [
					'應收帳款及存貨金額驚人',
					'現金金龐大',
					'流動資產遠大於非流動資產 (現金、應收、存貨) ',
					'負債比偏高 (應收付)'
				]
			},
			{
				title: '損益表', description: [
					'營收很大 (高單價, 2019 3家破兆)',
					'毛利率偏低 (利用供應商互相制約，2019: 3.3%~5.9%)',
					'營業費用很低 (B2B，管銷低, 2019 鴻海 4%)',
					'投資及理財收益多'
				]
			},
		],
		topics: [
		],
	},
	'ic-design': {
		title: 'IC 設計',
		summary: [
			{
				title: '廠商', 
				description: [
					'聯發科',
					'聯詠',
					'瑞昱'
				]
			},
			{
				title: '資產負債表', 
				description: [
					'不動產、廠房及設備, 使用權資產比重低 (2019, 三家7%~9%, 台積電 61%)',
					'現金及長短期投資多',
					'存貨是罩門',
					'無形資產高 (合併、買入專利。 p56)',
					'負債率比低 (錢多、設備少。2019 聯發科: 32%)'
				]
			},
			{
				title: '損益表', description: [
					'毛利率高 (30%~70%)',
					'研發費用高 (ic進步快)',
					'獲利變動大 (產業變化快)'
				]
			}
		],
		topics: [],
	},
	'physical-retail-convenience-stores': {
		title: '實體通路 - 便利商店',
		summary: [
			{
				title: '資產負債表', 
				description: [
					'幾乎沒有應收票據與帳款 (通常不能賒帳)',
					'存貨週轉天數搭多維持在20~30天之間 (連鎖業者的倉庫)',
					'使用權資產及租賃負債金額驚人 (租期租金、使用權資產)',
					'其他應付偏高 (代收)',
					'流動比率偏低 (2019 統一超: 48%, 全家: 59%。對供應商，先收後付。不對消費者賒帳。業務穩定。)',
					'負債比率偏高 (使用權資產、租賃負債。)'
				]
			},
			{
				title: '損益表', 
				description: [
					'毛利率超級穩定',
					'極高推銷費用率 (店租、店員、水電)',
					'很低的營益率 (2019 統一超: 4.5%, 全家: 2.5%)',
					'投資利益大',
					'稅後淨利率不高但獲利驚人'
				]
			}
		],
		topics: [],
	},
	'physical-retail-specific-chains': {
		title: '實體通路 - 特定商品連鎖',
		summary: [
			{
				title: '資產負債表', 
				description: [
					'應收票據與帳款金額很小',
					'存貨金額及比重高 (2019 全國電子: 61%)',
					'使用權資產及租賃負債金額驚人',
					'流動比率高低依產業而定 (香水、LVMH、鞋，存貨週轉天數不同)',
					'負債比率高低依商業模式而定'
				]
			},
			{
				title: '損益表', 
				description: [
					'毛利率穩定',
					'穩定推銷費用率',
					'很低的營益率',
					'投資利益大',
					'稅後淨利率不高但獲利驚人'
				]
			}
		],
		topics: [],
	},

	'chain-restaurants': {
		title: '連鎖餐飲 - 直營店',
		summary: [
			{
				title: '營收動能', 
				description: [
					'不多的應收帳款',
					'存貨週轉天數最好低於1個月',
					'不動產、廠房及設備占比與傳統製造業相似',
					'使用權資產及租賃負債金額龐大',
					'流動比率不宜過低',
					'負債比率高'
				]
			},
			{
				title: '損益表', 
				description: [
					'毛利率依價格而定',
					'推銷費用率依精緻度而定',
					'管理費用率很高'
				]
			}
		],
		topics: [
			
		],
	},
	'chain-restaurants-franchise': {
		title: '連鎖餐飲 - 加盟店',
		summary: [
			{
				title: '資產負債表', 
				description: [
					'不多的應收帳款',
					'存貨不宜過高',
					'不動產、廠房及設備金額依食材複雜度而定',
					'使用權資產沒有或很低',
					'因營運需要而有其他應收款',
					'因營運需要而有其他預付款',
					'流動資產比率不宜過低',
					'負債比率遠比直營店低'
				]
			},
			{
				title: '損益表', 
				description: [
					'反推式的毛利率',
					'推銷費用率差異相當大',
					'管理費用率不低',
					'營業利益率差異大'
				]
			}
		],
		topics: [
			
		],
	},
	'biotechnology-and-healthcare-pharmaceuticals-research': {
		title: '生技醫療 - 藥品研發',
		summary: [
			{
				title: '看現今還能稍多久', 
				description: [
					'看現金與約當現金多寡',
					'可變現金融資產'
				]
			},
			{
				title: '研發案少成敗賭注大', 
				description: []
			}
		],
		topics: [],
	},
	'biotechnology-and-healthcare-pharmaceuticals': {
		title: '生技醫療 - 藥品製造銷售',
		summary: [
			{
				title: '資產負債表', 
				description: [
					'與製造業相似',
					'主要為不動產、廠房及設備、使用權資產、應收帳款'
				]
			},
			{
				title: '損益表', 
				description: [
					'高毛利',
					'高推銷'
				]
			}
		],
		topics: [],
	},
	'biotechnology-and-healthcare-medical-devices': {
		title: '生技醫療 - 醫材',
		summary: [
			{
				title: '資產負債表', 
				description: [
					'與傳統製造業相似',
					'大部分就是製造業'
				]
			},
			{
				title: '損益表', 
				description: [
					'推銷非用率較低',
					'若發展自有品牌，毛利率和推銷率較高'
				]
			}
		],
		topics: [],
	},
	banking: {
		title: '銀行',
		summary: [
			{
				title: '資產負債表', description: [
					'最大資金來源存款、借款',
					'最大科目存款與匯款，大部分75%以上',
					'其他: 公司債、同業拆借'
				]
			},
			{
				title: '資產', description: [
					'放款及存放同業',
					'投資與市場操作',
				]
			},
			{
				title: '資產 - 放款及存放同業', 
				description: [
					'貼現及放款 - 通常最大',
					'存放央行即拆借銀行同業'
				]
			},
			{
				title: '資產 - 現金及約當現金', 
				description: [
					'貼現及放款 - 通常最大',
					'存放央行即拆借銀行同業'
				]
			},
			{
				title: '資產 - 投資及市場操作面', 
				description: [
					'按攤銷後成本衡量之債務工具投資 (債券、定存單，不應隨意賣出，價格變化不計入正式損益)',
					'透過其他綜合損益按公允價值衡量之金融資產 (特定條件下的股債等，未賣出不計正式損益 P156)',
					'透過損益按公允價值衡量之金融資產 (股債等，未賣出仍計入正式損益)',
					'附賣回票券及債券投資'
				]
			},
			{
				title: '損益表',
				description: [
					'利息淨收益',
					'手續費淨收益',
					'透過損益按公允價值衡量之金融資產及負債損益',
					'透過其他綜合損益按公允價值衡量之金融資產已實現利益'
				]
			},
			{
				title: '經營績效',
				description: [
					'成本收益比',
					'逾放比',
					'ROE',
					'ROA',
					'更真實損益了解: 透過其他綜合損益按公允價值衡量之金融資產已實現利益, 透過其他綜合損益按公允價值衡量之金融資產的未實現利益'
				]
			}
		],
		topics: [
			
		],
	},
	'life-insurance': {
		title: '壽險',
		summary: [
			{
				title: '資產負債表 - 負債', 
				description: [
					'吸收保險',
					'吸收投資型保單',
					'發行債券'
				]
			},
			{
				title: '資產負債表 - 資產', 
				description: [
					'透過損益按公允價值衡量之金融資產 (股債等，理論上不賣出也計評價損益)',
					'透過其他綜合損益按公允價值衡量之金融資產 (股債等)',
					'按攤銷後成本衡量之金融資產 (不應隨意處分之債券，通常不將變動計入損益表)',
					'投資性不動產',
					'放款'
				]
			},
			{
				title: '損益表', 
				description: [
					'長期投資獲利為重',
					'保險相關收入',
					'利息收入',
					'透過損益按公允價值衡量之金融資產及負債損益 (賣不賣都算正式損益)',
					'透過其他綜合損益按公允價值衡量之金融資產已實現利益 (不賣不算正式損益)',
					'兌換損益',
					'採用覆蓋法重分類之損益 (壽險業獨有，透過損益按公允價值衡量之金融資產及負債損益，評價損益不用放到正式損益，p207)',
					'分離帳戶保險商品收益',
					'保險成本',
					'其他綜合損益'
				]
			},
		],
		topics: [],
	},
};
