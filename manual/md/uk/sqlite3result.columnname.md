- [«SQLite3Result](class.sqlite3result.md)
- [SQLite3Result::columnType »](sqlite3result.columntype.md)

- [PHP Manual](index.md)
- [SQLite3Result](class.sqlite3result.md)
- \>Повертає ім'я n-ого стовпця

# SQLite3Result::columnName

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8)

SQLite3Result::columnName — \>Повертає ім'я n-ого стовпця

### Опис

public **SQLite3Result::columnName**(int `$column`): string\|false

Повертає ім'я стовпця, вказаного в column_number. Зверніть увагу,
що ім'я стовпця результату - це значення пропозиції `AS` для цього
стовпця, якщо є пропозиція `AS`. Якщо пропозиція `AS` відсутня,
тоді ім'я стовпця не вказано та може змінитися з одного випуску
libsqlite3 на інший.

### Список параметрів

`column`
Номер стовпця, починаючи з нуля.

### Значення, що повертаються

Повертає ім'я (string) стовпця, вказаного в `column`.
