- [« PDO::pgsqlLOBOpen](pdo.pgsqllobopen.md)
- [SQLite (PDO) »] (ref.pdo-sqlite.md)

- [PHP Manual](index.md)
- [PostgreSQL (PDO)] (ref.pdo-pgsql.md)
- Видалити великий об'єкт

# PDO::pgsqlLOBUnlink

(PHP 5 u003d 5.1.2, PHP 7, PHP 8, PECL pdo_pgsql u003d 1.0.2)

PDO::pgsqlLOBUnlink — Видалити великий об'єкт

### Опис

public **PDO::pgsqlLOBUnlink**(string `$oid`): bool

Видаляє великий об'єкт (LOB) з БД з його OID.

> **Примітка**: Цю функцію слід виконувати в транзакції.

### Список параметрів

`oid`
Ідентифікатор LOB

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **PDO::pgsqlLOBUnlink()****

У цьому прикладі ми видаляємо великий об'єкт із БД до того, як видалимо
рядки, що посилаються на нього, з таблиці, що зберігає інформацію про великі
об'єктах, які ми використовували в прикладах для функцій
[PDO::pgsqlLOBCreate()](pdo.pgsqllobcreate.md) та
[PDO::pgsqlLOBOpen()](pdo.pgsqllobopen.md).

` <?php$db u003d new PDO('pgsql:dbnameu003dtest hostu003dlocalhost', $user, $pass);$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);$db->beginTransaction ();$db->pgsqlLOBUnlink($oid);$stmt u003d$db->prepare("DELETE FROM BLOBS where ident u003d ?");$stmt->execute(array($some_id));$db-> commit();?> `

### Дивіться також

- [PDO::pgsqlLOBOpen()](pdo.pgsqllobopen.md) - Відкриває потік для
існуючого великого об'єкту
- [PDO::pgsqlLOBCreate()](pdo.pgsqllobcreate.md) - Створити новий
великий об'єкт (LOB)
