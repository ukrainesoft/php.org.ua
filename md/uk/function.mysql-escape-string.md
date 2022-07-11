- [«mysql_error](function.mysql-error.md)
- [mysql_fetch_array »](function.mysql-fetch-array.md)

- [PHP Manual](index.md)
- [MySQL](ref.mysql.md)
- Екранує рядок для використання у mysql_query

# mysql_escape_string

(PHP 4 u003d 4.0.3, PHP 5)

mysql_escape_string — Екранує рядок для використання у mysql_query

**Увага**

Ця функція оголошена застарілою в PHP 4.3.0 і разом з [модулем
MySQL](book.mysql.md), видалена PHP в 7.0.0. Замість неї використовуйте
модулі, що активно розвиваються [MySQLi](book.mysqli.md) або
[PDO_MySQL](ref.pdo-mysql.md). Також дивіться розділ [MySQL: вибір
API] (mysqlinfo.api.choosing.md). Альтернативи для цієї функції:

- [mysqli_escape_string()](function.mysqli-escape-string.md)
- [PDO::quote()](pdo.quote.md)

### Опис

**mysql_escape_string**(string `$unescaped_string`): string

Функція екранує `unescaped_string` таким чином, після чого її можна
безпечно використовувати [mysql_query()](function.mysql-query.md).
Ця функція застаріла.

Функція ідентична
[mysql_real_escape_string()](function.mysql-real-escape-string.md),
виключаючи той факт, що
[mysql_real_escape_string()](function.mysql-real-escape-string.md)
приймає параметром ще й ідентифікатор з'єднання та екранує рядок
з урахуванням поточного кодування. **mysql_escape_string()** не робить цього і
результат роботи залежить від кодування, у якому ви працюєте з БД.

### Список параметрів

`unescaped_string`
Рядок, що екранується.

### Значення, що повертаються

Повертає рядок, що екранується.

### Приклади

**Приклад #1 Приклад використання **mysql_escape_string()****

` <?php$item u003d "Zak's Laptop";$escaped_item u003d mysql_escape_string($item);printf("Escaped string: %s
", $escaped_item);?> `

Результат виконання цього прикладу:

Escaped string: Zak's Laptop

### Примітки

> **Примітка**:
>
> **mysql_escape_string()** не екранує символи `%` та `_`.

### Дивіться також

- [mysql_real_escape_string()](function.mysql-real-escape-string.md) -
Екранує спеціальні символи в рядках для використання в
виразах SQL
- [addslashes()](function.addslashes.md) - Екранує рядок з
допомогою слішів
- Директиву
[magic_quotes_gpc](info.configuration.md#ini.magic-quotes-gpc).
