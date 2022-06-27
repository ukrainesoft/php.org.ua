- [« XMLReader::setParserProperty](xmlreader.setparserproperty.md)
- [XMLReader::setRelaxNGSchemaSource
»](xmlreader.setrelaxngschemasource.md)

- [PHP Manual](index.md)
- [XMLReader](class.xmlreader.md)
- Встановити ім'я файлу або URI для схеми RelaxNG

# XMLReader::setRelaxNGSchema

(PHP 5 \>u003d 5.1.0, PHP 7, PHP 8)

XMLReader::setRelaxNGSchema — Встановити ім'я файлу або URI для схеми
RelaxNG

### Опис

public **XMLReader::setRelaxNGSchema**(?string `$filename`): bool

Встановлює ім'я файлу або URI для схем RelaxNG, які використовуються
під час перевірки.

### Список параметрів

`filename`
Назва файлу або URI, що вказує на схему RelaxNG.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Дивіться також

- [XMLReader::setRelaxNGSchemaSource()](xmlreader.setrelaxngschemasource.md) -
Встановлює дані, що містять схему RelaxNG
- [XMLReader::setSchema()](xmlreader.setschema.md) - Перевірити
документ, використовуючи XSD
- [XMLReader::isValid()](xmlreader.isvalid.md) - Показати, є
чи розбирається документ синтаксично правильним
