- [« tidy::root](tidy.root.md)
- [tidyNode::\_\_construct »](tidynode.construct.md)

- [PHP Manual](index.md)
- [Tidy](book.tidy.md)
- Клас tidyNode

# Клас [tidyNode](class.tidynode.md)

(PHP 5, PHP 7, PHP 8)

## Вступ

An HTML node in an HTML file, as detected by tidy.

## Огляд класів

final class **tidyNode** {

/\* Властивості \*/

public readonly string $value;

public readonly string `$name`;

public readonly int `$type`;

public readonly int `$line`;

public readonly int `$column`;

public readonly bool `$proprietary`;

public readonly ?int `$id`;

public readonly ?array `$attribute`;

public readonly ?array `$child`;

/\* Методи \*/

private [\_\_construct](tidynode.construct.md)()

public [getParent](tidynode.getparent.md)():
?[tidyNode](class.tidynode.md)

public [hasChildren](tidynode.haschildren.md)(): bool

public [hasSiblings](tidynode.hassiblings.md)(): bool

public [isAsp](tidynode.isasp.md)(): bool

public [isComment](tidynode.iscomment.md)(): bool

public [isHtml](tidynode.ishtml.md)(): bool

public [isJste](tidynode.isjste.md)(): bool

public [isPhp](tidynode.isphp.md)(): bool

public [isText](tidynode.istext.md)(): bool

}

## Властивості

`value`
HTML-подання вузла, включаючи навколишні теги.

`name`
Назва HTML-вузла

`type`
Тип тега (одна з
[констант](tidy.constants.md#tidy.constants.nodetype), описаних вище,
наприклад **`TIDY_NODETYPE_PHP`**)

`line`
Номер рядка, на якому розташований тег у файлі

`column`
Номер стовпця, на якому розташований тег у файлі

`proprietary`
Ознака пропрієтарності тега

`id`
Ідентифікатор тега (одна з
[констант](tidy.constants.md#tidy.constants.tag), описаних вище,
наприклад **`TIDY_TAG_FRAME`**)

`attribute`
Масив рядків, що представляють імена атрибутів (як ключі)
поточного вузла.

`child`
Масив, що складається з екземплярів **tidyNode**, що представляє дітей
поточного вузла.

## Зміст

- [tidyNode::\_\_construct](tidynode.construct.md) - Приватний
конструктор, який унеможливлює пряме створення об'єкта
- [tidyNode::getParent](tidynode.getparent.md) — Повертає
батьківський вузол поточного вузла
- [tidyNode::hasChildren](tidynode.haschildren.md) — Перевіряє
існування нащадків біля вузла
- [tidyNode::hasSiblings](tidynode.hassiblings.md) — Перевіряє
існування сусідніх вузлів
- [tidyNode::isAsp](tidynode.isasp.md) — Перевіряє поточний вузол на
відповідність ASP
- [tidyNode::isComment](tidynode.iscomment.md) — Перевіряє, чи є
чи вузол коментарем
- [tidyNode::isHtml](tidynode.ishtml.md) — Перевіряє, чи є
вузол вузлом елемента
- [tidyNode::isJste](tidynode.isjste.md) — Перевіряє поточний вузол на
відповідність JSTE
- [tidyNode::isPhp](tidynode.isphp.md) — Перевіряє, чи є
поточний вузол PHP-кодом
- [tidyNode::isText](tidynode.istext.md) — Перевіряє, чи є
поточний вузол звичайним текстом (не розміткою)
