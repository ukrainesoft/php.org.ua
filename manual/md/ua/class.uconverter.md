- [«
IntlPartsIterator::getBreakIterator](intlpartsiterator.getbreakiterator.md)
- [UConverter::\_\_construct »](uconverter.construct.md)

- [PHP Manual](index.md)
- [intl](book.intl.md)
- Клас UConverter

# Клас UConverter

(PHP 5 u003d 5.5.0, PHP 7, PHP 8, PECL u003d 3.0.0a1)

## Вступ

## Огляд класів

class **UConverter** {

/\* Constants \*/

const int `REASON_UNASSIGNED` u003d 0;

const int `REASON_ILLEGAL` u003d 1;

const int `REASON_IRREGULAR` u003d 2;

const int `REASON_RESET` u003d 3;

const int `REASON_CLOSE` u003d 4;

const int `REASON_CLONE` u003d 5;

const int `UNSUPPORTED_CONVERTER` u003d -1;

const int `SBCS` u003d 0;

const int `DBCS` u003d 1;

const int `MBCS` u003d 2;

const int `LATIN_1` u003d 3;

const int `UTF8` u003d 4;

const int `UTF16_BigEndian` u003d 5;

const int `UTF16_LittleEndian` u003d 6;

const int `UTF32_BigEndian` u003d 7;

const int `UTF32_LittleEndian` u003d 8;

const int `EBCDIC_STATEFUL` u003d 9;

const int `ISO_2022` u003d 10;

const int `LMBCS_1` u003d 11;

const int `LMBCS_2` u003d 12;

const int `LMBCS_3` u003d 13;

const int `LMBCS_4` u003d 14;

const int `LMBCS_5` u003d 15;

const int `LMBCS_6` u003d 16;

const int `LMBCS_8` u003d 17;

const int `LMBCS_11` u003d 18;

const int `LMBCS_16` u003d 19;

const int `LMBCS_17` u003d 20;

const int `LMBCS_18` u003d 21;

const int `LMBCS_19` u003d 22;

const int `LMBCS_LAST` u003d 22;

const int `HZ` u003d 23;

const int `SCSU` u003d 24;

const int `ISCII` u003d 25;

const int `US_ASCII` u003d 26;

const int `UTF7` u003d 27;

const int `BOCU1` u003d 28;

const int `UTF16` u003d 29;

const int `UTF32` u003d 30;

const int `CESU8` u003d 31;

const int `IMAP_MAILBOX` u003d 32;

/\* Методи \*/

public [\_\_construct](uconverter.construct.md)(?string
`$destination_encoding` u003d **`null`**, ?string `$source_encoding` u003d
**`null`**)

public [convert](uconverter.convert.md)(string `$str`, bool `$reverse`
u003d **`false`**): string\|false

public [fromUCallback](uconverter.fromucallback.md)(
int `$reason`,
array `$source`,
int `$codePoint`,
int `&$error`
): string\|int\|array\|null

public static [getAliases](uconverter.getaliases.md)(string `$name`):
array\|false\|null

public static [getAvailable](uconverter.getavailable.md)(): array

public
[getDestinationEncoding](uconverter.getdestinationencoding.md)():
string\|false\|null

public [getDestinationType](uconverter.getdestinationtype.md)():
int\|false\|null

public [getErrorCode](uconverter.geterrorcode.md)(): int

public [getErrorMessage](uconverter.geterrormessage.md)(): ?string

public [getSourceEncoding](uconverter.getsourceencoding.md)():
string\|false\|null

public [getSourceType](uconverter.getsourcetype.md)():
int\|false\|null

public static [getStandards](uconverter.getstandards.md)(): ?array

public [getSubstChars](uconverter.getsubstchars.md)():
string\|false\|null

public static [reasonText](uconverter.reasontext.md)(int `$reason`):
string

public
[setDestinationEncoding](uconverter.setdestinationencoding.md)(string
`$encoding`): bool

public [setSourceEncoding](uconverter.setsourceencoding.md)(string
`$encoding`): bool

public [setSubstChars](uconverter.setsubstchars.md)(string `$chars`):
bool

public [toUCallback](uconverter.toucallback.md)(
int `$reason`,
string `$source`,
string `$codeUnits`,
int `&$error`
): string\|int\|array\|null

public static [transcode](uconverter.transcode.md)(
string `$str`,
string `$toEncoding`,
string `$fromEncoding`,
?array `$options` u003d **`null`**
): string\|false

}

