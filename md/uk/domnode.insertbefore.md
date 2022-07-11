- [« DOMNode::hasChildNodes](domnode.haschildnodes.md)
- [DOMNode::isDefaultNamespace »](domnode.isdefaultnamespace.md)

- [PHP Manual](index.md)
- [DOMNode](class.domnode.md)
- Додає новий дочірній вузол перед вказаним вузлом

# DOMNode::insertBefore

(PHP 5, PHP 7, PHP 8)

DOMNode::insertBefore — Додає новий дочірній вузол перед зазначеним
вузлом

### Опис

public **DOMNode::insertBefore**([DOMNode](class.domnode.md) `$node`,
?[DOMNode](class.domnode.md) `$child` u003d **`null`**):
[DOMNode](class.domnode.md)\|false

Ця функція вставляє новий вузол перед вказаним вузлом. Щоб вносити
зміни в доданий дочірній вузол необхідно використовувати
повертається вузол.

У разі використання існуючого вузла він буде переміщений.

### Список параметрів

`node`
Новий вузол.

`child`
Контрольний вузол. Якщо відсутня, то `node` додається до кінця списку
нащадків.

### Значення, що повертаються

Доданий вузол.

### Помилки

**`DOM_NO_MODIFICATION_ALLOWED_ERR`**
Виникає, якщо вузол доступний лише для читання або попередній батько
вузла, що вставляється, доступний тільки для читання.

**`DOM_HIERARCHY_REQUEST_ERR`**
Виникає, якщо тип вузла не підтримує нащадків типу, що має
вузол `node`, або якщо доданий вузол є предком цільового вузла
або ним самим.

**`DOM_WRONG_DOCUMENT_ERR`**
Виникає, якщо `node` створено в іншому документі, відмінному від того,
якому було створено цей вузол.

**`DOM_NOT_FOUND`**
Виникає, якщо 'child' не є дочірнім вузлом цього вузла.

### Дивіться також

- [DOMNode::appendChild()](domnode.appendchild.md) - Додає новий
дочірній вузол у кінець списку нащадків
