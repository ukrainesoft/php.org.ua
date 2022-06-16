- [« Yaf_Route_Regex::route](yaf-route-regex.route.md)
- [Yaf_Route_Rewrite::assemble »](yaf-route-rewrite.assemble.md)

- [PHP Manual](index.md)
- [Yaf](book.yaf.md)
- Клас Yaf_Route_Rewrite

# Клас Yaf_Route_Rewrite

(Yaf \>u003d1.0.0)

## Вступ

Приклад використання дивіться у розділі прикладів
[Yaf_Route_Rewrite::\_\_construct()](yaf-route-rewrite.construct.md)

## Огляд класів

class **Yaf_Route_Rewrite** extends
[Yaf_Route_Interface](class.yaf-route-interface.md) implements
[Yaf_Route_Interface](class.yaf-route-interface.md) {

/\* Властивості \*/

protected `$_route`;

protected `$_default`;

protected `$_verify`;

/\* Методи \*/

public [\_\_construct](yaf-route-rewrite.construct.md)(string
`$match`, array `$route`, array `$verify` u003d ?)

public [assemble](yaf-route-rewrite.assemble.md)(array `$info`, array
`$query` u003d ?): string

public
[route](yaf-route-rewrite.route.md)([Yaf_Request_Abstract](class.yaf-request-abstract.md)
`$request`): bool

/\* Наслідувані методи \*/

abstract public
[Yaf_Route_Interface::assemble](yaf-route-interface.assemble.md)(array
`$info`, array `$query` u003d ?): string

abstract public
[Yaf_Route_Interface::route](yaf-route-interface.route.md)([Yaf_Request_Abstract](class.yaf-request-abstract.md)
`$request`): bool

}

## Властивості

`_route`

`_default`

`_verify`

## Зміст

- [Yaf_Route_Rewrite::assemble](yaf-route-rewrite.assemble.md) -
Збирає URL
- [Yaf_Route_Rewrite::\_\_construct](yaf-route-rewrite.construct.md)
- Конструктор класу Yaf_Route_Rewrite
- [Yaf_Route_Rewrite::route](yaf-route-rewrite.route.md) -
Призначення route
