- [«SolrInputDocument::toArray](solrinputdocument.toarray.md)
- [SolrDocument::addField »](solrdocument.addfield.md)

- [PHP Manual](index.md)
- [Solr](book.solr.md)
- Клас SolrDocument

# Клас SolrDocument

(PECL solr \> u003d 0.9.2)

## Вступ

Подає документ Solr, отриманий з відповіді запит.

## Огляд класів

final class **SolrDocument** implements
[ArrayAccess](class.arrayaccess.md), [Iterator](class.iterator.md),
[Serializable](class.serializable.md) {

/\* Константи \*/

const int `SORT_DEFAULT` u003d 1;

const int `SORT_ASC` u003d 1;

const int `SORT_DESC` u003d 2;

const int `SORT_FIELD_NAME` u003d 1;

const int `SORT_FIELD_VALUE_COUNT` u003d 2;

const int `SORT_FIELD_BOOST_VALUE` u003d 4;

/\* Методи \*/

public [\_\_construct](solrdocument.construct.md)()

public [addField](solrdocument.addfield.md)(string `$fieldName`,
string `$fieldValue`): bool

public [clear](solrdocument.clear.md)(): bool

public [\_\_clone](solrdocument.clone.md)(): void

public [current](solrdocument.current.md)():
[SolrDocumentField](class.solrdocumentfield.md)

public [deleteField](solrdocument.deletefield.md)(string
`$fieldName`): bool

public [fieldExists](solrdocument.fieldexists.md)(string
`$fieldName`): bool

public [\_\_get](solrdocument.get.md)(string `$fieldName`):
[SolrDocumentField](class.solrdocumentfield.md)

public [getChildDocuments](solrdocument.getchilddocuments.md)(): array

public
[getChildDocumentsCount](solrdocument.getchilddocumentscount.md)():
int

public [getField](solrdocument.getfield.md)(string `$fieldName`):
[SolrDocumentField](class.solrdocumentfield.md)

public [getFieldCount](solrdocument.getfieldcount.md)(): int

public [getFieldNames](solrdocument.getfieldnames.md)(): array

public [getInputDocument](solrdocument.getinputdocument.md)():
[SolrInputDocument](class.solrinputdocument.md)

public [hasChildDocuments](solrdocument.haschilddocuments.md)(): bool

public [\_\_isset](solrdocument.isset.md)(string `$fieldName`): bool

public [key](solrdocument.key.md)(): string

public
[merge](solrdocument.merge.md)([SolrDocument](class.solrdocument.md)
`$sourceDoc`, bool `$overwrite` u003d **`true`**): bool

public [next](solrdocument.next.md)(): void

public [offsetExists](solrdocument.offsetexists.md)(string
`$fieldName`): bool

public [offsetGet](solrdocument.offsetget.md)(string `$fieldName`):
[SolrDocumentField](class.solrdocumentfield.md)

public [offsetSet](solrdocument.offsetset.md)(string `$fieldName`,
string `$fieldValue`): void

public [offsetUnset](solrdocument.offsetunset.md)(string
`$fieldName`): void

public [reset](solrdocument.reset.md)(): bool

public [rewind](solrdocument.rewind.md)(): void

public [serialize](solrdocument.serialize.md)(): string

public [\_\_set](solrdocument.set.md)(string `$fieldName`, string
`$fieldValue`): bool

public [sort](solrdocument.sort.md)(int `$sortOrderBy`, int
`$sortDirection` u003d SolrDocument::SORT_ASC): bool

public [toArray](solrdocument.toarray.md)(): array

public [unserialize](solrdocument.unserialize.md)(string
`$serialized`): void

public [\_\_unset](solrdocument.unset.md)(string `$fieldName`): bool

public [valid](solrdocument.valid.md)(): bool

public [\_\_destruct](solrdocument.destruct.md)()

}

## Зумовлені константи

**`SolrDocument::SORT_DEFAULT`**
Стандартний режим для сортування полів у документі.

**`SolrDocument::SORT_ASC`**
Сортує поля у порядку зростання

