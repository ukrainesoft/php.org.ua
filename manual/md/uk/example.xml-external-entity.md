- [« Приклад відображення тегів XML](example.xml-map-tags.md)
- [Функції парсера XML»] (ref.xml.md)

- [PHP Manual](index.md)
- [Приклади](xml.examples.md)
- Приклад використання зовнішніх сутностей XML

## Приклад використання зовнішніх сутностей XML

Цей приклад підсвічує XML-код. Він ілюструє те, як потрібно
використовувати обробник посилання на зовнішню сутність для підключення та
аналізу вмісту зовнішніх файлів, так само як може бути оброблений PI,
і шлях для визначення "довіри" до коду, що міститься в PI.

XML документи, які використовуються в прикладі, розташовані під самим
прикладом (`xmltest.xml` та `xmltest2.xml`.)

**Приклад #1 Приклад використання зовнішньої сутності**

`<?php$file u003d "xmltest.xml";function trustedFile($file){    // довіряти тільки нашим нашим власним локальним файлам    if (!preg_match("@^(-a-[z-] *)\:\/\/@i", $file)         && fileowner($file) u003du003d getmyuid()) {            return true; }   return false;}function startElement($parser, $name, $attribs){   echo "<<font coloru003d\"#0000cc\">$name</font>"; if (count($attribs)) {        foreach ($attribs as $k u003d> $v) {            echo " <font coloru003d\"#009900\">$k</font>u003d\"<font                   coloru003d\" #990000\">$v</font>\""; }    }    echo ">";}function endElement($parser, $name){   echo "</<font coloru003d\"#0000cc\">$name</font>>";}function characterData$ data){   echo "<b>$data</b>";}function PIHandler($parser, $target, $data){    switch (strtolower($target)) |                           // Якщо оброблений документ є "довіреним", можна сказати,             // що запуск розташованого в ньому кода є безпечним. Якщо ні,            ? if (trustedFile($parser_file[$parser])) {               eval($data); } else {                 printf("Небезпечний код PHP: <i>%s</i>",                | }             break; }}function defaultHandler($parser, $data){   if (substr($data, 0, 1) u003du003d "&" && substr($data, -1, 1) u003du003d ";")               fontsu003dcoloru003d"#aa00aa">%s</font>',                htmlspecialchars($data)); } else {        printf('<font sizeu003d"-1">%s</font>',                htmlspecialchars($data)); }}function externalEntityRefHandler($parser, $openEntityNames, $base, $systemId,                                  $publicId) {    if ($systemId) {        if (!list($parser, $fp) u003d new_xml_parser($systemId)) {            printf("Невозможно відкрити сутність %s в %s
", $openEntityNames,                   $systemId);            return false;        }        while ($data u003d fread($fp, 4096)) {            if (!xml_parse($parser, $data, feof($fp))) {                printf("Ошибка XML: %s в рядку %d в процесі розбору сутності %s
",                       xml_error_string(xml_get_error_code($parser)),                       xml_get_current_line_number($parser), $openEntityNames);                xml_parser_free($parser);                return false;            }        }        xml_parser_free($parser);        return true;    }    return false;}function new_xml_parser($ file){    global $parser_file;    $xml_parser u003d xml_parser_create();    xml_parser_set_option($xml_parser, XML_OPTION_CASE_FOLDING, 1);    xml_set_element_handler($xml_parser, "startElement", "endElement");    xml_set_character_data_handler($xml_parser, "characterData");    xml_set_processing_instruction_handler( $xml_parser, "PIHandler");    xml_set_default_handler($xml_parser, "defaultHandler");    xml_set_external_entity_ref_handler($xml_parser, "externalEntityRefHandler");    if (!($fp u003d @fopen($file, "r"))) {        return false ;    }    if (!is_array($parser_file)) {       settype($parser_file, "array");    }}    $parser_file[$ml le; return array($xml_parser, $fp);}if (!(list($xml_parser, $fp) u003d new_xml_parser($file))) {   die("Читання XML-файла неможливо")<}> ;while ($data u003dfreed($fp, 4096)) {    if (!xml_parse($xml_parser, $data, feof($fp))) {                              ???
",                    xml_error_string(xml_get_error_code($xml_parser)),                    xml_get_current_line_number($xml_parser)));    }}echo "</pre>";echo "разбор завершён
";xml_parser_free($xml_parser);?> `

**Приклад #2 xmltest.xml**

`` xmlcode
<?xml versionu003d'1.0'?>
<!DOCTYPE chapter SYSTEM "/just/a/test.dtd" [
<!ENTITY plainEntity "FOO entity">
<!ENTITY systemEntity SYSTEM "xmltest2.xml">
]>
<Chapter>
<TITLE>Title &plainEntity;</TITLE>
<para>
<informaltable>
<tgroup colsu003d"3">
<tbody>
<row><entry>a1</entry><entry morerowsu003d"1">b1</entry><entry>c1</entry></row>
<row><entry>a2</entry><entry>c2</entry></row>
<row><entry>a3</entry><entry>b3</entry><entry>c3</entry></row>
</tbody>
</tgroup>
</informaltable>
</para>
&systemEntity;
<section idu003d"about">
<title>Про цей документ</title>
<para>
<!-- this is a comment -->
<?php echo 'Hi! This is PHP version'. phpversion(); ?>
</para>
</section>
</chapter>
````

Цей файл підключено до `xmltest.xml`:

**Приклад #3 xmltest2.xml**

`` xmlcode
<?xml versionu003d"1.0"?>
<!DOCTYPE foo [
<!ENTITY testEnt "test entity">
]>
<foo>
<element attribu003d"value"/>
&testEnt;
<?php echo "Тут запущений код PHP"; ?>
</foo>
````
