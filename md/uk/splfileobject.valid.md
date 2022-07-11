- [« SplFileObject::\_\_toString](splfileobject.tostring.md)
- [SplTempFileObject »](class.spltempfileobject.md)

- [PHP Manual](index.md)
- [SplFileObject](class.splfileobject.md)
- Перевіряє, чи кінець файлу досягнуто (EOF)

# SplFileObject::valid

(PHP 5 \>u003d 5.1.0, PHP 7, PHP 8)

SplFileObject::valid — Перевіряє, чи кінець файлу досягнуто (EOF)

### Опис

public **SplFileObject::valid**(): bool

Перевіряє, чи було досягнуто кінець файлу (EOF).

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає **`true`**, якщо EOF не досягнуто, **`false`** у протилежному
випадку.

### Приклади

**Приклад #1 Приклад використання **SplFileObject::valid()****

` <?php// Цикл по файлу$file u003d new SplFileObject("file.txt");while ($file->valid()) {    echo $file->fgets();}?> `

### Дивіться також

- [SplFileObject::current()](splfileobject.current.md) - Отримати
поточний рядок файлу
- [SplFileObject::key()](splfileobject.key.md) - Отримати номер
рядки
- [SplFileObject::seek()](splfileobject.seek.md) - Переклад файлового
вказівника на заданий рядок
- [SplFileObject::next()](splfileobject.next.md) - Читати наступну
рядок
- [SplFileObject::rewind()](splfileobject.rewind.md) - Перемотування
файлового покажчика на початок файлу
