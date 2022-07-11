- [« XMLReader::readOuterXml](xmlreader.readouterxml.md)
- [XMLReader::setParserProperty »](xmlreader.setparserproperty.md)

- [PHP Manual](index.md)
- [XMLReader](class.xmlreader.md)
- Прочитати вміст поточного вузла як рядок

# XMLReader::readString

(PHP 5 \>u003d 5.2.0, PHP 7, PHP 8)

XMLReader::readString — Прочитати вміст поточного вузла як рядок

### Опис

public **XMLReader::readString**(): string

Читає вміст поточного вузла як рядок.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає вміст поточного вузла у вигляді рядка. В разі
Виникнення помилки рядок буде порожнім.

### Примітки

**Застереження**

Ця функція доступна лише якщо PHP скомпільовано з підтримкою libxml
20620 чи старше.

### Дивіться також

- [XMLReader::readOuterXml()](xmlreader.readouterxml.md) - Отримати
XML із поточного вузла, включаючи сам вузол
- [XMLReader::readInnerXml()](xmlreader.readinnerxml.md) - Вийняти
XML із поточного вузла
- [XMLReader::expand()](xmlreader.expand.md) - Повернути копію
поточного вузла у вигляді об'єкта DOM
