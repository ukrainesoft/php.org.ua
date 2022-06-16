- [« cubrid_lob2_tell](function.cubrid-lob2-tell.md)
- [cubrid_lock_read »](function.cubrid-lock-read.md)

- [PHP Manual](index.md)
- [Функції CUBRID](ref.cubrid.md)
- Записує у LOB-об'єкт

#cubrid_lob2_write

(PECL CUBRID u003d 8.4.1)

cubrid_lob2_write - Записує в LOB-об'єкт

### Опис

**cubrid_lob2_write**(resource `$lob_identifier`, string `$buf`): bool

Функція **cubrid_lob2_write()** зчитує дані з `buf` та зберігає їх
у LOB-об'єкт. Зверніть увагу, що функція може лише додавати
символи.

### Список параметрів

`lob_identifier`
Ідентифікатор LOB, отриманий у результаті
[cubrid_lob2_new()](function.cubrid-lob2-new.md) або отриманий з
набір результатів.

`buf`
Дані, які потрібно записати в LOB-об'єкт.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **cubrid_lob2_write()****

`<?php// test_lob (id INT, contents CLOB)$conn u003d cubrid_connect("localhost", 33000, "demodb", "dba", "");cubrid_execute($conn,"DROP TA ;cubrid_execute($conn,"CREATE TABLE test_lob (id INT, contents CLOB)");$req u003d cubrid_prepare($conn, "INSERT INTO test_lob VALUES(2, ?)| CLOB');$len u003d cubrid_lob2_write($lob, "Hello world");cubrid_lob2_bind($req, 1, $lob);cubrid_execute($req);cubrid_disconnect($conn);?> `

**Приклад #2 Приклад використання **cubrid_lob2_write()****

`<?php// test_lob (id INT, contents CLOB)$conn u003d cubrid_connect("localhost", 33000, "demodb", "dba", "");cubrid_execute($conn,"DROP TA ;cubrid_execute($conn,"CREATE TABLE test_lob (id INT, contents CLOB)");$req u003d cubrid_prepare($conn, "INSERT INTO test_lob VALUES(1, ?)? CLOB');$len u003d cubrid_lob2_write($lob1, "cubrid php driver");cubrid_lob2_bind($req, 1, $lob1);cubrid_execute($req);$req u003d cubr );$row u003d cubrid_fetch_row($req, CUBRID_LOB);$lob2 u003d $row[1];cubrid_lob2_seek($lob2, 0, CUBRID_CURSOR_LAST);$pos u003d cubrid_lob2_ |
";cubrid_lob2_write($lob2, "Hello world");$pos u003d cubrid_lob2_tell($lob2);print "позиція після запису: $pos
";cubrid_disconnect($conn);?> `

### Дивіться також

- [cubrid_lob2_read()](function.cubrid-lob2-read.md) - Виробляє
читання з даних BLOB/CLOB
- [cubrid_lob2_seek()](function.cubrid-lob2-seek.md) - Переміщує
курсор LOB-об'єкта
- [cubrid_lob2_seek64()](function.cubrid-lob2-seek64.md) -
Переміщує курсор LOB-об'єкта
- [cubrid_lob2_tell()](function.cubrid-lob2-tell.md) - Повідомляє
положення курсору LOB-об'єкта
- [cubrid_lob2_tell64()](function.cubrid-lob2-tell64.md) - Повідомляє
положення курсору LOB-об'єкта
- [cubrid_lob2_size()](function.cubrid-lob2-size.md) - Отримує
розмір LOB-об'єкта
- [cubrid_lob2_size64()](function.cubrid-lob2-size64.md) - Отримує
розмір LOB-об'єкта
