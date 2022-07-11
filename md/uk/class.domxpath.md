- [« DOMText::splitText](domtext.splittext.md)
- [DOMXPath::\_\_construct »](domxpath.construct.md)

- [PHP Manual](index.md)
- [DOM](book.dom.md)
- Клас DOMXPath

# Клас DOMXPath

(PHP 5, PHP 7, PHP 8)

## Вступ

Підтримує XPath 1.0

## Огляд класів

class **DOMXPath** {

/\* Властивості \*/

public readonly [DOMDocument](class.domdocument.md) `$document`;

public bool `$registerNodeNamespaces`;

/\* Методи \*/

public
[\_\_construct](domxpath.construct.md)([DOMDocument](class.domdocument.md)
`$document`, bool `$registerNodeNS` u003d **`true`**)

public [evaluate](domxpath.evaluate.md)(string `$expression`,
?[DOMNode](class.domnode.md) `$contextNode` u003d **`null`**, bool
`$registerNodeNS` u003d **`true`**):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public [query](domxpath.query.md)(string `$expression`,
?[DOMNode](class.domnode.md) `$contextNode` u003d **`null`**, bool
`$registerNodeNS` u003d **`true`**):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public [registerNamespace](domxpath.registernamespace.md)(string
`$prefix`, string `$namespace`): bool

public
[registerPhpFunctions](domxpath.registerphpfunctions.md)(string\|array\|null
`$restrict` u003d **`null`**): void

}

## Властивості

`document`

`registerNodeNamespaces`
Якщо встановлено значення **`true`**, простори імен реєструються в
вузлі.

## Список змін

| Версія | Опис |
|--------|---------------------------------------- ------|
| 8.0.0 | Додано властивість `registerNodeNamespaces`. |

## Зміст

- [DOMXPath::\_\_construct](domxpath.construct.md) — Створює новий
об'єкт класу DOMXPath
- [DOMXPath::evaluate](domxpath.evaluate.md) — Обчислює передане
вираз XPath і повертає типізований результат, якщо можливо
- [DOMXPath::query](domxpath.query.md) — Виконує задане
вираз XPath
- [DOMXPath::registerNamespace](domxpath.registernamespace.md) -
Реєструє простір імен з об'єктом DOMXPath
- [DOMXPath::registerPhpFunctions](domxpath.registerphpfunctions.md)
- Реєстрація PHP-функцій як функцій XPath
