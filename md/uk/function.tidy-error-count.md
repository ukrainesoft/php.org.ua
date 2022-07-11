- [« tidy_config_count](function.tidy-config-count.md)
- [tidy_get_output »](function.tidy-get-output.md)

- [PHP Manual](index.md)
- [Tidy](ref.tidy.md)
- Повертає кількість помилок Tidy, що зустрілися під час розгляду
документа

#tidy_error_count

(PHP 5, PHP 7, PHP 8, PECL tidy u003d 0.5.2)

tidy_error_count — Повертає кількість помилок Tidy, що зустрілися при
розгляді документа

### Опис

**tidy_error_count**([tidy](class.tidy.md) `$tidy`): int

Повертає кількість помилок Tidy, що зустрілися під час розгляду документа.

### Список параметрів

`tidy`
Об'єкт [Tidy](class.tidy.md).

### Значення, що повертаються

Повертає кількість помилок Tidy.

### Приклади

**Приклад #1 Приклад використання **tidy_error_count()****

` <?php$html u003d '<p>test</i><bogustag>bogus</bogustag>';$tidy u003d tidy_parse_string($html);echo tidy_error_count($tidy) . "
"; //1echo $tidy->errorBuffer;?> `

Результат виконання цього прикладу:

1
line 1 column 1 - Warning: missing <!DOCTYPE> declaration
line 1 column 8 - Warning: discarding unexpected </i>
line 2 column 1 - Error: <bogustag> is not recognized!
line 2 column 1 - Warning: discarding unexpected <bogustag>
line 2 column 16 - Warning: discarding unexpected </bogustag>
line 1 column 1 - Warning: inserting missing 'title' element

### Дивіться також

- [tidy_access_count()](function.tidy-access-count.md) - Повертає
число доступних попереджень Tidy, що зустрілися у розглянутому
документі
- [tidy_warning_count()](function.tidy-warning-count.md) -
Повертає число Tidy-попереджень, зустрінених у зазначеному
документі
