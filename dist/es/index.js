var timezoneToCurrency = {
  'Pacific/Midway': 'USD',
  'Pacific/Niue': 'NZD',
  'Pacific/Pago_Pago': 'USD',
  'America/Adak': 'USD',
  'Pacific/Honolulu': 'USD',
  'Pacific/Rarotonga': 'NZD',
  'Pacific/Tahiti': 'XPF',
  'Pacific/Marquesas': 'XPF',
  'America/Anchorage': 'USD',
  'America/Juneau': 'USD',
  'America/Metlakatla': 'USD',
  'America/Nome': 'USD',
  'America/Sitka': 'USD',
  'America/Yakutat': 'USD',
  'Pacific/Gambier': 'XPF',
  'America/Los_Angeles': 'USD',
  'America/Tijuana': 'MXN',
  'America/Vancouver': 'CAD',
  'Pacific/Pitcairn': 'NZD',
  'America/Boise': 'USD',
  'America/Cambridge_Bay': 'CAD',
  'America/Chihuahua': 'MXN',
  'America/Creston': 'CAD',
  'America/Dawson': 'CAD',
  'America/Dawson_Creek': 'CAD',
  'America/Denver': 'USD',
  'America/Edmonton': 'CAD',
  'America/Fort_Nelson': 'CAD',
  'America/Hermosillo': 'MXN',
  'America/Inuvik': 'CAD',
  'America/Mazatlan': 'MXN',
  'America/Ojinaga': 'MXN',
  'America/Phoenix': 'USD',
  'America/Whitehorse': 'CAD',
  'America/Yellowknife': 'CAD',
  'America/Bahia_Banderas': 'MXN',
  'America/Belize': 'BZD',
  'America/Chicago': 'USD',
  'America/Costa_Rica': 'CRC',
  'America/El_Salvador': 'USD',
  'America/Guatemala': 'GTQ',
  'America/Indiana/Knox': 'USD',
  'America/Indiana/Tell_City': 'USD',
  'America/Managua': 'NIO',
  'America/Matamoros': 'MXN',
  'America/Menominee': 'USD',
  'America/Merida': 'MXN',
  'America/Mexico_City': 'MXN',
  'America/Monterrey': 'MXN',
  'America/North_Dakota/Beulah': 'USD',
  'America/North_Dakota/Center': 'USD',
  'America/North_Dakota/New_Salem': 'USD',
  'America/Rainy_River': 'CAD',
  'America/Rankin_Inlet': 'CAD',
  'America/Regina': 'CAD',
  'America/Resolute': 'CAD',
  'America/Swift_Current': 'CAD',
  'America/Tegucigalpa': 'HNL',
  'America/Winnipeg': 'CAD',
  'Pacific/Easter': 'CLP',
  'Pacific/Galapagos': 'USD',
  'America/Atikokan': 'CAD',
  'America/Bogota': 'COP',
  'America/Cancun': 'MXN',
  'America/Cayman': 'KYD',
  'America/Detroit': 'USD',
  'America/Eirunepe': 'BRL',
  'America/Grand_Turk': 'USD',
  'America/Guayaquil': 'USD',
  'America/Havana': 'CUP',
  'America/Indiana/Indianapolis': 'USD',
  'America/Indiana/Marengo': 'USD',
  'America/Indiana/Petersburg': 'USD',
  'America/Indiana/Vevay': 'USD',
  'America/Indiana/Vincennes': 'USD',
  'America/Indiana/Winamac': 'USD',
  'America/Iqaluit': 'CAD',
  'America/Jamaica': 'JMD',
  'America/Kentucky/Louisville': 'USD',
  'America/Kentucky/Monticello': 'USD',
  'America/Lima': 'PEN',
  'America/Nassau': 'BSD',
  'America/New_York': 'USD',
  'America/Nipigon': 'CAD',
  'America/Panama': 'PAB',
  'America/Pangnirtung': 'CAD',
  'America/Port-au-Prince': 'HTG',
  'America/Rio_Branco': 'BRL',
  'America/Thunder_Bay': 'CAD',
  'America/Toronto': 'CAD',
  'America/AnguillaSandy Hill': 'XCD',
  'America/Antigua': 'XCD',
  'America/Aruba': 'AWG',
  'America/Asuncion': 'PYG',
  'America/Barbados': 'BBD',
  'America/Blanc-Sablon': 'CAD',
  'America/Boa_Vista': 'BRL',
  'America/Campo_Grande': 'BRL',
  'America/Caracas': 'VEB',
  'America/Cuiaba': 'BRL',
  'America/Curacao': 'ANG',
  'America/Dominica': 'DOP',
  'America/Glace_Bay': 'CAD',
  'America/Goose_Bay': 'CAD',
  'America/Grenada': 'XCD',
  'America/Guadeloupe': 'EUR',
  'America/Guyana': 'GYD',
  'America/Halifax': 'CAD',
  'America/Kralendijk': 'USD',
  'America/La_Paz': 'BOB',
  'America/Lower_Princes': 'USD',
  'America/Manaus': 'BRL',
  'America/Marigot': 'EUR',
  'America/Martinique': 'EUR',
  'America/Moncton': 'CAD',
  'America/Montserrat': 'XCD',
  'America/Porto_Velho': 'BRL',
  'America/Port_of_Spain': 'BZD',
  'America/Puerto_Rico': 'USD',
  'America/Santiago': 'CLP',
  'America/Santo_Domingo': 'DOP',
  'America/St_Barthelemy': 'EUR',
  'America/St_Kitts': 'XCD',
  'America/St_Lucia': 'XCD',
  'America/St_Thomas': 'USD',
  'America/St_Vincent': 'XCD',
  'America/Thule': 'DKK',
  'America/Tortola': 'USD',
  'Atlantic/Bermuda': 'BMD',
  'America/St_Johns': 'CAD',
  'America/Araguaina': 'BRL',
  'America/Argentina/Buenos_Aires': 'ARS',
  'America/Argentina/Catamarca': 'ARS',
  'America/Argentina/Cordoba': 'ARS',
  'America/Argentina/Jujuy': 'ARS',
  'America/Argentina/La_Rioja': 'ARS',
  'America/Argentina/Mendoza': 'ARS',
  'America/Argentina/Rio_Gallegos': 'ARS',
  'America/Argentina/Salta': 'ARS',
  'America/Argentina/San_Juan': 'ARS',
  'America/Argentina/San_Luis': 'ARS',
  'America/Argentina/Tucuman': 'ARS',
  'America/Argentina/Ushuaia': 'ARS',
  'America/Bahia': 'BRL',
  'America/Belem': 'BRL',
  'America/Cayenne': 'EUR',
  'America/Fortaleza': 'BRL',
  'America/Godthab': 'DKK',
  'America/Maceio': 'BRL',
  'America/Miquelon': 'EUR',
  'America/Montevideo': 'UYU',
  'America/Paramaribo': 'SRD',
  'America/Punta_Arenas': 'CLP',
  'America/Recife': 'BRL',
  'America/Santarem': 'BRL',
  'America/Sao_Paulo': 'BRL',
  'Antarctica/Palmer': 'USD',
  'Antarctica/Rothera': 'USD',
  'Atlantic/Stanley': 'FKP',
  'America/Noronha': 'BRL',
  'Atlantic/South_Georgia': 'GBP',
  'America/Scoresbysund': 'DKK',
  'Atlantic/Azores': 'EUR',
  'Atlantic/Cape_Verde': 'CVE',
  'Africa/Abidjan': 'XOF',
  'Africa/Accra': 'GHC',
  'Africa/Bamako': 'XOF',
  'Africa/Banjul': 'GMD',
  'Africa/Bissau': 'XOF',
  'Africa/Casablanca': 'MAD',
  'Africa/Conakry': 'GNF',
  'Africa/Dakar': 'XOF',
  'Africa/El_Aaiun': 'MAD',
  'Africa/Freetown': 'SLL',
  'Africa/Lome': 'XOF',
  'Africa/Monrovia': 'LRD',
  'Africa/Nouakchott': 'MRU',
  'Africa/Ouagadougou': 'XOF',
  'Africa/Sao_Tome': 'STD',
  'America/Danmarkshavn': 'DKK',
  'Antarctica/Troll': 'NOK',
  'Atlantic/Canary': 'EUR',
  'Atlantic/Faroe': 'DKK',
  'Atlantic/Madeira': 'EUR',
  'Atlantic/Reykjavik': 'ISK',
  'Atlantic/St_Helena': 'SHP',
  'Europe/Dublin': 'EUR',
  'Europe/Guernsey': 'GBP',
  'Europe/Isle_of_Man': 'IMP',
  'Europe/Jersey': 'GBP',
  'Europe/Lisbon': 'EUR',
  'Europe/London': 'GBP',
  'Africa/Algiers': 'DZD',
  'Africa/Bangui': 'XAF',
  'Africa/Brazzaville': 'XAF',
  'Africa/Ceuta': 'EUR',
  'Africa/Douala': 'XAF',
  'Africa/Kinshasa': 'CDF',
  'Africa/Lagos': 'NGN',
  'Africa/Libreville': 'XAF',
  'Africa/Luanda': 'AOA',
  'Africa/Malabo': 'XAF',
  'Africa/Ndjamena': 'XAF',
  'Africa/Niamey': 'XOF',
  'Africa/Porto-Novo': 'XOF',
  'Africa/Tunis': 'TND',
  'Africa/Windhoek': 'NAD',
  'Arctic/Longyearbyen': 'NOK',
  'Europe/Amsterdam': 'EUR',
  'Europe/Andorra': 'EUR',
  'Europe/Belgrade': 'RSD',
  'Europe/Berlin': 'EUR',
  'Europe/Bratislava': 'EUR',
  'Europe/Brussels': 'EUR',
  'Europe/Budapest': 'HUF',
  'Europe/Copenhagen': 'DKK',
  'Europe/Gibraltar': 'GIP',
  'Europe/Ljubljana': 'EUR',
  'Europe/Luxembourg': 'EUR',
  'Europe/Madrid': 'EUR',
  'Europe/Malta': 'EUR',
  'Europe/Monaco': 'EUR',
  'Europe/Oslo': 'NOK',
  'Europe/Paris': 'EUR',
  'Europe/Podgorica': 'EUR',
  'Europe/Prague': 'CZK',
  'Europe/Rome': 'EUR',
  'Europe/San_Marino': 'EUR',
  'Europe/Sarajevo': 'BAM',
  'Europe/Skopje': 'MKD',
  'Europe/Stockholm': 'SEK',
  'Europe/Tirane': 'ALL',
  'Europe/Vaduz': 'CHF',
  'Europe/Vatican': 'EUR',
  'Europe/Vienna': 'EUR',
  'Europe/Warsaw': 'PLN',
  'Europe/Zagreb': 'HRK',
  'Europe/Zurich': 'CHF',
  'Africa/Blantyre': 'MWK',
  'Africa/Bujumbura': 'BIF',
  'Africa/Cairo': 'EGP',
  'Africa/Gaborone': 'BWP',
  'Africa/Harare': 'ZWL',
  'Africa/Johannesburg': 'ZAR',
  'Africa/Juba': 'SSP',
  'Africa/Khartoum': 'SDG',
  'Africa/Kigali': 'RWF',
  'Africa/Lubumbashi': 'CDF',
  'Africa/Lusaka': 'ZMW',
  'Africa/Maputo': 'MZM',
  'Africa/Maseru': 'LSL',
  'Africa/Mbabane': 'SZL',
  'Africa/Tripoli': 'LYD',
  'Asia/Amman': 'JOD',
  'Asia/Beirut': 'LBP',
  'Asia/Damascus': 'SYP',
  'Asia/Famagusta': 'TRY',
  'Asia/Gaza': 'ILS',
  'Asia/Hebron': 'ILS',
  'Asia/Jerusalem': 'ILS',
  'Asia/Nicosia': 'EUR',
  'Europe/Athens': 'EUR',
  'Europe/Bucharest': 'RON',
  'Europe/Chisinau': 'MDL',
  'Europe/Helsinki': 'EUR',
  'Europe/Kaliningrad': 'RUB',
  'Europe/Kiev': 'UAH',
  'Europe/Mariehamn': 'EUR',
  'Europe/Riga': 'EUR',
  'Europe/Sofia': 'BGN',
  'Europe/Tallinn': 'EUR',
  'Europe/Uzhgorod': 'UAH',
  'Europe/Vilnius': 'EUR',
  'Europe/Zaporozhye': 'UAH',
  'Africa/Addis_Ababa': 'ETB',
  'Africa/Asmara': 'ERN',
  'Africa/Dar_es_Salaam': 'TZS',
  'Africa/Djibouti': 'DJF',
  'Africa/Kampala': 'UGX',
  'Africa/Mogadishu': 'SOS',
  'Africa/Nairobi': 'KES',
  'Antarctica/Syowa': 'EUR',
  'Asia/Aden': 'YER',
  'Asia/Baghdad': 'IQD',
  'Asia/Bahrain': 'BHD',
  'Asia/Kuwait': 'KWD',
  'Asia/Qatar': 'QAR',
  'Asia/Riyadh': 'SAR',
  'Europe/Istanbul': 'TRY',
  'Europe/Kirov': 'RUB',
  'Europe/Minsk': 'BYN',
  'Europe/Moscow': 'RUB',
  'Europe/Simferopol': 'RUB',
  'Europe/Volgograd': 'RUB',
  'Indian/Antananarivo': 'MGA',
  'Indian/Comoro': 'USD',
  'Indian/Mayotte': 'EUR',
  'Asia/Tehran': 'IRR',
  'Asia/Baku': 'AZN',
  'Asia/Dubai': 'AED',
  'Asia/Muscat': 'OMR',
  'Asia/Tbilisi': 'GEL',
  'Asia/Yerevan': 'AMD',
  'Europe/Astrakhan': 'RUB',
  'Europe/Samara': 'RUB',
  'Europe/Saratov': 'RUB',
  'Europe/Ulyanovsk': 'RUB',
  'Indian/Mahe': 'SCR',
  'Indian/Mauritius': 'MUR',
  'Indian/Reunion': 'EUR',
  'Asia/Kabul': 'AFN',
  'Antarctica/Mawson': 'USD',
  'Asia/Aqtau': 'KZT',
  'Asia/Aqtobe': 'KZT',
  'Asia/Ashgabat': 'TMM',
  'Asia/Atyrau': 'KZT',
  'Asia/Dushanbe': 'TJS',
  'Asia/Karachi': 'PKR',
  'Asia/Oral': 'KZT',
  'Asia/Qyzylorda': 'KZT',
  'Asia/Samarkand': 'UZS',
  'Asia/Tashkent': 'UZS',
  'Asia/Yekaterinburg': 'RUB',
  'Indian/Kerguelen': 'EUR',
  'Indian/Maldives': 'MVR',
  'Asia/Colombo': 'LKR',
  'Asia/Kolkata': 'INR',
  'Asia/Kathmandu': 'NPR',
  'Antarctica/Vostok': 'USD',
  'Asia/Almaty': 'KZT',
  'Asia/Bishkek': 'KGS',
  'Asia/Dhaka': 'BDT',
  'Asia/Omsk': 'RUB',
  'Asia/Qostanay': 'KZT',
  'Asia/Thimphu': 'BTN',
  'Asia/Urumqi': 'CNY',
  'Indian/Chagos': 'USD',
  'Asia/Yangon': 'MMK',
  'Indian/Cocos': 'AUD',
  'Antarctica/Davis': 'USD',
  'Asia/Bangkok': 'THB',
  'Asia/Barnaul': 'RUB',
  'Asia/Hovd': 'MNT',
  'Asia/Ho_Chi_Minh': 'VND',
  'Asia/Jakarta': 'IDR',
  'Asia/Krasnoyarsk': 'RUB',
  'Asia/Novokuznetsk': 'RUB',
  'Asia/Novosibirsk': 'RUB',
  'Asia/Phnom_Penh': 'KHR',
  'Asia/Pontianak': 'IDR',
  'Asia/Tomsk': 'RUB',
  'Asia/Vientiane': 'LAK',
  'Indian/Christmas': 'AUD',
  'Asia/Brunei': 'BND',
  'Asia/Choibalsan': 'MNT',
  'Asia/Hong_Kong': 'HKD',
  'Asia/Irkutsk': 'RUB',
  'Asia/Kuala_Lumpur': 'MYR',
  'Asia/Kuching': 'MYR',
  'Asia/Macau': 'MOP',
  'Asia/Makassar': 'IDR',
  'Asia/Manila': 'PHP',
  'Asia/Shanghai': 'CNY',
  'Asia/Singapore': 'SGD',
  'Asia/Taipei': 'TWD',
  'Asia/Ulaanbaatar': 'MNT',
  'Australia/Perth': 'AUD',
  'Australia/Eucla': 'AUD',
  'Asia/Chita': 'RUB',
  'Asia/Dili': 'USD',
  'Asia/Jayapura': 'IDR',
  'Asia/Khandyga': 'RUB',
  'Asia/Pyongyang': 'KPW',
  'Asia/Seoul': 'KRW',
  'Asia/Tokyo': 'JPY',
  'Asia/Yakutsk': 'RUB',
  'Pacific/Palau': 'USD',
  'Australia/Adelaide': 'AUD',
  'Australia/Broken_Hill': 'AUD',
  'Australia/Darwin': 'AUD',
  'Antarctica/DumontDUrville': 'USD',
  'Antarctica/Macquarie': 'USD',
  'Asia/Ust-Nera': 'RUB',
  'Asia/Vladivostok': 'RUB',
  'Australia/Brisbane': 'AUD',
  'Australia/Currie': 'AUD',
  'Australia/Hobart': 'AUD',
  'Australia/Lindeman': 'AUD',
  'Australia/Melbourne': 'AUD',
  'Australia/Sydney': 'AUD',
  'Pacific/Chuuk': 'USD',
  'Pacific/GuamVillage': 'USD',
  'Pacific/Port_Moresby': 'PGK',
  'Pacific/Saipan': 'USD',
  'Australia/Lord_Howe': 'AUD',
  'Antarctica/Casey': 'USD',
  'Asia/Magadan': 'RUB',
  'Asia/Sakhalin': 'RUB',
  'Asia/Srednekolymsk': 'RUB',
  'Pacific/Bougainville': 'PGK',
  'Pacific/Efate': 'VUV',
  'Pacific/Guadalcanal': 'SBD',
  'Pacific/Kosrae': 'USD',
  'Pacific/Norfolk': 'USD',
  'Pacific/Noumea': 'XPF',
  'Pacific/Pohnpei': 'USD',
  'Antarctica/McMurdo': 'USD',
  'Asia/Anadyr': 'RUB',
  'Asia/Kamchatka': 'RUB',
  'Pacific/Auckland': 'NZD',
  'Pacific/Fiji': 'FJD',
  'Pacific/Funafuti': 'AUD',
  'Pacific/Kwajalein': 'USD',
  'Pacific/Majuro': 'USD',
  'Pacific/Nauru': 'AUD',
  'Pacific/Tarawa': 'AUD',
  'Pacific/Wake': 'USD',
  'Pacific/Wallis': 'XPF',
  'Pacific/Chatham': 'CAD',
  'Pacific/Apia': 'NGN',
  'Pacific/Enderbury': 'USD',
  'Pacific/Fakaofo': 'NZD',
  'Pacific/Tongatapu': 'TOP',
  'Pacific/Kiritimati': 'AUD',
};

class Currency {
  constructor({ amount, timeZone = Currency.timeZone() }) {
    this.amount = amount;
    this.timeZone = timeZone;
    this.code = timezoneToCurrency[this.timeZone] || 'USD';
  }

  static async fromUSD({ amount, timeZone }) {
    let currency = new Currency({ amount, timeZone });
    let rate = await fetch('https://api.depay.pro/v1/fiat?symbol=' + currency.code, {
      headers: { 'X-Api-Key': Currency.apiKey },
    })
      .then((response) => response.json())
      .then((data) => parseFloat(data.usd));
    currency.amount = currency.amount * rate;
    return currency
  }

  static timeZone() {
    return Intl.DateTimeFormat().resolvedOptions().timeZone
  }

  toString() {
    return new Intl.NumberFormat(navigator.language, {
      style: 'currency',
      currency: this.code,
    }).format(this.amount)
  }
}

export { Currency };
