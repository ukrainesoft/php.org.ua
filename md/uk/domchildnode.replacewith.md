- [« DOMChildNode::remove](domchildnode.remove.md)
- [DOMComment »](class.domcomment.md)

- [PHP Manual](index.md)
- [DOMChildNode](class.domchildnode.md)
- Замінює вузол новими вузлами

# DOMChildNode::replaceWith

(PHP 8)

DOMChildNode::replaceWith — Замінює вузол новими вузлами

### Опис

public
**DOMChildNode::replaceWith**([DOMNode](class.domnode.md)\|string
`...$nodes`): void

Замінює вузол новими переданими 'nodes'. Поєднання методу
[DOMChildNode::remove()](domchildnode.remove.md) та
**DOMChildNode::append()**.

### Список параметрів

`nodes`
Вузли, якими необхідно замінити вузол.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Дивіться також

- [DOMChildNode::after()](domchildnode.after.md) - Додає вузли
після вузла
- [DOMChildNode::before()](domchildnode.before.md) - Додає вузли
перед вузлом
- [DOMChildNode::remove()](domchildnode.remove.md) - Видаляє вузол
- [DOMNode::replaceChild()](domnode.replacechild.md) - Замінює
дочірній вузол
