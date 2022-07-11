- [«SQLite3::createCollation](sqlite3.createcollation.md)
- [SQLite3::enableExceptions »](sqlite3.enableexceptions.md)

- [PHP Manual](index.md)
- [SQLite3](class.sqlite3.md)
- Реєструє функцію PHP для використання як скалярну
функції SQL

# SQLite3::createFunction

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8)

SQLite3::createFunction — Реєструє функцію PHP для використання в
як скалярна функція SQL

### Опис

public **SQLite3::createFunction**(
string `$name`,
[callable](language.types.callable.md) `$callback`,
int `$argCount` u003d -1,
int `$flags` u003d 0
): bool

Реєструє функцію PHP або функцію користувача для використання
як скалярну функцію SQL для використання в SQL-виразах.

### Список параметрів

`name`
Ім'я створюваної або перевизначуваної функції SQL.

`callback`
Ім'я функції PHP або функції користувача, що використовується як
callback, що визначає поведінку функції SQL.

Функція має бути визначена як:

callback([mixed](language.types.declarations.md#language.types.declarations.mixed)
$value,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`...$values`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

`value`
Перший аргумент, який передається функції SQL.

`values`
Додаткові аргументи, які передаються функції SQL.

`argCount`
Число аргументів, що приймаються функцією SQL. Якщо цей параметр дорівнює
`-1`, то функція SQL може приймати будь-яку кількість аргументів.

`flags`
Побітове поєднання прапорів. В даний час підтримується тільки
**`SQLITE3_DETERMINISTIC`**, який вказує, що функція завжди
повертає той самий результат, враховуючи одні й ті самі вхідні дані
всередині одного SQL-вираження.

### Значення, що повертаються

Повертає **`true`** у разі успішного створення функції або
**`false`** у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|----------------------------|
| 7.1.4 | Доданий параметр `flags`. |

### Приклади

**Приклад #1 Приклад використання **SQLite3::createFunction()****

` <?phpfunction my_udf_md5($string) {    return md5($string);}$db u003d new SQLite3('mysqlitedb.db');$db->createFunction('my_udf_md5', 'my_ud ->querySingle('SELECT my_udf_md5("test")'));?> `

Результатом виконання цього прикладу буде щось подібне:

string(32) "098f6bcd4621d373cade4e832627b4f6"
