- [« Функції Xhprof](ref.xhprof.md)
- [xhprof_enable »](function.xhprof-enable.md)

- [PHP Manual](index.md)
- [Функції Xhprof](ref.xhprof.md)
- Зупиняє профіль xhprof

#xhprof_disable

(PECL xhprof \>u003d 0.9.0)

xhprof_disable — Зупиняє профіль xhprof

### Опис

**xhprof_disable**(): array

Зупиняє профіль та повертає зібрані дані.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Масив із результатами профілювання.

### Приклади

**Приклад #1 Приклад використання **xhprof_disable()****

` <?phpxhprof_enable();$foo u003d strlen("foo bar");$xhprof_data u003d xhprof_disable();print_r($xhprof_data);?> `

Результатом виконання цього прикладу буде щось подібне:

Array
(
[main()u003du003d>strlen] u003d> Array
(
[ct] u003d> 1
[wt] u003d> 279
)

[main()u003du003d>xhprof_disable] u003d> Array
(
[ct] u003d> 1
[wt] u003d> 9
)

[main()] u003d> Array
(
[ct] u003d> 1
[wt] u003d> 610
)

)
