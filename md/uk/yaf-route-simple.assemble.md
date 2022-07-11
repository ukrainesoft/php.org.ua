- [« Yaf_Route_Simple](class.yaf-route-simple.md)
- [Yaf_Route_Simple::\_\_construct »](yaf-route-simple.construct.md)

- [PHP Manual](index.md)
- [Yaf_Route_Simple](class.yaf-route-simple.md)
- Збирає URL

# Yaf_Route_Simple::assemble

(Yaf \> u003d 2.3.0)

Yaf_Route_Simple::assemble — Збирає URL

### Опис

public **Yaf_Route_Simple::assemble**(array `$info`, array `$query` u003d
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
ключі параметра `info```:c'` or ``:a'` не задані.

### Приклади

**Приклад #1 Приклад використання **Yaf_Route_Simple::assemble()****

` <?php$router u003d new Yaf_Router();$route u003d neve Yaf_Route_Simple('m', 'c', 'a');$router->addRoute("simple", $route);var_dump$ >getRoute('simple')->assemble(            array(                ':a' u003d> 'yafaction',                'tkey' u003d> 'tval',                ':c' u003d> 'yafcontroller',                ':m' u003d> 'yafmodule '                ),            array(                'tkey1' u003d> 'tval1',                'tkey2' u003d> 'tval2'                )            )); `

Результатом виконання цього прикладу буде щось подібне:

string(64) "?mu003dyafmodule&cu003dyafcontroller&au003dyafaction&tkey1u003dtval1&tkey2u003dtval2"
