- [« Функції Solr](ref.solr.md)
- [Приклади »](solr.examples.md)

- [PHP Manual](index.md)
- [Функції Solr](ref.solr.md)
- Повертає поточну версію Apache Solr

#solr_get_version

(PECL solr \> u003d 0.9.1)

solr_get_version — Повертає поточну версію модуля Apache Solr

### Опис

**solr_get_version**(): string

Функція повертає поточну версію модуля у вигляді рядка.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає рядок у разі успішного виконання та **`false`** у разі
виникнення помилки.

### Помилки

Функція не викидає помилок чи винятків.

### Приклади

**Приклад #1 Приклад використання **solr_get_version()****

` <?php$solr_version u003d solr_get_version();print $solr_version;?> `

Результатом виконання цього прикладу буде щось подібне:

0.9.6

### Дивіться також

- [SolrUtils::getSolrVersion()](solrutils.getsolrversion.md) -
Повертає поточну версію модуля Solr
