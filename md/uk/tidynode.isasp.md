- [« tidyNode::hasSiblings](tidynode.hassiblings.md)
- [tidyNode::isComment »](tidynode.iscomment.md)

- [PHP Manual](index.md)
- [tidyNode](class.tidynode.md)
- Перевіряє поточний вузол на відповідність ASP

# tidyNode::isAsp

(PHP 5, PHP 7, PHP 8)

tidyNode::isAsp — Перевіряє поточний вузол на відповідність ASP

### Опис

public **tidyNode::isAsp**(): bool

Перевіряє поточний вузол відповідності ASP.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає **`true`**, якщо вузол є ASP, інакше
повертає **`false`**.

### Приклади

**Приклад #1 Вилучення коду ASP із змішаного HTML-документу**

` <?php$html u003d <<<< HTML<html><head><?php echo '<title>заголовок</title>'; ?><#  /* JSTE код */ alert('Привіт Світ');#></head><body><?php  // PHP-код echo 'привіт мир!';?><% /* ASP */ response.write("Привіт Світ!")%><!-- Коментарі -->Привіт Світ</body></html>За межами HTML кодаHTML;$tidy u003d tidy_parse_string($html);$num u003d ;get_nodes($tidy->html());function get_nodes($node) {    // проверяет текущий узел на соответствие требуемому типу    if($node->isAsp()) {        echo "

# asp вузол #" . ++$GLOBALS['num'] . "
";        echo $node->value;    }    // проверяет существование потомков у текущего узла    if($node->hasChildren()) {        foreach($node->child as $child) {            get_nodes($child);        }    }} ?> `

Результат виконання цього прикладу:

# asp нода #1
<%
/* ASP код */
response.write("Привіт Мир!")
%>
