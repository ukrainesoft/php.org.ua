- [«uopz_unset_mock](function.uopz-unset-mock.md)
- [WinCache »](book.wincache.md)

- [PHP Manual](index.md)
- [Функції Uopz](ref.uopz.md)
- Скасує раніше встановлене значення для функції

#uopz_unset_return

(PECL uopz 5, PECL uopz 6, PECL uopz 7)

uopz_unset_return — Скасує раніше встановлене значення, що повертається
для функції

### Опис

**uopz_unset_return**(string `$function`): bool

**uopz_unset_return**(string `$class`, string `$function`): bool

Скасовує значення, що повертається `function`, раніше задане функцією
[uopz_set_return()](function.uopz-set-return.md).

### Список параметрів

`class`
Ім'я класу, що містить функцію

`function`
Ім'я функції

### Значення, що повертаються

True у разі успішного виконання

### Приклади

**Приклад #1 Приклад використання **uopz_unset_return()****

` <?phpuopz_set_return("strlen", 42);$len u003d strlen("Banana");uopz_unset_return("strlen");echo $len + strlen("Banana");?> `

Результат виконання цього прикладу:

48
