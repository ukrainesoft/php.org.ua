- [« SQLite3::enableExceptions](sqlite3.enableexceptions.md)
- [SQLite3::exec »](sqlite3.exec.md)

- [PHP Manual](index.md)
- [SQLite3](class.sqlite3.md)
- Повертає правильно екранований рядок

# SQLite3::escapeString

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8)

SQLite3::escapeString — Повертає правильно екранований рядок

### Опис

public static **SQLite3::escapeString**(string `$string`): string

Повертає правильно екранований термін для безпечного включення в
SQL-інструкцію.

**Увага**

Ця функція (поки що) небезпечна для обробки даних у двійковій формі!

Для обробки полів типу BLOB, які можуть містити символ NUL,
замість цієї функції використовуйте
[SQLite3Stmt::bindParam()](sqlite3stmt.bindparam.md).

### Список параметрів

`string`
Рядок для обробки

### Значення, що повертаються

Повертає правильно екранований термін, який може бути безпечним.
використана в SQL-інструкції.

### Примітки

**Увага**

[addslashes()](function.addslashes.md) *НЕ* повинен використовуватися для
екранування ваших рядків у запитах SQLite; це буде призводити до
несподіваним результатам при отриманні ваших даних.
