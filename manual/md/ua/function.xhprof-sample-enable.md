- [« xhprof_sample_disable](function.xhprof-sample-disable.md)
- [Yac »](book.yac.md)

- [PHP Manual](index.md)
- [Функції Xhprof](ref.xhprof.md)
- Запуск семплюючого режиму профілювання XHProf

#xhprof_sample_enable

(PECL xhprof \>u003d 0.9.0)

xhprof_sample_enable — Запуск семплюючого режиму профілювання XHProf

### Опис

**xhprof_sample_enable**(): void

Запуск семплюючого режиму профілювання, який є полегшеним
версією [xhprof_enable()](function.xhprof-enable.md). Інтервал
семплювання становить 0.1 секунди і за кожної ітерації записується
стек викликів. Цей режим призначений для зниження накладних витрат
під час моніторингу продуктивності.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

**`null`**

### Дивіться також

- [xhprof_sample_disable()](function.xhprof-sample-disable.md) -
Зупинити семплюючі профіль xhprof
- [xhprof_enable()](function.xhprof-enable.md) - Запуск
профілювання xhprof
- [memory_get_usage()](function.memory-get-usage.md) - Повертає
кількість пам'яті, виділена для PHP
- [getrusage()](function.getrusage.md) - Отримує інформацію про
використання поточного ресурсу
