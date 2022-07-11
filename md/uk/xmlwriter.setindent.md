- [« XMLWriter::outputMemory](xmlwriter.outputmemory.md)
- [XMLWriter::setIndentString »](xmlwriter.setindentstring.md)

- [PHP Manual](index.md)
- [XMLWriter](class.xmlwriter.md)
- Включити або вимкнути відступи

# XMLWriter::setIndent

#xmlwriter_set_indent

(PHP 5 u003d 5.1.2, PHP 7, PHP 8, PECL xmlwriter u003d 0.1.0)

XMLWriter::setIndent -- xmlwriter_set_indent — Увімкнути або вимкнути
відступи

### Опис

Об'єктно-орієнтований стиль

public **XMLWriter::setIndent**(bool `$enable`): bool

Процедурний стиль

**xmlwriter_set_indent**([XMLWriter](class.xmlwriter.md) `$writer`,
bool `$enable`): bool

Вмикає або вимикає відступи.

### Список параметрів

`writer`
Тільки для процедурних дзвінків. Змінний екземпляр
[XMLWriter](class.xmlwriter.md). Об'єкт повертається із виклику
[xmlwriter_open_uri()](xmlwriter.openuri.md) або
[xmlwriter_open_memory()](xmlwriter.openmemory.md).

`enable`
Визначає, чи додано відступ.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- ----------------------------|
| 8.0.0 | У параметрі `writer` тепер очікується екземпляр [XMLWriter](class.xmlwriter.md); раніше очікували ресурс (resource). |

### Приклади

**Приклад #1 **XMLWriter::setIndent()** та змішаний вміст**

Увімкнення відступу не підходить для змішаного вмісту, оскільки
рядок відступу також вставляється перед інтегрованими елементами.

` <?php$writer u003d new XMLWriter();$writer->openMemory();$writer->setIndent(2);$writer->startDocument();$writer->startElement('p');$writer ->text('до');$writer->writeElement('a', 'елемента');$writer->text('після');$writer->endElement();$writer->endDocument() ;echo $writer->outputMemory();?> `

Результат виконання цього прикладу:

<?xml versionu003d"1.0"?>
<p>до <a>елемена</a>
після</p>

### Примітки

> **Примітка**:
>
> Відступ скидається при відкритті xmlwriter.

### Дивіться також

- [XMLWriter::setIndentString()](xmlwriter.setindentstring.md) -
Встановити рядок, який використовується для відступів
