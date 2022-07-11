- [« cubrid_lob_export](function.cubrid-lob-export.md)
- [cubrid_lob_send »](function.cubrid-lob-send.md)

- [PHP Manual](index.md)
- [Функції CUBRID](ref.cubrid.md)
- Отримує дані BLOB/CLOB

#cubrid_lob_get

(PECL CUBRID u003d 8.3.1)

cubrid_lob_get — Отримує дані BLOB/CLOB

### Опис

**cubrid_lob_get**(resource `$conn_identifier`, string `$sql`): array

**cubrid_lob_get()** використовується для отримання метаінформації BLOB/CLOB
з бази даних CUBRID, CUBRID отримує BLOB/CLOB, виконуючи оператор SQL,
та повертає всі LOB у вигляді масиву ресурсів. Необхідно переконатися, що
SQL повертає лише один стовпець, та його тип даних - BLOB чи CLOB.

Не варто забувати про використання
[cubrid_lob_close()](function.cubrid-lob-close.md) для звільнення
LOB якщо вони більше не потрібні.

### Список параметрів

`conn_identifier`
Ідентифікатор підключення.

`sql`
Оператор SQL, що виконується.

### Значення, що повертаються

Повертає масив LOB-ресурсів у разі успішного виконання процесу
або **`false`** у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **cubrid_lob_get()****

`<?php$conn u003d cubrid_connect ("localhost", 33000, "demodb", "dba");cubrid_execute($conn,"DROP TABLE if exists doc");cubrid_execute($conn,"C , doc_content CLOB)");cubrid_execute($conn,"INSERT INTO doc VALUES (5,'hello,cubrid')");$lobs u003d cubrid_lob_get($conn, "SELECT doc_content FROM| "Розмір документа: ".cubrid_lob_size($lobs[0])." байтів";cubrid_lob_export($conn, $lobs[0], "doc_5.txt");cubrid_lob_close($lobs);$brid > `

### Дивіться також

- [cubrid_lob_close()](function.cubrid-lob-close.md) - Закриває
дані BLOB/CLOB
- [cubrid_lob_size()](function.cubrid-lob-size.md) - Отримує розмір
даних BLOB/CLOB
- [cubrid_lob_export()](function.cubrid-lob-export.md) -
Експортує дані BLOB/CLOB у файл
- [cubrid_lob_send()](function.cubrid-lob-send.md) - Читає дані
BLOB/CLOB та відправляє їх прямо до браузера
