- [« SplFileInfo::getOwner](splfileinfo.getowner.md)
- [SplFileInfo::getPathInfo »](splfileinfo.getpathinfo.md)

- [PHP Manual](index.md)
- [SplFileInfo](class.splfileinfo.md)
- Отримує шлях без імені файлу

# SplFileInfo::getPath

(PHP 5 \>u003d 5.1.2, PHP 7, PHP 8)

SplFileInfo::getPath — Отримує шлях без імені файлу

### Опис

public **SplFileInfo::getPath**(): string

Повертає шлях до файлу, за винятком імені файлу та завершального слішу.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає шлях до файлу.

### Приклади

**Приклад #1 Приклад використання **SplFileInfo::getPath()****

` <?php$info u003d new SplFileInfo('/usr/bin/php');var_dump($info->getPath());$info u003d new SplFileInfo('/usr/');var_dump($info-> getPath());?> `

Результатом виконання цього прикладу буде щось подібне:

string(8) "/usr/bin"
string(4) "/usr"

### Дивіться також

- [SplFileInfo::getRealPath()](splfileinfo.getrealpath.md) -
Отримує абсолютний шлях до файлу
- [SplFileInfo::getFilename()](splfileinfo.getfilename.md) -
Отримує ім'я файлу
- [SplFileInfo::getPathInfo()](splfileinfo.getpathinfo.md) -
Отримує об'єкт SplFileInfo для заданого шляху
