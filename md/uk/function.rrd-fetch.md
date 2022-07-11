- [«rrd_error](function.rrd-error.md)
- [rrd_first »] (function.rrd-first.md)

- [PHP Manual](index.md)
- [Функції RRD](ref.rrd.md)
- Витягти дані для графіка у вигляді масиву

#rrd_fetch

(PECL rrd \>u003d 0.9.0)

rrd_fetch — Витягти дані для графіка у вигляді масиву

### Опис

**rrd_fetch**(string `$filename`, array `$options`): array

Витягує дані для графіка як масиву з файлу RRD. Функція
працює так само як і [rrd_graph()](function.rrd-graph.md), але дані
повертаються як масиву, а зображення не створюється.

### Список параметрів

`filename`
Назва файлу RRD.

`options`
Масив опцій для специфікації дозволу.

### Значення, що повертаються

Вилучений масив даних.
