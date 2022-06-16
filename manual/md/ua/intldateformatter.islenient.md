- [«
IntlDateFormatter::getTimeZone](intldateformatter.gettimezone.md)
- [IntlDateFormatter::localtime »](intldateformatter.localtime.md)

- [PHP Manual](index.md)
- [IntlDateFormatter](class.intldateformatter.md)
- Отримує поблажливість, що використовується для IntlDateFormatter

# IntlDateFormatter::isLenient

# datefmt_is_lenient

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL intl u003d 1.0.0)

IntlDateFormatter::isLenient -- datefmt_is_lenient — Отримує
поблажливість, що використовується для IntlDateFormatter

### Опис

Об'єктно-орієнтований стиль

public **IntlDateFormatter::isLenient**(): bool

Процедурний стиль

**datefmt_is_lenient**([IntlDateFormatter](class.intldateformatter.md)
`$formatter`): bool

Перевіряє, чи синтаксичний аналізатор є строгим або
поблажливим при інтерпретації вхідних даних, які не точно
відповідають шаблону.

### Список параметрів

`formatter`
Ресурс засобу форматування.

### Значення, що повертаються

Повертає **`true`**, якщо парсер поблажливий або **`false`**, якщо
строгий парсер. За промовчанням парсер поблажливий.

### Приклади

**Приклад #1 Приклад використання **datefmt_is_lenient()****

` <?php$fmt u003d datefmt_create(    'en_US',    IntlDateFormatter::FULL,    IntlDateFormatter::FULL,    'America/Los_Angeles',    IntlDateFormatter::GREGORIAN,    'dd/mm/yyyy');echo 'Снисходительность средства форматирования: ' ;if ($fmt->isLenient()) {    echo 'Так';} else {   echo 'Ні';}datefmt_parse($fmt, '35/13/1971');echo 
Спроба виконати синтаксичний аналіз 35/13/1971.
Результат: " . datefmt_parse($fmt, '35/13/1971');if (intl_get_error_code() !u003d 0) {   echo "
Помилка: " . intl_get_error_message();   echo "
Код помилки: " . intl_get_error_code();}datefmt_set_lenient($fmt,false);echo 'Тепер поблажливість засоби форматування: ';if ($fmt->isLenient())                 ;}datefmt_parse($fmt, '35/13/1971');echo "
Спроба виконати синтаксичний аналіз 35/13/1971.
Результат: " . datefmt_parse($fmt, '35/13/1971');if (intl_get_error_code() !u003d 0) {   echo "
Помилка: " . intl_get_error_message();   echo "
Код помилки: " . intl_get_error_code();}?> `

**Приклад #2 Приклад використання в об'єктно-орієнтованому стилі**

` <?php$fmt u003d new IntlDateFormatter(    'en_US',    IntlDateFormatter::FULL,    IntlDateFormatter::FULL,    'America/Los_Angeles',    IntlDateFormatter::GREGORIAN,    "dd/mm/yyyy");echo "Снисходительность средства форматирования: ";if ($fmt->isLenient()) {    echo 'Так';} else {   echo 'Ні';}$fmt->parse('35/13/1971');echo ""
Спроба виконати синтаксичний аналіз 35/13/1971.
Результат: " . $fmt->parse('35/13/1971');if (intl_get_error_code() !u003d 0){    echo "
Помилка: " . intl_get_error_message();   echo "
Код помилки: " . intl_get_error_code();}$fmt->setLenient(FALSE);echo 'Тепер поблажливість засоби форматування: ';if ($fmt->isLenient())                ';}$fmt->parse('35/13/1971');echo "
Спроба виконати синтаксичний аналіз 35/13/1971.
Результат: " . $fmt->parse('35/13/1971');if (intl_get_error_code() !u003d 0) {   echo "
Помилка: " . intl_get_error_message();   echo "
Код помилки: " . intl_get_error_code();}?> `

Результат виконання цього прикладу:

Поблажливість засобу форматування: Так
Спроба виконати синтаксичний аналіз '35/13/1971'.
Результат: -2147483
Тепер поблажливість засобу форматування: Ні
Спроба виконати синтаксичний аналіз '35/13/1971'.
Результат:
Помилка: Date parsing failed: U_PARSE_ERROR
Код помилки: 9

### Дивіться також

- [datefmt_set_lenient()](intldateformatter.setlenient.md) -
Встановлює м'який режим аналізатора
- [datefmt_create()](intldateformatter.create.md) - Створює засіб
форматування дати
