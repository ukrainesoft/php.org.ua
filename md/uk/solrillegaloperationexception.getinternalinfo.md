- [«
SolrIllegalOperationException](class.solrillegaloperationexception.md)
- [SolrMissingMandatoryParameterException
»](class.solrmissingmandatoryparameterexception.md)

- [PHP Manual](index.md)
- [SolrIllegalOperationException](class.solrillegaloperationexception.md)
- Повертає внутрішню інформацію про те, де було викинуто
виняток

# SolrIllegalOperationException::getInternalInfo

(PECL solr \> u003d 0.9.2)

SolrIllegalOperationException::getInternalInfo — Повертає внутрішню
інформацію про те, де було викинуто виняток

### Опис

public **SolrIllegalOperationException::getInternalInfo**(): array

Повертає внутрішню інформацію про те, де викинули виняток.

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає масив, що містить внутрішню інформацію про те, де була
викликана помилка. Використовується лише для налагодження розробниками модулів.
