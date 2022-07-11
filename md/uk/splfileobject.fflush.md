- [« SplFileObject::eof](splfileobject.eof.md)
- [SplFileObject::fgetc »](splfileobject.fgetc.md)

- [PHP Manual](index.md)
- [SplFileObject](class.splfileobject.md)
- скидає буфер виводу у файл

# SplFileObject::fflush

(PHP 5 \>u003d 5.1.0, PHP 7, PHP 8)

SplFileObject::fflush — Скидає буфер виводу у файл

### Опис

public **SplFileObject::fflush**(): bool

Примусове записування всіх буферизованих даних у файл.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **SplFileObject::fflush()****

` <?php$file u003d new SplFileObject('misc.txt', 'r+');$file->rewind();$file->fwrite("Foo");$file->fflush();$file ->ftruncate($file->ftell());?> `

### Дивіться також

- [SplFileObject::fwrite()](splfileobject.fwrite.md) - Запис у файл
