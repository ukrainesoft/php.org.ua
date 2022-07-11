- [« SplFixedArray](class.splfixedarray.md)
- [SplFixedArray::count »](splfixedarray.count.md)

- [PHP Manual](index.md)
- [SplFixedArray](class.splfixedarray.md)
- створює новий масив фіксованої довжини

# SplFixedArray::\_\_construct

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8)

SplFixedArray::\_\_construct — Створює новий масив фіксованої довжини

### Опис

public **SplFixedArray::\_\_construct**(int `$size` u003d 0)

Створює фіксований масив із числом **`null`** значень, рівних
`Size`.

### Список параметрів

`size`
Розмір фіксованого масиву. Очікується значення між `0` та
**`PHP_INT_MAX`**.

### Помилки

Викидає виняток [ValueError](class.valueerror.md), якщо
параметр `size` негативний.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- --------|
| 8.0.0 | Тепер викидає виняток [ValueError](class.valueerror.md), якщо параметр `size` негативний; раніше викидався виняток [InvalidArgumentException](class.invalidargumentexception.md). |

### Приклади

**Приклад #1 Приклад використання **SplFixedArray::\_\_construct()****

` <?php$array u003d new SplFixedArray(5);$array[1] u003d 2;$array[4] u003d "foo";foreach($array as $v) { var_dump($v);}?> `

Результат виконання цього прикладу:

NULL
int(2)
NULL
NULL
string(3) "foo"
