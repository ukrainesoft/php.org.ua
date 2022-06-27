- [« cubrid_lob2_close](function.cubrid-lob2-close.md)
- [cubrid_lob2_import »](function.cubrid-lob2-import.md)

- [PHP Manual](index.md)
- [Функції CUBRID](ref.cubrid.md)
- Експортує LOB-об'єкт у файл

# cubrid_lob2_export

(PECL CUBRID u003d 8.4.1)

cubrid_lob2_export — Експортує LOB-об'єкт у файл

### Опис

**cubrid_lob2_export**(resource `$lob_identifier`, string `$file_name`):
bool

Функція **cubrid_lob2_export()** використовується для збереження вмісту
даних BLOB/CLOB у файл. Щоб використовувати цю функцію, необхідно
використовувати [cubrid_lob2_new()](function.cubrid-lob2-new.md) або
спочатку отримати LOB-об'єкт із бази даних CUBRID. Якщо файл уже
існує операція завершиться помилкою. Функція не впливатиме на
становище курсору LOB-об'єкта. Вона керує всім LOB-об'єктом.

### Список параметрів

`lob_identifier`
Ідентифікатор LOB, отриманий у результаті
[cubrid_lob2_new()](function.cubrid-lob2-new.md) або отриманий з
набір результатів.

`filename`
Ім'я файлу, до якого ви хочете імпортувати дані BLOB/CLOB. Також
підтримується шлях до файлу.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **cubrid_lob2_export()****

`<?php// Таблиця: test_lob (id INT, contents CLOB)$conn u003d cubrid_connect("localhost", 33000, "demodb", "dba", "");cubrid_execute($ con ");cubrid_execute($conn,"CREATE TABLE doc (id INT, doc_content CLOB)");cubrid_execute($conn,"INSERT INTO doc VALUES (5,'hello,cubrid')");$req$u003d conn, "select * from doc");cubrid_execute($req);cubrid_move_cursor($req, 1, CUBRID_CURSOR_FIRST);$row u003d cubrid_fetch($req, CUBRID_NUM |||| txt");cubrid_lob2_close($row[1]);cubrid_disconnect($conn);?> `

### Дивіться також

- [cubrid_lob2_new()](function.cubrid-lob2-new.md) - Створює об'єкт
LOB
- [cubrid_lob2_close()](function.cubrid-lob2-close.md) - Закриває
об'єкт LOB
- [cubrid_lob2_import()](function.cubrid-lob2-import.md) -
Імпортує дані BLOB/CLOB із файлу
- [cubrid_lob2_bind()](function.cubrid-lob2-bind.md) - Зв'язує
об'єкт LOB або рядок у вигляді об'єкта LOB з підготовленим оператором
як параметри
