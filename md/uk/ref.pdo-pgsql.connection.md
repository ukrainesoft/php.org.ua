- [«PostgreSQL (PDO)](ref.pdo-pgsql.md)
- [PDO::pgsqlCopyFromArray »](pdo.pgsqlcopyfromarray.md)

- [PHP Manual](index.md)
- [PostgreSQL (PDO)] (ref.pdo-pgsql.md)
- З'єднання з базою даних PostgreSQL

# PDO_PGSQL DSN

(PHP 5 u003d 5.1.0, PHP 7, PECL PDO_PGSQL u003d 0.1.0)

PDO_PGSQL DSN — З'єднання з базою даних PostgreSQL

### Опис

Рядок підключення (Data Source Name або DSN) PDO_PGSQL складається з
наступних елементів, розділених пробілом або крапкою з комою:

Префікс DSN
**`pgsql:`**.

`host`
Ім'я хоста, на якому розташована база даних.

`port`
Порт, на якому ця база даних чекає на підключення.

`dbname`
Назва бази даних.

`user`
Ім'я користувача для підключення. Якщо ви введете ім'я користувача в
DSN, PDO проігнорує значення, передане як параметр
конструктору.

`password`
Пароль користувача для підключення. Якщо ви задасте пароль у DSN, PDO
проігнорує значення, передане як параметр конструктору.

`sslmode`
Режим SSL. Підтримувані значення та їх опис перераховані в
[» документації
PostgreSQL](http://www.postgresql.org/docs/current/interactive/).

> **Примітка**: Усі точки з комою в рядку DSN замінюються пробілами,
> тому що PostgreSQL очікує на такий формат. Це означає, що точки з
> комою в будь-якому з компонентів (наприклад, `password` or `dbname`) не
> підтримуються.

### Приклади

**Приклад #1 Приклади PDO_PGSQL DSN**

Наступний приклад демонструє рядок підключення до бази PostgreSQL:

pgsql:hostu003dlocalhost;portu003d5432;dbnameu003dtestdb;useru003dbruce;passwordu003dmypass
