- [«
mailparse_rfc822_parse_addresses](function.mailparse-rfc822-parse-addresses.md)
- [mailparse_uudecode_all »] (function.mailparse-uudecode-all.md)

- [PHP Manual](index.md)
- [Mailparse](ref.mailparse.md)
- Кодує потік із файлу джерела та пише у файл одержувач.

#mailparse_stream_encode

(PECL mailparse \>u003d 0.9.0)

mailparse_stream_encode — Кодує потік із файлу джерела та пише в
файл отримувач.

### Опис

**mailparse_stream_encode**(resource `$sourcefp`, resource `$destfp`,
string `$encoding`): bool

Кодує за допомогою `encoding` потік із файлу джерела та пише у файл
отримувач.

### Список параметрів

`sourcefp`
Коректний файловий дескриптор джерела.

`destfp`
Коректний файловий дескриптор одержувача.

`encoding`
Одне з кодувань, що підтримуються модулем [mbstring](ref.mbstring.md).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **mailparse_stream_encode()****

` <?php//email.eml містить: hello, this is some textu003dhello.$fp u003dfopen('email.eml', 'r');$dest u003d tmpfile();mailparse_stream_encode($p, , "quoted-printable");rewind($dest);// Відображаємо контент нового файлаfpassthru($dest);?> `

Результат виконання цього прикладу:

hello, this is some textu003d3Dhello.
