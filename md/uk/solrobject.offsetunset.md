- [«SolrObject::offsetSet](solrobject.offsetset.md)
- [SolrClient »](class.solrclient.md)

- [PHP Manual](index.md)
- [SolrObject](class.solrobject.md)
- скидає значення властивості

# SolrObject::offsetUnset

(PECL solr \> u003d 0.9.2)

SolrObject::offsetUnset - Скидає значення властивості

### Опис

public **SolrObject::offsetUnset**(string `$property_name`): void

Скидає значення якості. Використовується, коли об'єкт обробляється
як масив. Цей об'єкт доступний лише для читання. Цього ніколи не
слід робити.

### Список параметрів

`property_name`
Ім'я якості.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **SolrObject::offsetUnset()****

` <?php/* ... */?> `

Результатом виконання цього прикладу буде щось подібне:

...
