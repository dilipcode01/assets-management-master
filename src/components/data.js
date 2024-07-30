import NABIcon from "../assets/svg/nabIcon.svg";
import ANZ from "../assets/svg/anzIcon.svg";
import CityBankIcon from "../assets/svg/cityBankIcon.svg";
import bankOfAmericaIcon from "../assets/svg/bankOfAmerica.svg";
import Bendigo from "../assets/svg/bendigoIcon.svg";
import CryptoIcon from "../assets/svg/cryptoIcon.svg";
import ASXIcon from "../assets/svg/asxIcon.svg";
import NYSYIcon from "../assets/svg/nysy.svg";
import AustraliaIcon from "../assets/svg/australia.svg";

export const banks = [
  {
    bankName: "NAB",
    totalAmount: "$6,747,000",
    bankIcon: NABIcon,
    funds: [
      { fundName: "Morgan Supperannuation Fund", amount: "$1,128.000" },
      {
        fundName: "Morgan Global Ventures Inc. ATF  Morgan Fam...",
        amount: "$1,104,000",
      },
      {
        fundName: "T&E Morgan Pty Ltd ATF  Morgan Family Trust...",
        amount: "$1,100,000",
      },
      { fundName: "Global Trading Pty Ltd", amount: "$1,302,000" },
      { fundName: "Global Investments Pty Ltd", amount: "$1,392,000" },
      { fundName: "T&E Morgan (Personal)", amount: "$175,000" },
      { fundName: "J&W Morgan (Personal)", amount: "$360,000" },
      { fundName: "Morgan Charitable Fund", amount: "$186,000" },
    ],
  },
  {
    bankName: "ANZ",
    totalAmount: "$812,000",
    bankIcon: ANZ,
    funds: [
      {
        fundName: "Morgan Global Ventures Inc. ATF  Morgan Fam...",
        amount: "$347,000",
      },
      { fundName: "T&E Morgan (Personal)", amount: "$482,000" },
    ],
  },
  {
    bankName: "Citibank",
    totalAmount: "$248,000",
    bankIcon: CityBankIcon,
    funds: [{ fundName: "J&W Morgan (Personal)", amount: "$248,999" }],
  },
  {
    bankName: "Bank of America",
    totalAmount: "$212,000",
    bankIcon: bankOfAmericaIcon,
    funds: [{ fundName: "J&W Morgan (Personal)", amount: "$212,000" }],
  },
  {
    bankName: "Bendigo",
    totalAmount: "$274,000",
    bankIcon: Bendigo,
    funds: [
      { fundName: "J&W Morgan (Personal)", amount: "$274,00" },
      { fundName: "Fund N", amount: 2500000 },
      { fundName: "Fund O", amount: 1500000 },
    ],
  },
  {
    bankName: "Crypto.com",
    totalAmount: "$593,000",
    bankIcon: CryptoIcon,
    funds: [{ fundName: "T&E Morgan (Personal)", amount: "$593,000" }],
  },
];

export const ManagedFunds = [
  {
    bankName: "Morgan Management",
    totalAmount: "$6,753,635",
    increment: "+32.1%",
		incremented: true,
    bankIcon: null,
    funds: [
      {
        fundName: "Regal Resources Long-Short Fund",
        amount: "$1,999,110",
        increment: "+67.57%",
				incremented: true,
      },
      {
        fundName: "Regal Partners Private Fund",
        amount: "$3,442,286",
        increment: "+23%",
				incremented: true,
      },
      {
        fundName: "Regal Resources High Conviction Fund",
        amount: "$964,681",
        increment: "+11.2%",
				incremented: true,
      },
      { fundName: "Cash at bank", amount: "$54,099", increment: "", incremented: true,},
    ],
  },
  {
    bankName: "PM Capital",
    totalAmount: "$3,349,366",
    increment: "+2.2%",
    bankIcon: null,
		incremented: true,
    funds: [
      {
        fundName: "Australian Companies Fund",
        amount: "$3,349,366",
        increment: "+2.2%",
				incremented: true,
      },
    ],
  },
  {
    bankName: "Australian Eagle",
    totalAmount: "$1,465,108",
    increment: "+1.7%",
    bankIcon: null,
		incremented: true,
    funds: [
      {
        fundName: "Australian Eagle Trust",
        amount: "$732,554",
        increment: "+1.2%",
				incremented: true,
      },
      {
        fundName: "Australian Eagle Equity Strategy",
        amount: "$732,554",
        increment: "+2.2%",
				incremented: true,
      },
    ],
  },
  {
    bankName: "Regal Management Fund",
    totalAmount: "$859,155",
    increment: "+12.2%",
    bankIcon: null,
		incremented: true,
    funds: [
      {
        fundName: "Regal Resources High Conviction Fund",
        amount: "$859,155",
        increment: "+12.2%",
				incremented: true,
      },
    ],
  },
];

