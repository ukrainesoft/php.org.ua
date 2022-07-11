- [« Yaf_Route_Static](class.yaf-route-static.md)
- [Yaf_Route_Static::match »](yaf-route-static.match.md)

- [PHP Manual](index.md)
- [Yaf_Route_Static](class.yaf-route-static.md)
- Збирає URL

# Yaf_Route_Static::assemble

(Yaf \> u003d 2.3.0)

Yaf_Route_Static::assemble — Збирає URL

### Опис

public **Yaf_Route_Static::assemble**(array `$info`, array `$query` u003d
?): string

Збирає URL-адресу.

### Список параметрів

`info`

`query`

### Значення, що повертаються

Повертає рядок (string).

### Помилки

Викидає
[Yaf_Exception_TypeError](class.yaf-exception-typeerror.md), якщо
ключі параметра `info```:c'` and ``:a'` не задані.

### Приклади

**Приклад #1 Приклад використання **Yaf_Route_Static::assemble()****

` <?php$routeru003du003d new Yaf_Router();$route u003d new Yaf_Route_Static();$router->addRoute("static", $route);var_dump($router->getRoute('static')-> array(                ':a' u003d> 'yafaction',                'tkey' u003d> 'tval',                ':c' u003d> 'yafcontroller',                ':m' u003d> 'yafmodule'            ),        ));var_dump($router- >getRoute('static')->assemble(            array(                ':a' u003d> 'yafaction',                'tkey' u003d> 'tval',                ':c' u003d> 'yafcontroller',                ':m' u003d> 'yafmodule '            ),            array(                'tkey1' u003d> 'tval1',                'tkey2' u003d> 'tval2'            )        )); `

Результатом виконання цього прикладу буде щось подібне:

string(%d) "/yafmodule/yafcontroller/yafaction"
string(%d) "/yafmodule/yafcontroller/yafaction?tkey1u003dtval1&tkey2u003dtval2"
