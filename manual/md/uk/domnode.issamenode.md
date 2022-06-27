- [« DOMNode::isDefaultNamespace](domnode.isdefaultnamespace.md)
- [DOMNode::isSupported »](domnode.issupported.md)

- [PHP Manual](index.md)
- [DOMNode](class.domnode.md)
- Вказує, чи є два вузли одним і тим самим вузлом

# DOMNode::isSameNode

(PHP 5, PHP 7, PHP 8)

DOMNode::isSameNode — Вказує, чи є два вузли одним і тим же
вузлом

### Опис

public **DOMNode::isSameNode**([DOMNode](class.domnode.md)
`$otherNode`): bool

Ця функція вказує, чи є два вузли одним і тим самим вузлом. Це
порівняння відбувається *не* з урахуванням вмісту вузлів.

### Список параметрів

`otherNode`
Порівняний вузол.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.
