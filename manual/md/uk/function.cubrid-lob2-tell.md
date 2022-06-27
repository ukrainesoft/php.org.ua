- [« cubrid_lob2_tell64](function.cubrid-lob2-tell64.md)
- [cubrid_lob2_write »](function.cubrid-lob2-write.md)

- [PHP Manual](index.md)
- [Функції CUBRID](ref.cubrid.md)
- Повідомляє положення курсору LOB-об'єкта

#cubrid_lob2_tell

(PECL CUBRID u003d 8.4.1)

cubrid_lob2_tell — Повідомляє положення курсору LOB-об'єкта

### Опис

**cubrid_lob2_tell**(resource `$lob_identifier`): int

Функція **cubrid_lob2_tell()** використовується для визначення положення
курсору LOB-об'єкта.

### Список параметрів

`lob_identifier`
Ідентифікатор Lob в результаті
[cubrid_lob2_new()](function.cubrid-lob2-new.md) або отриманий з
набір результатів.

### Значення, що повертаються

Повертає позицію курсора LOB-об'єкта, коли він буде успішно оброблений
або **`false`** у разі виникнення помилки.

### Дивіться також

- [cubrid_lob2_read()](function.cubrid-lob2-read.md) - Виробляє
читання з даних BLOB/CLOB
- [cubrid_lob2_write()](function.cubrid-lob2-write.md) - Записує
в LOB-об'єкт
- [cubrid_lob2_seek()](function.cubrid-lob2-seek.md) - Переміщує
курсор LOB-об'єкта
- [cubrid_lob2_seek64()](function.cubrid-lob2-seek64.md) -
Переміщує курсор LOB-об'єкта
- [cubrid_lob2_tell64()](function.cubrid-lob2-tell64.md) - Повідомляє
положення курсору LOB-об'єкта
- [cubrid_lob2_size()](function.cubrid-lob2-size.md) - Отримує
розмір LOB-об'єкта
- [cubrid_lob2_size64()](function.cubrid-lob2-size64.md) - Отримує
розмір LOB-об'єкта