export const ListedShares = [
  {
    bankName: "ASX",
    totalAmount: "$9,851,563",
    increment: "-2.2%",
    incremented: false,
    bankIcon: ASXIcon,
    funds: [
      {
        fundName: "(ASX: MRM)",
        sub: "MMA Offshore Ltd",
        amount: "$416,087",
        increment: "-6.2%",
        incremented: false,
      },
      {
        fundName: "(ASX: GQG)",
        sub: "GQG Partners Inc",
        amount: "$2,711,407",
        increment: "-2.8%",
        incremented: false,
      },
      {
        fundName: "(ASX: CCP)",
        sub: "Credit Corp Group Lim...",
        amount: "$1,168,619",
        increment: "-3.4%",
        incremented: false,
      },
      {
        fundName: "(ASX: WR1)",
        sub: "Winsome Resources Ltd",
        amount: "$855,794",
        increment: "-2.9%",
        incremented: false,
      },
      {
        fundName: "(ASX: AD8)",
        sub: "Audinate Group Ltd",
        amount: "$150,547",
        increment: "-2.3%",
        incremented: false,
      },
      {
        fundName: "(ASX: PNV)",
        sub: "Polynovo Ltd",
        amount: "$172,338",
        increment: "+7.9%",
        incremented: true,
      },
      {
        fundName: "(ASX: DRO)",
        sub: "DroneShield Ltd",
        amount: "$53,721",
        increment: "+1.2%",
        incremented: true,
      },
      {
        fundName: "(ASX: BRN)",
        sub: "Brainchip Holdings Ltd",
        amount: "$1,809,197",
        increment: "-0.8%",
        incremented: false,
      },
      {
        fundName: "(ASX: LYC)",
        sub: "Lynas Rare Earths Ltd",
        amount: "$844,535",
        increment: "-1.7%",
        incremented: false,
      },
      {
        fundName: "(ASX: PDN)",
        sub: "Paladin Energy Limited",
        amount: "$1,353,174",
        increment: "-3.2%",
        incremented: false,
      },
      {
        fundName: "(ASX: ARB)",
        sub: "ARB Corporation Limited",
        amount: "$316,644",
        increment: "+5.3%",
        incremented: true,
      },
    ],
  },
  {
    bankName: "NYSY",
    totalAmount: "$4,115,942",
    increment: "-2.5%",
    incremented: false,
    bankIcon: NYSYIcon,
    funds: [
      {
        fundName: "(NYSE: FN)",
        sub: "Fabrinet",
        amount: "$1,214,594",
        increment: "+7.6%",
        incremented: true,
      },
      {
        fundName: "(NYSE: IOT)",
        sub: "Samsara Inc.",
        amount: "$22,385",
        increment: "+5.2%",
        incremented: true,
      },
      {
        fundName: "(NYSE: ALK)",
        sub: "Alaska Air Group, Inc.",
        amount: "$2,878,963",
        increment: "-6.2%",
        incremented: false,
      },
    ],
  },
];

export const UnListedShares = [
  {
    bankName: "Australia",
    totalAmount: "$3,521,073",
    increment: "-4.2%",
    incremented: false,
    bankIcon: AustraliaIcon,
    funds: [
      {
        fundName: "D3 Energy (Pre-IPO)",
        sub: "",
        amount: "$308,196",
        increment: "-6.2%",
        incremented: false,
      },
      {
        fundName: "Sun Silver (Convertible Note)",
        sub: "",
        amount: "$2,235,403",
        increment: "-2.8%",
        incremented: false,
      },
      {
        fundName: "Chemist Warehouse",
        sub: "(Pre-IPO)",
        amount: "$977,474",
        increment: "-6%",
        incremented: false,
      },
    ],
  },
];

