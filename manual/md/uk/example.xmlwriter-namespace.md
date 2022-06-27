- [« Створення простого XML-документа](example.xmlwriter-simple.md)
- [Робота з об'єктно-орієнтованим API
»](example.xmlwriter-oop.md)

- [PHP Manual](index.md)
- [Приклади](xmlwriter.examples.md)
- Робота з просторами імен XML

## Робота з просторами імен XML

У цьому вся прикладі демонструється створення елементів у просторі імен.

**Приклад #1 Робота з просторами імен XML**

` <?php$xw u003d xmlwriter_open_memory();xmlwriter_set_indent($xw, 1);$res u003d xmlwriter_set_indent_string($xw, ' ');xmlwriter_start_document($xw,' елемент );xmlwriter_end_attribute($xw);xmlwriter_text($xw, 'book1');xmlwriter_end_element($xw);xmlwriter_end_document($xw);echo xmlwriter_output_memory($xw); `

Результат виконання цього прикладу:

<?xml versionu003d"1.0" encodingu003d"UTF-8"?>
<prefix:books isbnu003d"" prefix:isbnu003d"" xmlns:prefixu003d"uri">book1</prefix:books>
