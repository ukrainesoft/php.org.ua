- [« SplFileInfo::getCTime](splfileinfo.getctime.md)
- [SplFileInfo::getFileInfo »](splfileinfo.getfileinfo.md)

- [PHP Manual](index.md)
- [SplFileInfo](class.splfileinfo.md)
- Отримує розширення файлу

# SplFileInfo::getExtension

(PHP 5 \>u003d 5.3.6, PHP 7, PHP 8)

SplFileInfo::getExtension — Отримує розширення файлу

### Опис

public **SplFileInfo::getExtension**(): string

Повертає розширення файлу.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає рядок (string), який містить розширення файлу, або порожній
рядок (string), якщо файл не має розширення.

### Приклади

**Приклад #1 Приклад використання **SplFileInfo::getExtension()****

` <?php$info u003d new SplFileInfo('foo.txt');var_dump($info->getExtension());$info u003d new SplFileInfo('photo.jpg');var_dump($info->getExtension() );$info u003d new SplFileInfo('something.tar.gz');var_dump($info->getExtension());?> `

Результат виконання цього прикладу:

string(3) "txt"
string(3) "jpg"
string(2) "gz"

### Примітки

> **Примітка**:
>
> Інший спосіб отримання розширення - використання функції
> [pathinfo()](function.pathinfo.md).
>
> ` <?php$extension u003d pathinfo($info->getFilename(), PATHINFO_EXTENSION);?> `

### Дивіться також

- [SplFileInfo::getFilename()](splfileinfo.getfilename.md) -
Отримує ім'я файлу
- [SplFileInfo::getBasename()](splfileinfo.getbasename.md) -
Отримує базове ім'я файлу
- [pathinfo()](function.pathinfo.md) - Повертає інформацію про шлях
до файлу
