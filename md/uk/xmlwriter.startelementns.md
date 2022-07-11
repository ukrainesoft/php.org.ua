- [« XMLWriter::startElement](xmlwriter.startelement.md)
- [XMLWriter::startPi »](xmlwriter.startpi.md)

- [PHP Manual](index.md)
- [XMLWriter](class.xmlwriter.md)
- Створити стартовий тег елемента простору імен

# XMLWriter::startElementNs

#xmlwriter_start_element_ns

(PHP 5 u003d 5.1.2, PHP 7, PHP 8, PECL xmlwriter u003d 0.1.0)

XMLWriter::startElementNs -- xmlwriter_start_element_ns — Створити
стартовий тег елемента простору імен

### Опис

Об'єктно-орієнтований стиль

public **XMLWriter::startElementNs**(?string `$prefix`, string `$name`,
?string `$namespace`): bool

Процедурний стиль

**xmlwriter_start_element_ns**(
[XMLWriter](class.xmlwriter.md) `$writer`,
?string `$prefix`,
string `$name`,
?string `$namespace`
): bool

Починає елемент простір імен.

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
Назва елемента.

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

### Дивіться також

- [XMLWriter::endElement()](xmlwriter.endelement.md) - Завершити
поточний елемент
- [XMLWriter::writeElementNs()](xmlwriter.writeelementns.md) -
Записати повний простір імен тега елемента
