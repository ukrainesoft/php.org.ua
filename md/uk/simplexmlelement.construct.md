- [« SimpleXMLElement::children](simplexmlelement.children.md)
- [SimpleXMLElement::count »](simplexmlelement.count.md)

- [PHP Manual](index.md)
- [SimpleXMLElement](class.simplexmlelement.md)
- Створення нового об'єкта SimpleXMLElement

# SimpleXMLElement::\_\_construct

(PHP 5, PHP 7, PHP 8)

SimpleXMLElement::\_\_construct — Створення нового об'єкта
SimpleXMLElement

### Опис

public **SimpleXMLElement::\_\_construct**(
string `$data`,
int `$options` u003d 0,
bool `$dataIsURL` u003d **`false`**,
string `$namespaceOrPrefix` u003d "",
bool `$isPrefix` u003d **`false`**
)

Створює новий об'єкт [SimpleXMLElement](class.simplexmlelement.md).

### Список параметрів

`data`
Правильно сформований XML-рядок. Може бути шляхом або URL до
XML-документу, якщо параметр `dataIsURL` встановлений у **`true`**.

`options`
Необов'язковий параметр використовується для вказівки [додаткових
параметрів Libxml](libxml.constants.md), що впливають на читання
документів XML. Параметри, що впливають на виведення документів XML
(наприклад, **`LIBXML_NOEMPTYTAG`**), ігноруються.

> **Примітка**:
>
> Для можливості доступу до глибоко вкладених елементів XML або
> обробки дуже великих текстових вузлів може знадобитися
> використовувати **`LIBXML_PARSEHUGE`**.

`dataIsURL`
За замовчуванням 'dataIsURL' встановлено в **`false`**. Використовуйте
**`true`** для вказівки того, що `data` є шляхом або URL до
XML-документ замість даних типу string.

`namespaceOrPrefix`
Префікс простору імен або URI.

`isPrefix`
**`true`**, якщо `namespaceOrPrefix` є префіксом, **`false`**,
якщо це URI; за промовчанням **`false`**.

### Помилки

Видає повідомлення з помилкою **`E_WARNING`** для кожної знайденої помилки у
XML-даних, та додатково генерує виняток
[Exception](class.exception.md), якщо дані XML не можуть бути
розібрані.

**Підказка**

Використовуйте
[libxml_use_internal_errors()](function.libxml-use-internal-errors.md)
для придушення всіх XML-помилок та
[libxml_get_errors()](function.libxml-get-errors.md) для їхньої ітерації
за ними.

### Приклади

> **Примітка**:
>
> Перелічені приклади можуть містити "example.php", в якому
> визначається XML-рядок, розташована в першому прикладі посібника з
> [базове використання](simplexml.examples-basic.md).

**Приклад #1 Створення об'єкта SimpleXMLElement**

` <?phpinclude 'example.php';$sxe u003d new SimpleXMLElement($xmlstr);echo $sxe->movie[0]->title;?> `

Результат виконання цього прикладу:

PHP: Поява Парсера

**Приклад #2 Створення об'єкта SimpleXMLElement з URL**

` <?php$sxe u003d new SimpleXMLElement('http://example.org/document.xml', NULL, TRUE);echo $sxe->asXML();?> `

### Дивіться також

- [Базове використання SimpleXML](simplexml.examples-basic.md)
- [simplexml_load_string()](function.simplexml-load-string.md) -
Інтерпретує рядок із XML в об'єкт
- [simplexml_load_file()](function.simplexml-load-file.md) -
Інтерпретує файл XML в об'єкт
- [Робота з помилками XML](simplexml.examples-errors.md)
- [libxml_use_internal_errors()](function.libxml-use-internal-errors.md) -
Відключення помилок libxml та передача повноважень щодо вибірки та
обробці інформації про помилки користувачеві
- [libxml_set_streams_context()](function.libxml-set-streams-context.md) -
Встановлення контексту потоків для наступного завантаження чи запису
документа за допомогою libxml
