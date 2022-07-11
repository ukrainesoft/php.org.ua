- [«define](function.define.md)
- [die»] (function.die.md)

- [PHP Manual](index.md)
- [Різні функції](ref.misc.md)
- перевіряє існування зазначеної іменованої константи

# defined

(PHP 4, PHP 5, PHP 7, PHP 8)

defined — Перевіряє існування вказаної константи

### Опис

**defined**(string `$constant_name`): bool

Перевіряє існування та наявність значення зазначеної константи.

> **Примітка**:
>
> Якщо необхідно дізнатися про існування змінної, використовуйте
> [isset()](function.isset.md), тому що **defined()** застосовна лише
> для [констант](language.constants.md). Якщо вам необхідно дізнатися про
> існування функції, то використовуйте
> [function_exists()](function.function-exists.md).

### Список параметрів

`constant_name`
Ім'я константи.

### Значення, що повертаються

Повертає **`true`**, якщо іменована константа, зазначена у параметрі
`constant_name`, була визначена, **`false`** інакше.

### Приклади

**Приклад #1 Перевірка констант**

`<?php/* Важливо врахувати необхідність використання лапок. Даний приклад перевіряє, * є ли рядок 'TEST' іменем константи TEST. */if(defined('TEST')) {    echo TEST;}?> `

### Дивіться також

- [define()](function.define.md) - Визначає іменовану константу
- [constant()](function.constant.md) - Повертає значення константи
- [get_defined_constants()](function.get-defined-constants.md) -
Повертає асоціативний масив з іменами всіх констант та їх
значень
- [function_exists()](function.function-exists.md) - Повертає
true, якщо зазначена функція визначена
- Дивіться розділ [Константи](language.constants.md)
