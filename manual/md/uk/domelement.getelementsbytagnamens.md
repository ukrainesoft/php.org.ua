- [«
DOMElement::getElementsByTagName](domelement.getelementsbytagname.md)
- [DOMElement::hasAttribute »](domelement.hasattribute.md)

- [PHP Manual](index.md)
- [DOMElement](class.domelement.md)
- Отримання елементів по локальному імені у заданому просторі імен

# DOMElement::getElementsByTagNameNS

(PHP 5, PHP 7, PHP 8)

DOMElement::getElementsByTagNameNS — Отримання елементів по локальному
імені у заданому просторі імен

### Опис

public **DOMElement::getElementsByTagNameNS**(?string `$namespace`,
string `$localName`): [DOMNodeList](class.domnodelist.md)

Ця функція вибирає всі елементи-нащадки із заданим ім'ям `localName`
та простором імен `namespace`.

### Список параметрів

`namespace`
URI простір імен.

`localName`
Місцеве ім'я. Використовуйте `*` для повернення всіх дерев'яних елементів.

### Значення, що повертаються

Ця функція повертає новий об'єкт класу
[DOMNodeList](class.domnodelist.md), що містить усі знайдені елементи
у тому порядку, у якому вони з'являються при прямому обході дерева.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -----|
| 8.0.3 | `namespace` тепер припускає значення null. |

### Дивіться також

- [DOMElement::getElementsByTagName()](domelement.getelementsbytagname.md) -
Повертає елементи на ім'я тега
