- [« Yaf_Router::route](yaf-router.route.md)
- [Yaf_Route_Simple::assemble »](yaf-route-simple.assemble.md)

- [PHP Manual](index.md)
- [Yaf](book.yaf.md)
- Клас Yaf_Route_Simple

# Клас Yaf_Route_Simple

(Yaf \>u003d1.0.0)

## Вступ

**Yaf_Route_Simple** порівнюватиме рядок запиту та видаватиме
інформацію щодо відповідного маршруту.

Все, що вам потрібно зробити, це сказати **Yaf_Route_Simple**, який ключ
$\_GET є модулем, який контролером, а якою дією.

[Yaf_Route_Simple::route()](yaf-route-simple.route.md) завжди
повертає **`true`**, так що важливо помістити **Yaf_Route_Simple** у
початок стеку маршрутизації, інакше жодні інші маршрутизатори не будуть
викликані.

## Огляд класів

class **Yaf_Route_Simple** implements
[Yaf_Route_Interface](class.yaf-route-interface.md) {

/\* Властивості \*/

protected `$controller`;

protected `$module`;

protected `$action`;

/\* Методи \*/

public [\_\_construct](yaf-route-simple.construct.md)(string
`$module_name`, string `$controller_name`, string `$action_name`)

public [assemble](yaf-route-simple.assemble.md)(array `$info`, array
`$query` u003d ?): string

public
[route](yaf-route-simple.route.md)([Yaf_Request_Abstract](class.yaf-request-abstract.md)
`$request`): bool

}

## Властивості

`controller`

`module`

`action`

## Зміст

- [Yaf_Route_Simple::assemble](yaf-route-simple.assemble.md) -
Збирає URL
- [Yaf_Route_Simple::\_\_construct](yaf-route-simple.construct.md) -
Конструктор класу Yaf_Route_Simple
- [Yaf_Route_Simple::route](yaf-route-simple.route.md) - Надсилає
запит
