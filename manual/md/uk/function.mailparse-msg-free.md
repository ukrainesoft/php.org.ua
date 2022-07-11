- [«
mailparse_msg_extract_whole_part_file](function.mailparse-msg-extract-whole-part-file.md)
- [mailparse_msg_get_part_data
»](function.mailparse-msg-get-part-data.md)

- [PHP Manual](index.md)
- [Mailparse](ref.mailparse.md)
- Вивільнити MIME-ресурс

#mailparse_msg_free

(PECL mailparse \>u003d 0.9.0)

mailparse_msg_free — Вивільнити MIME-ресурс

### Опис

**mailparse_msg_free**(resource `$mimemail`): bool

Вивільняє `MIME`-ресурс.

### Список параметрів

`mimemail`
Коректний `MIME`-ресурс, створений
[mailparse_msg_create()](function.mailparse-msg-create.md) або
[mailparse_msg_parse_file()](function.mailparse-msg-parse-file.md).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Дивіться також

- [mailparse_msg_create()](function.mailparse-msg-create.md) -
Створює поштовий MIME-ресурс
- [mailparse_msg_parse_file()](function.mailparse-msg-parse-file.md) -
Розібрати файл
