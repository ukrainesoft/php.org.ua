- [«CommonMark\Node::accept](commonmark-node.accept.md)
- [CommonMark\Interfaces\IVisitor::enter
»](commonmark-interfaces-ivisitor.enter.md)

- [PHP Manual](index.md)
- [CommonMark](book.cmark.md)
- Інтерфейс CommonMark\Interfaces\IVisitor

# Інтерфейс CommonMark \ Interfaces \ IVisitor

(cmark \>u003d 1.0.0)

## Вступ

## Огляд класів

final class **CommonMark\Interfaces\IVisitor** {

/\* Константи \*/

const int `Done`;

const int `Enter`;

const int `Leave`;

/\* Методи \*/

abstract public
[enter](commonmark-interfaces-ivisitor.enter.md)(IVisitable
`$visitable`): int\|IVisitable\|null

abstract public
[leave](commonmark-interfaces-ivisitor.leave.md)(IVisitable
`$visitable`): int\|IVisitable\|null

}

## Зміст

- [CommonMark\Interfaces\IVisitor::enter](commonmark-interfaces-ivisitor.enter.md)
- Відвідування
- [CommonMark\Interfaces\IVisitor::leave](commonmark-interfaces-ivisitor.leave.md)
- Відвідування
