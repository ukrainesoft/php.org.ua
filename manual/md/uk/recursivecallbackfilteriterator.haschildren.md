- [«
RecursiveCallbackFilterIterator::getChildren](recursivecallbackfilteriterator.getchildren.md)
- [RecursiveDirectoryIterator
»](class.recursivedirectoryiterator.md)

- [PHP Manual](index.md)
- [RecursiveCallbackFilterIterator](class.recursivecallbackfilteriterator.md)
- Перевіряє, чи містить поточний елемент внутрішнього ітератора
дочірні елементи

# RecursiveCallbackFilterIterator::hasChildren

(PHP 5 \>u003d 5.4.0, PHP 7, PHP 8)

RecursiveCallbackFilterIterator::hasChildren — Перевіряє, чи міститься
поточний елемент внутрішнього ітератора дочірні елементи

### Опис

public **RecursiveCallbackFilterIterator::hasChildren**(): bool

Повертає **`true`**, якщо поточний елемент має дочірні елементи та
**`false`**, якщо ні.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає **`true`**, якщо поточний елемент має дочірні елементи та
**`false`**, якщо ні.

### Приклади

**Приклад #1 Приклад використання
**RecursiveCallbackFilterIterator::hasChildren()****

`<?php$dir u003d new RecursiveDirectoryIterator(__DIR__);// Рекурсивний обхід XML файлів$files u003d new RecursiveCallbackFilterIterator($dir, function ($current, $                      | hasChildren()) {        return TRUE;    }    // отбор XML файлов    if (!strcasecmp($current->getExtension(), 'xml')) {        return TRUE;    }    return FALSE;});?> `

### Дивіться також

- [Приклади використання
RecursiveCallbackFilterIterator](class.recursivecallbackfilteriterator.md#recursivecallbackfilteriterator.examples)
- [RecursiveCallbackFilterIterator::\_\_construct()](recursivecallbackfilteriterator.construct.md) -
Створює об'єкт класу RecursiveCallbackFilterIterator на основі
об'єкту RecursiveIterator
- [RecursiveCallbackFilteriterator::getChildren()](recursivecallbackfilteriterator.getchildren.md) -
Повертає дочірні елементи ітератора, що зберігається всередині
RecursiveCallbackFilterIterator
