- [« cubrid_lob2_size64](function.cubrid-lob2-size64.md)
- [cubrid_lob2_tell64 »](function.cubrid-lob2-tell64.md)

- [PHP Manual](index.md)
- [Функції CUBRID](ref.cubrid.md)
- Отримує розмір LOB-об'єкта

#cubrid_lob2_size

(PECL CUBRID u003d 8.4.1)

cubrid_lob2_size — Отримує розмір LOB-об'єкта

### Опис

**cubrid_lob2_size**(resource `$lob_identifier`): int

Функція **cubrid_lob2_size()** використовується для отримання розміру
LOB-об'єкт.

### Список параметрів

`lob_identifier`
Ідентифікатор LOB внаслідок роботи функції
[cubrid_lob2_new()](function.cubrid-lob2-new.md) або отриманий з
набір результатів.

### Значення, що повертаються

Повертає розмір LOB-об'єкта у разі успішного виконання або
**`false`** у разі виникнення помилки.

### Дивіться також

- [cubrid_lob2_read()](function.cubrid-lob2-read.md) - Виробляє
читання з даних BLOB/CLOB
- [cubrid_lob2_write()](function.cubrid-lob2-write.md) - Записує
в LOB-об'єкт
- [cubrid_lob2_seek()](function.cubrid-lob2-seek.md) - Переміщує
курсор LOB-об'єкта
- [cubrid_lob2_seek64()](function.cubrid-lob2-seek64.md) -
Переміщує курсор LOB-об'єкта
- [cubrid_lob2_tell()](function.cubrid-lob2-tell.md) - Повідомляє
положення курсору LOB-об'єкта
- [cubrid_lob2_tell64()](function.cubrid-lob2-tell64.md) - Повідомляє
положення курсору LOB-об'єкта
- [cubrid_lob2_size64()](function.cubrid-lob2-size64.md) - Отримує
розмір LOB-об'єкта
