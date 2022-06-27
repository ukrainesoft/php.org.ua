- [« Приклад Структури Елементу XML](example.xml-structure.md)
- [Приклад використання зовнішніх сутностей XML
»](example.xml-external-entity.md)

- [PHP Manual](index.md)
- [Приклади](xml.examples.md)
- Приклад відображення тегів XML

## Приклад відображення тегів XML

**Приклад #1 Відображення XML у HTML**

Цей приклад відображає теги XML документа безпосередньо в тегах HTML.
Елементи не знайдені в масиві відображення ігноруються. Звісно,
цей приклад працюватиме лише з певним типом документа XML.

` <?php$file u003d "data.xml";$map_array u003d array(    "BOLD"    u003d> "B",   "EMPHASIS" u003d> "I",   " parser, $$, $attrs) {global $map_array; if (isset($map_array[$name])) {       echo "<$map_array[$name]>"; }}function endElement($parser, $name){    global $map_array; if (isset($map_array[$name])) {       echo "</$map_array[$name]>"; }}function characterData($parser, $data){    echo $data;}$xml_parser u003d xml_parser_create();// use case-folding so we are sure to find the tag in $map_arrayxml_parser_set_option($xml_parser, XML_OPTION_CASE_FOLDING, true); xml_set_element_handler($xml_parser, "startElement", "endElement");xml_set_character_data_handler($xml_parser, "characterData");if (!($fp u003d fopen($file, "r")    | ");}while ($data u003dfreed($fp, 4096)) {    if (!xml_parse($xml_parser, $data, feof($fp))) {                     d",                      xml_error_string(xml_get_error_code($xml_parser)),           m| }}xml_parser_free($xml_parser);?> `
