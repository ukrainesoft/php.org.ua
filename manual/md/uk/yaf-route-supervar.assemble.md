- [« Yaf_Route_Supervar](class.yaf-route-supervar.md)
- [Yaf_Route_Supervar::\_\_construct
»](yaf-route-supervar.construct.md)

- [PHP Manual](index.md)
- [Yaf_Route_Supervar](class.yaf-route-supervar.md)
- Збирає URL

# Yaf_Route_Supervar::assemble

(Yaf \> u003d 2.3.0)

Yaf_Route_Supervar::assemble — Збирає URL

### Опис

public **Yaf_Route_Supervar::assemble**(array `$info`, array `$query` u003d
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

**Приклад #1 Приклад використання **Yaf_Route_Supervar::assemble()****

` <?php$routeru003du003d new Yaf_Router();$route u003d new Yaf_Route_Supervar('r');$router->addRoute("supervar", $route);var_dump($router->getRoute(' >assemble(        array(              ':a' u003d> 'yafaction',              'tkey' u003d> 'tval',              ':c' u003d> 'yafcontroller',              ':m' u003d> 'yafmodule'        ),        array(              'tkey1' u003d> 'tval1',              'tkey2' u003d> 'tval2'        )));try {var_dump($router->getRoute('supervar')->assemble(        array(              ':a' u003d> 'yafaction',              'tkey ' u003d> 'tval',              ':m' u003d> 'yafmodule'        ),        array(              'tkey1' u003d> 'tval1',              'tkey2' u003d> 'tval2',              1 u003d> array(),        )));} catch (Exception $e) {    var_dump($e->getMessage());} `

Результатом виконання цього прикладу буде щось подібне:

string(%d) "?ru003d/yafmodule/yafcontroller/yafaction&tkey1u003dtval1&tkey2u003dtval2"
string(%d) "Ви потребуєте відповідь на контролері ':c'"
