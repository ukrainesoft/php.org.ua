- [« DOMNode::appendChild](domnode.appendchild.md)
- [DOMNode::C14NFile »](domnode.c14nfile.md)

- [PHP Manual](index.md)
- [DOMNode](class.domnode.md)
- Канонізувати вузли в рядок

# DOMNode::C14N

(PHP 5 \>u003d 5.2.0, PHP 7, PHP 8)

DOMNode::C14N — Канонізувати вузли в рядок

### Опис

public **DOMNode::C14N**(
bool `$exclusive` u003d **`false`**,
bool `$withComments` u003d **`false`**,
?array `$xpath` u003d **`null`**,
?array `$nsPrefixes` u003d **`null`**
): string\|false

Канонізувати вузли в рядок

### Список параметрів

`exclusive`
Включити ексклюзивний розбір лише тих вузлів, які збігаються з
наданими xpath або ns_prefixes.

`withComments`
Зберігати коментарі у висновку.

`xpath`
Масив `xpath` для фільтрації вузлів.

`nsPrefixes`
Масив префіксів просторів імен фільтрації вузлів.

### Значення, що повертаються

Повертає канонізовані вузли у вигляді рядка або **`false`** у разі
виникнення помилки

### Дивіться також

- [DOMNode::C14NFile()](domnode.c14nfile.md) - Канонізувати вузли в
файл
