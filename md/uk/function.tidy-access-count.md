- [«ob_tidyhandler](function.ob-tidyhandler.md)
- [tidy_config_count »](function.tidy-config-count.md)

- [PHP Manual](index.md)
- [Tidy](ref.tidy.md)
- Повертає кількість доступних попереджень Tidy, що зустрілися у
розглянутому документі

#tidy_access_count

(PHP 5, PHP 7, PHP 8, PECL tidy u003d 0.5.2)

tidy_access_count — Повертає кількість доступних попереджень Tidy,
зустрілися у розглянутому документі

### Опис

**tidy_access_count**([tidy](class.tidy.md) `$tidy`): int

**tidy_access_count()** повертає кількість доступних попереджень,
знайдених у розглянутому документі.

### Список параметрів

`tidy`
Об'єкт [Tidy](class.tidy.md).

### Значення, що повертаються

Повертає кількість попереджень.

### Приклади

**Приклад #1 Приклад використання **tidy_access_count()****

` <?php$html u003d'<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 3.2//EN"><html><head><title>Title</title></head><body>< p><img srcu003d"img.png"></p></body></html>';// вибирається рівень перевірки доступності: 1, 2 або 3$config u003d array('accessibility-check' u003d> 3);$tidy u003d new tidy();$tidy->parseString($html, $config);$tidy->cleanRepair();/* Неможна забувати про цей дзвінок! */$tidy->diagnose();echo tidy_access_count($tidy); //5?> `

### Примітки

> **Примітка**:
>
> Відповідно до дизайну TidyLib, слід викликати
> [tidy_diagnose()](tidy.diagnose.md) до **tidy_access_count()** або
> останній завжди повертатиме `0`. Необхідно також вказувати
> параметр конфігурації `accessibility-check`.

### Дивіться також

- [tidy_error_count()](function.tidy-error-count.md) - Повертає
число помилок Tidy, які зустрілися під час розгляду документа
- [tidy_warning_count()](function.tidy-warning-count.md) -
Повертає число Tidy-попереджень, зустрінених у зазначеному
документі
