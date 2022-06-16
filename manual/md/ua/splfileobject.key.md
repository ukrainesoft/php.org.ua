- [« SplFileObject::hasChildren](splfileobject.haschildren.md)
- [SplFileObject::next »](splfileobject.next.md)

- [PHP Manual](index.md)
- [SplFileObject](class.splfileobject.md)
- Отримати номер рядка

# SplFileObject::key

(PHP 5 \>u003d 5.1.0, PHP 7, PHP 8)

SplFileObject::key — Отримати номер рядка

### Опис

public **SplFileObject::key**(): int

Отримує номер поточного рядка.

> **Примітка**:
>
> Цей номер може відрізнятись від реального положення файлового
> покажчика, коли читаються рядки фіксованої довжини із завданням цієї
> довжини методом
> [SplFileObject::setMaxLineLen()](splfileobject.setmaxlinelen.md).

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає номер поточного рядка.

### Приклади

**Приклад #1 Приклад використання **SplFileObject::key()****

` <?php$file u003d new SplFileObject("lipsum.txt");foreach ($file as $line) {    echo $file->key() . ". " . $line;}?> `

Результатом виконання цього прикладу буде щось подібне:

0. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
1. Duis nec sapien felis, ac sodales nisl.
2. Lorem ipsum dolor sit amet, consectetur adipiscing elit.

**Приклад #2 Приклад використання **SplFileObject::key()** при заданні
довжини рядка методом
[SplFileObject::setMaxLineLen()](splfileobject.setmaxlinelen.md)**

` <?php$file u003d new SplFileObject("lipsum.txt");$file->setMaxLineLen(20);foreach ($file as $line) {   echo $file->key() . ". " . $line. "
";}?> `

Результатом виконання цього прикладу буде щось подібне:

0. Lorem ipsum dolor s
1. it amet, consectetu
2. r adipiscing elit.
3.

4. Duis nec sapien fel
5. is, ac sodales nisl
6. .

7. Lorem ipsum dolor s
8. it amet, consectetu
9. r adipiscing elit.

### Дивіться також

- [SplFileObject::current()](splfileobject.current.md) - Отримати
поточний рядок файлу
- [SplFileObject::seek()](splfileobject.seek.md) - Переклад файлового
вказівника на заданий рядок
- [SplFileObject::next()](splfileobject.next.md) - Читати наступну
рядок
- [SplFileObject::rewind()](splfileobject.rewind.md) - Перемотування
файлового покажчика на початок файлу
- [SplFileObject::valid()](splfileobject.valid.md) - Перевіряє,
чи досягнуто кінець файлу (EOF)
