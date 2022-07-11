- [« SplFileInfo::getFilename](splfileinfo.getfilename.md)
- [SplFileInfo::getInode »](splfileinfo.getinode.md)

- [PHP Manual](index.md)
- [SplFileInfo](class.splfileinfo.md)
- Отримує групу файлу

# SplFileInfo::getGroup

(PHP 5 \>u003d 5.1.2, PHP 7, PHP 8)

SplFileInfo::getGroup — Отримує групу файлу

### Опис

public **SplFileInfo::getGroup**(): int\|false

Отримує групу файлів. Ідентифікатор групи повертається у числовому
форматі.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Ідентифікатор групи у числовому форматі у разі успішного виконання
або **`false`** у разі виникнення помилки.

### Помилки

Викидає [RuntimeException](class.runtimeexception.md) у разі
виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **SplFileInfo::getGroup()****

` <?php$info u003d new SplFileInfo(__FILE__);print_r(posix_getgrgid($info->getGroup()));?> `

Результатом виконання цього прикладу буде щось подібне:

### Дивіться також

- [posix_getgrgid()](function.posix-getgrgid.md) - Повертає
інформацію про групу з її ID
