- [« DOMDocument::getElementById](domdocument.getelementbyid.md)
- [DOMDocument::getElementsByTagNameNS
»](domdocument.getelementsbytagnamens.md)

- [PHP Manual](index.md)
- [DOMDocument](class.domdocument.md)
- Шукає всі елементи із заданим локальним ім'ям

# DOMDocument::getElementsByTagName

(PHP 5, PHP 7, PHP 8)

DOMDocument::getElementsByTagName — Шукає всі елементи із заданим
локальним ім'ям

### Опис

public **DOMDocument::getElementsByTagName**(string `$qualifiedName`):
[DOMNodeList](class.domnodelist.md)

Ця функція повертає новий об'єкт класу
[DOMNodeList](class.domnodelist.md), що містить елементи із заданим
локальним іменем.

### Список параметрів

`qualifiedName`
Локальне ім'я (без простору імен) тега, яким буде
проводитися пошук. Спеціальне значення `*` відповідає всім тегам.

### Значення, що повертаються

Новий об'єкт класу [DOMNodeList](class.domnodelist.md), що містить
усі знайдені елементи.

### Приклади

**Приклад #1 Простий приклад використання**

`<?php$xml u003d <<<<XML<?xml versionu003d"1.0" encodingu003d"utf-8"?><books> <book>Шаблони корпоративних додатків</book> <book>Прийоми об'єктно-орієнтованого проектування. Паттерни проектування</book> <book>Чистий код</book></books>XML;$dom u003d new DOMDocument;$dom->loadXML($xml);$books u003d $dom->getElementsByTagName('book') ;foreach ($books as $book) {   echo $book->nodeValue, PHP_EOL;}?> `

Результат виконання цього прикладу:

Шаблони корпоративних додатків
Прийоми об'єктно-орієнтованого проектування. Паттерни проектування
Чистий код

### Дивіться також

- [DOMDocument::getElementsByTagNameNS()](domdocument.getelementsbytagnamens.md) -
Шукає всі елементи із заданим ім'ям у вказаному просторі імен
