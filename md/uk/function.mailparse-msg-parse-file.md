- [«
mailparse_msg_get_structure](function.mailparse-msg-get-structure.md)
- [mailparse_msg_parse »] (function.mailparse-msg-parse.md)

- [PHP Manual](index.md)
- [Mailparse](ref.mailparse.md)
- Розібрати файл

#mailparse_msg_parse_file

(PECL mailparse \>u003d 0.9.0)

mailparse_msg_parse_file — Розібрати файл

### Опис

**mailparse_msg_parse_file**(string `$filename`): resource

Розбирає файл. Це оптимальний шлях для аналізу файлу з поштовим.
повідомленням.

### Список параметрів

`filename`
Шлях до файлу. Файл буде відкрито та пропущено через аналізатор.

> **Примітка**:
>
> Повідомлення, що міститься в `filename`, має закінчуватися новою
> рядком (`CRLF`); інакше останній рядок повідомлення не буде
> проаналізовано.

### Значення, що повертаються

Повертає `MIME`-ресурс, що представляє структуру, або **`false`**
у разі виникнення помилки.

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
- [mailparse_msg_create()](function.mailparse-msg-create.md) -
Створює поштовий MIME-ресурс
