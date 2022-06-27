- [« tidyNode::getParent](tidynode.getparent.md)
- [tidyNode::hasSiblings »](tidynode.hassiblings.md)

- [PHP Manual](index.md)
- [tidyNode](class.tidynode.md)
- Перевіряє існування нащадків у вузла

# tidyNode::hasChildren

(PHP 5, PHP 7, PHP 8)

tidyNode::hasChildren — Перевіряє існування нащадків у вузла

### Опис

public **tidyNode::hasChildren**(): bool

Повідомляє, чи має заданий вузл нащадки.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає **`true`**, якщо у вузла є нащадки, інакше
повертає **`false`**.

### Приклади

**Приклад #1 Приклад використання функції **tidyNode::hasChildren()****

` <?php$html u003d <<<< HTML<html><head><?php echo '<title>заголовок</title>'; ?><#  /* JSTE-код */ alert('Привіт Світ');#></head><body><?php  // PHP-код echo 'привіт мир!';?><%  /* ASP код */ response.write("Привіт Світ!")%><!-- Коментарі -->Привіт Світ</body></html>За межами HTML кодаHTML;$tidy u003d tidy_parse_string($html);$num 0;// тег headvar_dump($tidy->html()->child[0]->hasChildren());// php всередині тега headvar_dump($tidy->html()->child[0]->child [0]->hasChildren());?> `

Результат виконання цього прикладу:

bool(true)
bool(false)
