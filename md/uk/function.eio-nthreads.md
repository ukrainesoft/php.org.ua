- [«eio_nreqs](function.eio-nreqs.md)
- [eio_open »](function.eio-open.md)

- [PHP Manual](index.md)
- [Eio Функції](ref.eio.md)
- Повертає кількість потоків, що використовуються в даний момент

#eio_nthreads

(PECL eio \>u003d 0.0.1dev)

eio_nthreads — Повертає кількість використовуваних на даний момент
потоків

### Опис

**eio_nthreads**(): int

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

**eio_nthreads()** повертає кількість використовуваних на даний момент
потоків.

### Дивіться також

- [eio_npending()](function.eio-npending.md) - Повертає число
завершених, але необроблених процесів
- [eio_nready()](function.eio-nready.md) - Повертає число ще не
оброблених запитів
- [eio_nreqs()](function.eio-nreqs.md) - Повертає кількість запитів,
які належить виконати
- [eio_set_max_idle()](function.eio-set-max-idle.md) - Встановлює
максимальна кількість очікуваних потоків
- [eio_set_max_parallel()](function.eio-set-max-parallel.md) -
Встановлює максимальну кількість паралельних потоків
- [eio_set_min_parallel()](function.eio-set-min-parallel.md) -
Встановлює мінімальну кількість паралельних потоків
