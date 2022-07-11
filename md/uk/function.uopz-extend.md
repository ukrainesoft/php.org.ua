- [«uopz_delete](function.uopz-delete.md)
- [uopz_flags »](function.uopz-flags.md)

- [PHP Manual](index.md)
- [Функції Uopz](ref.uopz.md)
- Розширити клас під час виконання

#uopz_extend

(PECL uopz 1, PECL uopz 2, PECL uopz 5, PECL uopz 6, PECL uopz 7 \<
7.1.0)

uopz_extend — Розширити клас під час виконання

### Опис

**uopz_extend**(string `$class`, string `$parent`): bool

Розширює поточний клас `class` батьківським `parent`

### Список параметрів

`class`
Назва класу для розширення

`parent`
Назва класу для успадкування

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Помилки

Починаючи з PHP 7.4.0, **uopz_extends()** викидає
[RuntimeException](class.runtimeexception.md), якщо
[OPcache](book.opcache.md) включений і запис класу або `class`, або
`parent` (якщо це ознака) незмінні.

### Приклади

**Приклад #1 Приклад використання **uopz_extend()****

` <?phpclass A {}class B {}uopz_extend(A::class, B::class);var_dump(class_parents(A::class));?> `

Результат виконання цього прикладу:

array(1) {
["B"]u003d>
string(1) "B"
}
