- [«Mailparse](ref.mailparse.md)
- [mailparse_msg_create »] (function.mailparse-msg-create.md)

- [PHP Manual](index.md)
- [Mailparse](ref.mailparse.md)
- Визначити найкращий шлях декодування

#mailparse_determine_best_xfer_encoding

(PECL mailparse \>u003d 0.9.0)

mailparse_determine_best_xfer_encoding — Визначити найкращий шлях
декодування

### Опис

**mailparse_determine_best_xfer_encoding**(resource `$fp`): string

Визначає найкращий шлях декодування контенту, прочитаного з
вказаного файлового дескриптора.

### Список параметрів

`fp`
Коректний покажчик на файл, який має бути перемотується.

### Значення, що повертаються

Повертає одне з кодувань, що підтримується модулем
[mbstring](ref.mbstring.md).

### Приклади

**Приклад #1 Приклад використання
**mailparse_determine_best_xfer_encoding()****

` <?php$fp u003d fopen('somemail.eml', 'r');echo 'Best encoding: ' . mailparse_determine_best_xfer_encoding($fp);?> `

Результатом виконання цього прикладу буде щось подібне:

Best encoding: 7bit
