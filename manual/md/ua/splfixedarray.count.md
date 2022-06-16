- [« SplFixedArray::\_\_construct](splfixedarray.construct.md)
- [SplFixedArray::current »](splfixedarray.current.md)

- [PHP Manual](index.md)
- [SplFixedArray](class.splfixedarray.md)
- Повертає розмір масиву

# SplFixedArray::count

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8)

SplFixedArray::count — Повертає розмір масиву

### Опис

public **SplFixedArray::count**(): int

Повертає розмір масиву.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає розмір масиву.

### Приклади

**Приклад #1 Приклад **SplFixedArray::count()****

` <?php$array u003d new SplFixedArray(5);echo $array->count() . "
";echo count($array) . "
";?> `

Результат виконання цього прикладу:

5
5

### Примітки

> **Примітка**:
>
> Цей метод еквівалентний
> [SplFixedArray::getSize()](splfixedarray.getsize.md).

> **Примітка**:
>
> Число елементів завжди дорівнює заданому розміру, т.к. всі значення
> спочатку ініціалізуються як **`null`**.

### Дивіться також

- [SplFixedArray::getSize()](splfixedarray.getsize.md) - Отримує
розмір масиву
