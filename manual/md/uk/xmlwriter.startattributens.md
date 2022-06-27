- [« XMLWriter::startAttribute](xmlwriter.startattribute.md)
- [XMLWriter::startCdata »](xmlwriter.startcdata.md)

- [PHP Manual](index.md)
- [XMLWriter](class.xmlwriter.md)
- Створити стартовий атрибут простору імен

# XMLWriter::startAttributeNs

#xmlwriter_start_attribute_ns

(PHP 5 u003d 5.1.2, PHP 7, PHP 8, PECL xmlwriter u003d 0.1.0)

XMLWriter::startAttributeNs -- xmlwriter_start_attribute_ns — Створити
стартовий атрибут простору імен

### Опис

Об'єктно-орієнтований стиль

public **XMLWriter::startAttributeNs**(?string `$prefix`, string
`$name`, ?string `$namespace`): bool

Процедурний стиль

**xmlwriter_start_attribute_ns**(
[XMLWriter](class.xmlwriter.md) `$writer`,
?string `$prefix`,
string `$name`,
?string `$namespace`
): bool

Починає атрибут простір імен.

### Список параметрів

`writer`
Тільки для процедурних дзвінків. Змінний екземпляр
[XMLWriter](class.xmlwriter.md). Об'єкт повертається із виклику
[xmlwriter_open_uri()](xmlwriter.openuri.md) або
[xmlwriter_open_memory()](xmlwriter.openmemory.md).

`prefix`
Префікс простору імен.

`name`
Назва атрибута.

`namespace`
URI простір імен. Якщо `namespace` дорівнює **`null`**, оголошення
простір імен буде опущено.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- ----------------------------|
| 8.0.0 | У параметрі `writer` тепер очікується екземпляр [XMLWriter](class.xmlwriter.md); раніше очікували ресурс (resource). |
| 8.0.0 | `prefix` тепер припускає значення null. |

### Дивіться також

- [XMLWriter::startAttribute()](xmlwriter.startattribute.md) -
Створити початковий атрибут
- [XMLWriter::endAttribute()](xmlwriter.endattribute.md) - Завершити
атрибут
- [XMLWriter::writeAttribute()](xmlwriter.writeattribute.md) -
Записати повний атрибут
- [XMLWriter::writeAttributeNs()](xmlwriter.writeattributens.md) -
Записати повний атрибут простору імен
