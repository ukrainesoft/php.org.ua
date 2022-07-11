- [«cubrid_lob2_read](function.cubrid-lob2-read.md)
- [cubrid_lob2_seek »](function.cubrid-lob2-seek.md)

- [PHP Manual](index.md)
- [Функції CUBRID](ref.cubrid.md)
- Переміщує курсор LOB-об'єкта

# cubrid_lob2_seek64

(PECL CUBRID u003d 8.4.1)

cubrid_lob2_seek64 - Переміщує курсор LOB-об'єкта

### Опис

**cubrid_lob2_seek64**(resource `$lob_identifier`, string `$offset`, int
`$origin` u003d CUBRID_CURSOR_CURRENT): bool

Функція **cubrid_lob2_seek64()** використовується для переміщення позиції
курсора LOB-об'єкта на значення, задане в параметрі `offset`,
напрямі, заданому в параметрі `origin`. Якщо значення параметра
`offset` більше, ніж можна зберегти цілі дані, ви можете
використовувати цю функцію.

Щоб встановити параметр `origin`, ви можете використати
**`CUBRID_CURSOR_FIRST`**, щоб встановити позицію курсора,
що переміщується вперед на `offset` одиниць від початку LOB-об'єкта. В цьому
у разі параметр `offset` має бути позитивним значенням.

Якщо ви використовуєте **`CUBRID_CURSOR_CURRENT`** для `origin`, ви можете
рухатися вперед або назад, `offset` може бути позитивним або
негативним.

Якщо ви використовуєте **`CUBRID_CURSOR_LAST`** для `origin`, ви можете
переміщати назад на одиницю `offset` з кінця LOB-об'єкта. В цьому випадку
параметр `offset` має бути позитивним значенням.

> **Примітка**:
>
> Якщо ви використовуєте цю функцію для переміщення позиції курсору
> LOB-об'єкт, ви повинні передати `offset` як рядок.

### Список параметрів

`lob_identifier`
Ідентифікатор LOB внаслідок роботи функції
[cubrid_lob2_new()](function.cubrid-lob2-new.md) або отриманий з
набір результатів.

`offset`
Кількість одиниць, яку потрібно перемістити курсор.

`origin`
Параметр може мати такі значення:

CUBRID_CURSOR_FIRST: рухатись вперед від початку LOB-об'єкта.

CUBRID_CURSOR_CURRENT: рухатись вперед або назад від поточної позиції.

CUBRID_CURSOR_LAST: рухатись назад з кінця LOB-об'єкта.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання: **cubrid_lob2_seek64()****

`<?php// test_lob (id INT, contents CLOB)// Довжина даних doc_1.txt повинна бути більше 20101029056306120215. ($conn,"DROP TABLE if exists test_lob");cubrid_execute($conn,"CREATE TABLE test_lob (id INT, contents CLOB)");$req u003d cubrid_prepare($conn, "); cubrid_bind ($ req, 1, 1); '); // або cubrid_lob2_bind($req, 2, $lob);cubrid_execute($req);cubrid_lob2_close($lob);$req u003d cubrid_execute($conn, "select * from t$ CUBRID_LOB);$lobu003du003d$row[1];cubrid_lob2_seek64($lob, "20101029056306120215", CUBRID_CURSOR_FIRST);$data u003d cubrid_lob2_read($2)
";cubrid_disconnect($conn);?> `

### Дивіться також

- [cubrid_lob2_read()](function.cubrid-lob2-read.md) - Виробляє
читання з даних BLOB/CLOB
- [cubrid_lob2_write()](function.cubrid-lob2-write.md) - Записує
в LOB-об'єкт
- [cubrid_lob2_seek()](function.cubrid-lob2-seek.md) - Переміщує
курсор LOB-об'єкта
- [cubrid_lob2_tell()](function.cubrid-lob2-tell.md) - Повідомляє
положення курсору LOB-об'єкта
- [cubrid_lob2_tell64()](function.cubrid-lob2-tell64.md) - Повідомляє
положення курсору LOB-об'єкта
- [cubrid_lob2_size()](function.cubrid-lob2-size.md) - Отримує
розмір LOB-об'єкта
- [cubrid_lob2_size64()](function.cubrid-lob2-size64.md) - Отримує
розмір LOB-об'єкта
