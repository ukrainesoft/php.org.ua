- [« XMLReader::setRelaxNGSchema](xmlreader.setrelaxngschema.md)
- [XMLReader::setSchema »](xmlreader.setschema.md)

- [PHP Manual](index.md)
- [XMLReader](class.xmlreader.md)
- Встановлює дані, що містять схему RelaxNG

# XMLReader::setRelaxNGSchemaSource

(PHP 5 \>u003d 5.1.0, PHP 7, PHP 8)

XMLReader::setRelaxNGSchemaSource — Встановлює дані, що містять
схему RelaxNG

### Опис

public **XMLReader::setRelaxNGSchemaSource**(?string `$source`): bool

Встановлює дані, що містять схему RelaxNG, що використовується при
перевірки.

### Список параметрів

`source`
Рядок, що містить схему RelaxNG.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Дивіться також

- [XMLReader::setRelaxNGSchema()](xmlreader.setrelaxngschema.md) -
Встановити ім'я файлу або URI для схеми RelaxNG
- [XMLReader::setSchema()](xmlreader.setschema.md) - Перевірити
документ, використовуючи XSD
- [XMLReader::isValid()](xmlreader.isvalid.md) - Показати, є
чи розбирається документ синтаксично правильним
