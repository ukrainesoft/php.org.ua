- [«eio_sendfile](function.eio-sendfile.md)
- [eio_set_max_parallel »](function.eio-set-max-parallel.md)

- [PHP Manual](index.md)
- [Eio Функції](ref.eio.md)
- Встановлює максимальну кількість очікуваних потоків

#eio_set_max_idle

(PECL eio \>u003d 0.0.1dev)

eio_set_max_idle — Встановлює максимальну кількість тих, хто очікує
потоків

### Опис

**eio_set_max_idle**(int `$nthreads`): void

### Список параметрів

`nthreads`
Кількість потоків, що простоюють.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Дивіться також

- [eio_nthreads()](function.eio-nthreads.md) - Повертає кількість
використовуваних в даний момент потоків
- [eio_set_min_parallel()](function.eio-set-min-parallel.md) -
Встановлює мінімальну кількість паралельних потоків
- [eio_set_max_parallel()](function.eio-set-max-parallel.md) -
Встановлює максимальну кількість паралельних потоків
