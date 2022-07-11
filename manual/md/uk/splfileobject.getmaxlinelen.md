- [« SplFileObject::getFlags](splfileobject.getflags.md)
- [SplFileObject::hasChildren »](splfileobject.haschildren.md)

- [PHP Manual](index.md)
- [SplFileObject](class.splfileobject.md)
- Отримати максимальну довжину рядка

# SplFileObject::getMaxLineLen

(PHP 5 \>u003d 5.1.0, PHP 7, PHP 8)

SplFileObject::getMaxLineLen — Отримати максимальну довжину рядка

### Опис

public **SplFileObject::getMaxLineLen**(): int

Отримує максимальну довжину рядка, встановлену за допомогою
[SplFileObject::setMaxLineLen()](splfileobject.setmaxlinelen.md).

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає максимальну довжину рядка, якщо вона була встановлена з
допомогою
[SplFileObject::setMaxLineLen()](splfileobject.setmaxlinelen.md), за
замовчуванням `0`.

### Приклади

**Приклад #1 Приклад використання **SplFileObject::getMaxLineLen()****

` <?php$file u003d new SplFileObject("file.txt");var_dump($file->getMaxLineLen());$file->setMaxLineLen(20);var_dump($file->getMaxLineLen());?> `

Результатом виконання цього прикладу буде щось подібне:

int(0)
int(20)

### Дивіться також

- [SplFileObject::setMaxLineLen()](splfileobject.setmaxlinelen.md) -
Встановити максимальну довжину рядка
