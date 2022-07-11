- [« DOMNode::removeChild](domnode.removechild.md)
- [DOMNodeList »](class.domnodelist.md)

- [PHP Manual](index.md)
- [DOMNode](class.domnode.md)
- Замінює дочірній вузол

# DOMNode::replaceChild

(PHP 5, PHP 7, PHP 8)

DOMNode::replaceChild — Замінює дочірній вузол

### Опис

public **DOMNode::replaceChild**([DOMNode](class.domnode.md) `$node`,
[DOMNode](class.domnode.md) `$child`):
[DOMNode](class.domnode.md)\|false

Функція замінює дочірній вузол 'child' новим вузлом. Якщо вузол `node` вже
є дочірнім, то він не буде доданий вдруге. Якщо заміна
пройшла успішно, то буде повернутий старий (замінний) вузол.

### Список параметрів

`node`
Новий вузол. Має бути частиною цільового документа, тобто створено
за допомогою одного з методів DOMDocument-\>createXXX() або імпортований
в документ через [DOMDocument::importNode](domdocument.importnode.md).

`child`
Старий вузол.

### Значення, що повертаються

Старий вузол або 'false' у разі виникнення помилки.

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

- [DOMChildNode::replaceWith()](domchildnode.replacewith.md) -
Замінює вузол новими вузлами
- [DOMNode::appendChild()](domnode.appendchild.md) - Додає новий
дочірній вузол у кінець списку нащадків
- [DOMNode::removeChild()](domnode.removechild.md) - Видаляє
дочірній вузол зі списку нащадків
