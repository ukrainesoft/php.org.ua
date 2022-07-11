- [« tidyNode::\_\_construct](tidynode.construct.md)
- [tidyNode::hasChildren »](tidynode.haschildren.md)

- [PHP Manual](index.md)
- [tidyNode](class.tidynode.md)
- Повертає батьківський вузол поточного вузла

# tidyNode::getParent

(PHP 5 \>u003d 5.2.2, PHP 7, PHP 8)

tidyNode::getParent — Повертає батьківський вузол поточного вузла

### Опис

public **tidyNode::getParent**(): ?[tidyNode](class.tidynode.md)

Повертає батьківський вузол поточного вузла.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає об'єкт [tidyNode](class.tidynode.md), якщо вузол має
батька, інакше повертає **`null`**.

### Приклади

**Приклад #1 Приклад використання функції **tidyNode::getParent()****

` <?php$html u003d <<<< HTML<html><head><?php echo '<title>заголовок</title>'; ?><#  /* JSTE-код */ alert('Hello World');#> </head> <body> Hello World </body></html>HTML;$tidy u003d tidy_parse_string($html);$ num u003d 0;$node u003d $tidy->html()->child[0]->child[0];var_dump($node->getparent()->name);?> `

Результат виконання цього прикладу:

string(4) "head"
