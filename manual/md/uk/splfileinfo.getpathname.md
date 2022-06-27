- [« SplFileInfo::getPathInfo](splfileinfo.getpathinfo.md)
- [SplFileInfo::getPerms »](splfileinfo.getperms.md)

- [PHP Manual](index.md)
- [SplFileInfo](class.splfileinfo.md)
- Отримує шлях до файлу

# SplFileInfo::getPathname

(PHP 5 \>u003d 5.1.2, PHP 7, PHP 8)

SplFileInfo::getPathname — Отримує шлях до файлу

### Опис

public **SplFileInfo::getPathname**(): string

Повертає шлях до файлу.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Шлях до файлу.

### Приклади

**Приклад #1 Приклад використання **SplFileInfo::getPathname()****

` <?php$info u003d new SplFileInfo('/usr/bin/php');var_dump($info->getPathname());?> `

Результатом виконання цього прикладу буде щось подібне:

string(12) "/usr/bin/php"

### Дивіться також

- [SplFileInfo::getRealPath()](splfileinfo.getrealpath.md) -
Отримує абсолютний шлях до файлу
