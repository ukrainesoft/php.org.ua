- [« tidy::repairString](tidy.repairstring.md)
- [tidyNode »](class.tidynode.md)

- [PHP Manual](index.md)
- [Tidy] (class.tidy.md)
- Повертає об'єкт tidyNode, що представляє вершину розібраного
tidy-дерева

# tidy::root

#tidy_get_root

(PHP 5, PHP 7, PHP 8, PECL tidy 0.5.2-1.0.0)

tidy::root -- tidy_get_root — Повертає об'єкт
[tidyNode](class.tidynode.md), що представляє вершину розібраного
tidy-дерева

### Опис

Об'єктно-орієнтований стиль

public **tidy::root**(): ?[tidyNode](class.tidynode.md)

Процедурний стиль

**tidy_get_root**([tidy](class.tidy.md) `$tidy`):
?[tidyNode](class.tidynode.md)

Повертає об'єкт [tidyNode](class.tidynode.md), що представляє
вершину розібраного tidy-дерева.

### Список параметрів

`tidy`
Об'єкт [Tidy](class.tidy.md).

### Значення, що повертаються

Повертає об'єкт [tidyNode](class.tidynode.md).

### Приклади

**Приклад #1 Приклад використання **tidy::root()****

` <?php$html u003d <<<< HTML<html><body><p>параграф</p><br/></body></html>HTML;$tidy u003d tidy_parse_string($html);dump_nodes( $tidy->root(), 1);function dump_nodes($node, $indent) {   if($node->hasChildren()) {          , $indent*2) . ($child->name ?$child->name : '"'.$child->value.'"'). "
";             dump_nodes($child, $indent+1);        }    }}?> `

Результат виконання цього прикладу:

..md
....head
......title
....body
......p
........"параграф"
......br
