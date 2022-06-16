- [« Приклад використання](gender.example.admin.md)
- [Gender\Gender::connect »](gender-gender.connect.md)

- [PHP Manual](index.md)
- [Gender](book.gender.md)
- Клас Gender\Gender

# Клас Gender\Gender

(PECL gender \>u003d 0.6.0)

## Вступ

## Огляд класів

class **Gender\Gender** {

/\* Константи \*/

const int `IS_FEMALE` u003d 70;

const int `IS_MOSTLY_FEMALE` u003d 102;

const int `IS_MALE` u003d 77;

const int `IS_MOSTLY_MALE` u003d 109;

const int `IS_UNISEX_NAME` u003d 63;

const int `IS_A_COUPLE` u003d 67;

const int `NAME_NOT_FOUND` u003d 32;

const int `ERROR_IN_NAME` u003d 69;

const int `ANY_COUNTRY` u003d 0;

const int `BRITAIN` u003d 1;

const int `IRELAND` u003d 2;

const int `USA` u003d 3;

const int `SPAIN` u003d 4;

const int `PORTUGAL` u003d 5;

const int `ITALY` u003d 6;

const int `MALTA` u003d 7;

const int `FRANCE` u003d 8;

const int `BELGIUM` u003d 9;

const int `LUXEMBOURG` u003d 10;

const int `NETHERLANDS` u003d 11;

const int `GERMANY` u003d 12;

const int `EAST_FRISIA` u003d 13;

const int `AUSTRIA` u003d 14;

const int `SWISS` u003d 15;

const int `ICELAND` u003d 16;

const int `DENMARK` u003d 17;

const int `NORWAY` u003d 18;

const int `SWEDEN` u003d 19;

const int `FINLAND` u003d 20;

const int `ESTONIA` u003d 21;

const int `LATVIA` u003d 22;

const int `LITHUANIA` u003d 23;

const int `POLAND` u003d 24;

const int `CZECH_REP` u003d 25;

const int `SLOVAKIA` u003d 26;

const int `HUNGARY` u003d 27;

const int `ROMANIA` u003d 28;

const int `BULGARIA` u003d 29;

const int `BOSNIA` u003d 30;

const int `CROATIA` u003d 31;

const int `KOSOVO` u003d 32;

const int `MACEDONIA` u003d 33;

const int `MONTENEGRO` u003d 34;

const int `SERBIA` u003d 35;

const int `SLOVENIA` u003d 36;

const int `ALBANIA` u003d 37;

const int `GREECE` u003d 38;

const int `RUSSIA` u003d 39;

const int `BELARUS` u003d 40;

const int `MOLDOVA` u003d 41;

const int `UKRAINE` u003d 42;

const int `ARMENIA` u003d 43;

const int `AZERBAIJAN` u003d 44;

const int `GEORGIA` u003d 45;

const int `KAZAKH_UZBEK` u003d 46;

const int `TURKEY` u003d 47;

const int `ARABIA` u003d 48;

const int `ISRAEL` u003d 49;

const int `CHINA` u003d 50;

const int `INDIA` u003d 51;

const int `JAPAN` u003d 52;

const int `KOREA` u003d 53;

/\* Методи \*/

public [\_\_construct](gender-gender.construct.md)(string `$dsn` u003d ?)

public [connect](gender-gender.connect.md)(string `$dsn`): bool

public [country](gender-gender.country.md)(int `$country`):
array\|false

public [get](gender-gender.get.md)(string `$name`, int `$country` u003d
?): int

public [isNick](gender-gender.isnick.md)(string `$name0`, string
`$name1`, int `$country` u003d ?): array

public [similarNames](gender-gender.similarnames.md)(string `$name`,
int `$country` u003d ?): array

}

## Зумовлені константи

**`Gender\Gender::IS_FEMALE`**

**`Gender\Gender::IS_MOSTLY_FEMALE`**

**`Gender\Gender::IS_MALE`**

**`Gender\Gender::IS_MOSTLY_MALE`**

**`Gender\Gender::IS_UNISEX_NAME`**

**`Gender\Gender::IS_A_COUPLE`**

**`Gender\Gender::NAME_NOT_FOUND`**

**`Gender\Gender::ERROR_IN_NAME`**

**`Gender\Gender::ANY_COUNTRY`**

**`Gender\Gender::BRITAIN`**

**`Gender\Gender::IRELAND`**

**`Gender\Gender::USA`**

**`Gender\Gender::SPAIN`**

**`Gender\Gender::PORTUGAL`**

**`Gender\Gender::ITALY`**

**`Gender\Gender::MALTA`**

**`Gender\Gender::FRANCE`**

**`Gender\Gender::BELGIUM`**

**`Gender\Gender::LUXEMBOURG`**

**`Gender\Gender::NETHERLANDS`**

**`Gender\Gender::GERMANY`**

**`Gender\Gender::EAST_FRISIA`**

**`Gender\Gender::AUSTRIA`**

**`Gender\Gender::SWISS`**

**`Gender\Gender::ICELAND`**

**`Gender\Gender::DENMARK`**

**`Gender\Gender::NORWAY`**

**`Gender\Gender::SWEDEN`**

**`Gender\Gender::FINLAND`**

**`Gender\Gender::ESTONIA`**

**`Gender\Gender::LATVIA`**

**`Gender\Gender::LITHUANIA`**

**`Gender\Gender::POLAND`**

**`Gender\Gender::CZECH_REP`**

**`Gender\Gender::SLOVAKIA`**

**`Gender\Gender::HUNGARY`**

**`Gender\Gender::ROMANIA`**

**`Gender\Gender::BULGARIA`**

**`Gender\Gender::BOSNIA`**

**`Gender\Gender::CROATIA`**

**`Gender\Gender::KOSOVO`**

**`Gender\Gender::MACEDONIA`**

**`Gender\Gender::MONTENEGRO`**

**`Gender\Gender::SERBIA`**

**`Gender\Gender::SLOVENIA`**

**`Gender\Gender::ALBANIA`**

**`Gender\Gender::GREECE`**

**`Gender\Gender::RUSSIA`**

**`Gender\Gender::BELARUS`**

**`Gender\Gender::MOLDOVA`**

**`Gender\Gender::UKRAINE`**

**`Gender\Gender::ARMENIA`**

**`Gender\Gender::AZERBAIJAN`**

**`Gender\Gender::GEORGIA`**

**`Gender\Gender::KAZAKH_UZBEK`**

**`Gender\Gender::TURKEY`**

**`Gender\Gender::ARABIA`**

**`Gender\Gender::ISRAEL`**

**`Gender\Gender::CHINA`**

**`Gender\Gender::INDIA`**

**`Gender\Gender::JAPAN`**

**`Gender\Gender::KOREA`**

## Зміст

- [Gender\Gender::connect](gender-gender.connect.md) — З'єднання з
зовнішньою базою імен
- [Gender\Gender::\_\_construct](gender-gender.construct.md) -
Конструктор об'єкту класу Gender
- [Gender\Gender::country](gender-gender.country.md) — Отримати
текстове уявлення країни
- [Gender\Gender::get](gender-gender.get.md) — Отримати підлогу на ім'я
- [Gender\Gender::isNick](gender-gender.isnick.md) — Перевіряє,
є name0 псевдонімом для name1
- [Gender\Gender::similarNames](gender-gender.similarnames.md) -
Отримати схожі імена
