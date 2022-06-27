- [«Collator::sort](collator.sort.md)
- [NumberFormatter::create »](numberformatter.create.md)

- [PHP Manual](index.md)
- [intl](book.intl.md)
- The NumberFormatter class

# The NumberFormatter class

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL intl u003d 1.0.0)

## Вступ

Програми зберігають і оперують числами використовуючи, що не залежить від локалі,
бінарне уявлення. Коли ж вони виводяться на екран або друкуються,
вони конвертуються у рядки відповідно до вимог локалі. До
Наприклад, число 12345.67 виведеться як "12,345.67" у локалі US, як "12
345,67" у французькій локалі і як "12.345,67" у німецькій.

Викликаючи методи цього класу, ви можете форматувати числа, грошові
одиниці та відсоткові величини у поданні потрібної локалі. Клас
NumberFormatter чутливий до локалі, тому вам необхідно
буде створювати новий екземпляр класу для кожної локалі. Методи
NumberFormatter форматує примітивні типи чисел, такі як "double",
і виводять їх у специфічному для локалі поданні.

Для грошових одиниць ви можете використовувати тип форматування грошових
одиниць, який повертає рядок з відформатованим числом та символом
грошової одиниці. Звичайно NumberFormatter не знає про курси обміну,
так що для всіх грошових одиниць буде повернено одне й те саме число. До
Наприклад, для числа 9988776.65 результат буде такий:

– 9 988 776,65 € для Франції
- 9.988.776,65 € для Німеччини
- $9,988,776.65 для США

Для форматування процентних величин використовується свій тип
форматування. При такому форматуванні число 0.75 буде виведене як
75%.

Для більш складного форматування, наприклад, для розбору числа,
використовується форматування, засноване на наборі правил.

## Огляд класів

class **NumberFormatter** {

/\* Методи \*/

public [\_\_construct](numberformatter.create.md)(string `$locale`,
int `$style`, ?string `$pattern` u003d **`null`**)

public static [create](numberformatter.create.md)(string `$locale`,
int `$style`, ?string `$pattern` u003d **`null`**):
?[NumberFormatter](class.numberformatter.md)

public [formatCurrency](numberformatter.formatcurrency.md)(float
`$amount`, string `$currency`): string\|false

public [format](numberformatter.format.md)(int\|float `$num`, int
`$type` u003d NumberFormatter::TYPE_DEFAULT): string\|false

public [getAttribute](numberformatter.getattribute.md)(int
`$attribute`): int\|float\|false

public [getErrorCode](numberformatter.geterrorcode.md)(): int

public [getErrorMessage](numberformatter.geterrormessage.md)(): string

public [getLocale](numberformatter.getlocale.md)(int `$type` u003d
**`ULOC_ACTUAL_LOCALE`**): string\|false

public [getPattern](numberformatter.getpattern.md)(): string\|false

public [getSymbol](numberformatter.getsymbol.md)(int `$symbol`):
string\|false

public [getTextAttribute](numberformatter.gettextattribute.md)(int
`$attribute`): string\|false

public [parseCurrency](numberformatter.parsecurrency.md)(string
`$string`, string `&$currency`, int `&$offset` u003d **`null`**):
float\|false

public [parse](numberformatter.parse.md)(string `$string`, int `$type`
u003d NumberFormatter::TYPE_DOUBLE, int `&$offset` u003d **`null`**):
int\|float\|false

public [setAttribute](numberformatter.setattribute.md)(int
`$attribute`, int\|float `$value`): bool

public [setPattern](numberformatter.setpattern.md)(string `$pattern`):
bool

public [setSymbol](numberformatter.setsymbol.md)(int `$symbol`, string
`$value`): bool

public [setTextAttribute](numberformatter.settextattribute.md)(int
`$attribute`, string `$value`): bool

}

## Зумовлені константи

Ці стилі використовуються функцією
[numfmt_create()](numberformatter.create.md) для визначення типу
форматування.

**`NumberFormatter::PATTERN_DECIMAL`** (int)
Формат із десятковою точкою заданий шаблоном

