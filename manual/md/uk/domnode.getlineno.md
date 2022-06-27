- [« DOMNode::cloneNode](domnode.clonenode.md)
- [DOMNode::getNodePath »](domnode.getnodepath.md)

- [PHP Manual](index.md)
- [DOMNode](class.domnode.md)
- Отримати номер рядка вузла

# DOMNode::getLineNo

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8)

DOMNode::getLineNo — Отримати номер рядка вузла

### Опис

public **DOMNode::getLineNo**(): int

Повертає номер рядка, в якому визначено вузол.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Завжди повертає номер рядка, в якому було визначено вузол.

### Приклади

**Приклад #1 Приклад використання **DOMNode::getLineNo()****

` <?php// Визначення необхідного для прикладу XML$xml u003d <<<XML<?xml versionu003d"1.0" encodingu003d"utf-8"?><root>    <node /></root>XML;/// Створення нового примірника DOMDocument$dom u003d new DOMDocument; // Завантаження XML$dom->loadXML($xml); , $dom->getElementsByTagName('node')->item(0)->getLineNo());?> `

Результат виконання цього прикладу:

Тег <node> визначено у рядку 3
