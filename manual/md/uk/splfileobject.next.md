- [« SplFileObject::key](splfileobject.key.md)
- [SplFileObject::rewind »](splfileobject.rewind.md)

- [PHP Manual](index.md)
- [SplFileObject](class.splfileobject.md)
- Читати наступний рядок

# SplFileObject::next

(PHP 5 \>u003d 5.1.0, PHP 7, PHP 8)

SplFileObject::next — Читати наступний рядок

### Опис

public **SplFileObject::next**(): void

Перехід до наступного рядка у файлі.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Приклади

**Приклад #1 Приклад використання **SplFileObject::next()****

` <?php// Читаємо файл построчно$file u003d new SplFileObject("misc.txt");while (!$file->eof()) {   echo $file->current(); $file->next();}?> `

### Дивіться також

- [SplFileObject::current()](splfileobject.current.md) - Отримати
поточний рядок файлу
- [SplFileObject::key()](splfileobject.key.md) - Отримати номер
рядки
- [SplFileObject::seek()](splfileobject.seek.md) - Переклад файлового
вказівника на заданий рядок
- [SplFileObject::rewind()](splfileobject.rewind.md) - Перемотування
файлового покажчика на початок файлу
- [SplFileObject::valid()](splfileobject.valid.md) - Перевіряє,
чи досягнуто кінець файлу (EOF)
