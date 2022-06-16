- [«
CommonMark\Node\CustomInline](class.commonmark-node-custominline.md)
- [CommonMark\Node::appendChild »](commonmark-node.appendchild.md)

- [PHP Manual](index.md)
- [CommonMark](book.cmark.md)
- Абстрактний клас CommonMark\Node

# Абстрактний клас CommonMark\Node

(cmark \>u003d 1.0.0)

## Вступ

Представляє абстрактний вузол, не призначений для безпосереднього
використання програмістом.

## Огляд класів

final abstract class **CommonMark\Node** implements
[CommonMark\Interfaces\IVisitable](class.commonmark-interfaces-ivisitable.md),
[Traversable](class.traversable.md) {

/\* Властивості \*/

public readonly ?Node `$parent`;

public readonly ?Node `$previous`;

public readonly ?Node `$next`;

public readonly ?Node `$lastChild`;

public readonly ?Node `$firstChild`;

public readonly int `$startLine`;

public readonly int `$endLine`;

public readonly int `$startColumn`;

public readonly int `$endColumn`;

/\* Методи \*/

public
[appendChild](commonmark-node.appendchild.md)([CommonMark\Node](class.commonmark-node.md)
`$child`): [CommonMark\Node](class.commonmark-node.md)

public
[prependChild](commonmark-node.prependchild.md)([CommonMark\Node](class.commonmark-node.md)
`$child`): [CommonMark\Node](class.commonmark-node.md)

public
[insertAfter](commonmark-node.insertafter.md)([CommonMark\Node](class.commonmark-node.md)
`$sibling`): [CommonMark\Node](class.commonmark-node.md)

public
[insertBefore](commonmark-node.insertbefore.md)([CommonMark\Node](class.commonmark-node.md)
`$sibling`): [CommonMark\Node](class.commonmark-node.md)

public
[replace](commonmark-node.replace.md)([CommonMark\Node](class.commonmark-node.md)
`$target`): [CommonMark\Node](class.commonmark-node.md)

public [unlink](commonmark-node.unlink.md)(): void

public
[accept](commonmark-node.accept.md)([CommonMark\Interfaces\IVisitor](class.commonmark-interfaces-ivisitor.md)
`$visitor`): void

}

## Зміст

- [CommonMark\Node::appendChild](commonmark-node.appendchild.md) -
Маніпуляції з AST (Абстрактне синтаксичне дерево)
- [CommonMark\Node::prependChild](commonmark-node.prependchild.md) -
Маніпуляції з AST (Абстрактне синтаксичне дерево)
- [CommonMark\Node::insertAfter](commonmark-node.insertafter.md) -
Маніпуляції з AST (Абстрактне синтаксичне дерево)
- [CommonMark\Node::insertBefore](commonmark-node.insertbefore.md) -
Маніпуляції з AST (Абстрактне синтаксичне дерево)
- [CommonMark\Node::replace](commonmark-node.replace.md) -
Маніпуляції з AST (Абстрактне синтаксичне дерево)
- [CommonMark\Node::unlink](commonmark-node.unlink.md) - Маніпуляції
з AST (Абстрактне синтаксичне дерево)
- [CommonMark\Node::accept](commonmark-node.accept.md) - Visitation
