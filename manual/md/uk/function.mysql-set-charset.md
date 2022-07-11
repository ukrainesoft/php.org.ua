- [«mysql_select_db](function.mysql-select-db.md)
- [mysql_stat »](function.mysql-stat.md)

- [PHP Manual](index.md)
- [MySQL](ref.mysql.md)
- Встановлює кодування клієнта

# mysql_set_charset

(PHP 5 \>u003d 5.2.3)

mysql_set_charset — Встановлює кодування клієнта

**Увага**

Цей модуль застарів, починаючи з версії PHP 5.5.0, і вилучений до PHP 7.0.0.
Використовуйте замість нього [MySQLi](book.mysqli.md) або
[PDO_MySQL](ref.pdo-mysql.md). Дивіться також інструкцію [MySQL: вибір
API] (mysqlinfo.api.choosing.md). Альтернативи для цієї функції:

- [mysqli_set_charset()](mysqli.set-charset.md)
- PDO: Додаванням `charset` у рядок з'єднання, наприклад
`charsetu003dutf8`

### Опис

**mysql_set_charset**(string `$charset`, resource `$link_identifier` u003d
NULL): bool

Встановлює стандартне кодування для поточного з'єднання.

### Список параметрів

`charset`
Коректна назва кодування.

`link_identifier`
З'єднання MySQL. Якщо ідентифікатор з'єднання не було вказано,
використовується останнє з'єднання, відкрите
[mysql_connect()](function.mysql-connect.md). Якщо таке з'єднання не
було знайдено, функція спробує створити таке, якби
[mysql_connect()](function.mysql-connect.md) була викликана без
параметрів. Якщо з'єднання не було знайдено і не змогло бути створено,
генерується помилка рівня **`E_WARNING`**.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Примітки

> **Примітка**:
>
> Ця функція вимагає MySQL версії 5.0.7 або вище.

> **Примітка**:
>
> Це найбільш вдалий спосіб зміни кодування. Використання
> [mysql_query()](function.mysql-query.md) з цією метою (наприклад
> `SET NAMES utf8`) не рекомендується. Дивіться розділ [кодування]
> символи в MySQL](mysqlinfo.concepts.charset.md) для докладної
> інформації.

### Дивіться також

- [Настроювання кодувань символів у
MySQL](mysqlinfo.concepts.charset.md)
- [» Список підтримуваних MySQL
кодувань](http://dev.mysql.com/doc/mysql/en/charset-charsets.md)
- [mysql_client_encoding()](function.mysql-client-encoding.md) -
Повертає кодування з'єднання
