- [« Функції DOM](ref.dom.md)
- [libxml »] (book.libxml.md)

- [PHP Manual](index.md)
- [Функції DOM](ref.dom.md)
- Отримує об'єкт класу DOMElement із об'єкта класу SimpleXMLElement

# dom_import_simplexml

(PHP 5, PHP 7, PHP 8)

dom_import_simplexml — Отримує об'єкт класу
[DOMElement](class.domelement.md) з об'єкта класу
[SimpleXMLElement](class.simplexmlelement.md)

### Опис

**dom_import_simplexml**(object `$node`):
[DOMElement](class.domelement.md)

Ця функція бере вузол `node` класу [SimpleXML](ref.simplexml.md) та
перетворює його на вузол [DOMElement](class.domelement.md). Потім цей
новий об'єкт може бути використаний як власний вузол
[DOMElement](class.domelement.md).

### Список параметрів

`node`
Вузол [SimpleXMLElement](class.simplexmlelement.md).

### Значення, що повертаються

Доданий вузол [DOMElement](class.domelement.md).

### Список змін

| Версія | Опис |
|--------|---------------------------------------- --------------------------------|
| 8.0.0 | Функція більше не повертає **`null`** у разі виникнення помилки. |

### Приклади

**Приклад #1 Імпорт SimpleXML у DOM за допомогою функції
**dom_import_simplexml()****

` <?php$sxe u003d simplexml_load_string('<books><book><title>дурниця</title></book></books>');if ($sxe u003du003du003du003dfalse) {    echo 'Помилка при розборі документа'; exit;}$dom_sxe u003d dom_import_simplexml($sxe);if (!$dom_sxe) {   echo 'Помилка при перетворенні XML'; exit;}$dom u003d new DOMDocument('1.0');$dom_sxe u003d $dom->importNode($dom_sxe, true);$dom_sxe u003d $dom->appendChild($dom_sxe)(echo>) ;?> `

### Дивіться також

- [simplexml_import_dom()](function.simplexml-import-dom.md) -
Отримує об'єкт класу SimpleXMLElement із вузла DOM
