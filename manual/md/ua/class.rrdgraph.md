- [« RRDCreator::save](rrdcreator.save.md)
- [RRDGraph::\_\_construct »](rrdgraph.construct.md)

- [PHP Manual](index.md)
- [RRD](book.rrd.md)
- Клас RRDGraph

# Клас RRDGraph

(PECL rrd \>u003d 0.9.0)

## Вступ

Клас для експорту даних із файлу бази даних RRD у зображення.

## Огляд класів

class **RRDGraph** {

/\* Методи \*/

public [\_\_construct](rrdgraph.construct.md)(string `$path`)

public [save](rrdgraph.save.md)(): array

public [saveVerbose](rrdgraph.saveverbose.md)(): array

public [setOptions](rrdgraph.setoptions.md)(array `$options`): void

}

## Зміст

- [RRDGraph::\_\_construct](rrdgraph.construct.md) - Створює новий
екземпляр RRDGraph
- [RRDGraph::save](rrdgraph.save.md) — Зберігає результат запиту
зображення
- [RRDGraph::saveVerbose](rrdgraph.saveverbose.md) — Зберігає
запит до бази даних RRD у зображення та повертає докладну
інформацію про згенерований графік
- [RRDGraph::setOptions](rrdgraph.setoptions.md) — Встановлює
параметри для експорту графіка rrd
