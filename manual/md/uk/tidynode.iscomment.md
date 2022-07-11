- [« tidyNode::isAsp](tidynode.isasp.md)
- [tidyNode::isHtml »](tidynode.ishtml.md)

- [PHP Manual](index.md)
- [tidyNode](class.tidynode.md)
- Перевіряє, чи є вузол коментарем

# tidyNode::isComment

(PHP 5, PHP 7, PHP 8)

tidyNode::isComment — Перевіряє, чи є вузол коментарем

### Опис

public **tidyNode::isComment**(): bool

Перевіряє, чи є вузол коментарем.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає **`true`**, якщо вузол є коментарем, інакше
у разі повертає **`false`**.

### Приклади

**Приклад #1 Вилучення коментарів із змішаного HTML-документу**

` <?php$html u003d <<<< HTML<html><head><?php echo '<title>заголовок</title>'; ?><#  /* JSTE код */ alert('Привіт Світ');#></head><body><?php  // PHP-код echo 'привіт мир!';?><% /* ASP */ response.write("Привіт Світ!")%><!-- Коментарі -->Привіт Світ</body></html>За межами HTML кодаHTML;$tidy u003d tidy_parse_string($html);$num u003d ;get_nodes($tidy->html());function get_nodes($node) {     // перевіряє поточний вузол на відповідність потрібного типу    if($node->isComment())                                                                               сі|

# вузол коментарі #" . ++$GLOBALS['num'] . "
";        echo $node->value;    }    // проверяет существование потомков у текущего узла    if($node->hasChildren()) {        foreach($node->child as $child) {            get_nodes($child);        }    }} ?> `

Результат виконання цього прикладу:

# вузол коментаря #1
<!-- Коментарі -->
