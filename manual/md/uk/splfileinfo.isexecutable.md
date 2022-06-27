- [« SplFileInfo::isDir](splfileinfo.isdir.md)
- [SplFileInfo::isFile »](splfileinfo.isfile.md)

- [PHP Manual](index.md)
- [SplFileInfo](class.splfileinfo.md)
- Вказує, чи файл виконуваний

# SplFileInfo::isExecutable

(PHP 5 \>u003d 5.1.2, PHP 7, PHP 8)

SplFileInfo::isExecutable — Вказує, чи файл виконується

### Опис

public **SplFileInfo::isExecutable**(): bool

Перевіряє, чи файл виконується.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає **`true`**, якщо файл є виконуваним; **`false`** в
інакше.

### Приклади

**Приклад #1 Приклад використання **SplFileInfo::isExecutable()****

` <?php$info u003d new SplFileInfo('/usr/bin/php');var_dump($info->isExecutable());$info u003d new SplFileInfo('/usr/bin');var_dump($info- >isExecutable());$info u003d new SplFileInfo('foo');var_dump($info->isExecutable());?> `

Результатом виконання цього прикладу буде щось подібне:

bool(true)
bool(true)
bool(false)
