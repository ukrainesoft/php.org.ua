- [« Використання простору імен:
основи](language.namespaces.basics.md)
- [Ключове слово namespace та константа \_\_NAMESPACE\_\_
»](language.namespaces.nsconstants.md)

- [PHP Manual](index.md)
- [Простори імен](language.namespaces.md)
- простори імен та динамічні особливості мови

## Простори імен та динамічні особливості мови

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8)

На реалізацію просторів імен у PHP вплинули і динамічні особливості
мови. Перетворимо нижченаведений код для використання просторів імен:

**Приклад #1 Динамічно доступні елементи**

example1.php:

` <?phpclass classname{    function __construct()    {        echo __METHOD__,"
";    }}function funcname(){    echo __FUNCTION__,"
";}const constname u003d "global";$a u003d 'classname';$obj u003d new $a; // виводить classname::__construct$b u003d 'funcname';$b(); // виводить funcname' constname'), "
"; // виводить global?> `

Необхідно використати абсолютне ім'я (ім'я класу з префіксом
простору імен). Зверніть увагу, що немає жодної різниці між
повним ім'ям та абсолютним всередині динамічного імені класу, функції
чи константи. Початковий зворотний сліш не є необхідним.

**Приклад #2 Динамічно доступні елементи простору імен**

`<?phpnamespace namespacename;class classname{     function __construct()    {        echo __METHOD__,"
";    }}function funcname(){    echo __FUNCTION__,"
";}const constname u003d "namespaced";include 'example1.php';$a u003d 'classname';$obj u003d new $a; // виводить classname::__construct$b u003d 'funcname';$b(); // виводить funcnameecho constant('constname'), "
"; // виводить global/* зверніть увагу, що при використанні подвійних лапок символ зворотного сліша має бути заекранований. Наприклад, "\namespacename\classname"  
amespacenam

Обов'язково прочитайте [Примітка про екранування імен простору
імен у
рядках](language.namespaces.faq.md#language.namespaces.faq.quote).
