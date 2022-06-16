- [« Yaf_Route_Map](class.yaf-route-map.md)
- [Yaf_Route_Map::\_\_construct »](yaf-route-map.construct.md)

- [PHP Manual](index.md)
- [Yaf_Route_Map](class.yaf-route-map.md)
- Збирає URL

# Yaf_Route_Map::assemble

(Yaf \> u003d 2.3.0)

Yaf_Route_Map::assemble — Збирає URL

### Опис

public **Yaf_Route_Map::assemble**(array `$info`, array `$query` u003d ?):
string

Збирає URL-адресу.

### Список параметрів

`info`

`query`

### Значення, що повертаються

Повертає рядок (string) у разі успішного виконання або **`null`**
у разі виникнення помилки.

### Помилки

Може викинути
[Yaf_Exception_TypeError](class.yaf-exception-typeerror.md).

### Приклади

**Приклад #1 Приклад використання **Yaf_Route_Map::assemble()****

` <?php$routeru003du003d new Yaf_Router();$route u003d new Yaf_Route_Map();$router->addRoute("map", $route);var_dump($router->getRoute('map')->assemble array(                                ':c' u003d> 'foo_bar'                        ),                        array(                                'tkey1' u003d> 'tval1',                                'tkey2' u003d> 'tval2'                        )                   ));$route u003d new Yaf_Route_Map(true, '_');$ router->addRoute("map", $route);var_dump($router->getRoute('map')->assemble(                        array(                                ':a' u003d> 'foo_bar'                        ),                        array(                                'tkey1' u003d> ' tval1',                                'tkey2' u003d> 'tval2'                        )                   )); `

Результатом виконання цього прикладу буде щось подібне:

string(%d) "/foo/bar?tkey1u003dtval1&tkey2u003dtval2"
string(%d) "/foo/bar/_/tkey1/tval1/tkey2/tval2"
