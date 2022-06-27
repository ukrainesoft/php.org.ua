- [«mailparse_msg_parse_file](function.mailparse-msg-parse-file.md)
- [mailparse_rfc822_parse_addresses
»](function.mailparse-rfc822-parse-addresses.md)

- [PHP Manual](index.md)
- [Mailparse](ref.mailparse.md)
- Інкрементальне розбирає дані у буфер

#mailparse_msg_parse

(PECL mailparse \>u003d 0.9.0)

mailparse_msg_parse - Інкрементальне розбирає дані в буфер

### Опис

**mailparse_msg_parse**(resource `$mimemail`, string `$data`): bool

Інкрементальне розбирає дані заданий MIME-ресурс.

Функція дозволяє обробляти файл частинами, замість читати
та обробляти відразу весь масив даних.

### Список параметрів

`mimemail`
Коректний `MIME`-ресурс.

`data`
> **Примітка**:
>
> Повідомлення, що міститься в `filename`, має закінчуватися новою
> рядком (`CRLF`); інакше останній рядок повідомлення не буде
> проаналізовано.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.
