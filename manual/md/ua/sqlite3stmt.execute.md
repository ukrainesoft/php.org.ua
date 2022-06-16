- [«SQLite3Stmt::\_\_construct](sqlite3stmt.construct.md)
- [SQLite3Stmt::getSQL »](sqlite3stmt.getsql.md)

- [PHP Manual](index.md)
- [SQLite3Stmt](class.sqlite3stmt.md)
- Виконує підготовлений запит та повертає об'єкт із результуючим
набором

# SQLite3Stmt::execute

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8)

SQLite3Stmt::execute — Виконує підготовлений запит та повертає
об'єкт із результуючим набором

### Опис

public **SQLite3Stmt::execute**():
[SQLite3Result](class.sqlite3result.md)\|false

Виконує підготовлений запит та повертає об'єкт із результуючим
набір.

**Застереження**

Об'єкти результуючого набору, отримані при виклику цього методу
одного і того ж об'єкта підготовленого запиту, не є
незалежними, а використовують одну й ту саму базову структуру. Тому
рекомендується викликати
[SQLite3Result::finalize()](sqlite3result.finalize.md), перш ніж
викликати **SQLite3Stmt::execute()** на тому ж об'єкті підготовленого
запиту знову.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає об'єкт [SQLite3Result](class.sqlite3result.md) у випадку
успішного виконання підготовленого запиту та **`false`** у разі
виникнення помилки.

### Дивіться також

- [SQLite3::prepare()](sqlite3.prepare.md) - Підготовка
SQL-запит для виконання
- [SQLite3Stmt::bindValue()](sqlite3stmt.bindvalue.md) - Зв'язує
значення параметра зі змінною підготовленого запиту
- [SQLite3Stmt::bindParam()](sqlite3stmt.bindparam.md) - Зв'язує
параметр зі змінною підготовленого запиту
