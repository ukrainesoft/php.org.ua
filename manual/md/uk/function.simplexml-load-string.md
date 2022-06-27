- [« simplexml_load_file](function.simplexml-load-file.md)
- [WDDX »](book.wddx.md)

- [PHP Manual](index.md)
- [Функції SimpleXML](ref.simplexml.md)
- Інтерпретує рядок із XML в об'єкт

# simplexml_load_string

(PHP 5, PHP 7, PHP 8)

simplexml_load_string — Інтерпретує рядок із XML в об'єкт

### Опис

**simplexml_load_string**(
string `$data`,
?string `$class_name` u003d SimpleXMLElement::class,
int `$options` u003d 0,
string `$namespace_or_prefix` u003d "",
bool `$is_prefix` u003d **`false`**
): [SimpleXMLElement](class.simplexmlelement.md)\|false

Отримує правильно сформований XML-рядок і повертає його як об'єкт.

### Список параметрів

`data`
Правильно сформований XML-рядок

`class_name`
Ви можете використовувати цей необов'язковий параметр для того, щоб
функція **simplexml_load_string()** повертала об'єкт вказаного класу.
Цей клас має розширювати клас
[SimpleXMLElement](class.simplexmlelement.md).

`options`
Починаючи з Libxml 2.6.0, ви можете використовувати параметр `options`,
щоб вказати [додаткові параметри Libxml](libxml.constants.md).

`namespace_or_prefix`
Префікс простору імен або URI.

`is_prefix`
**`true`**, якщо `namespace_or_prefix` є префіксом, та
**`false`**, якщо URI; за умовчанням дорівнює **`false`**.

### Значення, що повертаються

Повертає об'єкт (object) класу
[SimpleXMLElement](class.simplexmlelement.md) з властивостями,
містять дані, які зберігаються всередині XML-документу або
**`false`** у разі виникнення помилки.

**Увага**

Ця функція може повертати як логічне значення **`false`**, так і
значення не типу boolean, яке наводиться до **`false`**. Більше
Детальну інформацію див. у розділі [Булев
тип](language.types.boolean.md). Використовуйте [оператор
u003du003du003d](language.operators.comparison.md) для перевірки значення,
повертається цією функцією.

### Помилки

Генерує повідомлення про помилку рівня **`E_WARNING`** для кожної помилки,
знайденої в XML-даних.

**Підказка**

Використовуйте функцію
[libxml_use_internal_errors()](function.libxml-use-internal-errors.md)
для того, щоб придушити всі помилки XML, і функцію
[libxml_get_errors()](function.libxml-get-errors.md) для проходу по
ним згодом.

### Приклади

**Приклад #1 Інтерпретація XML-рядка**

` <?php$string u003d <<<<XML<?xml versionu003d'1.0'?><document> <title>Що 40?</title> <from>Джо</from> <to>Джейн</to> <body>  Я знаю, що -відповідь. У чому полягає питання? </body></document>XML;$xml u003d simplexml_load_string($string);print_r($xml);?> `

Результат виконання цього прикладу:

SimpleXMLElement Object
(
[title] u003d> Що 40?
[from] u003d> Джо
[to] u003d> Джейн
[body] u003d>
Я знаю, що це відповідь. У чому питання?
)

Тут можна використовувати $xml->body і т.д.

### Дивіться також

- [simplexml_load_file()](function.simplexml-load-file.md) -
Інтерпретує файл XML в об'єкт
- [SimpleXMLElement::\_\_construct()](simplexmlelement.construct.md) -
Створення нового об'єкта SimpleXMLElement
- [Робота з помилками XML](simplexml.examples-errors.md)
- [libxml_use_internal_errors()](function.libxml-use-internal-errors.md) -
Відключення помилок libxml та передача повноважень щодо вибірки та
обробці інформації про помилки користувачеві
- [Базове використання SimpleXML](simplexml.examples-basic.md)
