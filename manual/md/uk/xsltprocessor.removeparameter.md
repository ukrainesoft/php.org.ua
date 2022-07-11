- [«
XSLTProcessor::registerPHPFunctions](xsltprocessor.registerphpfunctions.md)
- [XSLTProcessor::setParameter »](xsltprocessor.setparameter.md)

- [PHP Manual](index.md)
- [XSLTProcessor](class.xsltprocessor.md)
- Видаляє параметр

# XSLTProcessor::removeParameter

(PHP 5, PHP 7, PHP 8)

XSLTProcessor::removeParameter — Видалення параметра

### Опис

public **XSLTProcessor::removeParameter**(string `$namespace`, string
`$name`): bool

Видалення параметра, якщо його встановлено. Це дозволяє процесору
використовувати значення таблиці стилів, встановлене за замовчуванням.

### Список параметрів

`namespace`
Простір імен URI для параметра XSLT.

`name`
Назва локальної XSLT параметра.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Дивіться також

- [XSLTProcessor::setParameter()](xsltprocessor.setparameter.md) -
Встановлює значення параметра
- [XSLTProcessor::getParameter()](xsltprocessor.getparameter.md) -
Повертає значення параметра
