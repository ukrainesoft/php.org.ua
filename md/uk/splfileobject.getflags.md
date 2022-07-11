- [« SplFileObject::getCurrentLine](splfileobject.getcurrentline.md)
- [SplFileObject::getMaxLineLen »](splfileobject.getmaxlinelen.md)

- [PHP Manual](index.md)
- [SplFileObject](class.splfileobject.md)
- Отримує прапори налаштування об'єкту SplFileObject

# SplFileObject::getFlags

(PHP 5 \>u003d 5.1.0, PHP 7, PHP 8)

SplFileObject::getFlags — Отримує прапорці налаштування об'єкту SplFileObject

### Опис

public **SplFileObject::getFlags**(): int

Отримує прапори налаштування об'єкта SplFileObject у вигляді цілого числа типу
int.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає число типу int, яке представляє набір прапорів.

### Приклади

**Приклад #1 Приклад використання **SplFileObject::getFlags()****

` <?php$file u003d new SplFileObject(__FILE__, "r");if ($file->getFlags() & SplFileObject::SKIP_EMPTY) {    echo "Пропускати пусті рядки
";} else {    echo "Не пропускати пусті рядки
";}$file->setFlags(SplFileObject::SKIP_EMPTY);if ($file->getFlags() & SplFileObject::SKIP_EMPTY) {    echo "Пропускати пусті рядки
";} else {    echo "Не пропускати пусті рядки
";}?> `

Результатом виконання цього прикладу буде щось подібне:

Не пропускати порожні рядки
Пропускати порожні рядки

### Дивіться також

- [SplFileObject::setFlags()](splfileobject.setflags.md) -
Встановлює прапори для SplFileObject
