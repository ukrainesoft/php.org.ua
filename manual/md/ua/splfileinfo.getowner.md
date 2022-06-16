- [« SplFileInfo::getMTime](splfileinfo.getmtime.md)
- [SplFileInfo::getPath »](splfileinfo.getpath.md)

- [PHP Manual](index.md)
- [SplFileInfo](class.splfileinfo.md)
- Отримує власника файлу

# SplFileInfo::getOwner

(PHP 5 \>u003d 5.1.2, PHP 7, PHP 8)

SplFileInfo::getOwner — Отримує власника файлу

### Опис

public **SplFileInfo::getOwner**(): int\|false

Отримує власник файлу. Ідентифікатор власника повертається до
числовому форматі.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Ідентифікатор власника файлу у вигляді числа у разі успішного виконання
або **`false`** у разі виникнення помилки.

### Помилки

У разі виникнення помилки викидає виняток
[RuntimeException](class.runtimeexception.md).

### Приклади

**Приклад #1 Приклад використання **SplFileInfo::getOwner()****

` <?php$info u003d new SplFileInfo('file.txt');print_r(posix_getpwuid($info->getOwner()));?> `

### Дивіться також

- [posix_getpwuid()](function.posix-getpwuid.md) - Повертає
інформацію про користувача, використовуючи його ID
- [SplFileInfo::getGroup()](splfileinfo.getgroup.md) - Отримує
групу файлу
