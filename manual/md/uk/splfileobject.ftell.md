- [« SplFileObject::fstat](splfileobject.fstat.md)
- [SplFileObject::ftruncate »](splfileobject.ftruncate.md)

- [PHP Manual](index.md)
- [SplFileObject](class.splfileobject.md)
- Повернути поточну позицію файлового покажчика

# SplFileObject::ftell

(PHP 5 \>u003d 5.1.0, PHP 7, PHP 8)

SplFileObject::ftell — Повернути поточну позицію файлового покажчика

### Опис

public **SplFileObject::ftell**(): int\|false

Повертає поточну позицію файлового покажчика, яка представляє
поточне усунення у файловому потоці.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає позицію файлового покажчика у вигляді цілого числа або
**`false`** у разі помилки.

### Приклади

**Приклад #1 Приклад використання **SplFileObject::ftell()****

` <?php$file u003d new SplFileObject("/etc/passwd");// Читаємо перший рядок$data u003d $file->fgets();// Визначаємо, де ми?echo $file->ftell(); ?> `

### Дивіться також

- [ftell()](function.ftell.md) - Повертає поточну позицію
покажчика читання/запису файлу
