- [«CommonMark](book.cmark.md)
- [Встановлення та налаштування »](cmark.setup.md)

- [PHP Manual](index.md)
- [CommonMark](book.cmark.md)
-   Вступ

# Вступ

Модуль надає доступ до еталонної реалізації CommonMark,
раціоналізованої версії синтаксису Markdown із специфікацією.

##### Розбір:

Модуль CommonMark надає простий API синтаксичного аналізу:

[CommonMark\Parse](function.commonmark-parse.md)(string `$content`,
int `$options` u003d ?): [CommonMark\Node](class.commonmark-node.md)

##### Відображення:

Модуль CommonMark надає простий API відображення, який
підтримує кілька форматів:

[CommonMark\Render](function.commonmark-render.md)([CommonMark\Node](class.commonmark-node.md)
`$node`, int `$options` u003d ?, int `$width` u003d ?): string

[CommonMark\Render\HTML](function.commonmark-render-html.md)([CommonMark\Node](class.commonmark-node.md)
`$node`, int `$options` u003d ?): string

[CommonMark\Render\XML](function.commonmark-render-xml.md)([CommonMark\Node](class.commonmark-node.md)
`$node`, int `$options` u003d ?): string

[CommonMark\Render\Man](function.commonmark-render-man.md)([CommonMark\Node](class.commonmark-node.md)
`$node`, int `$options` u003d ?, int `$width` u003d ?): string

[CommonMark\Render\Latex](function.commonmark-render-latex.md)([CommonMark\Node](class.commonmark-node.md)
`$node`, int `$options` u003d ?, int `$width` u003d ?): string

##### AST:

Модуль CommonMark реалізує рух для об'єктів CommonMark\Node:

public
[CommonMark\Node::accept](commonmark-node.accept.md)([CommonMark\Interfaces\IVisitor](class.commonmark-interfaces-ivisitor.md)
`$visitor`): void

##### CQL:

Модуль CommonMark надає інтерфейс для CQL, CommonMark Query
Language:

public
[CommonMark\CQL::\_\_construct](commonmark-cql.construct.md)(string
`$query`)
