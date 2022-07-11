- [«
SolrInputDocument::addChildDocument](solrinputdocument.addchilddocument.md)
- [SolrInputDocument::addField »](solrinputdocument.addfield.md)

- [PHP Manual](index.md)
- [SolrInputDocument](class.solrinputdocument.md)
- Додає масив дочірніх документів

# SolrInputDocument::addChildDocuments

(PECL solr \>u003d 2.3.0)

SolrInputDocument::addChildDocuments — Додає масив дочірніх
документів

### Опис

public **SolrInputDocument::addChildDocuments**(array `&$docs`): void

Додає масив дочірніх документів до поточного вхідного документа.

### Список параметрів

`docs`
Масив (array) об'єктів
[SolrInputDocument](class.solrinputdocument.md).

### Значення, що повертаються

Функція не повертає значення після виконання.

### Помилки

Викидає виняток
[SolrIllegalArgumentException](class.solrillegalargumentexception.md)
у разі виникнення помилки.

Викидає виняток [SolrException](class.solrexception.md)
у разі виникнення внутрішньої помилки.

### Приклади

**Приклад #1 Приклад використання
**SolrInputDocument::addChildDocuments()****

` <?phpinclude "bootstrap.php";$options u003d array(    'hostname' u003d> SOLR_SERVER_HOSTNAME,    'login'    u003d> SOLR_SERVER_USERNAME,    'password' u003d> SOLR_SERVER_PASSWORD,    'port'     u003d> SOLR_SERVER_PORT,    'path'     u003d> SOLR_SERVER_STORE_PATH, );$client u003d new SolrClient($options);$product u003d new SolrInputDocument();$product->addField('id', 'P-BLACK');$product->addField('cat', 'tshirt' );$product->addField('cat', 'polo');$product->addField('content_type', 'product');$small u003d new SolrInputDocument();$small->addField('id', 'TS-BLK-S');$small->addField('content_type', 'sku');$small->addField('size', 'S');$small->addField('inventory', 100 );$medium u003d new SolrInputDocument();$medium->addField('id', 'TS-BLK-M');$medium->addField('content_type', 'sku');$medium->addField( 'size', 'M');$medium->addField('inventory', 200);$large u003d new SolrInputDocument();$large->addField('id', 'TS-BLK-L');$ large->addField('content_type', 'sku');$large->addField('size', 'L');$large->addField('inventory', 300);// додати дочірні документи$skus u003d [$small, $medium, $large];$product->addChildDocuments($skus);// додати блок документу продукту в індекс$updateResponse u003d $                          перезаписати, якщо документ існує         10000 // зафіксувати протягом 10 секунд);print_r($updateResponse->getResponse()); `

Результатом виконання цього прикладу буде щось подібне:

SolrObject Object
(
[responseHeader] u003d> SolrObject Object
(
[status] u003d> 0
[QTime] u003d> 5
)
)

### Дивіться також

- [SolrInputDocument::addChildDocument()](solrinputdocument.addchilddocument.md) -
Додає дочірній документ для блокової індексації
- [SolrInputDocument::hasChildDocuments()](solrinputdocument.haschilddocuments.md) -
Повертає true, якщо документ має дочірні документи
- [SolrInputDocument::getChildDocuments()](solrinputdocument.getchilddocuments.md) -
Повертає масив дочірніх документів (SolrInputDocument)
- [SolrInputDocument::getChildDocumentsCount()](solrinputdocument.getchilddocumentscount.md) -
Повертає кількість дочірніх документів
