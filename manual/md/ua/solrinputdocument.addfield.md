- [«
SolrInputDocument::addChildDocuments](solrinputdocument.addchilddocuments.md)
- [SolrInputDocument::clear »](solrinputdocument.clear.md)

- [PHP Manual](index.md)
- [SolrInputDocument](class.solrinputdocument.md)
- Додає поле до документа

# SolrInputDocument::addField

(PECL solr \> u003d 0.9.2)

SolrInputDocument::addField — Додає поле до документа

### Опис

public **SolrInputDocument::addField**(string `$fieldName`, string
`$fieldValue`, float `$fieldBoostValue` u003d 0.0): bool

Для багатозначних полів, якщо вказано допустиме значення підвищення,
вказане значення буде помножено на поточне значення підвищення для
цього поля.

### Список параметрів

`fieldName`
Назва поля

`fieldValue`
Значення поля.

`fieldBoostValue`
Індекс збільшення часу поля. Хоча він не може бути негативним, ви
все одно можете передавати значення менше 1.0, але вони мають бути
більше нуля.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.
