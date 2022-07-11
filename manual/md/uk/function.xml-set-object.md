- [«
xml_set_notation_decl_handler](function.xml-set-notation-decl-handler.md)
- [xml_set_processing_instruction_handler
»](function.xml-set-processing-instruction-handler.md)

- [PHP Manual](index.md)
- [Функції парсера XML](ref.xml.md)
- Використання XML-аналізатора всередині об'єкта

#xml_set_object

(PHP 4, PHP 5, PHP 7, PHP 8)

xml_set_object — Використання XML-аналізатора всередині об'єкта

### Опис

**xml_set_object**([XMLParser](class.xmlparser.md) `$parser`, object
`$object`): bool

Ця функція дозволяє використовувати `parser` всередині об'єкта `object`. всі
callback-функції можуть бути встановлені функціями
[xml_set_element_handler()](function.xml-set-element-handler.md) та
т.п. і використовуватись як методи об'єкта `object`.

### Список параметрів

`parser`
Посилання на аналізатор XML.

`object`
Об'єкт, у якому використовуватиметься XML-аналізатор.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- ----------------|
| 8.0.0 | Параметр `parser` чекає на екземпляр [XMLParser](class.xmlparser.md); раніше очікували ресурс (resource). |

### Приклади

**Приклад #1 Приклад використання **xml_set_object()****

`<?phpclass XMLParser{    private $parser; function __construct()    {         $this->parser u003d xml_parser_create(); xml_set_object($this->parser, $this); xml_set_element_handler($this->parser, "tag_open", "tag_close"); xml_set_character_data_handler($this->parser, "cdata"); }   function __destruct()    {        xml_parser_free($this->parser); unset($this->parser); }   function parse($data)    {         xml_parse($this->parser, $data); }   function tag_open($parser, $tag, $attributes)    {       var_dump($tag, $attributes); }   function cdata($parser, $cdata)    {        var_dump($cdata); }   function tag_close($parser, $tag)    {       var_dump($tag); }} // закінчення визначення класу xml$xml_parseru003d new XMLParser();$xml_parser->parse("<A IDu003d'hallo'>PHP</A>");?> `

Результат виконання цього прикладу:

string(1) "A"
array(1) {
["ID"]u003d>
string(5) "hallo"
}
string(3) "PHP"
string(1) "A"
