- [« Тихоокеанський] (timezones.pacific.md)
- [HRTime »](book.hrtime.md)

- [PHP Manual](index.md)
- [Список підтримуваних часових поясів](timezones.md)
- Інші

## Інші

**Увага**

Будь ласка, не використовуйте описані тут часові пояси (крім UTC),
вони існують лише з причин зворотної сумісності та можуть
призвести до неправильної роботи. Крім того, часові пояси можуть бути
видалені з бази даних часових поясів IANA у будь-який час.

**Увага**

Якщо ви ігноруєте вище попередження, то врахуйте, що база
даних часових поясів IANA, яка використовується для часових поясів PHP,
підтримує використання POSIX-стилю знаків, тому позначення
часових поясів Etc/GMT+n та Etc/GMT-n зворотні загальноприйнятим.

Наприклад, часовий пояс на 8 годин вперед від GMT, який використовується в Китаї,
Західна Австралія та інші місця, насправді записані в базі
даних як `Etc/GMT-8`, а не як `Etc/GMT+8`, як можна було б очікувати.

Настійно рекомендується використовувати правильні часові пояси, такі
як 'Asia/Shanghai' або 'Australia/Perth' для вищенаведеного прикладу.

| | | | |
|----------------------|---------------------|---- ------------------------------|------------------- ---|
| Africa/Asmera | Africa/Timbuktu | America/Argentina/ComodRivadavia | America/Atka |
| America/Buenos_Aires | America/Catamarca | America/Coral_Harbour | America/Cordoba |
| America/Ensenada | America/Fort_Wayne | America/Godthab | Америка/Індианаполіс |
| America/Jujuy | America/Knox_IN | America/Louisville | America/Mendoza |
| America/Montreal | America/Porto_Acre | America/Rosario | America/Santa_Isabel |
| America/Shiprock | America/Virgin | Antarctica/South_Pole | Asia/Ashkhabad |
| Asia/Calcutta | Asia/Chongqing | Asia/Chungking | Asia/Dacca |
| Asia/Harbin | Asia/Istanbul | Asia/Kashgar | Asia/Katmandu |
| Asia/Macao | Asia/Rangoon | Asia/Saigon | Asia/Tel_Aviv |
| Asia/Thimbu | Asia/Ujung_Pandang | Asia/Ulan_Bator | Atlantic/Faeroe |
| Atlantic/Jan_Mayen | Australia/ACT | Australia/Canberra | Australia/Currie |
| Australia/LHI | Australia/North | Australia/NSW | Australia/Queensland |
| Australia/South | Australia/Tasmania | Australia/Victoria | Australia/West |
| Australia/Yancowinna | Brazil/Acre | Brazil/DeNoronha | Brazil/East |
| Brazil/West | Canada/Atlantic | Canada/Central | Canada/Eastern |
| Canada/Mountain | Canada/Newfoundland | Canada/Pacific | Canada/Saskatchewan |
| Canada/Yukon | CET | Chile/Continental | Chile/EasterIsland |
| CST6CDT | Cuba | EET | Египет |
| Eire | EST | EST5EDT | Etc/GMT |
| Etc/GMT+0 | Etc/GMT+1 | Etc/GMT+10 | Etc/GMT+11 |
| Etc/GMT+12 | Etc/GMT+2 | Etc/GMT+3 | Etc/GMT+4 |
| Etc/GMT+5 | Etc/GMT+6 | Etc/GMT+7 | Etc/GMT+8
| Etc/GMT+9 | Etc/GMT-0 | Etc/GMT-1 | Etc/GMT-10 |
| Etc/GMT-11 | Etc/GMT-12 | Etc/GMT-13 | Etc/GMT-14 |
| Etc/GMT-2 | Etc/GMT-3 | Etc/GMT-4 | Etc/GMT-5 |
| Etc/GMT-6 | Etc/GMT-7 | Etc/GMT-8 | Etc/GMT-9 |
| Etc/GMT0 | Etc/Greenwich | ETC/UCT | Etc/Universal |
| Etc/UTC | Etc/Zulu | Europe/Belfast | Europe/Nicosia |
| Europe/Tiraspol | Factory | ГБ | GB-Eire |
| GMT | GMT+0 GMT-0 | GMT0 |
| Greenwich | Hongkong | HST | Iceland |
| Іран | Israel | Jamaica | Japan |
| Kwajalein | Лібія | MET | Mexico/BajaNorte |
| Mexico/BajaSur | Mexico/General | MST | MST7MDT |
| Navajo | NZ | NZ-CHAT | Pacific/Enderbury |
| Pacific/Johnston | Pacific/Ponape | Pacific/Samoa | Pacific/Truk |
| Pacific/Yap | Польща | Португалія | PRC
| PST8PDT | ROC | ROK | Singapore |
| Turkey | UCT | Universal | US/Alaska |
| US/Aleutian | US/Arizona | US/Central | US/East-Indiana |
| US/Eastern | US/Hawaii | US/Indiana-Starke | US/Michigan |
| US/Mountain | US/Pacific | US/Samoa | UTC |
| W-SU | WET | Zulu | |

**Інші**
