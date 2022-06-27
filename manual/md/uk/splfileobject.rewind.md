- [« SplFileObject::next](splfileobject.next.md)
- [SplFileObject::seek »](splfileobject.seek.md)

- [PHP Manual](index.md)
- [SplFileObject](class.splfileobject.md)
- Перемотування файлового покажчика на початок файлу

# SplFileObject::rewind

(PHP 5 \>u003d 5.1.0, PHP 7, PHP 8)

SplFileObject::rewind — Перемотування файлового покажчика на початок файлу

### Опис

public **SplFileObject::rewind**(): void

Перемотує файловий покажчик на початок файлу.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Помилки

Якщо вказівник не можна перемотати, буде викинуто виняток
[RuntimeException](class.runtimeexception.md).

### Приклади

**Приклад #1 Приклад використання **SplFileObject::rewind()****

`<?php$file u003d new SplFileObject("misc.txt");// Прохід по всему файлуforeach ($file as $line) { }// Перемотання на/ перший рядок$file->rewind рядкиecho $file->current();?> `

### Дивіться також

- [SplFileObject::current()](splfileobject.current.md) - Отримати
поточний рядок файлу
- [SplFileObject::key()](splfileobject.key.md) - Отримати номер
рядки
- [SplFileObject::seek()](splfileobject.seek.md) - Переклад файлового
вказівника на заданий рядок
- [SplFileObject::next()](splfileobject.next.md) - Читати наступну
рядок
- [SplFileObject::valid()](splfileobject.valid.md) - Перевіряє,
чи досягнуто кінець файлу (EOF)
