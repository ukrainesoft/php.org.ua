- [« SplFileInfo::getPath](splfileinfo.getpath.md)
- [SplFileInfo::getPathname »](splfileinfo.getpathname.md)

- [PHP Manual](index.md)
- [SplFileInfo](class.splfileinfo.md)
- Отримує об'єкт SplFileInfo для заданого шляху

# SplFileInfo::getPathInfo

(PHP 5 \>u003d 5.1.2, PHP 7, PHP 8)

SplFileInfo::getPathInfo — Отримує об'єкт SplFileInfo для заданого
шляхи

### Опис

public **SplFileInfo::getPathInfo**(?string `$class` u003d **`null`**):
?[SplFileInfo](class.splfileinfo.md)

Отримує об'єкт класу [SplFileInfo](class.splfileinfo.md) для шляху
поточний файл.

### Список параметрів

`class`
Ім'я похідного від [SplFileInfo](class.splfileinfo.md) класу
використання або себе, якщо **`null`**.

### Значення, що повертаються

Повертає об'єкт класу [SplFileInfo](class.splfileinfo.md) для
батьківського шляху файлу у разі успішного виконання або **`null`**
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -|
| 8.0.0 | `class` тепер припускає значення null. |

### Приклади

**Приклад #1 Приклад використання **SplFileInfo::getPathInfo()****

` <?php$info u003d new SplFileInfo('/usr/bin/php');$parent_info u003d $info->getPathInfo();var_dump($parent_info->getRealPath());?> `

Результатом виконання цього прикладу буде щось подібне:

string(8) "/usr/bin"

### Дивіться також

- [SplFileInfo::setInfoClass()](splfileinfo.setinfoclass.md) -
Задає ім'я класу, об'єкти якого створюватимуться методами
SplFileInfo::getFileInfo та SplFileInfo::getPathInfo
