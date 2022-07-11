- [« xhprof_disable](function.xhprof-disable.md)
- [xhprof_sample_disable »](function.xhprof-sample-disable.md)

- [PHP Manual](index.md)
- [Функції Xhprof](ref.xhprof.md)
- Запуск профілювання xhprof

#xhprof_enable

(PECL xhprof \>u003d 0.9.0)

xhprof_enable — Запуск профілювання xhprof

### Опис

**xhprof_enable**(int `$flags` u003d 0, array `$options` u003d ?): void

Запускає профіль.

### Список параметрів

`flags`
Необов'язкові прапори для отримання додаткової інформації
профільування. Подробиці можна знайти в розділі [Константи
XHprof] (xhprof.constants.md). Наприклад, **`XHPROF_FLAGS_MEMORY`**
включає профіль пам'яті.

`options`
Масив (array) необов'язкових опцій, саме опція
'ignored_functions' зі списком функцій, які не потрібно профілювати.

### Значення, що повертаються

**`null`**

### Список змін

| Версія | Опис |
|-------------------|----------------------------- ----------------|
| PECL xhprof 0.9.2 | Додано необов'язковий параметр `options`. |

### Приклади

**Приклад #1 Приклад використання **xhprof_enable()****

`<?php// 1. час виконання + пам'ять + CPU; також ігноруємо функціїстандартної бібліотекиxhprof_enable(XHPROF_FLAGS_NO_BUILTINS | XHPROF_FLAGS_CPU | XHPROF_FLAGS_MEMORY);// 2. час виконання; игнорируем функции ignore call_user_func*xhprof_enable(    0,    array('ignored_functions' u003d>  array('call_user_func',                                        'call_user_func_array')));// 3. время исполнения + память; игнорируем функции call_user_func*xhprof_enable(    XHPROF_FLAGS_MEMORY,    array('ignored_functions' u003d>  array('call_user_func',                                        'call_user_func_array')));?> `

### Дивіться також

- [xhprof_disable()](function.xhprof-disable.md) - Зупиняє
профіль xhprof
- [xhprof_sample_enable()](function.xhprof-sample-enable.md) -
Запуск семплюючого режиму профілювання XHProf
- [memory_get_usage()](function.memory-get-usage.md) - Повертає
кількість пам'яті, виділена для PHP
- [getrusage()](function.getrusage.md) - Отримує інформацію про
використання поточного ресурсу
