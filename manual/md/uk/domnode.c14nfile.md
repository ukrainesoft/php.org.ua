- [« DOMNode::C14N](domnode.c14n.md)
- [DOMNode::cloneNode »](domnode.clonenode.md)

- [PHP Manual](index.md)
- [DOMNode](class.domnode.md)
- Канонізувати вузли у файл

# DOMNode::C14NFile

(PHP 5 \>u003d 5.2.0, PHP 7, PHP 8)

DOMNode::C14NFile — Канонізувати вузли у файл

### Опис

public **DOMNode::C14NFile**(
string `$uri`,
bool `$exclusive` u003d **`false`**,
bool `$withComments` u003d **`false`**,
?array `$xpath` u003d **`null`**,
?array `$nsPrefixes` u003d **`null`**
): int\|false

Канонізувати вузли у файл.

### Список параметрів

`uri`
Шлях запису виведення.

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

Кількість записаних байт або **`false`** у разі виникнення помилки

### Дивіться також

- [DOMNode::C14N()](domnode.c14n.md) - Канонізувати вузли в рядок
