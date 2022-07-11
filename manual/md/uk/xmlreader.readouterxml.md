- [« XMLReader::readInnerXml](xmlreader.readinnerxml.md)
- [XMLReader::readString »](xmlreader.readstring.md)

- [PHP Manual](index.md)
- [XMLReader](class.xmlreader.md)
- Отримати XML із поточного вузла, включаючи сам вузол

# XMLReader::readOuterXml

(PHP 5 \>u003d 5.2.0, PHP 7, PHP 8)

XMLReader::readOuterXml — Отримати XML із поточного вузла, включаючи сам
вузол

### Опис

public **XMLReader::readOuterXml**(): string

Читає вміст поточного вузла, включаючи вузол.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає вміст поточного вузла, включаючи сам вузол як рядок. В
У разі виникнення помилки рядок буде порожнім.

### Примітки

**Застереження**

Ця функція доступна лише якщо PHP скомпільовано з підтримкою libxml
20620 чи старше.

### Дивіться також

- [XMLReader::readString()](xmlreader.readstring.md) - Прочитати
вміст поточного вузла як рядок
- [XMLReader::readInnerXml()](xmlreader.readinnerxml.md) - Вийняти
XML із поточного вузла
- [XMLReader::expand()](xmlreader.expand.md) - Повернути копію
поточного вузла у вигляді об'єкта DOM
