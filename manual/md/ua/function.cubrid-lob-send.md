- [«cubrid_lob_get](function.cubrid-lob-get.md)
- [cubrid_lob_size »](function.cubrid-lob-size.md)

- [PHP Manual](index.md)
- [Функції CUBRID](ref.cubrid.md)
- Читає дані BLOB/CLOB та відправляє їх прямо до браузера

#cubrid_lob_send

(PECL CUBRID u003d 8.3.1)

cubrid_lob_send - Читає дані BLOB/CLOB і відправляє їх прямо в
браузер

### Опис

**cubrid_lob_send**(resource `$conn_identifier`, resource
`$lob_identifier`): bool

**cubrid_lob_send()** зчитує дані BLOB/CLOB і передає їх прямо в
браузер. Щоб використати цю функцію, необхідно спочатку
використовувати [cubrid_lob_get()](function.cubrid-lob-get.md), щоб
отримати інформацію BLOB/CLOB із CUBRID.

### Список параметрів

`conn_identifier`
Ідентифікатор підключення.

`lob_identifier`
Ідентифікатор LOB.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **cubrid_lob_send()****

`<?php$conn u003d cubrid_connect ("localhost", 33000, "demodb", "dba");cubrid_execute($conn,"DROP TABLE if exists doc");cubrid_execute($conn,"C , doc_content CLOB)");cubrid_execute($conn,"INSERT INTO doc VALUES (5,'hello,cubrid')");$lobs u003d cubrid_lob_get($conn, "SELECT doc_content FROM cu| ($conn, $lobs[0]);cubrid_lob_close($lobs);cubrid_disconnect($conn);?> `

### Дивіться також

- [cubrid_lob_get()](function.cubrid-lob-get.md) - Отримує дані
BLOB/CLOB
- [cubrid_lob_close()](function.cubrid-lob-close.md) - Закриває
дані BLOB/CLOB
- [cubrid_lob_size()](function.cubrid-lob-size.md) - Отримує розмір
даних BLOB/CLOB
- [cubrid_lob_export()](function.cubrid-lob-export.md) -
Експортує дані BLOB/CLOB у файл
