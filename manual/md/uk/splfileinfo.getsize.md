- [« SplFileInfo::getRealPath](splfileinfo.getrealpath.md)
- [SplFileInfo::getType »](splfileinfo.gettype.md)

- [PHP Manual](index.md)
- [SplFileInfo](class.splfileinfo.md)
- Отримує розмір файлу

# SplFileInfo::getSize

(PHP 5 \>u003d 5.1.2, PHP 7, PHP 8)

SplFileInfo::getSize — Отримує розмір файлу

### Опис

public **SplFileInfo::getSize**(): int\|false

Повертає розмір файлу у байтах.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Розмір файлу в байтах у разі успішного виконання або **`false`**
у разі виникнення помилки.

### Помилки

Буде викинуто виняток
[RuntimeException](class.runtimeexception.md), якщо файл не існує
або виникла помилка.

### Дивіться також

- [filesize()](function.filesize.md) - Повертає розмір файлу
