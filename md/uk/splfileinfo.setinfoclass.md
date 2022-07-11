- [« SplFileInfo::setFileClass](splfileinfo.setfileclass.md)
- [SplFileInfo::\_\_toString »](splfileinfo.tostring.md)

- [PHP Manual](index.md)
- [SplFileInfo](class.splfileinfo.md)
- задає ім'я класу, об'єкти якого створюватимуться методами
SplFileInfo::getFileInfo та SplFileInfo::getPathInfo

# SplFileInfo::setInfoClass

(PHP 5 \>u003d 5.1.2, PHP 7, PHP 8)

SplFileInfo::setInfoClass — Задає ім'я класу, об'єкти якого будуть
створюватися методами
[SplFileInfo::getFileInfo()](splfileinfo.getfileinfo.md) та
[SplFileInfo::getPathInfo()](splfileinfo.getpathinfo.md)

### Опис

public **SplFileInfo::setInfoClass**(string `$class` u003d
SplFileInfo::class): void

Задає ім'я класу, об'єкти якого будуть створюватися під час виклику методів
[SplFileInfo::getFileInfo()](splfileinfo.getfileinfo.md) та
[SplFileInfo::getPathInfo()](splfileinfo.getpathinfo.md). Клас повинен
бути [SplFileInfo](class.splfileinfo.md) або класом, похідним від
[SplFileInfo](class.splfileinfo.md).

### Список параметрів

`class`
Ім'я класу, який використовуватиметься під час виклику
[SplFileInfo::getFileInfo()](splfileinfo.getfileinfo.md) та
[SplFileInfo::getPathInfo()](splfileinfo.getpathinfo.md).

### Значення, що повертаються

Функція не повертає значення після виконання.

### Приклади

**Приклад #1 Приклад використання
[SplFileInfo::setFileClass()](splfileinfo.setfileclass.md)**

` <?php// Визначити клас, що розширює SplFileInfoclass MyFoo extends SplFileInfo {}$info u003d new SplFileInfo('foo');// Встановити ім'я класу| ->getFileInfo());?> `

Результатом виконання цього прикладу буде щось подібне:

object(MyFoo)#2 (0) { }

### Дивіться також

- [SplFileInfo::getFileInfo()](splfileinfo.getfileinfo.md) -
Отримує об'єкт SplFileInfo для файлу
