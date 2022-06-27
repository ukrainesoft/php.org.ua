- [«SolrDocumentField::\_\_destruct](solrdocumentfield.destruct.md)
- [SolrObject::\_\_construct »](solrobject.construct.md)

- [PHP Manual](index.md)
- [Solr](book.solr.md)
- Клас SolrObject

# Клас SolrObject

(PECL solr \> u003d 0.9.2)

## Вступ

Об'єкт, властивості якого можна отримати за допомогою синтаксису
масиву. Усі його властивості доступні лише читання.

## Огляд класів

final class **SolrObject** implements
[ArrayAccess](class.arrayaccess.md) {

/\* Методи \*/

public [\_\_construct](solrobject.construct.md)()

public [getPropertyNames](solrobject.getpropertynames.md)(): array

public [offsetExists](solrobject.offsetexists.md)(string
`$property_name`): bool

public [offsetGet](solrobject.offsetget.md)(string `$property_name`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public [offsetSet](solrobject.offsetset.md)(string `$property_name`,
string `$property_value`): void

public [offsetUnset](solrobject.offsetunset.md)(string
`$property_name`): void

public [\_\_destruct](solrobject.destruct.md)()

}

## Зміст

- [SolrObject::\_\_construct](solrobject.construct.md) - Створює
об'єкт Solr
- [SolrObject::\_\_destruct](solrobject.destruct.md) - Деструктор
- [SolrObject::getPropertyNames](solrobject.getpropertynames.md) -
Повертає масив усіх імен властивостей
- [SolrObject::offsetExists](solrobject.offsetexists.md) -
Перевіряє, чи існує властивість
- [SolrObject::offsetGet](solrobject.offsetget.md) — Використовується
для отримання властивості
- [SolrObject::offsetSet](solrobject.offsetset.md) — Встановлює
значення властивості
- [SolrObject::offsetUnset](solrobject.offsetunset.md) — Скидає
значення властивості
