- [« Yaf_Route_Interface::route](yaf-route-interface.route.md)
- [Yaf_Route_Map::assemble »](yaf-route-map.assemble.md)

- [PHP Manual](index.md)
- [Yaf](book.yaf.md)
- Клас Yaf_Route_Map

# Клас Yaf_Route_Map

(Yaf \>u003d1.0.0)

## Вступ

**Yaf_Route_Map** - це вбудований маршрут, він просто перетворює
кінцеву точку URI (ту частину URI, яка йде після базового URI:
дивіться
[Yaf_Request_Abstract::setBaseUri()](yaf-request-abstract.setbaseuri.md))
в ім'я контролера або ім'я дії (залежить від параметра, переданого в
[Yaf_Route_Map::\_\_construct()](yaf-route-map.construct.md))
наступне правило: A u003d\> controller A. A/B/C u003d\> controller A_B\_C.
A/B/C/D/E u003d controller A_B\_C_D\_E.

If the second parameter of
[Yaf_Route_Map::\_\_construct()](yaf-route-map.construct.md) is
specified, then only the part before delimiter of URI will used to
routing, the part after it is used to routing request parameters (see
the example section of
[Yaf_Route_Map::\_\_construct()](yaf-route-map.construct.md)).

## Огляд класів

class **Yaf_Route_Map** implements
[Yaf_Route_Interface](class.yaf-route-interface.md) {

/\* Властивості \*/

protected `$_ctl_router`;

protected `$_delimiter`;

/\* Методи \*/

public [\_\_construct](yaf-route-map.construct.md)(string
`$controller_prefer` u003d **`false`**, string `$delimiter` u003d "")

public [assemble](yaf-route-map.assemble.md)(array `$info`, array
`$query` u003d ?): string

public
[route](yaf-route-map.route.md)([Yaf_Request_Abstract](class.yaf-request-abstract.md)
`$request`): bool

}

## Властивості

`_ctl_router`

`_delimiter`

## Зміст

- [Yaf_Route_Map::assemble](yaf-route-map.assemble.md) - Збирає
URL
- [Yaf_Route_Map::\_\_construct](yaf-route-map.construct.md) -
Призначення \_\_construct
- [Yaf_Route_Map::route](yaf-route-map.route.md) — Призначення route
