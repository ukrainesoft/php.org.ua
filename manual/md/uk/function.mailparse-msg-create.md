- [«
mailparse_determine_best_xfer_encoding](function.mailparse-determine-best-xfer-encoding.md)
- [mailparse_msg_extract_part_file
»](function.mailparse-msg-extract-part-file.md)

- [PHP Manual](index.md)
- [Mailparse](ref.mailparse.md)
- Створює поштовий MIME-ресурс

#mailparse_msg_create

(PECL mailparse \>u003d 0.9.0)

mailparse_msg_create — Створює поштовий MIME-ресурс

### Опис

**mailparse_msg_create**(): resource

Створює поштовий MIME-ресурс.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає обробник, який можна використовувати для аналізу повідомлення.

### Примітки

> **Примітка**:
>
> Рекомендується викликати
> [mailparse_msg_free()](function.mailparse-msg-free.md) для
> результат цієї функції, коли він більше не потрібен, щоб уникнути
> витоку пам'яті.

### Дивіться також

- [mailparse_msg_free()](function.mailparse-msg-free.md) -
Вивільнити MIME-ресурс
- [mailparse_msg_parse_file()](function.mailparse-msg-parse-file.md) -
Розібрати файл
