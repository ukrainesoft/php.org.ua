- [« SimpleXMLElement::addChild](simplexmlelement.addchild.md)
- [SimpleXMLElement::attributes »](simplexmlelement.attributes.md)

- [PHP Manual](index.md)
- [SimpleXMLElement](class.simplexmlelement.md)
- Повертає сформований XML-документ у вигляді рядка на основі
елемента SimpleXML

# SimpleXMLElement::asXML

(PHP 5, PHP 7, PHP 8)

SimpleXMLElement::asXML — Повертає сформований XML-документ у вигляді
рядки на основі елемента SimpleXML

### Опис

public **SimpleXMLElement::asXML**(?string `$filename` u003d **`null`**):
string\|bool

Метод `asXML` задає формат даних батьківських об'єктів у версії XML
1.0.

### Список параметрів

`filename`
Якщо вказано значення у вигляді рядка (string), функція запише дані
у файл, а чи не поверне їх.

### Значення, що повертаються

Якщо `filename` не вказано, то функція поверне рядок (string) у разі
успішного виконання та **`false`** у разі виникнення помилки. Якщо
параметр вказано, то функція поверне **`true`**, якщо файл буде успішно
записаний і **`false`** інакше.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- ----|
| 8.0.0 | `filename` тепер припускає значення null. |

### Приклади

**Приклад #1 Отримання XML**

` <?php$string u003d <<<XML<a> <b> <c>текст</c>  <c>штучка</c> </b> <d>  <c>код</c> </ d></a>XML;$xml u003d new SimpleXMLElement($string);echo $xml->asXML();?> `

Результат виконання цього прикладу:

<?xml versionu003d"1.0"?>
<a>
<b>
<c>текст</c>
<c>штучка</c>
</b>
<d>
<c>код</c>
</d>
</a>

`asXML` також працює з результатами Xpath:

**Приклад #2 Використання asXML() з результатами
[SimpleXMLElement::xpath()](simplexmlelement.xpath.md)**

` <?php// Продовження прикладу XML вище./* Пошук <a><b><c> */$result u003d $xml->xpath('/a/b/c');foreach ($result as $ node) {    echo $node->asXML();}?> `

Результат виконання цього прикладу:

<c>текст</c><c>штучка</c>

### Дивіться також

- [SimpleXMLElement::\_\_toString()](simplexmlelement.tostring.md) -
Повертає вміст рядка
- [Базове використання SimpleXML](simplexml.examples-basic.md)
