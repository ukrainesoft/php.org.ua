- [« SQLite3Stmt::bindParam](sqlite3stmt.bindparam.md)
- [SQLite3Stmt::clear »](sqlite3stmt.clear.md)

- [PHP Manual](index.md)
- [SQLite3Stmt](class.sqlite3stmt.md)
- Зв'язує значення параметра зі змінною підготовленого запиту

# SQLite3Stmt::bindValue

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8)

SQLite3Stmt::bindValue — Зв'язує значення параметра зі змінною
підготовленого запиту

### Опис

public **SQLite3Stmt::bindValue**(string\|int `$param`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value`, int `$type` u003d **`SQLITE3_TEXT`**): bool

Зв'язує значення параметра зі змінною підготовленого запиту.

**Застереження**

До PHP 7.2.14 та 7.3.0, якщо виконаний запит, необхідно викликати метод
[SQLite3Stmt::reset()](sqlite3stmt.reset.md) для того, щоб можна
було змінити значення пов'язаних властивостей.

### Список параметрів

`param`
Або рядок (string) (для іменованих параметрів), або ціле число
(int) (для позитивних параметрів), що ідентифікує змінну
підготовленого запиту, якого має бути прив'язане значення. Якщо
іменований параметр не починається з двокрапки ((`:`)) або знака `@`,
автоматично додається двокрапка (`:`). Позитивні параметри
починаються з першого.

`value`
Значення для прив'язки змінної підготовленого запиту.

`type`
Тип даних для прив'язки.

- **`SQLITE3_INTEGER`**: Значення є цілим числом зі знаком,
яке зберігається в 1, 2, 3, 4, 6 або 8 байт залежно від
величини значення.

- **`SQLITE3_FLOAT`**: Значення є числом з плаваючою точкою,
яке зберігається у вигляді 8-байтного числа IEEE з плаваючою точкою.

- **`SQLITE3_TEXT`**: Значення є текстовим рядком, яке
зберігається у кодуванні бази даних (UTF-8, UTF-16BE або UTF-16-LE).

- **`SQLITE3_BLOB`**: Значення є великим двійковим об'єктом
(blob) даних, який зберігається так само, як і вхідні дані.

- **`SQLITE3_NULL`**: Значення є NULL-значенням.

У PHP 7.0.7, якщо `type` опущений, він автоматично визначається з
типу `param`: bool та int розглядаються як **`SQLITE3_INTEGER`**,
float як **`SQLITE3_FLOAT`**, null як **`SQLITE3_NULL`** і всіх
решти як **`SQLITE3_TEXT`**. Раніше, якщо тип опущений, він по
замовчуванням використовувався **`SQLITE3_TEXT`**.

> **Примітка**:
>
> Якщо `param` дорівнює **`null`**, він завжди обробляється як
> **`SQLITE3_NULL`**, незалежно від заданого `type`.

### Значення, що повертаються

Повертає **`true`**, якщо параметр прив'язаний до змінної
підготовленого запиту або **`false`** у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- ----------------|
| 7.4.0 | Параметр `param` тепер підтримує нотацію `@param`. |

### Приклади

**Приклад #1 Приклад використання **SQLite3Stmt::bindValue()****

` <?php$db u003d new SQLite3(':memory:');$db->exec('CREATE TABLE foo (id INTEGER, bar STRING)');$db->exec("INSERT INTO foo (id, bar) VALUES (1, 'This is a test')");$stmt u003d $db->prepare('SELECT bar FROM foo WHERE idu003d:id');$stmt->bindValue(':id', , SQLITE3_INTEGER);$result u003d $stmt->execute();var_dump($result->fetchArray(SQLITE3_ASSOC));?> `

Результат виконання цього прикладу:

array(1) {
["bar"]u003d>
string(14) "This is a test"
}

### Дивіться також

- [SQLite3Stmt::bindParam()](sqlite3stmt.bindparam.md) - Зв'язує
параметр зі змінною підготовленого запиту
- [SQLite3::prepare()](sqlite3.prepare.md) - Підготовка
SQL-запит для виконання