export const PrivateEquity = [
  {
    bankName: "TPG Capital",
    totalAmount: "$940,493",
    increment: "+2.6%",
    incremented: true,
    bankIcon: null,
    funds: [
      {
        fundName: "TPG Growth",
        sub: "",
        amount: "$123,694",
        increment: "+1.5%",
        incremented: true,
      },
      {
        fundName: "TPG Tech Adjacencies",
        sub: "(TTAD)",
        amount: "$816,799",
        increment: "+2.7%",
        incremented: true,
      },
    ],
  },
  {
    bankName: "BainCapital",
    totalAmount: "$350,940",
    increment: "+2.5%",
    incremented: true,
    bankIcon: null,
    funds: [
      {
        fundName: "Bain Capital Tech Opportunities",
        sub: "",
        amount: "$350,940",
        increment: "+2.5%",
        incremented: true,
      },
    ],
  },
  {
    bankName: "KKR",
    totalAmount: "$294,134",
    increment: "+2.9%",
    incremented: true,
    bankIcon: null,
    funds: [
      {
        fundName: "KKR Global Impact Fund",
        sub: "",
        amount: "$249,417",
        increment: "+3.3%",
        incremented: true,
      },
      {
        fundName: "KKR Next Generation Technology Growth F...",
        sub: "",
        amount: "$44,717",
        increment: "+0.7%",
        incremented: true,
      },
    ],
  },
  {
    bankName: "Blackstone",
    totalAmount: "$1,008,438",
    increment: "+2.7%",
    incremented: true,
    bankIcon: null,
    funds: [
      {
        fundName: "Blackstone Capital Partners",
        sub: "",
        amount: "$47,626",
        increment: "+3.4%",
        incremented: true,
      },
      {
        fundName: "Blackstone Growth",
        sub: "(BXG)",
        amount: "$960,812",
        increment: "+2.6%",
        incremented: true,
      },
    ],
  },
  {
    bankName: "Riverside",
    totalAmount: "$793,783",
    increment: "+3.4%",
    incremented: true,
    bankIcon: null,
    funds: [
      {
        fundName: "Riverside Micro-Cap",
        sub: "Fund (RMCF)",
        amount: "$543,050",
        increment: "+3.5%",
        incremented: true,
      },
      {
        fundName: "Riverside Europe Fund",
        sub: "",
        amount: "$250,733",
        increment: "+3.2%",
        incremented: true,
      },
    ],
  },
  {
    bankName: "Global Ventures 2 Unit...",
    totalAmount: "$2,433,511",
    increment: "+21.7%",
    incremented: true,
    bankIcon: null,
    funds: [
      {
        fundName: "CodeAI",
        sub: "",
        amount: "$1,474,171",
        increment: "+41%",
        incremented: true,
      },
      {
        fundName: "TravelPlan",
        sub: "",
        amount: "$929,340",
        increment: "+0%",
        incremented: true,
      },
    ],
  },
];

