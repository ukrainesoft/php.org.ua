- [«tidy_access_count](function.tidy-access-count.md)
- [tidy_error_count »](function.tidy-error-count.md)

- [PHP Manual](index.md)
- [Tidy](ref.tidy.md)
- Повертає кількість помилок конфігурації Tidy, що зустрілися при
розгляді документа

#tidy_config_count

(PHP 5, PHP 7, PHP 8, PECL tidy u003d 0.5.2)

tidy_config_count — Повертає кількість помилок конфігурації Tidy,
зустрілися під час розгляду документа

### Опис

**tidy_config_count**([tidy](class.tidy.md) `$tidy`): int

Повертає кількість помилок у конфігурації заданого об'єкта `tidy`.

### Список параметрів

`tidy`
Об'єкт [Tidy](class.tidy.md).

### Значення, що повертаються

Повертає кількість помилок.

### Приклади

**Приклад #1 Приклад використання **tidy_config_count()****

` <?php$html u003d '<p>test</I>';$config u003d array('doctype' u003d> 'bogus');$tidy u003d tidy_parse_string($html, $config);/* Виведе 1, тому як 'bogus' некоректне оголошення типу документу */echo tidy_config_count($tidy);?> `
