- [« XMLWriter::setIndent](xmlwriter.setindent.md)
- [XMLWriter::startAttribute »](xmlwriter.startattribute.md)

- [PHP Manual](index.md)
- [XMLWriter](class.xmlwriter.md)
- Встановити рядок, який використовується для відступів

# XMLWriter::setIndentString

#xmlwriter_set_indent_string

(PHP 5 u003d 5.1.2, PHP 7, PHP 8, PECL xmlwriter u003d 0.1.0)

XMLWriter::setIndentString -- xmlwriter_set_indent_string — Встановити
рядок, що використовується для відступів

### Опис

Об'єктно-орієнтований стиль

public **XMLWriter::setIndentString**(string `$indentation`): bool

Процедурний стиль

**xmlwriter_set_indent_string**([XMLWriter](class.xmlwriter.md)
`$writer`, string `$indentation`): bool

Встановлює рядок, який використовуватиметься для відступу кожного
елемента/атрибута в результаті XML.

### Список параметрів

`writer`
Тільки для процедурних дзвінків. Змінний екземпляр
[XMLWriter](class.xmlwriter.md). Об'єкт повертається із виклику
[xmlwriter_open_uri()](xmlwriter.openuri.md) або
[xmlwriter_open_memory()](xmlwriter.openmemory.md).

`indentString`
Відступ рядка.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- ----------------------------|
| 8.0.0 | У параметрі `writer` тепер очікується екземпляр [XMLWriter](class.xmlwriter.md); раніше очікували ресурс (resource). |

### Примітки

> **Примітка**:
>
> Відступ скидається при відкритті xmlwriter.

### Дивіться також

- [XMLWriter::setIndent()](xmlwriter.setindent.md) - Увімкнути або
відключити відступи