export const FixedIncome = [
  {
    bankName: "Schroders",
    totalAmount: "$945,886",
    increment: "+2.8%",
    incremented: true,
    bankIcon: null,
    funds: [
      {
        fundName: "Schroder Fixed Income Fund",
        sub: "",
        amount: "$945,886",
        increment: "+2.8%",
        incremented: true,
      },
    ],
  },
  {
    bankName: "Metrics Credit Partners",
    totalAmount: "$348,324",
    increment: "+3%",
    incremented: true,
    bankIcon: null,
    funds: [
      {
        fundName: "Metrics Direct Income Fund",
        sub: "",
        amount: "$348,324",
        increment: "+3%",
        incremented: true,
      },
    ],
  },
  {
    bankName: "First Sentier Investors",
    totalAmount: "$1,339,759",
    increment: "+2.3%",
    incremented: true,
    bankIcon: null,
    funds: [
      {
        fundName: "First Sentier Australian Fixed Income",
        sub: "",
        amount: "$1,339,759",
        increment: "+2.3%",
        incremented: true,
      },
    ],
  },
  {
    bankName: "Vanguard",
    totalAmount: "$3,768,273",
    increment: "+2.2%",
    incremented: true,
    bankIcon: null,
    funds: [
      {
        fundName: "Vanguard Australian Fixed Interest ETF",
        sub: "",
        amount: "$3,768,273",
        increment: "+2.2%",
        incremented: true,
      },
    ],
  },
  {
    bankName: "Boating Syndication Aust...",
    totalAmount: "$62,152",
    increment: "+1.2%",
    incremented: true,
    bankIcon: null,
    funds: [
      {
        fundName: "Boat (Units in Unit Trust)",
        sub: "",
        amount: "$62,152",
        increment: "+1.2%",
        incremented: true,
      },
    ],
  },
  {
    bankName: "Challenger Investment",
    totalAmount: "$2,062,609",
    increment: "+1.9%",
    incremented: true,
    bankIcon: null,
    funds: [
      {
        fundName: "Challenger IM Credit Income Fund",
        sub: "",
        amount: "$2,062,609",
        increment: "+1.9%",
        incremented: true,
      },
    ],
  },
];

export const PrivateProperty = [
  {
    bankName: "T&E Morgan (Personal)",
    totalAmount: "$14,195,397",
    increment: "+4%",
    incremented: true,
    bankIcon: null,
    funds: [
      {
        fundName: "342 Cedar Ridge Drive,",
        sub: "Beverly Hills, CA 90210",
        amount: "$3,247,296",
        increment: "+4%",
        incremented: true,
      },
      {
        fundName: "BMW 5 Series (TM)",
        sub: "",
        amount: "$55,343",
        increment: "-4%",
        incremented: false,
      },
      {
        fundName: "Audi A6 (EM)",
        sub: "",
        amount: "$50,730",
        increment: "-4%",
        incremented: false,
      },
      {
        fundName: "Hyundai i30",
        sub: "",
        amount: "$17,706",
        increment: "-5.9%",
        incremented: false,
      },
      {
        fundName: "Cessna Citation CJ4",
        sub: "",
        amount: "$10,824,322",
        increment: "+4%",
        incremented: true,
      },
    ],
  },
  {
    bankName: "Morgan Global Ventur...",
    totalAmount: "$2,493,155",
    increment: "+3.1%",
    incremented: true,
    bankIcon: null,
    funds: [
      {
        fundName: "185 Ocean View Blvd,",
        sub: "Malibu, CA 90265",
        amount: "$2,493,155",
        increment: "+3.1%",
        incremented: true,
      },
    ],
  },
  {
    bankName: "T&E Morgan Pty Ltd...",
    totalAmount: "$2,000,000",
    increment: "+0%",
    incremented: true,
    bankIcon: null,
    funds: [
      {
        fundName: "Majesty 100 - 25% share",
        sub: "",
        amount: "$2,000,000",
        increment: "+0%",
        incremented: true,
      },
    ],
  },
  {
    bankName: "J&W Morgan (Personal)",
    totalAmount: "$2,382,075",
    increment: "+0.04%",
    incremented: true,
    bankIcon: null,
    funds: [
      {
        fundName: "2501 Sea Cliff Avenue,",
        sub: "San Francisco, CA 94121",
        amount: "$2,204,637",
        increment: "+0.4%",
        incremented: true,
      },
      {
        fundName: "Porsche 911 (JM)",
        sub: "",
        amount: "$139,342",
        increment: "-4.8%",
        incremented: false,
      },
      {
        fundName: "Mercedes C250 (WM)",
        sub: "",
        amount: "$38,096",
        increment: "-3.2%",
        incremented: false,
      },
    ],
  },
  {
    bankName: "S&R Parker (Personal)",
    totalAmount: "$2,660,649",
    increment: "+3.3%",
    incremented: true,
    bankIcon: null,
    funds: [
      {
        fundName: "1601 Country Club Drive,",
        sub: "Palo Alto, CA 94301",
        amount: "$2,660,649",
        increment: "+3.3%",
        incremented: true,
      },
    ],
  },
];
