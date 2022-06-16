- [« tidyNode::hasChildren](tidynode.haschildren.md)
- [tidyNode::isAsp »](tidynode.isasp.md)

- [PHP Manual](index.md)
- [tidyNode](class.tidynode.md)
- Перевіряє існування сусідніх вузлів

# tidyNode::hasSiblings

(PHP 5, PHP 7, PHP 8)

tidyNode::hasSiblings — Перевіряє існування сусідніх вузлів

### Опис

public **tidyNode::hasSiblings**(): bool

Перевіряє існування сусідніх вузлів.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає **`true`**, якщо існують сусідні вузли, інакше
повертає **`false`**.

### Приклади

**Приклад #1 Приклад використання функції **tidyNode::hasSiblings()****

` <?php$html u003d <<<< HTML<html><head><?php echo '<title>заголовок</title>'; ?><#  /* JSTE код */ alert('Привіт Світ');#></head><body><?php  // PHP-код echo 'привіт світ!';?><% /** ASP */ response.write("Привіт Світ!")%><!-- Коментарі -->Привіт Світ</body></html>За межами HTML кодаHTML;$tidy u003d tidy_parse_string($html);$num u003d ;// тег htmlvar_dump($tidy->html()->hasSiblings());// тег headvar_dump($tidy->html()->child[0]->hasSiblings());?> `

Результат виконання цього прикладу:

bool(false)
bool(true)
