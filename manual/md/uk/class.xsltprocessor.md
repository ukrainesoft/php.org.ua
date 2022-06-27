- [« Обробка помилок за допомогою функцій обробки помилок
libxml](xsl.examples-errors.md)
- [XSLTProcessor::\_\_construct »](xsltprocessor.construct.md)

- [PHP Manual](index.md)
- [XSL](book.xsl.md)
- Клас XSLTProcessor

# Клас XSLTProcessor

(PHP 5, PHP 7, PHP 8)

## Вступ

## Огляд класів

class **XSLTProcessor** {

/\* Методи \*/

public [getParameter](xsltprocessor.getparameter.md)(string
`$namespace`, string `$name`): string\|false

public [getSecurityPrefs](xsltprocessor.getsecurityprefs.md)(): int

public [hasExsltSupport](xsltprocessor.hasexsltsupport.md)(): bool

public [importStylesheet](xsltprocessor.importstylesheet.md)(object
`$stylesheet`): bool

public
[registerPHPFunctions](xsltprocessor.registerphpfunctions.md)(array\|string\|null
`$functions` u003d **`null`**): void

public [removeParameter](xsltprocessor.removeparameter.md)(string
`$namespace`, string `$name`): bool

public [setParameter](xsltprocessor.setparameter.md)(string
`$namespace`, string `$name`, string `$value`): bool

public [setParameter](xsltprocessor.setparameter.md)(string
`$namespace`, array `$options`): bool

public [setProfiling](xsltprocessor.setprofiling.md)(?string
`$filename`): bool

public [setSecurityPrefs](xsltprocessor.setsecurityprefs.md)(int
`$preferences`): int

public [transformToDoc](xsltprocessor.transformtodoc.md)(object
`$document`, ?string `$returnClass` u003d **`null`**):
[DOMDocument](class.domdocument.md)\|false

public
[transformToURI](xsltprocessor.transformtouri.md)([DOMDocument](class.domdocument.md)
`$doc`, string `$uri`): int

public [transformToXml](xsltprocessor.transformtoxml.md)(object
`$document`): string\|null\|false

}

## Зміст

- [XSLTProcessor::\_\_construct](xsltprocessor.construct.md) -
Створює новий екземпляр класу XSLTProcessor
- [XSLTProcessor::getParameter](xsltprocessor.getparameter.md) -
Повертає значення параметра
- [XSLTProcessor::getSecurityPrefs](xsltprocessor.getsecurityprefs.md)
— Отримати налаштування безпеки
- [XSLTProcessor::hasExsltSupport](xsltprocessor.hasexsltsupport.md)
— Визначає чи PHP підтримку EXSLT
- [XSLTProcessor::importStylesheet](xsltprocessor.importstylesheet.md)
- Імпортує таблицю стилів
- [XSLTProcessor::registerPHPFunctions](xsltprocessor.registerphpfunctions.md)
— Включає можливість використовувати PHP функції як функції
XSLT
- [XSLTProcessor::removeParameter](xsltprocessor.removeparameter.md)
— Видаляє параметр
- [XSLTProcessor::setParameter](xsltprocessor.setparameter.md) -
Встановлює значення параметра
- [XSLTProcessor::setProfiling](xsltprocessor.setprofiling.md) -
Встановлює файл для профілювання
- [XSLTProcessor::setSecurityPrefs](xsltprocessor.setsecurityprefs.md)
— Встановити налаштування безпеки
- [XSLTProcessor::transformToDoc](xsltprocessor.transformtodoc.md) -
Перетворює на DOMDocument
- [XSLTProcessor::transformToUri](xsltprocessor.transformtouri.md) -
Перетворює на URI
- [XSLTProcessor::transformToXml](xsltprocessor.transformtoxml.md) -
Перетворює на XML
