- [«cubrid_is_instance](function.cubrid-is-instance.md)
- [cubrid_lob_export »](function.cubrid-lob-export.md)

- [PHP Manual](index.md)
- [Функції CUBRID](ref.cubrid.md)
- Закриває дані BLOB/CLOB

#cubrid_lob_close

(PECL CUBRID u003d 8.3.1)

cubrid_lob_close — Закриває дані BLOB/CLOB

### Опис

**cubrid_lob_close**(array `$lob_identifier_array`): bool

**cubrid_lob_close()** використовується для закриття всіх BLOB/CLOB,
повертаються функцією [cubrid_lob_get()](function.cubrid-lob-get.md).

### Список параметрів

`lob_identifier_array`
Масив ідентифікаторів LOB, повернутий
[cubrid_lob_get()](function.cubrid-lob-get.md).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **cubrid_lob_close()****

`<?php$conn u003d cubrid_connect ("localhost", 33000, "demodb", "dba");cubrid_execute($conn,"DROP TABLE if exists doc");cubrid_execute($conn,"C , doc_content CLOB)");cubrid_execute($conn,"INSERT INTO doc VALUES (5,'hello,cubrid')");$lobs u003d cubrid_lob_get($conn, "SELECT doc_content FROM| "Розмір документа: ".cubrid_lob_size($lobs[0])." байтів";cubrid_lob_export($conn, $lobs[0], "doc_5.txt");cubrid_lob_close($lobs);$brid > `

### Дивіться також

- [cubrid_lob_get()](function.cubrid-lob-get.md) - Отримує дані
BLOB/CLOB
- [cubrid_lob_size()](function.cubrid-lob-size.md) - Отримує розмір
даних BLOB/CLOB
- [cubrid_lob_export()](function.cubrid-lob-export.md) -
Експортує дані BLOB/CLOB у файл
- [cubrid_lob_send()](function.cubrid-lob-send.md) - Читає дані
BLOB/CLOB та відправляє їх прямо до браузера
