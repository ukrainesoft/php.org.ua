- [« XMLReader::getParserProperty](xmlreader.getparserproperty.md)
- [XMLReader::lookupNamespace »](xmlreader.lookupnamespace.md)

- [PHP Manual](index.md)
- [XMLReader](class.xmlreader.md)
- Показати, чи розбирається документ синтаксично правильним

# XMLReader::isValid

(PHP 5 \>u003d 5.1.0, PHP 7, PHP 8)

XMLReader::isValid — Показати, чи є документ, що розбирається
синтаксично правильним

### Опис

public **XMLReader::isValid**(): bool

Повертає логічне значення (boolean), яке є ознакою
того, що документ, що розбирається, є синтаксично правильним.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Перевірка правильності XML**

` <?php$xml u003d XMLReader::open('test.xml');// Для роботи метод обов'язково повинна бути включена// валідація парсера.$xml->setParserProperty(XMLReader::VALIDATE, xml->isValid());?> `

### Примітки

> **Примітка**: Перевіряється лише поточна нода, а не весь документ.

### Дивіться також

- [XMLReader::setParserProperty()](xmlreader.setparserproperty.md) -
Встановлює опцію парсера
- [XMLReader::setRelaxNGSchema()](xmlreader.setrelaxngschema.md) -
Встановити ім'я файлу або URI для схеми RelaxNG
- [XMLReader::setRelaxNGSchemaSource()](xmlreader.setrelaxngschemasource.md) -
Встановлює дані, що містять схему RelaxNG
- [XMLReader::setSchema()](xmlreader.setschema.md) - Перевірити
документ, використовуючи XSD
