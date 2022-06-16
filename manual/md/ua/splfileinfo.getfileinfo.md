- [« SplFileInfo::getExtension](splfileinfo.getextension.md)
- [SplFileInfo::getFilename »](splfileinfo.getfilename.md)

- [PHP Manual](index.md)
- [SplFileInfo](class.splfileinfo.md)
- Отримує об'єкт SplFileInfo для файлу

# SplFileInfo::getFileInfo

(PHP 5 \>u003d 5.1.2, PHP 7, PHP 8)

SplFileInfo::getFileInfo — Отримує об'єкт SplFileInfo для файлу

### Опис

public **SplFileInfo::getFileInfo**(?string `$class` u003d **`null`**):
[SplFileInfo](class.splfileinfo.md)

Цей метод отримує об'єкт [SplFileInfo](class.splfileinfo.md) для
вказаного файлу.

### Список параметрів

`class`
Ім'я похідного від [SplFileInfo](class.splfileinfo.md) класу
використання.

### Значення, що повертаються

Об'єкт [SplFileInfo](class.splfileinfo.md), створений для файлу.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -|
| 8.0.0 | `class` тепер припускає значення null. |

### Дивіться також

- [SplFileInfo::setInfoClass()](splfileinfo.setinfoclass.md) -
Задає ім'я класу, об'єкти якого створюватимуться методами
SplFileInfo::getFileInfo та SplFileInfo::getPathInfo
