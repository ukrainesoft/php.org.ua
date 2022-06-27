- [« mysql_get_server_info](function.mysql-get-server-info.md)
- [mysql_insert_id »](function.mysql-insert-id.md)

- [PHP Manual](index.md)
- [MySQL](ref.mysql.md)
- Повертає інформацію про останній запит

# mysql_info

(PHP 4 u003d 4.3.0, PHP 5)

mysql_info — Повертає інформацію про останній запит

**Увага**

Цей модуль застарів, починаючи з версії PHP 5.5.0, і вилучений до PHP 7.0.0.
Використовуйте замість нього [MySQLi](book.mysqli.md) або
[PDO_MySQL](ref.pdo-mysql.md). Дивіться також інструкцію [MySQL: вибір
API] (mysqlinfo.api.choosing.md). Альтернативи для цієї функції:

- [mysqli_info()](mysqli.info.md)

### Опис

**mysql_info**(resource `$link_identifier` u003d NULL): string

Повертає докладну інформацію про останній запит.

### Список параметрів

`link_identifier`
З'єднання MySQL. Якщо ідентифікатор з'єднання не було вказано,
використовується останнє з'єднання, відкрите
[mysql_connect()](function.mysql-connect.md). Якщо таке з'єднання не
було знайдено, функція спробує створити таке, якби
[mysql_connect()](function.mysql-connect.md) була викликана без
параметрів. Якщо з'єднання не було знайдено і не змогло бути створено,
генерується помилка рівня **`E_WARNING`**.

### Значення, що повертаються

Повертає інформацію про запит у разі успішного виконання, або
**`false`** у разі виникнення помилки. Дивіться приклад нижче для
яких запитів повертається інформація та як виглядають повертаються
значення. Для не перерахованих запитів буде повернено значення
**`false`**.

### Приклади

**Приклад #1 Коректні види запитів MySQL**

Числа розставлені лише для прикладу - їх значення залежать від
результату запиту.

`` mysqlcode
INSERT INTO ... SELECT ...
String format: Records: 23 Duplicates: 0 Warnings: 0
INSERT INTO ... VALUES (...),(...),(...)...
String format: Records: 37 Duplicates: 0 Warnings: 0
LOAD DATA INFILE ...
String format: Records: 42 Deleted: 0 Перевірено: 0 Warnings: 0
ALTER TABLE
String format: Records: 60 Duplicates: 0 Warnings: 0
UPDATE
String format: Rows matched: 65 Changed: 65 Warnings: 0
````

### Примітки

> **Примітка**:
>
> **mysql_info()** повертає значення не рівне **`false`** для INSERT
> ... VALUES тільки в тому випадку, якщо у запиті є кілька
> списків значень.

### Дивіться також

- [mysql_affected_rows()](function.mysql-affected-rows.md) -
Повертає число порушених минулою операцією рядів
- [mysql_insert_id()](function.mysql-insert-id.md) - Повертає
ідентифікатор, згенерований при останньому INSERT-запиті
- [mysql_stat()](function.mysql-stat.md) - Повертає поточний статус
сервера
