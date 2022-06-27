- [«
imap_rfc822_parse_headers](function.imap-rfc822-parse-headers.md)
- [imap_savebody »](function.imap-savebody.md)

- [PHP Manual](index.md)
- [Функції IMAP](ref.imap.md)
- Отримати коректно сформовану e-mail адресу, задану ім'ям
скриньки, хоста та персональною інформацією

#imap_rfc822_write_address

(PHP 4, PHP 5, PHP 7, PHP 8)

imap_rfc822_write_address — Отримати коректно сформований e-mail
адресу, задану ім'ям скриньки, хоста та персональною інформацією

### Опис

**imap_rfc822_write_address**(string `$mailbox`, string `$hostname`,
string `$personal`): string\|false

Повертає поштову адресу сформовану відповідно до
[» RFC2822](http://www.faqs.org/rfcs/rfc2822).

### Список параметрів

`mailbox`
Ім'я поштової скриньки. Докладніше читайте в описі
[imap_open()](function.imap-open.md)

**Увага**
Якщо
[imap.enable_insecure_rsh](imap.configuration.md#ini.imap.enable-insecure-rsh)
не вимкнено, то передача в цей параметр не перевірених даних *не
безпечна*.

`hostname`
Частина e-mail, що описує хост

`personal`
Ім'я власника облікового запису

### Значення, що повертаються

Повертає рядок, що містить поштову адресу у сформовану в
відповідно до [»RFC2822](http://www.faqs.org/rfcs/rfc2822) або
**`false`** у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **imap_rfc822_write_address()****

` <?phpecho imap_rfc822_write_address("hartmut", "example.com", "Hartmut Holzgraefe");?> `

Результат виконання цього прикладу:

Hartmut Holzgraefe <hartmut@example.com>
