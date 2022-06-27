- [«
IntlDateFormatter::setCalendar](intldateformatter.setcalendar.md)
- [IntlDateFormatter::setPattern »](intldateformatter.setpattern.md)

- [PHP Manual](index.md)
- [IntlDateFormatter](class.intldateformatter.md)
- Встановлює м'який режим аналізатора

# IntlDateFormatter::setLenient

# datefmt_set_lenient

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL intl u003d 1.0.0)

IntlDateFormatter::setLenient -- datefmt_set_lenient — Встановлює
м'який режим аналізатора

### Опис

Об'єктно-орієнтований стиль

public **IntlDateFormatter::setLenient**(bool `$lenient`): void

Процедурний стиль

**datefmt_set_lenient**([IntlDateFormatter](class.intldateformatter.md)
`$formatter`, bool `$lenient`): void

Визначає, чи є режим аналізатора строгим або м'яким при
інтерпретації вхідних даних, які точно не відповідають
шаблон. Увімкнення м'якого синтаксичного аналізу дозволяє
синтаксичному аналізатору приймати помилкові шаблони дати або
часу, аналізуючи якнайбільше для отримання значення. Зайвий
пробіл, нерозпізнані токени або неприпустимі значення ("February
30th") не приймаються.

### Список параметрів

`formatter`
Ресурс засобу форматування.

`lenient`
Встановлює, чи є аналізатор vzurbv чи ні, за замовчуванням
**`true`** (м'який).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **datefmt_set_lenient()****

` <?php$fmt u003d datefmt_create(    'en_US',    IntlDateFormatter::FULL,    IntlDateFormatter::FULL,    'America/Los_Angeles',    IntlDateFormatter::GREGORIAN,    'dd/MM/yyyy');echo 'Мягкий режим средства форматирования : ';if ($fmt->isLenient()) {   echo 'ТАК';} else {   echo 'НЕ''}datefmt_parse($fmt, '35/13/1971');echo 
Спроба розібрати 35/13/1971.
Результат : " . datefmt_parse($fmt, '35/13/1971');if (intl_get_error_code() !u003d 0) {    echo "
Повідомлення про помилка : " . intl_get_error_message();    echo "
Код помилки : " . intl_get_error_code();}datefmt_set_lenient($fmt, false);echo "
Тепер м'який режим засоби форматування : ";if ($fmt->isLenient()) {   echo 'ТАК';} else {   echo 'НЕТ';}datefmt_parse('3''
Спроба розібрати 35/13/1971.
Результат : " . datefmt_parse($fmt, '35/13/1971');if (intl_get_error_code() !u003d 0) {    echo "
Повідомлення про помилка : ".intl_get_error_message();    echo "
Код помилки : ".intl_get_error_code();}?> `

**Приклад #2 Приклад використання в об'єктно-орієнтованому стилі**

` <?php$fmt u003d new IntlDateFormatter(    'en_US',    IntlDateFormatter::FULL,    IntlDateFormatter::FULL,    'America/Los_Angeles',    IntlDateFormatter::GREGORIAN,    'dd/MM/yyyy');echo 'Мягкий режим средства форматирования : ';if ($fmt->isLenient()) {   echo 'ТАК';} else {   echo 'НЕМАЄ';}$fmt->parse('35/13/1971');echo "
Спроба розібрати 35/13/1971.
Результат : " . $fmt->parse('35/13/1971');if (intl_get_error_code() !u003d 0) {    echo "
Повідомлення про помилка : " . intl_get_error_message();    echo "
Код помилки : " . intl_get_error_code();}$fmt->setLenient(FALSE);echo "
Тепер м'який режим засоби форматування : ";if ($fmt->isLenient()) {   echo 'ТА''}}else {   echo 'НЕТ';}$fmt->1''
Спроба розібрати 35/13/1971.
Результат : " . $fmt->parse('35/13/1971');if (intl_get_error_code() !u003d 0) {    echo "
Повідомлення про помилка : " . intl_get_error_message();    echo "
Код помилки : " . intl_get_error_code();}?> `

Результат виконання цього прикладу:

М'який режим засобу форматування: ТАК
Спроба розібрати '35/13/1971'.
Результат : 66038400
Тепер м'який режим форматування : НІ
Спроба розібрати '35/13/1971'.
Результат:
Повідомлення про помилку : Date parsing failed: U_PARSE_ERROR
Код помилки: 9

### Дивіться також

- [datefmt_is_lenient()](intldateformatter.islenient.md) - Отримує
поблажливість, що використовується для IntlDateFormatter
- [datefmt_create()](intldateformatter.create.md) - Створює засіб
форматування дати
