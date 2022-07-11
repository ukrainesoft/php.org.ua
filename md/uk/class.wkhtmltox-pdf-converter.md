- [« Налаштування під час виконання](wkhtmltox.configuration.md)
- [wkhtmltox\PDF\Converter::add »](wkhtmltox-pdf-converter.add.md)

- [PHP Manual](index.md)
- [wkhtmltox](book.wkhtmltox.md)
- Клас wkhtmltox\PDF\Converter

# Клас wkhtmltox\PDF\Converter

(wkhtmltox \>u003d 0.1.0)

## Вступ

Перетворює вхідні дані HTML або набір вхідних даних HTML на PDF

## Огляд класів

class **wkhtmltox\PDF\Converter** {

/\* Constructor \*/

public [\_\_construct](wkhtmltox-pdf-converter.construct.md)(array
`$settings` u003d ?)

/\* Методи \*/

public
[add](wkhtmltox-pdf-converter.add.md)([wkhtmltox\PDF\Object](class.wkhtmltox-pdf-object.md)
`$object`): void

public [convert](wkhtmltox-pdf-converter.convert.md)(): ?string

public [getVersion](wkhtmltox-pdf-converter.getversion.md)(): string

}

## Зміст

- [wkhtmltox\PDF\Converter::add](wkhtmltox-pdf-converter.add.md) -
Додавання об'єкта для перетворення
- [wkhtmltox\PDF\Converter::\_\_construct](wkhtmltox-pdf-converter.construct.md)
— Створити новий PDF-конвертер
- [wkhtmltox\PDF\Converter::convert](wkhtmltox-pdf-converter.convert.md)
— Виконати перетворення PDF
- [wkhtmltox\PDF\Converter::getVersion](wkhtmltox-pdf-converter.getversion.md)
— Визначити версію конвертера
