- [«rrd_fetch](function.rrd-fetch.md)
- [rrd_graph»](function.rrd-graph.md)

- [PHP Manual](index.md)
- [Функції RRD](ref.rrd.md)
- Повертає позначку часу першого зразка із файлу rrd

#rrd_first

(PECL rrd \>u003d 0.9.0)

rrd_first — Повертає позначку часу першого зразка з файлу rrd

### Опис

**rrd_first**(string `$file`, int `$raaindex` u003d 0): int

Повертає перший зразок даних із зазначеного RRA файлу RRD.

### Список параметрів

`file`
Назва файлу бази даних RRD.

`raaindex`
Номер індексу RRA, який має бути розглянутий. Значення по
замовчуванням - 0.

### Значення, що повертаються

Номер позначки часу unix у вигляді цілого числа або **`false`** у разі
виникнення помилки.
