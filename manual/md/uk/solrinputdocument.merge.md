- [«
SolrInputDocument::hasChildDocuments](solrinputdocument.haschilddocuments.md)
- [SolrInputDocument::reset »](solrinputdocument.reset.md)

- [PHP Manual](index.md)
- [SolrInputDocument](class.solrinputdocument.md)
- Об'єднує один вхідний документ до іншого

# SolrInputDocument::merge

(PECL solr \> u003d 0.9.2)

SolrInputDocument::merge — Об'єднує один вхідний документ до іншого

### Опис

public
**SolrInputDocument::merge**([SolrInputDocument](class.solrinputdocument.md)
`$sourceDoc`, bool `$overwrite` u003d **`true`**): bool

Об'єднує один вхідний документ до іншого.

### Список параметрів

`sourceDoc`
Початковий документ.

`overwrite`
Якщо вказано **`true`**, відповідні поля в цільовому документі будуть
перезаписані.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки. У майбутньому це буде змінено, щоб
повертати кількість полів у новому документі.
