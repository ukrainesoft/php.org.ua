- [« tidyNode::isHtml](tidynode.ishtml.md)
- [tidyNode::isPhp »](tidynode.isphp.md)

- [PHP Manual](index.md)
- [tidyNode](class.tidynode.md)
- Перевіряє поточний вузол на відповідність JSTE

# tidyNode::isJste

(PHP 5, PHP 7, PHP 8)

tidyNode::isJste — Перевіряє поточний вузол на відповідність JSTE

### Опис

public **tidyNode::isJste**(): bool

Повідомляє, якщо вузол відповідає JSTE.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає **`true`**, якщо вузол є JSTE, інакше
повертає **`false`**.

### Приклади

**Приклад #1 Вилучення JSTE-коду із змішаного HTML-документу**

` <?php$html u003d <<<< HTML<html><head><?php echo '<title>заголовок</title>'; ?><#  /* JSTE код */ alert('Привіт Світ');#></head><body><?php  // PHP-код echo 'привіт мир!';?><% /* ASP */ response.write("Привіт Світ!")%><!-- Коментарі -->Привіт Світ</body></html>За межами HTML кодаHTML;$tidy u003d tidy_parse_string($html);$num u003d ;get_nodes($tidy->html());function get_nodes($node) {     // перевіряє поточний вузол на відповідність потрібному типу    if($node->isJste())        

# jste-вузол #" . ++$GLOBALS['num'] . "
";        echo $node->value;    }    // проверяет существование потомков у текущего узла    if($node->hasChildren()) {        foreach($node->child as $child) {            get_nodes($child);        }    }} ?> `

Результат виконання цього прикладу:

# Ste-вузол #1
<#
/* JSTE-код */
alert('Привіт Світ');
#>
