- [« Приклади](xml.examples.md)
- [Приклад відображення тегів XML »](example.xml-map-tags.md)

- [PHP Manual](index.md)
- [Приклади](xml.examples.md)
- Приклад структури елемента XML

## Приклад Структури Елементу XML

Перший приклад відображає структуру початкових елементів у документі з
відступом.

**Приклад #1 Показати структуру елемента XML**

` <?php$file u003d "data.xml";$depth u003d array();function startElement($parser, $name, $attrs){    global $depth; if (!isset($depth[$parser])) {       $depth[$parser] u003d 0; }   for ($i u003d 0; $i < $depth[$parser]; $i++) {        echo "  "; }    echo "$name
";   $depth[$parser]++;}function endElement($parser, $name){    global $depth;    $depth[$parser]--;}$xml_parser u003d xml_parser_ml ", "endElement");if (!($fp u003d fopen($file, "r"))) {   die("Неможливо произвести читання XML");}while ($data u003d fread($fp, 40 {    if (!xml_parse($xml_parser, $data, feof($fp))) {        die(sprintf("Ошибка XML: %s на строке %d",                    xml_error_string(xml_get_error_code($xml_parser)),                    xml_get_current_line_number($xml_parser) ));    }}xml_parser_free($xml_parser);?> `
