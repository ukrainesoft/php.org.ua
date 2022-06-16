- [«SolrUtils::queryPhrase](solrutils.queryphrase.md)
- [SolrInputDocument::addChildDocument
»](solrinputdocument.addchilddocument.md)

- [PHP Manual](index.md)
- [Solr](book.solr.md)
- Клас SolrInputDocument

# Клас SolrInputDocument

(PECL solr \> u003d 0.9.2)

## Вступ

Цей клас представляє документ Solr, який буде надіслано до індексу
Solr.

## Огляд класів

final class **SolrInputDocument** {

/\* Константи \*/

const int `SORT_DEFAULT` u003d 1;

const int `SORT_ASC` u003d 1;

const int `SORT_DESC` u003d 2;

const int `SORT_FIELD_NAME` u003d 1;

const int `SORT_FIELD_VALUE_COUNT` u003d 2;

const int `SORT_FIELD_BOOST_VALUE` u003d 4;

/\* Методи \*/

public [\_\_construct](solrinputdocument.construct.md)()

public
[addChildDocument](solrinputdocument.addchilddocument.md)([SolrInputDocument](class.solrinputdocument.md)
`$child`): void

public
[addChildDocuments](solrinputdocument.addchilddocuments.md)(array
`&$docs`): void

public [addField](solrinputdocument.addfield.md)(string `$fieldName`,
string `$fieldValue`, float `$fieldBoostValue` u003d 0.0): bool

public [clear](solrinputdocument.clear.md)(): bool

public [\_\_clone](solrinputdocument.clone.md)(): void

public [deleteField](solrinputdocument.deletefield.md)(string
`$fieldName`): bool

public [fieldExists](solrinputdocument.fieldexists.md)(string
`$fieldName`): bool

public [getBoost](solrinputdocument.getboost.md)(): float

public [getChildDocuments](solrinputdocument.getchilddocuments.md)():
array

public
[getChildDocumentsCount](solrinputdocument.getchilddocumentscount.md)():
int

public [getField](solrinputdocument.getfield.md)(string `$fieldName`):
[SolrDocumentField](class.solrdocumentfield.md)

public [getFieldBoost](solrinputdocument.getfieldboost.md)(string
`$fieldName`): float

public [getFieldCount](solrinputdocument.getfieldcount.md)():
int\|false

public [getFieldNames](solrinputdocument.getfieldnames.md)(): array

public [hasChildDocuments](solrinputdocument.haschilddocuments.md)():
bool

public
[merge](solrinputdocument.merge.md)([SolrInputDocument](class.solrinputdocument.md)
`$sourceDoc`, bool `$overwrite` u003d **`true`**): bool

public [reset](solrinputdocument.reset.md)(): bool

public [setBoost](solrinputdocument.setboost.md)(float
`$documentBoostValue`): bool

public [setFieldBoost](solrinputdocument.setfieldboost.md)(string
`$fieldName`, float `$fieldBoostValue`): bool

public [sort](solrinputdocument.sort.md)(int `$sortOrderBy`, int
`$sortDirection` u003d SolrInputDocument::SORT_ASC): bool

public [toArray](solrinputdocument.toarray.md)(): array

public [\_\_destruct](solrinputdocument.destruct.md)()

}

## Зумовлені константи

## Константи класу SolrInputDocument

**`SolrInputDocument::SORT_DEFAULT`**
Сортує поля у порядку зростання.

**`SolrInputDocument::SORT_ASC`**
Сортує поля у порядку зростання.

**`SolrInputDocument::SORT_DESC`**
Сортує поля у порядку зменшення.

**`SolrInputDocument::SORT_FIELD_NAME`**
Сортує поля на ім'я

**`SolrInputDocument::SORT_FIELD_VALUE_COUNT`**
Сортує поля за кількістю значень.

**`SolrInputDocument::SORT_FIELD_BOOST_VALUE`**
Сортує поля за значенням підвищення.

## Зміст

- [SolrInputDocument::addChildDocument](solrinputdocument.addchilddocument.md)
— Додає дочірній документ для блокової індексації
- [SolrInputDocument::addChildDocuments](solrinputdocument.addchilddocuments.md)
— Додає масив дочірніх документів
- [SolrInputDocument::addField](solrinputdocument.addfield.md) -
Додає поле до документа
- [SolrInputDocument::clear](solrinputdocument.clear.md) -
Скидає вхідний документ
- [SolrInputDocument::\_\_clone](solrinputdocument.clone.md) -
Створює копію SolrDocument
- [SolrInputDocument::\_\_construct](solrinputdocument.construct.md)
- Конструктор
- [SolrInputDocument::deleteField](solrinputdocument.deletefield.md)
— Видаляє поле з документа
- [SolrInputDocument::\_\_destruct](solrinputdocument.destruct.md) -
Деструктор
- [SolrInputDocument::fieldExists](solrinputdocument.fieldexists.md)
— Перевіряє, чи є поле
- [SolrInputDocument::getBoost](solrinputdocument.getboost.md) -
Отримує поточне значення підвищення документа
- [SolrInputDocument::getChildDocuments](solrinputdocument.getchilddocuments.md)
- Повертає масив дочірніх документів (SolrInputDocument)
- [SolrInputDocument::getChildDocumentsCount](solrinputdocument.getchilddocumentscount.md)
— Повертає кількість дочірніх документів
- [SolrInputDocument::getField](solrinputdocument.getfield.md) -
Отримує поле на ім'я
- [SolrInputDocument::getFieldBoost](solrinputdocument.getfieldboost.md)
— Отримує значення підвищення для певного поля
- [SolrInputDocument::getFieldCount](solrinputdocument.getfieldcount.md)
— Повертає кількість полів у документі
- [SolrInputDocument::getFieldNames](solrinputdocument.getfieldnames.md)
— Повертає масив, який містить усі поля у документі
- [SolrInputDocument::hasChildDocuments](solrinputdocument.haschilddocuments.md)
— Повертає true, якщо документ має дочірні документи
- [SolrInputDocument::merge](solrinputdocument.merge.md) -
Об'єднує один вхідний документ в інший
- [SolrInputDocument::reset](solrinputdocument.reset.md) - Псевдонім
SolrInputDocument::clear
- [SolrInputDocument::setBoost](solrinputdocument.setboost.md) -
Встановлює значення підвищення документа
- [SolrInputDocument::setFieldBoost](solrinputdocument.setfieldboost.md)
— Встановлює значення підвищення індексу часу для поля
- [SolrInputDocument::sort](solrinputdocument.sort.md) — Сортує
поля у документі
- [SolrInputDocument::toArray](solrinputdocument.toarray.md) -
Повертає подання масиву вхідного документа
