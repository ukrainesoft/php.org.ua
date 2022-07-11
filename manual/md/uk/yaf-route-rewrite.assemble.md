- [« Yaf_Route_Rewrite](class.yaf-route-rewrite.md)
- [Yaf_Route_Rewrite::\_\_construct
»](yaf-route-rewrite.construct.md)

- [PHP Manual](index.md)
- [Yaf_Route_Rewrite](class.yaf-route-rewrite.md)
- Збирає URL

# Yaf_Route_Rewrite::assemble

(Yaf \> u003d 2.3.0)

Yaf_Route_Rewrite::assemble — Збирає URL

### Опис

public **Yaf_Route_Rewrite::assemble**(array `$info`, array `$query` u003d
?): string

Збирає URL-адресу.

### Список параметрів

`info`

`query`

### Значення, що повертаються

Повертає рядок (string).

### Приклади

**Приклад #1 Приклад використання **Yaf_Route_Rewrite::assemble()****

` router u003d new Yaf_Router();$route  u003d new Yaf_Route_Rewrite(                "/product/:name/:id/*",                array(                        'controller' u003d> "product",                ),                array());$router->addRoute ("rewrite", $route);var_dump($router->getRoute('rewrite')->assemble(                        array(                                ':name' u003d> 'foo',                                ':id' u003d> 'bar',                                ':tmpkey1 ' u003d> 'tmpval1'                        ),                        array(                                'tkey1' u003d> 'tval1',                                'tkey2' u003d> 'tval2'                             )                        ));`

Результатом виконання цього прикладу буде щось подібне:

string(57) "/product/foo/bar/tmpkey1/tmpval1/?tkey1u003dtval1&tkey2u003dtval2"
