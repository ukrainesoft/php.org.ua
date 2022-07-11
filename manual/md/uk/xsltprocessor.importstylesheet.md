- [«
XSLTProcessor::hasExsltSupport](xsltprocessor.hasexsltsupport.md)
- [XSLTProcessor::registerPHPFunctions
»](xsltprocessor.registerphpfunctions.md)

- [PHP Manual](index.md)
- [XSLTProcessor](class.xsltprocessor.md)
- Імпортує таблицю стилів

# XSLTProcessor::importStylesheet

(PHP 5, PHP 7, PHP 8)

XSLTProcessor::importStylesheet — Імпортує таблицю стилів

### Опис

public **XSLTProcessor::importStylesheet**(object `$stylesheet`): bool

Цей метод імпортує таблицю стилів у
[XSLTProcessor](class.xsltprocessor.md) для трансформації.

### Список параметрів

`stylesheet`
Імпортована таблиця стилів у вигляді об'єкта
[DOMDocument](class.domdocument.md) або
[SimpleXMLElement](class.simplexmlelement.md).

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.
