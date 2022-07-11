- [« MultipleIterator::getFlags](multipleiterator.getflags.md)
- [MultipleIterator::next »](multipleiterator.next.md)

- [PHP Manual](index.md)
- [MultipleIterator](class.multipleiterator.md)
- отримує зареєстровані ітератори

# MultipleIterator::key

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8)

MultipleIterator::key — Отримує зареєстровані ітератори

### Опис

public **MultipleIterator::key**(): array

Отримує результат виконання key() зареєстрованих ітераторів.

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Масив (array) всіх зареєстрованих ітераторів.

### Помилки

[RuntimeException](class.runtimeexception.md), якщо ітератор
недійсний (починаючи з PHP 8.1.0) або встановлено режим
**`MIT_NEED_ALL`** і принаймні один приєднаний ітератор
недійсний.

Виклик цього методу з [foreach] (control-structures.foreach.md)
попередження "Повернений неправильний тип" ("Illegal type returned").

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -----------------|
| 8.1.0 | Тепер викидається [RuntimeException](class.runtimeexception.md), якщо **MultipleIterator::key()** викликається на неприпустимому ітераторі. Раніше натомість поверталося значення **`false`**. |

### Дивіться також

- [MultipleIterator::current()](multipleiterator.current.md) -
Отримує зареєстровані ітератори
