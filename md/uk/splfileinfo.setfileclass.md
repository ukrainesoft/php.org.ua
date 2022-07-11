- [« SplFileInfo::openFile](splfileinfo.openfile.md)
- [SplFileInfo::setInfoClass »](splfileinfo.setinfoclass.md)

- [PHP Manual](index.md)
- [SplFileInfo](class.splfileinfo.md)
- Задає ім'я класу, який використовуватиметься методом
SplFileInfo::openFile

# SplFileInfo::setFileClass

(PHP 5 \>u003d 5.1.2, PHP 7, PHP 8)

SplFileInfo::setFileClass — Задає ім'я класу, який буде
використовуватися методом
[SplFileInfo::openFile()](splfileinfo.openfile.md)

### Опис

public **SplFileInfo::setFileClass**(string `$class` u003d
SplFileObject::class): void

Задає ім'я класу, яке використовуватиме метод
[SplFileInfo::openFile()](splfileinfo.openfile.md). Цим класом
має бути [SplFileObject](class.splfileobject.md) або спадкоємець
класу [SplFileObject](class.splfileobject.md).

### Список параметрів

`class`
Ім'я класу для методу
[SplFileInfo::openFile()](splfileinfo.openfile.md).

### Значення, що повертаються

Функція не повертає значення після виконання.

### Приклади

**Приклад #1 Приклад використання **SplFileInfo::setFileClass()****

` <?php// Створити клас, розширюючий SplFileObjectclass MyFoo extends SplFileObject {}$info u003d new SplFileInfo(__FILE__);// Встановити ім'я класу для <$> ());?> `

Результатом виконання цього прикладу буде щось подібне:

object(MyFoo)#2 (0) { }

### Дивіться також

- [SplFileInfo::openFile()](splfileinfo.openfile.md) - Отримує
об'єкт SplFileObject для файлу
