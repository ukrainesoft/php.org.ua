- [«uopz_get_property](function.uopz-get-property.md)
- [uopz_get_static »](function.uopz-get-static.md)

- [PHP Manual](index.md)
- [Функції Uopz](ref.uopz.md)
- Отримує попереднє встановлене значення, що повертається для функції

#uopz_get_return

(PECL uopz 5, PECL uopz 6, PECL uopz 7)

uopz_get_return — Отримує попереднє встановлене повернення.
значення для функції

### Опис

**uopz_get_return**(string `$function`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

**uopz_get_return**(string `$class`, string `$function`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

Отримує значення, що повертається `function`, раніше встановлене за допомогою
[uopz_set_return()](function.uopz-set-return.md).

### Список параметрів

`class`
Ім'я класу, що містить функцію

`function`
Ім'я функції

### Значення, що повертаються

Раніше встановлено значення або об'єкт Closure.

### Приклади

**Приклад #1 Приклад використання **uopz_get_return()****

` <?phpuopz_set_return("strlen", 42);echo uopz_get_return("strlen");?> `

Результат виконання цього прикладу:

42
