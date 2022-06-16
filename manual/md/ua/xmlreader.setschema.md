- [«
XMLReader::setRelaxNGSchemaSource](xmlreader.setrelaxngschemasource.md)
- [XMLReader::XML »](xmlreader.xml.md)

- [PHP Manual](index.md)
- [XMLReader](class.xmlreader.md)
- Перевірити документ за допомогою XSD

# XMLReader::setSchema

(PHP 5 \>u003d 5.2.0, PHP 7, PHP 8)

XMLReader::setSchema — Перевірити документ за допомогою XSD

### Опис

public **XMLReader::setSchema**(?string `$filename`): bool

Використовує схему W3C XSD для перевірки документів у процесі роботи.
Активація можлива лише до першого виклику Read().

### Список параметрів

`filename`
Назва файлу XSD схеми.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Помилки

Попередження **`E_WARNING`** виникає, якщо libxml було зібрано без
підтримки схем, схема містить помилки або якщо функція
[XMLReader::read()](xmlreader.read.md) вже була викликана.

### Примітки

**Застереження**

Ця функція доступна лише якщо PHP скомпільовано з підтримкою libxml
20620 чи старше.

### Дивіться також

- [XMLReader::setRelaxNGSchema()](xmlreader.setrelaxngschema.md) -
Встановити ім'я файлу або URI для схеми RelaxNG
- [XMLReader::setRelaxNGSchemaSource()](xmlreader.setrelaxngschemasource.md) -
Встановлює дані, що містять схему RelaxNG
- [XMLReader::isValid()](xmlreader.isvalid.md) - Показати, є
чи розбирається документ синтаксично правильним
