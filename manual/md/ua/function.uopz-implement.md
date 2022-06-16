- [«uopz_get_static](function.uopz-get-static.md)
- [uopz_overload »](function.uopz-overload.md)

- [PHP Manual](index.md)
- [Функції Uopz](ref.uopz.md)
- реалізує інтерфейс під час виконання

#uopz_implement

(PECL uopz 1, PECL uopz 2, PECL uopz 5, PECL uopz 6, PECL uopz 7 \<
7.1.0)

uopz_implement — Реалізує інтерфейс під час виконання

### Опис

**uopz_implement**(string `$class`, string `$interface`): bool

Робить `class`, що реалізує `interface`

### Список параметрів

`class`

`interface`

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Помилки

Починаючи з PHP 7.4.0, **uopz_implements()** викидає
[RuntimeException](class.runtimeexception.md), якщо
[OPcache](book.opcache.md) включений і запис класу `class` незмінна.

### Приклади

**Приклад #1 Приклад використання **uopz_implement()****

` <?phpinterface myInterface {}class myClass {}uopz_implement(myClass::class, myInterface::class);var_dump(class_implements(myClass::class));?> `

Результат виконання цього прикладу:

array(1) {
["myInterface"]u003d>
string(11) "myInterface"
}
