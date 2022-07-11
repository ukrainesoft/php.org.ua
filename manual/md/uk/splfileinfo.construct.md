- [«SplFileInfo](class.splfileinfo.md)
- [SplFileInfo::getATime »](splfileinfo.getatime.md)

- [PHP Manual](index.md)
- [SplFileInfo](class.splfileinfo.md)
- Створити новий об'єкт SplFileInfo

# SplFileInfo::\_\_construct

(PHP 5 \>u003d 5.1.2, PHP 7, PHP 8)

SplFileInfo::\_\_construct — Створити новий об'єкт SplFileInfo

### Опис

public **SplFileInfo::\_\_construct**(string `$filename`)

Створює новий об'єкт SplFileInfo для вказаного імені файлу. Файл не
обов'язково має існувати чи бути доступним для читання.

### Список параметрів

`filename`
Шлях до файлу.

### Приклади

**Приклад #1 Приклад використання **SplFileInfo::\_\_construct()****

` <?php$info u003d new SplFileInfo('example.php');if ($info->isFile()) {   echo $info->getRealPath();}?> `