**`NumberFormatter::DECIMAL`** (int)
Формат із десятковою точкою

**`NumberFormatter::CURRENCY`** (int)
грошовий формат

**`NumberFormatter::PERCENT`** (int)
Відсотковий формат

**`NumberFormatter::SCIENTIFIC`** (int)
Науковий формат

**`NumberFormatter::SPELLOUT`** (int)
Розібраний формат на основі правил

**`NumberFormatter::ORDINAL`** (int)
Чисельний формат на основі правил

**`NumberFormatter::DURATION`** (int)
Формат тривалості на основі правил

**`NumberFormatter::PATTERN_RULEBASED`** (int)
Формат на основі правил за шаблоном

**`NumberFormatter::CURRENCY_ACCOUNTING`** (int)
Формат валюти для обліку, наприклад, `($3.00)` для негативної суми в
валюті замість `-$3.00`. Доступно з PHP 7.4.1 та ICU 53.

**`NumberFormatter::DEFAULT_STYLE`** (int)
Формат за замовчуванням для локалі

**`NumberFormatter::IGNORE`** (int)
Псевдонім для PATTERN_DECIMAL

Ці константи визначають як будуть розібрані або відформатовані
числа. Їх необхідно передавати функціям
[numfmt_format()](numberformatter.format.md) та
[numfmt_parse()](numberformatter.parse.md).

**`NumberFormatter::TYPE_DEFAULT`** (int)
Тип визначається типом змінної

**`NumberFormatter::TYPE_INT32`** (int)
Форматування/розбір як 32-бітного цілого

**`NumberFormatter::TYPE_INT64`** (int)
Форматування/розбір як 64-бітного цілого

**`NumberFormatter::TYPE_DOUBLE`** (int)
Форматування/розбір як раціонального (float)

**`NumberFormatter::TYPE_CURRENCY`** (int)
Форматування/розбір як грошової одиниці

Атрибут формату чисел для
[numfmt_get_attribute()](numberformatter.getattribute.md) та
[numfmt_set_attribute()](numberformatter.setattribute.md).

**`NumberFormatter::PARSE_INT_ONLY`** (int)
Розбирати лише цілі.

**`NumberFormatter::GROUPING_USED`** (int)
Використовувати групуючий роздільник.

**`NumberFormatter::DECIMAL_ALWAYS_SHOWN`** (int)
Завжди показувати десяткову точку.

**`NumberFormatter::MAX_INTEGER_DIGITS`** (int)
Максимальна кількість цілих цифр.

**`NumberFormatter::MIN_INTEGER_DIGITS`** (int)
Мінімальна кількість цілих цифр.

**`NumberFormatter::INTEGER_DIGITS`** (int)
Цілих цифр.

**`NumberFormatter::MAX_FRACTION_DIGITS`** (int)
Максимальна кількість цифр після коми.

**`NumberFormatter::MIN_FRACTION_DIGITS`** (int)
Мінімальна кількість цифр після коми.

**`NumberFormatter::FRACTION_DIGITS`** (int)
Число цифр після коми.

**`NumberFormatter::MULTIPLIER`** (int)
Множина.

**`NumberFormatter::GROUPING_SIZE`** (int)
Розмір угруповання.

**`NumberFormatter::ROUNDING_MODE`** (int)
Режим заокруглення.

**`NumberFormatter::ROUNDING_INCREMENT`** (int)
Збільшення округлення.

**`NumberFormatter::FORMAT_WIDTH`** (int)
Ширина, на яку буде доповнено виведення format().

**`NumberFormatter::PADDING_POSITION`** (int)
Позиція з якою доповнення матиме місце. Дивіться опис
констант доповнення.

**`NumberFormatter::SECONDARY_GROUPING_SIZE`** (int)
Вторинний розмір угруповання.

**`NumberFormatter::SIGNIFICANT_DIGITS_USED`** (int)
Використовувати цифри.

