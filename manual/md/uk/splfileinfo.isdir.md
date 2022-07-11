- [« SplFileInfo::getType](splfileinfo.gettype.md)
- [SplFileInfo::isExecutable »](splfileinfo.isexecutable.md)

- [PHP Manual](index.md)
- [SplFileInfo](class.splfileinfo.md)
- Вказує, чи є файл каталогом

# SplFileInfo::isDir

(PHP 5 \>u003d 5.1.2, PHP 7, PHP 8)

SplFileInfo::isDir — Вказує, чи є файл каталогом

### Опис

public **SplFileInfo::isDir**(): bool

Цей метод можна використовувати для визначення того, чи є файл
каталогом.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає **`true`**, якщо каталог; **`false`** інакше.

### Приклади

**Приклад #1 Приклад використання **SplFileInfo::isDir()****

` <?php$d u003d new SplFileInfo(dirname(__FILE__));var_dump($d->isDir());$d u003d new SplFileInfo(__FILE__);var_dump($d->isDir());?> `

Результатом виконання цього прикладу буде щось подібне:

bool(true)
bool(false)
