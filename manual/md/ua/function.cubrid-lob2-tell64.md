- [« cubrid_lob2_size](function.cubrid-lob2-size.md)
- [cubrid_lob2_tell »](function.cubrid-lob2-tell.md)

- [PHP Manual](index.md)
- [Функції CUBRID](ref.cubrid.md)
- Повідомляє положення курсору LOB-об'єкта

#cubrid_lob2_tell64

(PECL CUBRID u003d 8.4.1)

cubrid_lob2_tell64 - Повідомляє положення курсору LOB-об'єкта

### Опис

**cubrid_lob2_tell64**(resource `$lob_identifier`): string

Функція **cubrid_lob2_tell64()** використовується для визначення положення
курсору LOB-об'єкта. Якщо розмір LOB-об'єкта більший, ніж може бути
збережені цілі дані, ви можете використовувати цю функцію і вона
поверне інформацію про позицію у вигляді рядка.

### Список параметрів

`lob_identifier`
Ідентифікатор Lob в результаті
[cubrid_lob2_new()](function.cubrid-lob2-new.md) або отриманий з
набір результатів.

### Значення, що повертаються

Повертає позицію курсора LOB-об'єкта у вигляді рядка у разі успішного
виконання або **`false`** у разі виникнення помилки.

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
- [cubrid_lob2_size()](function.cubrid-lob2-size.md) - Отримує
розмір LOB-об'єкта
- [cubrid_lob2_size64()](function.cubrid-lob2-size64.md) - Отримує
розмір LOB-об'єкта
