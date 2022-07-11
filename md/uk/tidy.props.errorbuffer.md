- [« tidy::diagnose](tidy.diagnose.md)
- [tidy::getConfig »](tidy.getconfig.md)

- [PHP Manual](index.md)
- [Tidy] (class.tidy.md)
- Повертає попередження та помилки, що виникли при розборі вказаного
документа

# tidy::$errorBuffer

#tidy_get_error_buffer

(PHP 5, PHP 7, PHP 8, PECL tidy u003d 0.5.2)

tidy::$errorBuffer -- tidy_get_error_buffer — Повертає попередження
та помилки, що виникли при розборі зазначеного документа

### Опис

Об'єктно-орієнтований стиль (property):

public string `$tidy->errorBuffer`;

Процедурний стиль:

**tidy_get_error_buffer**([tidy](class.tidy.md) `$tidy`):
string\|false

Повертає попередження та помилки, що виникли при розборі вказаного
документа.

### Список параметрів

`tidy`
Об'єкт [Tidy](class.tidy.md).

### Значення, що повертаються

Повертає буфер помилки у вигляді рядка або **`false`**, якщо буфер
порожній.

### Приклади

**Приклад #1 Приклад використання **tidy_get_error_buffer()****

` <?php$html u003d '<p>параграф</p>';$tidy u003d tidy_parse_string($html);echo tidy_get_error_buffer($tidy);/* або в ООП стилі: */echo $tidy->errorBuffer; ?> `

Результат виконання цього прикладу:

line 1 column 1 - Warning: missing <!DOCTYPE> declaration
line 1 column 1 - Warning: inserting missing 'title' element

### Дивіться також

- [tidy_access_count()](function.tidy-access-count.md) - Повертає
число доступних попереджень Tidy, що зустрілися у розглянутому
документі
- [tidy_error_count()](function.tidy-error-count.md) - Повертає
число помилок Tidy, які зустрілися під час розгляду документа
- [tidy_warning_count()](function.tidy-warning-count.md) -
Повертає число Tidy-попереджень, зустрінених у зазначеному
документі
