- [« cubrid_lob2_new](function.cubrid-lob2-new.md)
- [cubrid_lob2_seek64 »](function.cubrid-lob2-seek64.md)

- [PHP Manual](index.md)
- [Функції CUBRID](ref.cubrid.md)
- Здійснює читання з даних BLOB/CLOB

# cubrid_lob2_read

(PECL CUBRID u003d 8.4.1)

cubrid_lob2_read — Читання даних BLOB/CLOB

### Опис

**cubrid_lob2_read**(resource `$lob_identifier`, int `$len`): string

Функція **cubrid_lob2_read()** зчитує `len` байтів із даних LOB та
повертає прочитані байти.

### Список параметрів

`lob_identifier`
Ідентифікатор LOB, повернутий функцією
[cubrid_lob2_new()](function.cubrid-lob2-new.md) або отриманий з
результуючого набору.

`len`
Довжина буфера, що використовується для читання з даних LOB.

### Значення, що повертаються

Повертає вміст у вигляді рядка, **`false`**, якщо даних більше
ні, або **`null`** у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **cubrid_lob2_read()** 1**

`<?php// test_lob (id INT, contents CLOB)$conn u003d cubrid_connect("localhost", 33000, "demodb", "public", "");$req u003d cubrid_execute($ ");$row u003d cubrid_fetch_row($req, CUBRID_LOB);print "поточна позиція - " . cubrid_lob2_tell($row[1]) . "
";cubrid_lob2_seek($row[1], 10, CUBRID_CURSOR_FIRST);print "
позиція після руху вперед - " . cubrid_lob2_tell($row[1]) . "
";$data u003d cubrid_lob2_read($row[1], 12);print "
позиція після читання - " . cubrid_lob2_tell($row[1]) . "
";print $data . "
";cubrid_lob2_seek($row[1], 5, CUBRID_CURSOR_CURRENT);print "
позиція після повторного руху вперед - " . cubrid_lob2_tell($row[1]) . "
";$data u003d cubrid_lob2_read($row[1], 20);print $data . "
";cubrid_disconnect($conn);?> `

**Приклад #2 Приклад використання **cubrid_lob2_read()** 2**

`<?php// test_lob (id INT, contents CLOB)$conn u003d cubrid_connect("localhost", 33000, "demodb", "dba", "");$req u003d cubrid_execute($ ");$row u003d cubrid_fetch_row($req, CUBRID_LOB);while (true) {   if ($data u003d cubrid_lob2_read($row[1], 1024)    | "
";    }    elseif ($data u003du003du003d false) {        print "Даних більше ні
";        break;    }   else {        print "Відбулася помилка
";        break;    }}cubrid_disconnect($conn);?> `

### Дивіться також

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
- [cubrid_lob2_size()](function.cubrid-lob2-size.md) - Отримує
розмір LOB-об'єкта
- [cubrid_lob2_size64()](function.cubrid-lob2-size64.md) - Отримує
розмір LOB-об'єкта
