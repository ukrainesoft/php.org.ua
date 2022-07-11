- [«
CommonMark\Interfaces\IVisitor](class.commonmark-interfaces-ivisitor.md)
- [CommonMark\Interfaces\IVisitor::leave
»](commonmark-interfaces-ivisitor.leave.md)

- [PHP Manual](index.md)
- [CommonMark\Interfaces\IVisitor](class.commonmark-interfaces-ivisitor.md)
- Відвідування

# CommonMark\Interfaces\IVisitor::enter

(cmark \>u003d 1.0.0)

CommonMark\Interfaces\IVisitor::enter — Відвідування

### Опис

abstract public **CommonMark\Interfaces\IVisitor::enter**(IVisitable
`$visitable`): int\|IVisitable\|null

### Список параметрів

`visitable`
Поточний вхідний
[CommonMark\Interfaces\IVisitable](class.commonmark-interfaces-ivisitable.md).

### Значення, що повертаються

Повернення `CommonMark\Interfaces\IVisitor::Done` призведе до виходу
допоміжного ітератора.

Повернення `CommonMark\Interfaces\IVisitor::Enter` скине допоміжний
ітератор при вході до поточного **IVisitable**.

Повернення `CommonMark\Interfaces\IVisitor::Leave` скине допоміжний
ітератор при виході із поточного **IVisitable**.

Повернення **IVisitable** скине допоміжний ітератор при вході до
цей **IVisitable**.

Якщо нічого не повертається, допоміжний ітератор продовжить роботу.

### Дивіться також

- [CommonMark\Interfaces\IVisitable::accept](commonmark-interfaces-ivisitable.accept.md)
