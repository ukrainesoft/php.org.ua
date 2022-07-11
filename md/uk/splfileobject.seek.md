- [« SplFileObject::rewind](splfileobject.rewind.md)
- [SplFileObject::setCsvControl »](splfileobject.setcsvcontrol.md)

- [PHP Manual](index.md)
- [SplFileObject](class.splfileobject.md)
- Переклад файлового покажчика на заданий рядок

# SplFileObject::seek

(PHP 5 \>u003d 5.1.0, PHP 7, PHP 8)

SplFileObject::seek — Переклад файлового покажчика на заданий рядок

### Опис

public **SplFileObject::seek**(int `$line`): void

Переводить файловий покажчик на заданий рядок.

### Список параметрів

`line`
Номер рядка, починаючи з 0, який потрібно перейти.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Помилки

Викидає виняток [LogicException](class.logicexception.md), якщо
аргумент `line` набуває негативного значення.

### Приклади

**Приклад #1 Приклад використання **SplFileObject::seek()****

Цей приклад виводить третій рядок скрипта на 2-й позиції.

` <?php$file u003d new SplFileObject(__FILE__);$file->seek(2);echo $file->current();?> `

Результатом виконання цього прикладу буде щось подібне:

$file->seek(2);

### Дивіться також

- [SplFileObject::current()](splfileobject.current.md) - Отримати
поточний рядок файлу
- [SplFileObject::key()](splfileobject.key.md) - Отримати номер
рядки
- [SplFileObject::next()](splfileobject.next.md) - Читати наступну
рядок
- [SplFileObject::rewind()](splfileobject.rewind.md) - Перемотування
файлового покажчика на початок файлу
- [SplFileObject::valid()](splfileobject.valid.md) - Перевіряє,
чи досягнуто кінець файлу (EOF)
