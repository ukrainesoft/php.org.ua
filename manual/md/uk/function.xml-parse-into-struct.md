- [« xml_get_error_code](function.xml-get-error-code.md)
- [xml_parse »](function.xml-parse.md)

- [PHP Manual](index.md)
- [Функції парсера XML](ref.xml.md)
- Розбір XML-даних та поміщення в масив

#xml_parse_into_struct

(PHP 4, PHP 5, PHP 7, PHP 8)

xml_parse_into_struct — Розбір XML-даних та поміщення в масив

### Опис

**xml_parse_into_struct**(
[XMLParser](class.xmlparser.md) `$parser`,
string `$data`,
array `&$values`,
array `&$index` u003d **`null`**
): int

Ця функція розбирає XML-рядок і поміщає дані у 2 масиви. Масив
`index` містить покажчики на розміщення значень у масиві `values`.
Аргументи, що задають масиви, повинні передаватися на функцію за посиланням.

### Список параметрів

`parser`
Посилання на використовуваний XML-аналізатор.

`data`
Рядок XML-даних.

`values`
Масив значень XML даних.

`index`
Масив покажчиків на відповідні значення масиві $values.

### Значення, що повертаються

**xml_parse_into_struct()** повертає 0 при невдалому розборі рядка та
1 за успішного. Це не те саме, що **`false`** та **`true`**, будьте
обережні з такими операторами, як u003du003du003d.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- ----------------|
| 8.0.0 | Параметр `parser` чекає на екземпляр [XMLParser](class.xmlparser.md); раніше очікували ресурс (resource). |

### Приклади

Нижче наведений приклад, що демонструє внутрішній пристрій масивів,
генеруються функцією. XML-рядок містить простий тег `note` вкладений
тег `para`. Програма в прикладі розбирає цей рядок та виводить
створені масиви:

**Приклад #1 Приклад використання **xml_parse_into_struct()****

` <?php$simple u003d "<para><note>проста примітка</note></para>";$p u003d xml_parser_create();xml_parse_into_struct($p, $simple, $vals, $index);xml_parser_free( $p);echo "Масив index
";print_r($index);echo "
Масив vals
";print_r($vals);?> `

Після обробки програма виведе таке:

Index array
Array
(
[PARA] u003d> Array
(
[0] u003d> 0
[1] u003d> 2
)

[NOTE] u003d> Array
(
[0] u003d> 1
)

)

Масив Vals
Array
(
[0] u003d> Array
(
[tag] u003d> PARA
[type] u003d> open
[level] u003d> 1
)

[1] u003d> Array
(
[tag] u003d> NOTE
[type] u003d> complete
[level] u003d> 2
[value] u003d> проста примітка
)

[2] u003d> Array
(
[tag] u003d> PARA
[type] u003d> close
[level] u003d> 1
)

)

Розбір, що керується подіями (заснований на бібліотеці expat) може дати
важкооброблюваний результат у разі, якщо розбирається складовий
XML документ. Ця функція не створює DOM-об'єктів, але створювані нею
масиви можна перетворити на деревоподібну структуру згодом. Таким
Таким чином можна досить легко створювати об'єкти, що представляють
вміст XML-файлу. Припустимо, що наступний файл XML представляє
невелику базу даних з інформацією про амінокислоти:

**Приклад #2 moldb.xml - невелика база даних з інформацією про
молекулах**

`` xmlcode
<?xml versionu003d"1.0"?>
<moldb>

<molecule>
<name>Alanine</name>
<symbol>ala</symbol>
<code>A</code>
<type>hydrophobic</type>
</molecule>

<molecule>
<name>Lysine</name>
<symbol>lys</symbol>
<code>K</code>
<type>charged</type>
</molecule>

</moldb>
````

Код, який розбирає документ і створює відповідні об'єкти:

**Приклад #3 parsemoldb.php - розбирає moldb.xml і поміщає дані у
масив молекул**

` <?phpclass AminoAcid {    var $name; // Назва амінокислоти var $ $ symbol; // трьохлітерне позначення   var $code; // однолітерний код    var $type; // гідрофобна, заряджена, нейтральна     function __construct ($aa)   {         foreach ($aa as $ku003d>$v)    $$| }}function readDatabase($filename){    // читання XML-бази даних амінокислот    $data u003d file_get_contents($filename); $parser u003d xml_parser_create (); xml_parser_set_option($parser, XML_OPTION_CASE_FOLDING, 0); xml_parser_set_option($parser, XML_OPTION_SKIP_WHITE, 1); xml_parse_into_struct($parser, $data, $values, $tags); xml_parser_free($parser); // прохід через структури    foreach ($tags as $keyu003d>$val) {         if ($key u003du003d "molecule") {           | // каждая смежная пара значений массивов является верхней и            // нижней границей определения молекулы            for ($iu003d0; $i < count($molranges); $i+u003d2) {                $offset u003d $molranges[$i] + 1; $len u003d $molranges[$i + 1] - $offset; $tdb[]u003du003dparseMol(array_slice($values,$offset,$$len)); }        }}else {             continue; }   }}   return $tdb;}function parseMol($mvalues){   for for ($iu003d0; $i < count($mvalues); $i++) {   $$$ $mvalues[$i]["value"]; }   return new AminoAcid($mol);}$db u003d readDatabase("moldb.xml");echo "** База даних амінокислот:
";print_r($db);?> `

Після виконання `parsemoldb.php` змінна `$db` містить масив
об'єктів **AminoAcid**, а висновок відповідно наступний:

** База даних амінокислот:
Array
(
[0] u003d> aminoacid Object
(
[name] u003d> Alanine
[symbol] u003d> ala
[code] u003d> A
[type] u003d> hydrophobic
)

[1] u003d> aminoacid Object
(
[name] u003d> Lysine
[symbol] u003d> lys
[code] u003d> K
[type] u003d> charged
)

)
