- [«SolrDocument::key](solrdocument.key.md)
- [SolrDocument::next »](solrdocument.next.md)

- [PHP Manual](index.md)
- [SolrDocument](class.solrdocument.md)
- Зливає джерело у поточний SolrDocument

# SolrDocument::merge

(PECL solr \> u003d 0.9.2)

SolrDocument::merge — Зливає джерело у поточний SolrDocument

### Опис

public **SolrDocument::merge**([SolrDocument](class.solrdocument.md)
`$sourceDoc`, bool `$overwrite` u003d **`true`**): bool

Зливає джерело у поточний SolrDocument.

### Список параметрів

`sourceDoc`
Початковий документ.

`overwrite`
Якщо вказано **`true`**, тоді поля з тим самим ім'ям у цільовому документі
будуть перезаписані.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.
