- [«
DOMText::isElementContentWhitespace](domtext.iselementcontentwhitespace.md)
- [DOMText::splitText »](domtext.splittext.md)

- [PHP Manual](index.md)
- [DOMText](class.domtext.md)
- Визначає, чи містить текстовий вузол пробіли у вмісті

# DOMText::isWhitespaceInElementContent

(PHP 5, PHP 7, PHP 8)

DOMText::isWhitespaceInElementContent — Визначає, чи міститься
текстовий вузол прогалини у вмісті

### Опис

public **DOMText::isWhitespaceInElementContent**(): bool

Визначає, чи є пробіли у вмісті текстового вузла, чи він порожній.
Текстові вузли можуть містити прогалини у своєму вмісті під час
завантаження документа.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає **`true`**, якщо вузол складається тільки з нуля або більше
пробілів. Повертає **`false`** інакше.
