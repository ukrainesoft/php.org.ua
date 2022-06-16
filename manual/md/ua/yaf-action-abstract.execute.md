- [« Yaf_Action_Abstract](class.yaf-action-abstract.md)
- [Yaf_Action_Abstract::getController
»](yaf-action-abstract.getcontroller.md)

- [PHP Manual](index.md)
- [Yaf_Action_Abstract](class.yaf-action-abstract.md)
- Точка входу для Action-класів

# Yaf_Action_Abstract::execute

(Yaf \>u003d1.0.0)

Yaf_Action_Abstract::execute — Точка входу для Action-класів

### Опис

abstract
public**Yaf_Action_Abstract::execute**([mixed](language.types.declarations.md#language.types.declarations.mixed)
`...$args`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

Користувач повинен визначати цей метод для Action-класів
є точкою входу до Action. **Yaf_Action_Abstract::execute()** може
приймати аргументи.

> **Примітка**:
>
> Значення, яке виймається із запиту, не є безпечним. Ви повинні
> самостійно перевіряти його перед використанням.

### Список параметрів

`args`

### Значення, що повертаються

### Приклади

**Приклад #1 Приклад використання **Yaf_Action_Abstract::execute()****

`<?php/** * Приклад контролера */class ProductController extends Yaf_Controller_Abstract {       protected $actions u003d array(       ""  "

**Приклад #2 Приклад використання **Yaf_Action_Abstract::execute()****

`<?php/** * ListAction */class ListAction extends Yaf_Action_Abstract| assert($id  u003du003du003d$this->getRequest()->getParam("id")); }}?> `

Результатом виконання цього прикладу буде щось подібне:

/**
* Now assuming we are using the Yaf_Route_Static route
* for request: http://yourdomain/product/list/name/yaf/id/22
* will result:
*/
bool(true)
bool(true)

### Дивіться також

-
