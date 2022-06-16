- [« Робота з просторами імен
XML] (example.xmlwriter-namespace.md)
- [XMLWriter »](class.xmlwriter.md)

- [PHP Manual](index.md)
- [Приклади](xmlwriter.examples.md)
- Робота з об'єктно-орієнтованим API

## Робота з об'єктно-орієнтованим API

У цьому прикладі демонструється робота з об'єктно-орієнтованим API
XMLWriter.

**Приклад #1 Робота з об'єктно-орієнтованим API**

` <?php$xw u003d new XMLWriter();$xw->openMemory();$xw->startDocument("1.0");$xw->startElement("book");$xw->text("example ");$xw->endElement();$xw->endDocument();echo $xw->outputMemory(); `

Результат виконання цього прикладу:

<?xml versionu003d"1.0"?>
<book>example</book>
