- [« simplexml_import_dom](function.simplexml-import-dom.md)
- [simplexml_load_string »](function.simplexml-load-string.md)

- [PHP Manual](index.md)
- [Функції SimpleXML](ref.simplexml.md)
- Інтерпретує XML-файл у об'єкт

# simplexml_load_file

(PHP 5, PHP 7, PHP 8)

simplexml_load_file - Інтерпретує XML-файл в об'єкт

### Опис

**simplexml_load_file**(
string `$filename`,
?string `$class_name` u003d SimpleXMLElement::class,
int `$options` u003d 0,
string `$namespace_or_prefix` u003d "",
bool `$is_prefix` u003d **`false`**
): [SimpleXMLElement](class.simplexmlelement.md)\|false

Перетворює правильно сформований XML-документ у вказаному файлі
об'єкт.

### Список параметрів

`filename`
Шлях до XML-файлу

`class_name`
Ви можете використовувати цей необов'язковий параметр для того, щоб
функція **simplexml_load_file()** повертала об'єкт зазначеного класу.
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

**Приклад #1 Інтерпретація XML-документа**

` <?php// Файл test.xml містить XML-документ з кореневим елементом// і за меншою мірою елемент /[root]/title.if (file_exists('test.xml') ml   .xml'); print_r($xml);} else {   exit('Не удалося відкрити файл test.xml.');}?> `

Цей скрипт виведе наступне у разі успішного завершення:

SimpleXMLElement Object
(
[title] u003d> Приклад заголовка
...
)

Тут ви можете використовувати `$xml->title` та будь-які інші елементи.

### Дивіться також

- [simplexml_load_string()](function.simplexml-load-string.md) -
Інтерпретує рядок із XML в об'єкт
- [SimpleXMLElement::\_\_construct()](simplexmlelement.construct.md) -
Створення нового об'єкта SimpleXMLElement
- [Робота з помилками XML](simplexml.examples-errors.md)
- [libxml_use_internal_errors()](function.libxml-use-internal-errors.md) -
Відключення помилок libxml та передача повноважень щодо вибірки та
обробці інформації про помилки користувачеві
- [Базове використання SimpleXML](simplexml.examples-basic.md)
- [libxml_set_streams_context()](function.libxml-set-streams-context.md) -
Встановлення контексту потоків для наступного завантаження чи запису
документа за допомогою libxml
