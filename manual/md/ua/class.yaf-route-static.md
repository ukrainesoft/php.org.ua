- [« Yaf_Route_Simple::route](yaf-route-simple.route.md)
- [Yaf_Route_Static::assemble »](yaf-route-static.assemble.md)

- [PHP Manual](index.md)
- [Yaf](book.yaf.md)
- Клас Yaf_Route_Static

# Клас Yaf_Route_Static

(Yaf \>u003d1.0.0)

## Вступ

За замовчуванням [Yaf_Router](class.yaf-router.md) містить лише
**Yaf_Route_Static**.

І **Yaf_Route_Static** спроектований таким чином, щоб покривати 80%
всіх можливих потреб у маршрутизації.

Будь ласка \*ЗВЕРНІТЬ УВАГУ\*, що не потрібно інстанціювати
**Yaf_Route_Static**, також не потрібно додавати його до стек
[Yaf_Router](class.yaf-router.md), тому що він є в стеку
маршрутизації [Yaf_Router](class.yaf-router.md) за замовчуванням і завжди
буде викликатись останнім.

## Огляд класів

class **Yaf_Route_Static** implements
[Yaf_Router](class.yaf-router.md) {

/\* Методи \*/

public [assemble](yaf-route-static.assemble.md)(array `$info`, array
`$query` u003d ?): string

public [match](yaf-route-static.match.md)(string `$uri`): void

public
[route](yaf-route-static.route.md)([Yaf_Request_Abstract](class.yaf-request-abstract.md)
`$request`): bool

}

## Зміст

- [Yaf_Route_Static::assemble](yaf-route-static.assemble.md) -
Збирає URL
- [Yaf_Route_Static::match](yaf-route-static.match.md) — Призначення
match
- [Yaf_Route_Static::route](yaf-route-static.route.md) - Надсилає
запит
