- [« cubrid_lob2_export](function.cubrid-lob2-export.md)
- [cubrid_lob2_new »](function.cubrid-lob2-new.md)

- [PHP Manual](index.md)
- [Функції CUBRID](ref.cubrid.md)
- Імпортує дані BLOB/CLOB із файлу

# cubrid_lob2_import

(PECL CUBRID u003d 8.4.1)

cubrid_lob2_import — Імпортує дані BLOB/CLOB із файлу

### Опис

**cubrid_lob2_import**(resource `$lob_identifier`, string `$file_name`):
bool

Функція **cubrid_lob2_import()** використовується для збереження вмісту
даних BLOB/CLOB із файлу. Щоб використовувати цю функцію, необхідно
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

**Приклад #1 Приклад використання
[cubrid_lob2_export()](function.cubrid-lob2-export.md)**

` <?php$conn u003d cubrid_connect("localhost", 33000, "demodb", "dba", "");cubrid_execute($conn,"DROP TABLE if exists test_lob");cubrid_execute (id INT, contents CLOB)");$req u003d cubrid_prepare($conn, "INSERT INTO test_lob VALUES (?, ?)");cubrid_bind($req, 1, 1);$lob u003d clob"); cubrid_lob2_import($lob, "doc_1.txt");cubrid_lob2_bind($req, 2, $lob, 'CLOB'); // або cubrid_lob2_bind($req, 2, $lob);cubrid_execute($req);cubrid_lob2_close($lob);cubrid_disconnect($conn);?> `

### Дивіться також

- [cubrid_lob2_new()](function.cubrid-lob2-new.md) - Створює об'єкт
LOB
- [cubrid_lob2_close()](function.cubrid-lob2-close.md) - Закриває
об'єкт LOB
- [cubrid_lob2_export()](function.cubrid-lob2-export.md) -
Експортує LOB-об'єкт у файл
- [cubrid_lob2_bind()](function.cubrid-lob2-bind.md) - Зв'язує
об'єкт LOB або рядок у вигляді об'єкта LOB з підготовленим оператором
як параметри
