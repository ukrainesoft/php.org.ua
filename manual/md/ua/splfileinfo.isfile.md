- [« SplFileInfo::isExecutable](splfileinfo.isexecutable.md)
- [SplFileInfo::isLink »](splfileinfo.islink.md)

- [PHP Manual](index.md)
- [SplFileInfo](class.splfileinfo.md)
- Вказує, чи об'єкт посилається на звичайний файл

# SplFileInfo::isFile

(PHP 5 \>u003d 5.1.2, PHP 7, PHP 8)

SplFileInfo::isFile — Вказує, чи об'єкт посилається на звичайний файл

### Опис

public **SplFileInfo::isFile**(): bool

Перевіряє, чи існує файл, на який посилається об'єкт SplFileInfo,
і чи є звичайним файлом.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає **`true`**, якщо файл існує та є звичайним файлом (а
не посиланням), **`false`** інакше.

### Приклади

**Приклад #1 Приклад використання **SplFileInfo::isFile()****

` <?php$info u003d new SplFileInfo(__FILE__);var_dump($info->isFile());$info u003d new SplFileInfo(dirname(__FILE__));var_dump($info->isFile());?> `

Результатом виконання цього прикладу буде щось подібне:

bool(true)
bool(false)