**`NumberFormatter::MIN_SIGNIFICANT_DIGITS`** (int)
Мінімальна кількість значущих цифр.

**`NumberFormatter::MAX_SIGNIFICANT_DIGITS`** (int)
Максимальна кількість цифр.

**`NumberFormatter::LENIENT_PARSE`** (int)
Режим поблажливі синтаксичного аналізу для заснованих на правилах
форматів.

Атрибути тексту форматування чисел, що використовуються в
[numfmt_get_text_attribute()](numberformatter.gettextattribute.md) та
[numfmt_set_text_attribute()](numberformatter.settextattribute.md).

**`NumberFormatter::POSITIVE_PREFIX`** (int)
Позитивний префікс.

**`NumberFormatter::POSITIVE_SUFFIX`** (int)
Позитивний суфікс.

**`NumberFormatter::NEGATIVE_PREFIX`** (int)
Негативний префікс.

**`NumberFormatter::NEGATIVE_SUFFIX`** (int)
Негативний суфікс.

**`NumberFormatter::PADDING_CHARACTER`** (int)
Символ для доповнення рядка.

**`NumberFormatter::CURRENCY_CODE`** (int)
Код грошової одиниці ISO.

**`NumberFormatter::DEFAULT_RULESET`** (int)
Набір стандартних правил. Доступно лише для форматування на основі
правил.

**`NumberFormatter::PUBLIC_RULESETS`** (int)
Публічний набір правил. Доступно лише для форматування на основі
правил. Цей атрибут доступний лише для читання. Публічний набір правил
повертається у вигляді рядка, в якому кожен набір правил відокремлений крапкою
з комою (;).

Символи форматування чисел для
[numfmt_get_symbol()](numberformatter.getsymbol.md) та
[numfmt_set_symbol()](numberformatter.setsymbol.md).

**`NumberFormatter::DECIMAL_SEPARATOR_SYMBOL`** (int)
Десятковий роздільник.

**`NumberFormatter::GROUPING_SEPARATOR_SYMBOL`** (int)
Розділювач груп.

**`NumberFormatter::PATTERN_SEPARATOR_SYMBOL`** (int)
Символ роздільника в шаблон.

**`NumberFormatter::PERCENT_SYMBOL`** (int)
Відсоток символ.

**`NumberFormatter::ZERO_DIGIT_SYMBOL`** (int)
Нуль.

**`NumberFormatter::DIGIT_SYMBOL`** (int)
Символ, що представляє цифру в шаблон.

**`NumberFormatter::MINUS_SIGN_SYMBOL`** (int)
Мінус знак.

**`NumberFormatter::PLUS_SIGN_SYMBOL`** (int)
Плюс знак.

**`NumberFormatter::CURRENCY_SYMBOL`** (int)
Значок грошової одиниці символ.

**`NumberFormatter::INTL_CURRENCY_SYMBOL`** (int)
The international currency symbol.

**`NumberFormatter::MONETARY_SEPARATOR_SYMBOL`** (int)
Грошовий роздільник.

**`NumberFormatter::EXPONENTIAL_SYMBOL`** (int)
Символ ступеня десяти.

**`NumberFormatter::PERMILL_SYMBOL`** (int)
Символ проміле.

**`NumberFormatter::PAD_ESCAPE_SYMBOL`** (int)
Екранування символу заповнювача.

**`NumberFormatter::INFINITY_SYMBOL`** (int)
Символ нескінченності.

**`NumberFormatter::NAN_SYMBOL`** (int)
Символ NAN (Not-a-number, нечисло).

**`NumberFormatter::SIGNIFICANT_DIGIT_SYMBOL`** (int)
Значок цифри.

**`NumberFormatter::MONETARY_GROUPING_SEPARATOR_SYMBOL`** (int)
Розділювач груп для фінансового формату.

Режими округлення для
[numfmt_get_attribute()](numberformatter.getattribute.md) та
[numfmt_set_attribute()](numberformatter.setattribute.md) з атрибутом
**`NumberFormatter::ROUNDING_MODE`**.

