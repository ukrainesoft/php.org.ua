- [«SQLite3::query](sqlite3.query.md)
- [SQLite3::setAuthorizer »](sqlite3.setauthorizer.md)

- [PHP Manual](index.md)
- [SQLite3](class.sqlite3.md)
- Виконує запит та повертає одиночний результат

# SQLite3::querySingle

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8)

SQLite3::querySingle — Виконує запит та повертає одиночний результат

### Опис

public **SQLite3::querySingle**(string `$query`, bool `$entireRow` u003d
**`false`**):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

Виконує запит та повертає одиночний результат.

### Список параметрів

`query`
SQL запит на виконання.

`entireRow`
За замовчуванням функція **querySingle()** повертає значення першого
стовпця, що повертається запитом. Якщо параметр `entireRow` є
**`true`**, то запит повертає масив всього першого ряду.

### Значення, що повертаються

Повертає значення першого стовпця результатів або масив усієї першої
рядки (якщо параметр `entireRow` є **`true`**).

Якщо запит коректний, але результат порожній, то повернеться **`null`**, якщо
параметр `entireRow` є **`false`**, в іншому випадку
повертається порожній масив.

Невірний або відсутній запит повертає **false**.

### Приклади

**Приклад #1 Приклад використання **SQLite3::querySingle()****

` <?php$db u003d new SQLite3('mysqlitedb.db');var_dump($db->querySingle('SELECT username FROM user WHERE useridu003d1'));print_r($db->querySingle('SELECT username, email FROM user WHERE useridu003d1', true));?> `

Результатом виконання цього прикладу буде щось подібне:

string(5) "Scott"
Array
(
[username] u003d> Scott
[email] u003d> scott@example.com
)
