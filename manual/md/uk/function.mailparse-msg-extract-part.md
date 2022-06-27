- [«
mailparse_msg_extract_part_file](function.mailparse-msg-extract-part-file.md)
- [mailparse_msg_extract_whole_part_file
»](function.mailparse-msg-extract-whole-part-file.md)

- [PHP Manual](index.md)
- [Mailparse](ref.mailparse.md)
- Вийняти/декодувати секцію із повідомленням

#mailparse_msg_extract_part

(PECL mailparse \>u003d 0.9.0)

mailparse_msg_extract_part — Вийняти/декодувати секцію з повідомленням

### Опис

**mailparse_msg_extract_part**(resource `$mimemail`, string `$msgbody`,
[callable](language.types.callable.md) `$callbackfunc` u003d ?): void

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

### Список параметрів

`mimemail`
Коректний `MIME`-ресурс

`msgbody`

callbackfunc

### Значення, що повертаються

Функція не повертає значення після виконання.

### Дивіться також

- [mailparse_msg_extract_part_file()](function.mailparse-msg-extract-part-file.md) -
Вийняти/декодувати секцію з повідомленням із файлу
- [mailparse_msg_extract_whole_part_file()](function.mailparse-msg-extract-whole-part-file.md) -
Вийняти секцію повідомлення разом із заголовками без декодування
