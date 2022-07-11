- [« SQLite3Stmt::execute](sqlite3stmt.execute.md)
- [SQLite3Stmt::paramCount »](sqlite3stmt.paramcount.md)

- [PHP Manual](index.md)
- [SQLite3Stmt](class.sqlite3stmt.md)
- Отримати SQL-запит у вигляді рядка із запиту

# SQLite3Stmt::getSQL

(PHP 7 \>u003d 7.4.0, PHP 8)

SQLite3Stmt::getSQL — Отримати SQL-запит у вигляді рядка із запиту

### Опис

public **SQLite3Stmt::getSQL**(bool `$expand` u003d **`false`**):
string\|false

Повертає строкове представлення SQL-запиту для підготовленого
запиту. Якщо параметр `expand` заданий як **`false`**, буде повернено
не модифікований SQL. Якщо ж `expand` заданий як **`true`**, все
параметри запиту, що підставляються, будуть замінені на конкретні значення,
або на `NULL`, якщо значення ще були прив'язані.

### Список параметрів

`expand`
Чи замінювати у повертається SQL-запит параметри на конкретні значення.
**`true`** підтримується лише з libsqlite 3.14.

### Значення, що повертаються

Повертає SQL-запит із підготовленого запиту або **`false`** в
у разі виникнення помилки.

### Помилки

Якщо `expand` заданий як **`true`**, але версія libsqlite нижче 3.14, буде
викликана помилка рівня **`E_WARNING`** або викинуто виняток
[Exception](class.exception.md), залежно від налаштувань
[SQLite3::enableExceptions()](sqlite3.enableexceptions.md).

### Приклади

**Приклад #1 Отримання розширеного SQL-запиту**

` <?php$db u003d new SQLite3(':memory:');$stmt u003d $db->prepare("SELECT :a, ?, :c");$stmt->bindValue(':a', ' foo');$answer u003d 42;$stmt->bindParam(2, $answer);var_dump($stmt->getSQL(true));?> `

Результатом виконання цього прикладу буде щось подібне:

string(24) "SELECT 'foo', '42', NULL"