**`NumberFormatter::ROUND_CEILING`** (int)
Округлення у бік позитивної нескінченності.

**`NumberFormatter::ROUND_DOWN`** (int)
Округлення вниз.

**`NumberFormatter::ROUND_FLOOR`** (int)
Округлення у бік негативної нескінченності.

**`NumberFormatter::ROUND_HALFDOWN`** (int)
Округлення у бік "найближчого сусіда" крім випадків, коли вони на
однаковій відстані. У цьому випадку заокруглення вниз.

**`NumberFormatter::ROUND_HALFEVEN`** (int)
Округлення у бік "найближчого сусіда" крім випадків, коли вони на
однаковій відстані. І тут округлення до парного значення.

**`NumberFormatter::ROUND_HALFUP`** (int)
Округлення у бік "найближчого сусіда" крім випадків, коли вони на
однаковій відстані. В цьому випадку заокруглення вгору.

**`NumberFormatter::ROUND_UP`** (int)
Округлення вгору.

Значення позиції доповнення для
[numfmt_get_attribute()](numberformatter.getattribute.md) та
[numfmt_set_attribute()](numberformatter.setattribute.md) з атрибутом
**`NumberFormatter::PADDING_POSITION`**.

**`NumberFormatter::PAD_AFTER_PREFIX`** (int)
Символи доповнення вставляються після префіксу.

**`NumberFormatter::PAD_AFTER_SUFFIX`** (int)
Символи доповнення вставляються після суфіксу.

**`NumberFormatter::PAD_BEFORE_PREFIX`** (int)
Символи доповнення вставляються до префіксу.

**`NumberFormatter::PAD_BEFORE_SUFFIX`** (int)
Символи доповнення вставляються до суфіксу.

## Дивіться також

- [»  ICU formatting
documentation](https://unicode-org.github.io/icu/userguide/format_parse/)
- [» ICU. Форматування
чисел](https://unicode-org.github.io/icu/userguide/format_parse/numbers/)
- [» ICU. Форматування десяткових
дробів](http://www.icu-project.org/apiref/icu4c/classDecimalFormat.md#details)
- [»  ICU. Форматування на основі
правил](http://www.icu-project.org/apiref/icu4c/classRuleBasedNumberFormat.md#details)

## Зміст

- [NumberFormatter::create](numberformatter.create.md) — Створює
засіб форматування чисел
- [NumberFormatter::formatCurrency](numberformatter.formatcurrency.md)
- Форматує значення валюти
- [NumberFormatter::format](numberformatter.format.md) - Форматує
число
- [NumberFormatter::getAttribute](numberformatter.getattribute.md) -
Отримує атрибут
- [NumberFormatter::getErrorCode](numberformatter.geterrorcode.md)
Отримує останній код помилки засобу форматування
- [NumberFormatter::getErrorMessage](numberformatter.geterrormessage.md)
— Отримує останнє повідомлення про помилку засобу форматування
- [NumberFormatter::getLocale](numberformatter.getlocale.md) -
Отримує локаль засобу форматування
- [NumberFormatter::getPattern](numberformatter.getpattern.md) -
Отримує шаблон засобу форматування
- [NumberFormatter::getSymbol](numberformatter.getsymbol.md) -
Отримує значення символу
- [NumberFormatter::getTextAttribute](numberformatter.gettextattribute.md)
— Отримує текстовий атрибут
- [NumberFormatter::parseCurrency](numberformatter.parsecurrency.md)
- Розбирає номер валюти
- [NumberFormatter::parse](numberformatter.parse.md) - Розбирає
число
- [NumberFormatter::setAttribute](numberformatter.setattribute.md) -
Встановлює атрибут
- [NumberFormatter::setPattern](numberformatter.setpattern.md) -
Встановлює шаблон засобу форматування
- [NumberFormatter::setSymbol](numberformatter.setsymbol.md) -
Встановлює значення символу
- [NumberFormatter::setTextAttribute](numberformatter.settextattribute.md)
— Встановлює текстовий атрибут
