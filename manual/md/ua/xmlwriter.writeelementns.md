- [« XMLWriter::writeElement](xmlwriter.writeelement.md)
- [XMLWriter::writePi »](xmlwriter.writepi.md)

- [PHP Manual](index.md)
- [XMLWriter](class.xmlwriter.md)
- Записати повний простір імен тега елемента

# XMLWriter::writeElementNs

#xmlwriter_write_element_ns

(PHP 5 u003d 5.1.2, PHP 7, PHP 8, PECL xmlwriter u003d 0.1.0)

XMLWriter::writeElementNs -- xmlwriter_write_element_ns — Записати
повний простір імен тега елемента

### Опис

Об'єктно-орієнтований стиль

public **XMLWriter::writeElementNs**(
?string `$prefix`,
string `$name`,
?string `$namespace`,
?string `$content` u003d **`null`**
): bool

Процедурний стиль

**xmlwriter_write_element_ns**(
[XMLWriter](class.xmlwriter.md) `$writer`,
?string `$prefix`,
string `$name`,
?string `$namespace`,
?string `$content` u003d **`null`**
): bool

Записує повний простір імен тега елемента.

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

`content`
Вміст елемента.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- ----------------------------|
| 8.0.0 | У параметрі `writer` тепер очікується екземпляр [XMLWriter](class.xmlwriter.md); раніше очікували ресурс (resource). |

### Дивіться також

- [XMLWriter::startElementNs()](xmlwriter.startelementns.md) -
Створити стартовий тег елемента простору імен
- [XMLWriter::endElement()](xmlwriter.endelement.md) - Завершити
поточний елемент
- [XMLWriter::writeElement()](xmlwriter.writeelement.md) - Записати
повний тег елемент
