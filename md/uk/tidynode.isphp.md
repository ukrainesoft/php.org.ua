- [« tidyNode::isJste](tidynode.isjste.md)
- [tidyNode::isText »](tidynode.istext.md)

- [PHP Manual](index.md)
- [tidyNode](class.tidynode.md)
- Перевіряє, чи є поточний вузол PHP-кодом

# tidyNode::isPhp

(PHP 5, PHP 7, PHP 8)

tidyNode::isPhp — Перевіряє, чи є поточний вузол PHP-кодом

### Опис

public **tidyNode::isPhp**(): bool

Перевіряє, чи є поточний вузол PHP-код.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає **`true`**, якщо вузол є PHP-кодом, інакше
повертає **`false`**.

### Приклади

**Приклад #1 Вилучення PHP-коду із змішаного HTML-документу**

` <?php$html u003d <<<< HTML<html><head><?php echo '<title>заголовок</title>'; ?><#  /* JSTE код */ alert('Привіт Світ');#></head><body><?php  // PHP-код echo 'привіт світ!';?><% /** ASP */ response.write("Привіт Світ!")%><!-- Коментарі -->Привіт Світ</body></html>За межами HTML кодаHTML;$tidy u003d tidy_parse_string($html);$num u003d ;get_nodes($tidy->html());function get_nodes($node) {    // проверяет текущий узел на соответствие требуемому типу    if($node->isPhp()) {        echo "

# php-вузол #" . ++$GLOBALS['num'] . "
";        echo $node->value;    }    // проверяет существование потомков у текущего узла    if($node->hasChildren()) {        foreach($node->child as $child) {            get_nodes($child);        }    }} ?> `

Результат виконання цього прикладу:

# php-вузол #1
<?php echo '<title>заголовок</title>'; ?>

# php-вузол #2
<?php
// PHP-код
echo 'привіт світ!';
?>
