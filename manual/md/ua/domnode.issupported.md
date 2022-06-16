- [« DOMNode::isSameNode](domnode.issamenode.md)
- [DOMNode::lookupNamespaceUri »](domnode.lookupnamespaceuri.md)

- [PHP Manual](index.md)
- [DOMNode](class.domnode.md)
- Перевіряє, чи підтримується можливість у певній версії

# DOMNode::isSupported

(PHP 5, PHP 7, PHP 8)

DOMNode::isSupported — Перевіряє, чи підтримується можливість
певної версії

### Опис

public **DOMNode::isSupported**(string `$feature`, string `$version`):
bool

Перевіряє, чи підтримується зазначена можливість `feature` в
певної версії `version`.

### Список параметрів

`feature`
Можливість, що перевіряється. Список можливостей наведено у прикладі до
[DOMImplementation::hasFeature()](domimplementation.hasfeature.md).

`version`
Номер версії (feature) для перевірки.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Дивіться також

- [DOMImplementation::hasFeature()](domimplementation.hasfeature.md) -
Перевірка, чи реалізована певна можливість у реалізації DOM
