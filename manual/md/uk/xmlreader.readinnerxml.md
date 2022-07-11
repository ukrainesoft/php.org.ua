- [« XMLReader::read](xmlreader.read.md)
- [XMLReader::readOuterXml »](xmlreader.readouterxml.md)

- [PHP Manual](index.md)
- [XMLReader](class.xmlreader.md)
- Вийняти XML із поточного вузла

# XMLReader::readInnerXml

(PHP 5 \>u003d 5.2.0, PHP 7, PHP 8)

XMLReader::readInnerXml — Вийняти XML із поточного вузла

### Опис

public **XMLReader::readInnerXml**(): string

Читає вміст поточного вузла, включаючи дочірні вузли та розмітку.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає вміст поточного вузла у вигляді рядка. Порожня стрічка
повертається у разі виникнення помилки.

### Примітки

**Застереження**

Ця функція доступна лише якщо PHP скомпільовано з підтримкою libxml
20620 чи старше.

### Дивіться також

- [XMLReader::readString()](xmlreader.readstring.md) - Прочитати
вміст поточного вузла як рядок
- [XMLReader::readOuterXml()](xmlreader.readouterxml.md) - Отримати
XML із поточного вузла, включаючи сам вузол
- [XMLReader::expand()](xmlreader.expand.md) - Повернути копію
поточного вузла у вигляді об'єкта DOM
