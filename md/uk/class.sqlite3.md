- [«Зумовлені константи](sqlite3.constants.md)
- [SQLite3::backup »](sqlite3.backup.md)

- [PHP Manual](index.md)
- [SQLite3](book.sqlite3.md)
- Клас SQLite3

# Клас SQLite3

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8)

## Вступ

Клас, що надає доступ до API SQLite 3 бази даних.

## Огляд класів

class **SQLite3** {

/\* Методи \*/

public [\_\_construct](sqlite3.construct.md)(string `$filename`, int
`$flags` u003d SQLITE3_OPEN_READWRITE\| SQLITE3_OPEN_CREATE, string
`$encryptionKey` u003d "")

public [backup](sqlite3.backup.md)([SQLite3](class.sqlite3.md)
`$destination`, string `$sourceDatabase` u003d "main", string
`$destinationDatabase` u003d "main"): bool

public [busyTimeout](sqlite3.busytimeout.md)(int `$milliseconds`):
bool

public [changes](sqlite3.changes.md)(): int

public [close](sqlite3.close.md)(): bool

public [createAggregate](sqlite3.createaggregate.md)(
string `$name`,
[callable](language.types.callable.md) `$stepCallback`,
[callable](language.types.callable.md) `$finalCallback`,
int `$argCount` u003d -1
): bool

public [createCollation](sqlite3.createcollation.md)(string `$name`,
[callable](language.types.callable.md) `$callback`): bool

public [createFunction](sqlite3.createfunction.md)(
string `$name`,
[callable](language.types.callable.md) `$callback`,
int `$argCount` u003d -1,
int `$flags` u003d 0
): bool

public [enableExceptions](sqlite3.enableexceptions.md)(bool `$enable`
u003d **`false`**): bool

public static [escapeString](sqlite3.escapestring.md)(string
`$string`): string

public [exec](sqlite3.exec.md)(string `$query`): bool

public [lastErrorCode](sqlite3.lasterrorcode.md)(): int

public [lastErrorMsg](sqlite3.lasterrormsg.md)(): string

public [lastInsertRowID](sqlite3.lastinsertrowid.md)(): int

public [loadExtension](sqlite3.loadextension.md)(string `$name`): bool

public [open](sqlite3.open.md)(string `$filename`, int `$flags` u003d
SQLITE3_OPEN_READWRITE\| SQLITE3_OPEN_CREATE, string `$encryptionKey` u003d
""): void

public [openBlob](sqlite3.openblob.md)(
string `$table`,
string `$column`,
int `$rowid`,
string `$database` u003d "main",
int `$flags` u003d **`SQLITE3_OPEN_READONLY`**
): resource \ | false

public [prepare](sqlite3.prepare.md)(string `$query`):
[SQLite3Stmt](class.sqlite3stmt.md)\|false

public [query](sqlite3.query.md)(string `$query`):
[SQLite3Result](class.sqlite3result.md)\|false

public [querySingle](sqlite3.querysingle.md)(string `$query`, bool
`$entireRow` u003d **`false`**):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public
[setAuthorizer](sqlite3.setauthorizer.md)(?[callable](language.types.callable.md)
`$callback`): bool

public static [version](sqlite3.version.md)(): array

}

## Зміст

- [SQLite3::backup](sqlite3.backup.md) - Резервне копіювання однієї
бази даних до іншої
- [SQLite3::busyTimeout](sqlite3.busytimeout.md) — Встановити
обробник "зайнято" на з'єднання
- [SQLite3::changes](sqlite3.changes.md) — Отримати кількість
рядків, які були змінені/віддалені/вставлені останнім запитом
- [SQLite3::close](sqlite3.close.md) — Закрити з'єднання з базою
даних
- [SQLite3::\_\_construct](sqlite3.construct.md) - Створює екземпляр
об'єкт SQLite3 і відкриває з'єднання з базою
- [SQLite3::createAggregate](sqlite3.createaggregate.md) -
Зареєструвати функцію PHP як агрегуючу функцію SQL
- [SQLite3::createCollation](sqlite3.createcollation.md) -
Реєструє функцію PHP для використання як функцію
сортування SQL
- [SQLite3::createFunction](sqlite3.createfunction.md) -
Реєструє функцію PHP для використання як скалярну
функції SQL
- [SQLite3::enableExceptions](sqlite3.enableexceptions.md) -
Включити викид виключень
- [SQLite3::escapeString](sqlite3.escapestring.md) — Повертає
правильно екранований рядок
- [SQLite3::exec](sqlite3.exec.md) — Виконує запит без результату
до поточної бази даних
- [SQLite3::lastErrorCode](sqlite3.lasterrorcode.md) — Повертає
числовий код результату останнього невдалого запиту SQLite
- [SQLite3::lastErrorMsg](sqlite3.lasterrormsg.md) — Повертає
текст англійською, що описує останній невдалий запит SQLite
- [SQLite3::lastInsertRowID](sqlite3.lastinsertrowid.md)
Повертає ідентифікатор рядка останньої вставки (INSERT) у базу
даних
- [SQLite3::loadExtension](sqlite3.loadextension.md) — Спробувати
завантажити бібліотеку модуля SQLite
- [SQLite3::open](sqlite3.open.md) — Відкрити базу даних SQLite
- [SQLite3::openBlob](sqlite3.openblob.md) — Відкриває ресурс потоку
для читання BLOB
- [SQLite3::prepare](sqlite3.prepare.md) — Підготовка SQL-запиту
для виконання
- [SQLite3::query](sqlite3.query.md) — Виконує SQL-запит
- [SQLite3::querySingle](sqlite3.querysingle.md) — Виконує запит
та повертає поодинокий результат
- [SQLite3::setAuthorizer](sqlite3.setauthorizer.md) — Встановлює
callback-функцію, яка буде використовуватися як
авторизатора для обмеження дій висловлювання
- [SQLite3::version](sqlite3.version.md) — Повертає версію
бібліотеки SQLite3, містить як рядкову константу, так і числову
