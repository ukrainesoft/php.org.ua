- [« xhprof_enable](function.xhprof-enable.md)
- [xhprof_sample_enable »](function.xhprof-sample-enable.md)

- [PHP Manual](index.md)
- [Функції Xhprof](ref.xhprof.md)
- Зупинити семплююче профіль xhprof

#xhprof_sample_disable

(PECL xhprof \>u003d 0.9.0)

xhprof_sample_disable — Зупинити профілювання, що семплює, xhprof

### Опис

**xhprof_sample_disable**(): array

Зупинити семплюючі профіль xhprof.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Масив даних, зібраний профайлером.

### Приклади

**Приклад #1 Приклад використання **xhprof_sample_disable()****

` <?phpxhprof_sample_enable();for ($i u003d 0; $i <u003d 10000; $i++) {   $a u003d strlen($i); $b u003d $i * $a; $c u003d rand();}$xhprof_data u003d xhprof_sample_disable();print_r($xhprof_data);?> `

Результатом виконання цього прикладу буде щось подібне:

Array
(
[1272935300.800000] u003d> main()
[1272935300.900000] u003d> main()
)
