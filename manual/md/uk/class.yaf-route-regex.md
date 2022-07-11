- [« Yaf_Route_Map::route](yaf-route-map.route.md)
- [Yaf_Route_Regex::assemble »](yaf-route-regex.assemble.md)

- [PHP Manual](index.md)
- [Yaf](book.yaf.md)
- Клас Yaf_Route_Regex

# Клас Yaf_Route_Regex

(Yaf \>u003d1.0.0)

## Вступ

**Yaf_Route_Regex** - найгнуткіший маршрутизатор з усіх вбудованих
маршрутизатори Yaf.

## Огляд класів

class **Yaf_Route_Regex** extends
[Yaf_Route_Interface](class.yaf-route-interface.md) implements
[Yaf_Route_Interface](class.yaf-route-interface.md) {

/\* Властивості \*/

protected `$_route`;

protected `$_default`;

protected `$_maps`;

protected `$_verify`;

/\* Методи \*/

public [\_\_construct](yaf-route-regex.construct.md)(
string `$match`,
array `$route`,
array `$map` u003d ?,
array `$verify` u003d ?,
string `$reverse` u003d ?
)

public [assemble](yaf-route-regex.assemble.md)(array `$info`, array
`$query` u003d ?): ?string

public
[route](yaf-route-regex.route.md)([Yaf_Request_Abstract](class.yaf-request-abstract.md)
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

`_maps`

`_verify`

## Зміст

- [Yaf_Route_Regex::assemble](yaf-route-regex.assemble.md) -
Сформувати URL-адресу
- [Yaf_Route_Regex::\_\_construct](yaf-route-regex.construct.md) -
Конструктор класу Yaf_Route_Regex
- [Yaf_Route_Regex::route](yaf-route-regex.route.md) — Мета маршруту
