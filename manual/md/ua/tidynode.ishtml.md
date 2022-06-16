- [« tidyNode::isComment](tidynode.iscomment.md)
- [tidyNode::isJste »](tidynode.isjste.md)

- [PHP Manual](index.md)
- [tidyNode](class.tidynode.md)
- Перевіряє, чи є вузол вузлом елемента

# tidyNode::isHtml

(PHP 5, PHP 7, PHP 8)

tidyNode::isHtml — Перевіряє, чи є вузол вузлом елемента

### Опис

public **tidyNode::isHtml**(): bool

Перевіряє, чи є вузол вузлом елемента, але не кореневим вузлом
документа.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає **`true`**, якщо вузол є вузлом елемента, але не кореневим
вузлом документа, інакше повертає **`false`**.

### Список змін

| Версія | Опис |
|----------------|-------------------------------- -------------------------------------------------- -----------|
| 7.3.24, 7.4.12 | Виправлено, тепер функція поводиться розумно. Раніше майже будь-який вузол вважався вузлом HTML. |

### Приклади

**Приклад #1 Вилучення HTML-коду із змішаного HTML-документу**

` <?php$html u003d <<<< HTML<html><head><?php echo '<title>заголовок</title>'; ?><#  /* JSTE код */ alert('Привіт Світ');#></head><body><?php  // PHP-код echo 'привіт мир!';?><% /* ASP */ response.write("Привіт Світ!")%><!-- Коментарі -->Привіт Світ</body></html>За межами HTML кодаHTML;$tidy u003d tidy_parse_string($html);$num u003d ;get_nodes($tidy->html());function get_nodes($node) {    // проверяет текущий узел на соответствие требуемому типу    if($node->isHtml()) {        echo "

# html нода #" . ++$GLOBALS['num'] . "
";        echo $node->value;    }    // проверяет существование потомков у текущего узла    if($node->hasChildren()) {        foreach($node->child as $child) {            get_nodes($child);        }    }} ?> `

Результат виконання цього прикладу:

#html вузол #1
<html>
<head>
<?php echo '<title>заголовок</title>'; ?><#
/* JSTE код */
alert('Привіт Світ');
#>
<title></title>
</head>
<body>
<?php
// PHP-код
echo 'привіт світ!';
?><%
/* ASP код */
response.write("Привіт Мир!")
%><!-- Коментарі -->
Привіт МирЗа межами HTML коду
</body>
</html>

#html вузол #2
<head>
<?php echo '<title>заголовок</title>'; ?><#
/* JSTE код */
alert('Привіт Світ');
#>
<title></title>
</head>


#html вузол #3
<title></title>

#html вузол #4
<body>
<?php
// PHP-код
echo 'привіт світ!';
?><%
/* ASP код */
response.write("Привіт Мир!")
%><!-- Коментарі -->
Привіт МирЗа межами HTML коду
</body>
