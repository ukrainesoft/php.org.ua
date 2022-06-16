- [« IntlDateFormatter::isLenient](intldateformatter.islenient.md)
- [IntlDateFormatter::parse »](intldateformatter.parse.md)

- [PHP Manual](index.md)
- [IntlDateFormatter](class.intldateformatter.md)
- Перетворює рядок на значення часу на основі поля

# IntlDateFormatter::localtime

#datefmt_localtime

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL intl u003d 1.0.0)

IntlDateFormatter::localtime -- datefmt_localtime — Перетворює рядок на
значення часу на основі поля

### Опис

Об'єктно-орієнтований стиль

public **IntlDateFormatter::localtime**(string `$string`, int `&$offset`
u003d **`null`**): array\|false

Процедурний стиль

**datefmt_localtime**([IntlDateFormatter](class.intldateformatter.md)
`$formatter`, string `$string`, int `&$offset` u003d **`null`**):
array\|false

Перетворює рядок $value на значення часу на основі полів (масив
різних полів), починаючи з $parse_pos і використовуючи якнайбільшу
частина вхідного значення.

### Список параметрів

`formatter`
Ресурс засобу форматування.

`string`
Рядок для перетворення під час.

`offset`
Позиція, з якої слід розпочати синтаксичний аналіз у $value
(починаючи з нуля). Якщо до використання $value помилки не виникає,
$parse_pos міститиме -1, інакше він міститиме
позицію, де закінчився синтаксичний аналіз. Якщо $parse_pos\>
`strlen($value)`, аналіз негайно завершується помилкою.

### Значення, що повертаються

Масив цілих чисел, сумісний із місцевим часом: містить 24-годинний
значення у полі tm_hour або **`false`** у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **datefmt_localtime()****

` <?php$fmt u003d datefmt_create(    'en_US',    IntlDateFormatter::FULL,    IntlDateFormatter::FULL,    'America/Los_Angeles',    IntlDateFormatter::GREGORIAN);$arr u003d datefmt_localtime($fmt, 'Wednesday, December 31, 1969 4:00:00PM PT', 0); }}?> `

**Приклад #2 OO example**

` <?php$fmt u003d new IntlDateFormatter(    'en_US',    IntlDateFormatter::FULL,    IntlDateFormatter::FULL,    'America/Los_Angeles',    IntlDateFormatter::GREGORIAN);$arr u003d $fmt->localtime('Wednesday, December 31 , 1969 4:00:00 PM PT', 0);echo 'Перетворений висновок: ';if ($arr) {    foreach ($arr as $key u003d> $value)    | }}?> `

Результат виконання цього прикладу:

Перетворений висновок: tm_sec : 0 , tm_min : 0 , tm_hour : 16 , tm_year : 1969 ,
tm_mday : 31 , tm_wday : 4 , tm_yday : 365 , tm_mon : 11 , tm_isdst : 0 ,

### Дивіться також

- [datefmt_create()](intldateformatter.create.md) - Створює засіб
форматування дати
- [datefmt_format()](intldateformatter.format.md) - Форматує
значення дати/часу у вигляді рядка
- [datefmt_parse()](intldateformatter.parse.md) - Перетворює рядок
значення позначки часу
- [datefmt_get_error_code()](intldateformatter.geterrorcode.md) -
Отримує код помилки останньої операції
- [datefmt_get_error_message()](intldateformatter.geterrormessage.md) -
Отримує текст помилки останньої операції
