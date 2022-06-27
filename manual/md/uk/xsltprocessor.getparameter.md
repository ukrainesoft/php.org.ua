- [« XSLTProcessor::\_\_construct](xsltprocessor.construct.md)
- [XSLTProcessor::getSecurityPrefs
»](xsltprocessor.getsecurityprefs.md)

- [PHP Manual](index.md)
- [XSLTProcessor](class.xsltprocessor.md)
- Повертає значення параметра

# XSLTProcessor::getParameter

(PHP 5, PHP 7, PHP 8)

XSLTProcessor::getParameter — Повертає значення параметра

### Опис

public **XSLTProcessor::getParameter**(string `$namespace`, string
`$name`): string\|false

Повертає параметр, якщо його раніше встановлено за допомогою
[XSLTProcessor::setParameter()](xsltprocessor.setparameter.md).

### Список параметрів

`namespace`
Простір імен URI для параметра XSLT.

`name`
Назва локального імені XSLT.

### Значення, що повертаються

Значення параметра (у вигляді рядка), або **`false`**, якщо воно не
встановлено.

### Дивіться також

- [XSLTProcessor::setParameter()](xsltprocessor.setparameter.md) -
Встановлює значення параметра
- [XSLTProcessor::removeParameter()](xsltprocessor.removeparameter.md) -
Видаляє параметр
