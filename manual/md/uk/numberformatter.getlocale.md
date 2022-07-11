- [«
NumberFormatter::getErrorMessage](numberformatter.geterrormessage.md)
- [NumberFormatter::getPattern »](numberformatter.getpattern.md)

- [PHP Manual](index.md)
- [NumberFormatter](class.numberformatter.md)
- Отримує локаль засобу форматування

# NumberFormatter::getLocale

#numfmt_get_locale

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL intl u003d 1.0.0)

NumberFormatter::getLocale -- numfmt_get_locale — Отримує локаль
засоби форматування

### Опис

Об'єктно-орієнтований стиль

public **NumberFormatter::getLocale**(int `$type` u003d
**`ULOC_ACTUAL_LOCALE`**): string\|false

Процедурний стиль

**numfmt_get_locale**([NumberFormatter](class.numberformatter.md)
`$formatter`, int `$type` u003d **`ULOC_ACTUAL_LOCALE`**): string\|false

Отримує назву локалі засобу форматування.

### Список параметрів

`formatter`
Об'єкт [NumberFormatter](class.numberformatter.md).

`type`
Ви можете вибрати дійсну або фактичну локаль (
**`Locale::VALID_LOCALE`**, **`Locale::ACTUAL_LOCALE`**,
відповідно). За замовчуванням використовується фактичний локаль.

### Значення, що повертаються

Ім'я локалі, що використовується для створення засобу форматування або
**`false`** у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **numfmt_get_locale()****

` <?php$req     u003d 'fr_FR_PARIS';$fmt     u003d numfmt_create( $req,  NumberFormatter::DECIMAL);$res_val u003d numfmt_get_locale( $fmt, Locale::VALID_LOCALE );$res_act u003d numfmt_get_locale( $fmt, Locale:: ACTUAL_LOCALE );printf( "Запитана локаль: %s
Справжня локаль: %s
Фактична локаль: %s
",         $req, $res_val, $res_act );?> `

Результат виконання цього прикладу:

Запитана локаль: fr_FR_PARIS
Дійсний локаль: fr_FR
Фактична локаль: fr

### Дивіться також

- [numfmt_create()](numberformatter.create.md) - Створює засіб
форматування чисел
- [numfmt_get_error_code()](numberformatter.geterrorcode.md) -
Отримує останній код помилки засобу форматування