**`SolrDocument::SORT_DESC`**
Сортує поля в порядку зменшення

**`SolrDocument::SORT_FIELD_NAME`**
Сортує поля на ім'я поля.

**`SolrDocument::SORT_FIELD_VALUE_COUNT`**
Сортує поля за кількістю значень у кожному полі.

**`SolrDocument::SORT_FIELD_BOOST_VALUE`**
Сортує поля за значенням посилення.

## Зміст

- [SolrDocument::addField](solrdocument.addfield.md) — Додає
поле в документ
- [SolrDocument::clear](solrdocument.clear.md) — Видаляє всі поля в
документі
- [SolrDocument::\_\_clone](solrdocument.clone.md) — Створює копію
об'єкта SolrDocument
- [SolrDocument::\_\_construct](solrdocument.construct.md) -
Конструктор
- [SolrDocument::current](solrdocument.current.md) - Отримує
поточне поле
- [SolrDocument::deleteField](solrdocument.deletefield.md) — Видаляє
поле з документа
- [SolrDocument::\_\_destruct](solrdocument.destruct.md) -
Деструктор
- [SolrDocument::fieldExists](solrdocument.fieldexists.md) -
Перевіряє, чи існує поле у документі
- [SolrDocument::\_\_get](solrdocument.get.md) - Доступ до поля як
властивості
- [SolrDocument::getChildDocuments](solrdocument.getchilddocuments.md)
- Повертає масив дочірніх документів (SolrDocument)
- [SolrDocument::getChildDocumentsCount](solrdocument.getchilddocumentscount.md)
— Повертає кількість дочірніх документів
- [SolrDocument::getField](solrdocument.getfield.md) — Отримує поле
по імені
- [SolrDocument::getFieldCount](solrdocument.getfieldcount.md) -
Повертає кількість полів у цьому документі
- [SolrDocument::getFieldNames](solrdocument.getfieldnames.md) -
Повертає масив імен полів у документі
- [SolrDocument::getInputDocument](solrdocument.getinputdocument.md)
— Повертає SolrInputDocument еквівалент об'єкту
- [SolrDocument::hasChildDocuments](solrdocument.haschilddocuments.md)
— Перевіряє, чи має документ дочірні документи
- [SolrDocument::\_\_isset](solrdocument.isset.md) — Перевіряє,
чи існує поле
- [SolrDocument::key](solrdocument.key.md) — Отримує поточний ключ
- [SolrDocument::merge](solrdocument.merge.md) — Зливає джерело в
поточний SolrDocument
- [SolrDocument::next](solrdocument.next.md) — Переміщує внутрішній
вказівник на наступне поле
- [SolrDocument::offsetExists](solrdocument.offsetexists.md) -
Перевіряє, чи існує конкретне поле
- [SolrDocument::offsetGet](solrdocument.offsetget.md) — Отримує
поле
- [SolrDocument::offsetSet](solrdocument.offsetset.md) — Додає
поле в документ
- [SolrDocument::offsetUnset](solrdocument.offsetunset.md) — Видаляє
поле
- [SolrDocument::reset](solrdocument.reset.md) - Псевдонім
SolrDocument::clear()
- [SolrDocument::rewind](solrdocument.rewind.md) — Скидає
внутрішній покажчик на початок
- [SolrDocument::serialize](solrdocument.serialize.md) -
Використовується для серіалізації користувача
- [SolrDocument::\_\_set](solrdocument.set.md) - Додає ще одне
поле в документ
- [SolrDocument::sort](solrdocument.sort.md) — Сортує поля в
документі
- [SolrDocument::toArray](solrdocument.toarray.md) - Повертає
подання масиву документа
- [SolrDocument::unserialize](solrdocument.unserialize.md) -
Серіалізація об'єктів SolrDocument
- [SolrDocument::\_\_unset](solrdocument.unset.md) — Видаляє поле з
документа
- [SolrDocument::valid](solrdocument.valid.md) — Перевіряє, чи є
чи поточна позиція внутрішньо коректною
