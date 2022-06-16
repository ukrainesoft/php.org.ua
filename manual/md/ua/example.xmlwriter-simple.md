- [« Приклади](xmlwriter.examples.md)
- [Робота з просторами імен XML
»](example.xmlwriter-namespace.md)

- [PHP Manual](index.md)
- [Приклади](xmlwriter.examples.md)
- Створення простого XML-документу

## Створення простого XML-документа

Цей приклад демонструє створення XML-документа у пам'яті за допомогою
XMLWriter.

**Приклад #1 Створення простого XML-документа**

` <?php$xw u003d xmlwriter_open_memory();xmlwriter_set_indent($xw, 1);$res u003d xmlwriter_set_indent_string($xw, ' ');xmlwriter_start_document($xw,' елементxmlwriter_start_element($xw, 'tag1');// Атрибут 'att1' для елемента 'tag1'xmlwriter_start_attribute($xw, 'att1');xmlwriter_text($xw,'valueofat xw, 'this is a comment.');// Створюємо дочірній елементxmlwriter_start_element($xw, 'tag11');xmlwriter_text($xw, 'This is a sample text, // tag11xmlwriter_end_element($xw); // tag1// CDATAxmlwriter_start_element($xw, 'testc');xmlwriter_write_cdata($xw, "This is cdata content");xmlwriter_end_element($xw); // testcxmlwriter_start_element($xw, 'testc');xmlwriter_start_cdata($xw);xmlwriter_text($xw, "test cdata2");xmlwriter_end_cdata($xw);xmlwriter_end_end // testc// Інструкції по обробціxmlwriter_start_pi($xw, 'php');xmlwriter_text($xw, '$foou003d2;echo $foo;');xmlwriter_end_pi($xw);xmlwriter_end_ $ xw); `

Результат виконання цього прикладу:

<?xml versionu003d"1.0" encodingu003d"UTF-8"?>
<tag1 att1u003d"valueofatt1">
<!--this is a comment.-->
<tag11>This is a sample text, ä</tag11>
</tag1>
<testc><![CDATA[This is cdata content]]></testc>
<testc><![CDATA[test cdata2]]></testc>
<?php $foou003d2;echo $foo;?>
