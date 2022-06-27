- [« DOMXPath::query](domxpath.query.md)
- [DOMXPath::registerPhpFunctions
»](domxpath.registerphpfunctions.md)

- [PHP Manual](index.md)
- [DOMXPath](class.domxpath.md)
- Реєструє простір імен з об'єктом DOMXPath

# DOMXPath::registerNamespace

(PHP 5, PHP 7, PHP 8)

DOMXPath::registerNamespace — Реєструє простір імен з об'єктом
[DOMXPath](class.domxpath.md)

### Опис

public **DOMXPath::registerNamespace**(string `$prefix`, string
`$namespace`): bool

Реєструє URI простору імен `namespace` та префікс `prefix` з
об'єктом DOMXPath.

### Список параметрів

`prefix`
Префікс.

`namespace`
URI простір імен.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.