## Зумовлені константи

**`UConverter::REASON_UNASSIGNED`**

**`UConverter::REASON_ILLEGAL`**

**`UConverter::REASON_IRREGULAR`**

**`UConverter::REASON_RESET`**

**`UConverter::REASON_CLOSE`**

**`UConverter::REASON_CLONE`**

**`UConverter::UNSUPPORTED_CONVERTER`**

**`UConverter::SBCS`**

**`UConverter::DBCS`**

**`UConverter::MBCS`**

**`UConverter::LATIN_1`**

**`UConverter::UTF8`**

**`UConverter::UTF16_BigEndian`**

**`UConverter::UTF16_LittleEndian`**

**`UConverter::UTF32_BigEndian`**

**`UConverter::UTF32_LittleEndian`**

**`UConverter::EBCDIC_STATEFUL`**

**`UConverter::ISO_2022`**

**`UConverter::LMBCS_1`**

**`UConverter::LMBCS_2`**

**`UConverter::LMBCS_3`**

**`UConverter::LMBCS_4`**

**`UConverter::LMBCS_5`**

**`UConverter::LMBCS_6`**

**`UConverter::LMBCS_8`**

**`UConverter::LMBCS_11`**

**`UConverter::LMBCS_16`**

**`UConverter::LMBCS_17`**

**`UConverter::LMBCS_18`**

**`UConverter::LMBCS_19`**

**`UConverter::LMBCS_LAST`**

**`UConverter::HZ`**

**`UConverter::SCSU`**

**`UConverter::ISCII`**

**`UConverter::US_ASCII`**

**`UConverter::UTF7`**

**`UConverter::BOCU1`**

**`UConverter::UTF16`**

**`UConverter::UTF32`**

**`UConverter::CESU8`**

**`UConverter::IMAP_MAILBOX`**

## Зміст

- [UConverter::\_\_construct](uconverter.construct.md) - Створити
об'єкт UConverter
- [UConverter::convert](uconverter.convert.md) — Конвертувати
рядок з одного кодування до іншого
- [UConverter::fromUCallback](uconverter.fromucallback.md)
Callback-функція за промовчанням для "from"
- [UConverter::getAliases](uconverter.getaliases.md) — Отримати
псевдоніми для заданого імені
- [UConverter::getAvailable](uconverter.getavailable.md) — Отримати
доступні імена канонічних конверторів
- [UConverter::getDestinationEncoding](uconverter.getdestinationencoding.md)
— Отримати кодування призначення
- [UConverter::getDestinationType](uconverter.getdestinationtype.md)
— Отримати тип конвертера призначення
- [UConverter::getErrorCode](uconverter.geterrorcode.md) — Отримати
код останньої помилки об'єкта
- [UConverter::getErrorMessage](uconverter.geterrormessage.md) -
Отримати останнє повідомлення про помилку в об'єкті
- [UConverter::getSourceEncoding](uconverter.getsourceencoding.md)
Отримати вихідне кодування
- [UConverter::getSourceType](uconverter.getsourcetype.md)
Отримати тип конвертера джерела
- [UConverter::getStandards](uconverter.getstandards.md) — Отримати
стандарти, пов'язані з іменами конвертерів
- [UConverter::getSubstChars](uconverter.getsubstchars.md) -
Отримати заміну символів
- [UConverter::reasonText](uconverter.reasontext.md) — Отримати
рядкове уявлення причини зворотного виклику
- [UConverter::setDestinationEncoding](uconverter.setdestinationencoding.md)
— Встановити кодування призначення
- [UConverter::setSourceEncoding](uconverter.setsourceencoding.md)
Встановити вихідне кодування
- [UConverter::setSubstChars](uconverter.setsubstchars.md) -
Встановлення символів підстановки
- [UConverter::toUCallback](uconverter.toucallback.md)
Callback-функція за промовчанням для "to"
- [UConverter::transcode](uconverter.transcode.md) - Перетворює
рядок з одного кодування символів до іншого
