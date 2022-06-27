- [« XMLWriter::writeAttribute](xmlwriter.writeattribute.md)
- [XMLWriter::writeCdata »](xmlwriter.writecdata.md)

- [PHP Manual](index.md)
- [XMLWriter](class.xmlwriter.md)
- Записати повний атрибут простору імен

# XMLWriter::writeAttributeNs

#xmlwriter_write_attribute_ns

(PHP 5 u003d 5.1.2, PHP 7, PHP 8, PECL xmlwriter u003d 0.1.0)

XMLWriter::writeAttributeNs -- xmlwriter_write_attribute_ns — Записати
повний атрибут простору імен

### Опис

Об'єктно-орієнтований стиль

public **XMLWriter::writeAttributeNs**(
?string `$prefix`,
string `$name`,
?string `$namespace`,
string `$value`
): bool

Процедурний стиль

**xmlwriter_write_attribute_ns**(
[XMLWriter](class.xmlwriter.md) `$writer`,
?string `$prefix`,
string `$name`,
?string `$namespace`,
string `$value`
): bool

Записує повний атрибут простір імен.

### Список параметрів

`writer`
Тільки для процедурних дзвінків. Змінний екземпляр
[XMLWriter](class.xmlwriter.md). Об'єкт повертається із виклику
[xmlwriter_open_uri()](xmlwriter.openuri.md) або
[xmlwriter_open_memory()](xmlwriter.openmemory.md).

`prefix`
Префікс простору імен. Якщо `prefix` дорівнює **`null`**, простір
імен буде опущено.

`name`
Назва атрибута.

`namespace`
URI простір імен. Якщо `namespace` дорівнює **`null`**, оголошення
простір імен буде опущено.

`content`
Значення атрибуту.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- ----------------------------|
| 8.0.0 | У параметрі `writer` тепер очікується екземпляр [XMLWriter](class.xmlwriter.md); раніше очікували ресурс (resource). |

### Дивіться також

- [XMLWriter::writeAttribute()](xmlwriter.writeattribute.md) -
Записати повний атрибут
- [XMLWriter::startAttribute()](xmlwriter.startattribute.md) -
Створити початковий атрибут
- [XMLWriter::startAttributeNs()](xmlwriter.startattributens.md) -
Створити стартовий атрибут простору імен
- [XMLWriter::endAttribute()](xmlwriter.endattribute.md) - Завершити
атрибут
