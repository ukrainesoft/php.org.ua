- [« SolrDocument::valid](solrdocument.valid.md)
- [SolrDocumentField::\_\_construct
»](solrdocumentfield.construct.md)

- [PHP Manual](index.md)
- [Solr](book.solr.md)
- Клас SolrDocumentField

# Клас SolrDocumentField

(PECL solr \> u003d 0.9.2)

## Вступ

Представляє поле у документі Solr. Всі його властивості доступні лише для
читання.

## Огляд класів

final class **SolrDocumentField** {

/\* Властивості \*/

public readonly string `$name`;

public readonly float `$boost`;

public readonly array `$values`;

/\* Методи \*/

public [\_\_construct](solrdocumentfield.construct.md)()

public [\_\_destruct](solrdocumentfield.destruct.md)()

}

## Властивості

`name`
Назва поля.

`boost`
Значення підвищення для поля

`values`
Масив значень для цього поля

## Зміст

- [SolrDocumentField::\_\_construct](solrdocumentfield.construct.md)
- Конструктор
- [SolrDocumentField::\_\_destruct](solrdocumentfield.destruct.md) -
Деструктор
