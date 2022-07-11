- [« tidy_get_output](function.tidy-get-output.md)
- [Лексер (Tokenizer) »](book.tokenizer.md)

- [PHP Manual](index.md)
- [Tidy](ref.tidy.md)
- Повертає число Tidy-попереджень, зустрінених у вказаному
документі

#tidy_warning_count

(PHP 5, PHP 7, PHP 8, PECL tidy u003d 0.5.2)

tidy_warning_count - Повертає число Tidy-попереджень, зустрінутих в
зазначеному документі

### Опис

**tidy_warning_count**([tidy](class.tidy.md) `$tidy`): int

Повертає число Tidy-попереджень, що зустрічаються у зазначеному документі.

### Список параметрів

`tidy`
Об'єкт [Tidy](class.tidy.md).

### Значення, що повертаються

Повертає кількість попереджень.

### Приклади

**Приклад #1 Приклад використання **tidy_warning_count()****

` <?php$html u003d '<p>тест</i><bogustag>фікція</bogustag>';$tidy u003d tidy_parse_string($html);echo tidy_error_count($tidy) . "
"; //1echo tidy_warning_count($tidy) . "
"; //5?> `

### Дивіться також

- [tidy_error_count()](function.tidy-error-count.md) - Повертає
число помилок Tidy, які зустрілися під час розгляду документа
- [tidy_access_count()](function.tidy-access-count.md) - Повертає
число доступних попереджень Tidy, що зустрілися у розглянутому
документі
