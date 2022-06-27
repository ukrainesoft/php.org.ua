- [« tidyNode::isPhp](tidynode.isphp.md)
- [Tidy »](ref.tidy.md)

- [PHP Manual](index.md)
- [tidyNode](class.tidynode.md)
- Перевіряє, чи поточний вузол є звичайним текстом (не розміткою)

# tidyNode::isText

(PHP 5, PHP 7, PHP 8)

tidyNode::isText — Перевіряє, чи поточний вузол є звичайним текстом
(не розміткою)

### Опис

public **tidyNode::isText**(): bool

Перевіряє, чи поточний вузол є звичайним текстом (без будь-якої
розмітки).

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає **`true`**, якщо вузол є текст, в іншому
у разі повертає **`false`**.

### Приклади

**Приклад #1 Вилучення звичайного тексту із змішаного HTML-документу**

` <?php$html u003d <<<< HTML<html><head><?php echo '<title>заголовок</title>'; ?><#  /* JSTE код */ alert('Привіт Світ');#></head><body><?php  // PHP-код echo 'привіт мир!';?><% /* ASP */ response.write("Привіт Світ!")%><!-- Коментарі -->Привіт Світ</body></html>За межами HTML кодаHTML;$tidy u003d tidy_parse_string($html);$num u003d ;get_nodes($tidy->html());function get_nodes($node) {     // перевіряє поточний вузол на відповідність необхідному типу    if($node->isText())           

# текстовий вузол #" . ++$GLOBALS['num'] . "
";        echo $node->value;    }    // проверяет существование потомков у текущего узла    if($node->hasChildren()) {        foreach($node->child as $child) {            get_nodes($child);        }    }} ?> `

Результат виконання цього прикладу:

текстовий вузол
Привіт світ

# текстовий вузол
За межами HTML коду
