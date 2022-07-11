- [«
DOMText::isWhitespaceInElementContent](domtext.iswhitespaceinelementcontent.md)
- [DOMXPath »](class.domxpath.md)

- [PHP Manual](index.md)
- [DOMText](class.domtext.md)
- розділяє вузол на два, починаючи із заданої позиції

# DOMText::splitText

(PHP 5, PHP 7, PHP 8)

DOMText::splitText — Поділяє вузол на два, починаючи із заданої позиції

### Опис

public **DOMText::splitText**(int `$offset`):
[DOMText](class.domtext.md)\|false

Розділяє вузол на два, друга частина починається з позиції `offset`,
отримані вузли стають братами.

Після поділу вихідний вузол міститиме дані до позиції
`offset`. Якщо вихідний вузол має батька, другий, створений, вузол
стане наступним братом вихідного вузла. Якщо `offset` дорівнює довжині
вмісту вузла, новий вузол все одно буде створено, але не буде
містити дані.

### Список параметрів

`offset`
Позиція, з якою вузол буде поділено, починаючи з 0.

### Значення, що повертаються

Новий вузол того ж типу, що містить дані до і після `offset`.
