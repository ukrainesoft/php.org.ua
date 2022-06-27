- [«eio_grp_cancel](function.eio-grp-cancel.md)
- [eio_grp »] (function.eio-grp.md)

- [PHP Manual](index.md)
- [Eio Функції](ref.eio.md)
- Встановлює граничну кількість запитів у групі

#eio_grp_limit

(PECL eio \>u003d 0.0.1dev)

eio_grp_limit — Встановлює граничну кількість запитів у групі

### Опис

**eio_grp_limit**(resource `$grp`, int `$limit`): void

Встановлює максимальну кількість запитів у групі.

### Список параметрів

`grp`
Покажчик на групу ресурсів

`limit`
Максимальна кількість ресурсів у групі.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Дивіться також

- [eio_grp_add()](function.eio-grp-add.md) - Додає запит у
групу запитів
