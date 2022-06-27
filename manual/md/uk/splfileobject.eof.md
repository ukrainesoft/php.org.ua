- [« SplFileObject::current](splfileobject.current.md)
- [SplFileObject::fflush »](splfileobject.fflush.md)

- [PHP Manual](index.md)
- [SplFileObject](class.splfileobject.md)
- Перевіряє, чи кінець файлу досягнуто

# SplFileObject::eof

(PHP 5 \>u003d 5.1.0, PHP 7, PHP 8)

SplFileObject::eof — Перевіряє, чи кінець файлу досягнуто.

### Опис

public **SplFileObject::eof**(): bool

Визначає, чи було досягнуто кінця файлу

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає **`true`**, якщо кінець файлу було досягнуто; **`false`** в
інакше.

### Приклади

**Приклад #1 Приклад використання **SplFileObject::eof()****

` <?php$file u003d new SplFileObject("fruits.txt");while ( ! $file->eof()) {    echo $file->fgets();}?> `

Результатом виконання цього прикладу буде щось подібне:

apple
banana
cherry
date
elderberry

### Дивіться також

- [SplFileObject::valid()](splfileobject.valid.md) - Перевіряє,
чи досягнуто кінець файлу (EOF)
- [feof()](function.feof.md) - Перевіряє, чи кінець файлу досягнуто
