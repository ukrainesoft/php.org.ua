- [« eio_grp_add](function.eio-grp-add.md)
- [eio_grp_limit »](function.eio-grp-limit.md)

- [PHP Manual](index.md)
- [Eio Функції](ref.eio.md)
- Скасує групу запитів

#eio_grp_cancel

(PECL eio \>u003d 0.0.1dev)

eio_grp_cancel — Скасує групу запитів

### Опис

**eio_grp_cancel**(resource `$grp`): void

**eio_grp_cancel()** скасовує групу запитів, вказівник на яку
визначений у `grp`.

### Список параметрів

`grp`
Вказівник на групу запитів, повернутий
[eio_grp()](function.eio-grp.md).

### Значення, що повертаються

Функція не повертає значення після виконання.

### Дивіться також

- [eio_grp()](function.eio-grp.md) - Створює групу запитів
- [eio_grp_add()](function.eio-grp-add.md) - Додає запит у
групу запитів
