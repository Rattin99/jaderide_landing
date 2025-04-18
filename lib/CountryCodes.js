const countryOptions = [
  {
    short: "AF",
    name: "Afghanistan",
    code: "+93",
  },
  {
    short: "AL",
    name: "Albania",
    code: "+355",
  },
  {
    short: "DZ",
    name: "Algeria",
    code: "+213",
  },
  {
    short: "AS",
    name: "American Samoa",
    code: "+1-684",
  },
  {
    short: "AD",
    name: "Andorra",
    code: "+376",
  },
  {
    short: "AO",
    name: "Angola",
    code: "+244",
  },
  {
    short: "AI",
    name: "Anguilla",
    code: "+1-264",
  },
  {
    short: "AQ",
    name: "Antarctica",
    code: "+672",
  },
  {
    short: "AG",
    name: "Antigua and Barbuda",
    code: "+1-268",
  },
  {
    short: "AR",
    name: "Argentina",
    code: "+54",
  },
  {
    short: "AM",
    name: "Armenia",
    code: "+374",
  },
  {
    short: "AW",
    name: "Aruba",
    code: "+297",
  },
  {
    short: "AU",
    name: "Australia",
    code: "+61",
  },
  {
    short: "AT",
    name: "Austria",
    code: "+43",
  },
  {
    short: "AZ",
    name: "Azerbaijan",
    code: "+994",
  },
  {
    short: "BS",
    name: "Bahamas",
    code: "+1-242",
  },
  {
    short: "BH",
    name: "Bahrain",
    code: "+973",
  },
  {
    short: "BD",
    name: "Bangladesh",
    code: "+880",
  },
  {
    short: "BB",
    name: "Barbados",
    code: "+1-246",
  },
  {
    short: "BY",
    name: "Belarus",
    code: "+375",
  },
  {
    short: "BE",
    name: "Belgium",
    code: "+32",
  },
  {
    short: "BZ",
    name: "Belize",
    code: "+501",
  },
  {
    short: "BJ",
    name: "Benin",
    code: "+229",
  },
  {
    short: "BM",
    name: "Bermuda",
    code: "+1-441",
  },
  {
    short: "BT",
    name: "Bhutan",
    code: "+975",
  },
  {
    short: "BO",
    name: "Bolivia",
    code: "+591",
  },
  {
    short: "BA",
    name: "Bosnia and Herzegovina",
    code: "+387",
  },
  {
    short: "BW",
    name: "Botswana",
    code: "+267",
  },
  {
    short: "BR",
    name: "Brazil",
    code: "+55",
  },
  {
    short: "BN",
    name: "Brunei",
    code: "+673",
  },
  {
    short: "BG",
    name: "Bulgaria",
    code: "+359",
  },
  {
    short: "BF",
    name: "Burkina Faso",
    code: "+226",
  },
  {
    short: "BI",
    name: "Burundi",
    code: "+257",
  },
  {
    short: "KH",
    name: "Cambodia",
    code: "+855",
  },
  {
    short: "CM",
    name: "Cameroon",
    code: "+237",
  },
  {
    short: "CA",
    name: "Canada",
    code: "+1",
  },
  {
    short: "CV",
    name: "Cape Verde",
    code: "+238",
  },
  {
    short: "CF",
    name: "Central African Republic",
    code: "+236",
  },
  {
    short: "TD",
    name: "Chad",
    code: "+235",
  },
  {
    short: "CL",
    name: "Chile",
    code: "+56",
  },
  {
    short: "CN",
    name: "China",
    code: "+86",
  },
  {
    short: "CO",
    name: "Colombia",
    code: "+57",
  },
  {
    short: "KM",
    name: "Comoros",
    code: "+269",
  },
  {
    short: "CG",
    name: "Congo (Brazzaville)",
    code: "+242",
  },
  {
    short: "CD",
    name: "Congo (Kinshasa)",
    code: "+243",
  },
  {
    short: "CR",
    name: "Costa Rica",
    code: "+506",
  },
  {
    short: "HR",
    name: "Croatia",
    code: "+385",
  },
  {
    short: "CU",
    name: "Cuba",
    code: "+53",
  },
  {
    short: "CY",
    name: "Cyprus",
    code: "+357",
  },
  {
    short: "CZ",
    name: "Czech Republic",
    code: "+420",
  },
  {
    short: "DK",
    name: "Denmark",
    code: "+45",
  },
  {
    short: "DJ",
    name: "Djibouti",
    code: "+253",
  },
  {
    short: "DM",
    name: "Dominica",
    code: "+1-767",
  },
  {
    short: "DO",
    name: "Dominican Republic",
    code: "+1-809",
  },
  {
    short: "EC",
    name: "Ecuador",
    code: "+593",
  },
  {
    short: "EG",
    name: "Egypt",
    code: "+20",
  },
  {
    short: "SV",
    name: "El Salvador",
    code: "+503",
  },
  {
    short: "GQ",
    name: "Equatorial Guinea",
    code: "+240",
  },
  {
    short: "ER",
    name: "Eritrea",
    code: "+291",
  },
  {
    short: "EE",
    name: "Estonia",
    code: "+372",
  },
  {
    short: "SZ",
    name: "Eswatini",
    code: "+268",
  },
  {
    short: "ET",
    name: "Ethiopia",
    code: "+251",
  },
  {
    short: "FJ",
    name: "Fiji",
    code: "+679",
  },
  {
    short: "FI",
    name: "Finland",
    code: "+358",
  },
  {
    short: "FR",
    name: "France",
    code: "+33",
  },
  {
    short: "GA",
    name: "Gabon",
    code: "+241",
  },
  {
    short: "GM",
    name: "Gambia",
    code: "+220",
  },
  {
    short: "GE",
    name: "Georgia",
    code: "+995",
  },
  {
    short: "DE",
    name: "Germany",
    code: "+49",
  },
  {
    short: "GH",
    name: "Ghana",
    code: "+233",
  },
  {
    short: "GR",
    name: "Greece",
    code: "+30",
  },
  {
    short: "GD",
    name: "Grenada",
    code: "+1-473",
  },
  {
    short: "GU",
    name: "Guam",
    code: "+1-671",
  },
  {
    short: "GT",
    name: "Guatemala",
    code: "+502",
  },
  {
    short: "GN",
    name: "Guinea",
    code: "+224",
  },
  {
    short: "GW",
    name: "Guinea-Bissau",
    code: "+245",
  },
  {
    short: "GY",
    name: "Guyana",
    code: "+592",
  },
  {
    short: "HT",
    name: "Haiti",
    code: "+509",
  },
  {
    short: "HN",
    name: "Honduras",
    code: "+504",
  },
  {
    short: "HU",
    name: "Hungary",
    code: "+36",
  },
  {
    short: "IS",
    name: "Iceland",
    code: "+354",
  },
  {
    short: "IN",
    name: "India",
    code: "+91",
  },
  {
    short: "ID",
    name: "Indonesia",
    code: "+62",
  },
  {
    short: "IR",
    name: "Iran",
    code: "+98",
  },
  {
    short: "IQ",
    name: "Iraq",
    code: "+964",
  },
  {
    short: "IE",
    name: "Ireland",
    code: "+353",
  },
  {
    short: "IL",
    name: "Israel",
    code: "+972",
  },
  {
    short: "IT",
    name: "Italy",
    code: "+39",
  },
  {
    short: "CI",
    name: "Ivory Coast",
    code: "+225",
  },
  {
    short: "JM",
    name: "Jamaica",
    code: "+1-876",
  },
  {
    short: "JP",
    name: "Japan",
    code: "+81",
  },
  {
    short: "JO",
    name: "Jordan",
    code: "+962",
  },
  {
    short: "KZ",
    name: "Kazakhstan",
    code: "+7",
  },
  {
    short: "KE",
    name: "Kenya",
    code: "+254",
  },
  {
    short: "KI",
    name: "Kiribati",
    code: "+686",
  },
  {
    short: "KP",
    name: "North Korea",
    code: "+850",
  },
  {
    short: "KR",
    name: "South Korea",
    code: "+82",
  },
  {
    short: "KW",
    name: "Kuwait",
    code: "+965",
  },
  {
    short: "KG",
    name: "Kyrgyzstan",
    code: "+996",
  },
  {
    short: "LA",
    name: "Laos",
    code: "+856",
  },
  {
    short: "LV",
    name: "Latvia",
    code: "+371",
  },
  {
    short: "LB",
    name: "Lebanon",
    code: "+961",
  },
  {
    short: "LS",
    name: "Lesotho",
    code: "+266",
  },
  {
    short: "LR",
    name: "Liberia",
    code: "+231",
  },
  {
    short: "LY",
    name: "Libya",
    code: "+218",
  },
  {
    short: "LI",
    name: "Liechtenstein",
    code: "+423",
  },
  {
    short: "LT",
    name: "Lithuania",
    code: "+370",
  },
  {
    short: "LU",
    name: "Luxembourg",
    code: "+352",
  },
  {
    short: "MG",
    name: "Madagascar",
    code: "+261",
  },
  {
    short: "MW",
    name: "Malawi",
    code: "+265",
  },
  {
    short: "MY",
    name: "Malaysia",
    code: "+60",
  },
  {
    short: "MV",
    name: "Maldives",
    code: "+960",
  },
  {
    short: "ML",
    name: "Mali",
    code: "+223",
  },
  {
    short: "MT",
    name: "Malta",
    code: "+356",
  },
  {
    short: "MH",
    name: "Marshall Islands",
    code: "+692",
  },
  {
    short: "MR",
    name: "Mauritania",
    code: "+222",
  },
  {
    short: "MU",
    name: "Mauritius",
    code: "+230",
  },
  {
    short: "MX",
    name: "Mexico",
    code: "+52",
  },
  {
    short: "FM",
    name: "Micronesia",
    code: "+691",
  },
  {
    short: "MD",
    name: "Moldova",
    code: "+373",
  },
  {
    short: "MC",
    name: "Monaco",
    code: "+377",
  },
  {
    short: "MN",
    name: "Mongolia",
    code: "+976",
  },
  {
    short: "ME",
    name: "Montenegro",
    code: "+382",
  },
  {
    short: "MA",
    name: "Morocco",
    code: "+212",
  },
  {
    short: "MZ",
    name: "Mozambique",
    code: "+258",
  },
  {
    short: "MM",
    name: "Myanmar",
    code: "+95",
  },
  { short: "NA", name: "Namibia", code: "+264" },
  { short: "NR", name: "Nauru", code: "+674" },
  { short: "NP", name: "Nepal", code: "+977" },
  { short: "NL", name: "Netherlands", code: "+31" },
  { short: "NZ", name: "New Zealand", code: "+64" },
  { short: "NI", name: "Nicaragua", code: "+505" },
  { short: "NE", name: "Niger", code: "+227" },
  { short: "NG", name: "Nigeria", code: "+234" },
  { short: "MK", name: "North Macedonia", code: "+389" },
  { short: "NO", name: "Norway", code: "+47" },
  { short: "OM", name: "Oman", code: "+968" },
  { short: "PK", name: "Pakistan", code: "+92" },
  { short: "PW", name: "Palau", code: "+680" },
  { short: "PS", name: "Palestine", code: "+970" },
  { short: "PA", name: "Panama", code: "+507" },
  { short: "PG", name: "Papua New Guinea", code: "+675" },
  { short: "PY", name: "Paraguay", code: "+595" },
  { short: "PE", name: "Peru", code: "+51" },
  { short: "PH", name: "Philippines", code: "+63" },
  { short: "PL", name: "Poland", code: "+48" },
  { short: "PT", name: "Portugal", code: "+351" },
  { short: "QA", name: "Qatar", code: "+974" },
  { short: "RO", name: "Romania", code: "+40" },
  { short: "RU", name: "Russia", code: "+7" },
  { short: "RW", name: "Rwanda", code: "+250" },
  { short: "KN", name: "Saint Kitts and Nevis", code: "+1-869" },
  { short: "LC", name: "Saint Lucia", code: "+1-758" },
  { short: "VC", name: "Saint Vincent and the Grenadines", code: "+1-784" },
  { short: "WS", name: "Samoa", code: "+685" },
  { short: "SM", name: "San Marino", code: "+378" },
  { short: "ST", name: "Sao Tome and Principe", code: "+239" },
  { short: "SA", name: "Saudi Arabia", code: "+966" },
  { short: "SN", name: "Senegal", code: "+221" },
  { short: "RS", name: "Serbia", code: "+381" },
  { short: "SC", name: "Seychelles", code: "+248" },
  { short: "SL", name: "Sierra Leone", code: "+232" },
  { short: "SG", name: "Singapore", code: "+65" },
  { short: "SK", name: "Slovakia", code: "+421" },
  { short: "SI", name: "Slovenia", code: "+386" },
  { short: "SB", name: "Solomon Islands", code: "+677" },
  { short: "SO", name: "Somalia", code: "+252" },
  { short: "ZA", name: "South Africa", code: "+27" },
  { short: "SS", name: "South Sudan", code: "+211" },
  { short: "ES", name: "Spain", code: "+34" },
  { short: "LK", name: "Sri Lanka", code: "+94" },
  { short: "SD", name: "Sudan", code: "+249" },
  { short: "SR", name: "Suriname", code: "+597" },
  { short: "SE", name: "Sweden", code: "+46" },
  { short: "CH", name: "Switzerland", code: "+41" },
  { short: "SY", name: "Syria", code: "+963" },
  { short: "TW", name: "Taiwan", code: "+886" },
  { short: "TJ", name: "Tajikistan", code: "+992" },
  { short: "TZ", name: "Tanzania", code: "+255" },
  { short: "TH", name: "Thailand", code: "+66" },
  { short: "TL", name: "Timor-Leste", code: "+670" },
  { short: "TG", name: "Togo", code: "+228" },
  { short: "TO", name: "Tonga", code: "+676" },
  { short: "TT", name: "Trinidad and Tobago", code: "+1-868" },
  { short: "TN", name: "Tunisia", code: "+216" },
  { short: "TR", name: "Turkey", code: "+90" },
  { short: "TM", name: "Turkmenistan", code: "+993" },
  { short: "TV", name: "Tuvalu", code: "+688" },
  { short: "UG", name: "Uganda", code: "+256" },
  { short: "UA", name: "Ukraine", code: "+380" },
  { short: "AE", name: "United Arab Emirates", code: "+971" },
  { short: "GB", name: "United Kingdom", code: "+44" },
  { short: "US", name: "United States", code: "+1" },
  { short: "UY", name: "Uruguay", code: "+598" },
  { short: "UZ", name: "Uzbekistan", code: "+998" },
  { short: "VU", name: "Vanuatu", code: "+678" },
  { short: "VA", name: "Vatican City", code: "+379" },
  { short: "VE", name: "Venezuela", code: "+58" },
  { short: "VN", name: "Vietnam", code: "+84" },
  { short: "YE", name: "Yemen", code: "+967" },
  { short: "ZM", name: "Zambia", code: "+260" },
  { short: "ZW", name: "Zimbabwe", code: "+263" },
];

export default countryOptions;
