- [«
DOMDocument::normalizeDocument](domdocument.normalizedocument.md)
- [DOMDocument::relaxNGValidate »](domdocument.relaxngvalidate.md)

- [PHP Manual](index.md)
- [DOMDocument](class.domdocument.md)
- Реєстрація розширеного класу, що використовується для створення типу
базового вузла

# DOMDocument::registerNodeClass

(PHP 5 \>u003d 5.2.0, PHP 7, PHP 8)

DOMDocument::registerNodeClass — Реєстрація розширеного класу,
використовуваного для створення типу базового вузла

### Опис

public **DOMDocument::registerNodeClass**(string `$baseClass`, ?string
`$extendedClass`): bool

Цей метод дозволяє зареєструвати свій власний розширений клас
DOM, який буде використовуватись згодом модулем PHP DOM.

Цей метод не є частиною стандарту DOM.

### Список параметрів

`baseClass`
Клас DOM, який ви бажаєте розширити. Список таких класів можна
побачити у [введенні](book.dom.md).

`extendedClass`
Назва розширеного класу. Якщо передати **`null`**, будуть видалені всі
раніше зареєстровані класи, що розширюють базовий клас `baseClass`.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Додавання нового методу до класу DOMElement для спрощення
коду**

`<?phpclass myElement extends DOMElement {    function appendElement($name) {     return $this->appendChild(new myElement($name)); }}class myDocument extends DOMDocument {   function setRoot($name) {     return $this->appendChild(new myElement($name)); }}$doc u003d new myDocument();$doc->registerNodeClass('DOMElement', myElement'); setRoot('root');$childu003du003d$root->appendElement('child');$child->setAttribute('foo', 'bar');echo $doc->saveXML();?> `

Результат виконання цього прикладу:

<?xml versionu003d"1.0"?>
<root><child foou003d"bar"/></root>

**Приклад #2 Отримання елементів у вигляді користувача класу**

` <?phpclass myElement extends DOMElement {    public function __toString() {        return $this->nodeValue; }}$doc u003d new DOMDocument;$doc->loadXML("<root><element><child>text in child</child></element></root>");$doc->registerNodeClass("DOMElement ", "myElement");$element u003d $doc->getElementsByTagName("child")->item(0);var_dump(get_class($element));// Скористаємося __toString методом..echo $element;?> `

Результат виконання цього прикладу:

string(9) "myElement"
text in child

**Приклад #3 Отримання імені документа власника**

Коли створюється екземпляр розширеного класу
[DOMDocument](class.domdocument.md), властивість `ownerDocument` буде
посилатися на створюваний об'єкт. Це означає, що немає потреби (а
фактично це неможливо) використати
**DOMDocument::registerNodeClass()** стосовно
[DOMDocument](class.domdocument.md).

` <?phpclass myDOMDocument extends DOMDocument {}class myOtherDOMDocument extends DOMDocument {}// Створюємо myDOMDocument з деяким XML-вмістомdocdoc u003d > /child></element></root>");$child u003d $doc->getElementsByTagName("child")->item(0);// Поточний власник вузла - myDOMDocumentvar_dump(get_class($child->ownerDocument) );// Імпортуємо вузол із myDOMDocument$newdoc u003d new myOtherDOMDocument;$child u003d $newdoc->importNode($child);// Новий власник | other(MDo_(MD))

Результат виконання цього прикладу:

string(13) "myDOMDocument"
string(18) "myOtherDOMDocument"

**Приклад #4 Об'єкти користувача тимчасові**

**Застереження**

Об'єкти зареєстрованих класів вузлів є тимчасовими, тобто. вони
знищуються, коли на них більше не посилаються з коду PHP та
відтворюються при повторному видаленні. Це означає, що значення
настроюваних властивостей будуть втрачені після відновлення.

` <?phpclass MyDOMElement extends DOMElement{    public $myProp u003d 'значення за мовчанням';}$doc u003d new DOMDocument();$doc->registerNodeClass('DOMElement', > > ('a');$node->myPropu003du003d'змінене значення';$doc->appendChild($node);echo $doc->childNodes[0]->myProp, PHP_EOL;unset($node);echo $ doc->childNodes[0]->myProp, PHP_EOL;?> `

Результат виконання цього прикладу:

змінене значення
значення за замовчуванням
