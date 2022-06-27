- [« XMLReader::readString](xmlreader.readstring.md)
- [XMLReader::setRelaxNGSchema »](xmlreader.setrelaxngschema.md)

- [PHP Manual](index.md)
- [XMLReader](class.xmlreader.md)
- Встановлює опцію парсера

# XMLReader::setParserProperty

(PHP 5 \>u003d 5.1.0, PHP 7, PHP 8)

XMLReader::setParserProperty — Встановлює опцію парсера

### Опис

public **XMLReader::setParserProperty**(int `$property`, bool `$value`):
bool

Встановлює настройки для парсера. Опції мають бути встановлені після
виклику [XMLReader::open()](xmlreader.open.md) або
[XMLReader::xml()](xmlreader.xml.md) та до першого виклику
[XMLReader::read()](xmlreader.read.md).

### Список параметрів

`property`
Одна з [констант опцій
парсера](class.xmlreader.md#xmlreader.constants).

`value`
Якщо встановлено в **`true`**, то опція буде включена, інакше
у разі опція буде вимкнена.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.
