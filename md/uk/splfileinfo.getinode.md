- [« SplFileInfo::getGroup](splfileinfo.getgroup.md)
- [SplFileInfo::getLinkTarget »](splfileinfo.getlinktarget.md)

- [PHP Manual](index.md)
- [SplFileInfo](class.splfileinfo.md)
- Отримує індексний дескриптор для файлу

# SplFileInfo::getInode

(PHP 5 \>u003d 5.1.2, PHP 7, PHP 8)

SplFileInfo::getInode — Отримує індексний дескриптор для файлу

### Опис

public **SplFileInfo::getInode**(): int\|false

Отримує номер індексного дескриптора об'єкта файлової системи.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає номер індексного дескриптора для об'єкта файлової системи
у разі успішного виконання або **`false`** у разі виникнення
помилки.

### Помилки

У разі виникнення помилки викидає виняток
[RuntimeException](class.runtimeexception.md).

### Дивіться також

- [fileinode()](function.fileinode.md) - Повертає індексний
дескриптор файлу
