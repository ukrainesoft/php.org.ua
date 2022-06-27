- [« Yaf_Route_Rewrite::route](yaf-route-rewrite.route.md)
- [Yaf_Router::addConfig »](yaf-router.addconfig.md)

- [PHP Manual](index.md)
- [Yaf](book.yaf.md)
- Клас Yaf_Router

# Клас Yaf_Router

(Yaf \>u003d1.0.0)

## Вступ

**Yaf_Router** – це стандартний каркасний маршрутизатор.
Маршрутизація - це процес отримання кінцевої точки URI (та частина URI,
яка йде після базового URI: дивіться
[Yaf_Request_Abstract::setBaseUri()](yaf-request-abstract.setbaseuri.md))
і розкладання її на параметри, щоб визначити, який модуль, контролер
та дію повинні отримати запит. Ці значення модуля, контролера,
дії та інші параметри упаковані в об'єкт
[Yaf_Request_Abstract](class.yaf-request-abstract.md), який потім
обробляється [Yaf_Dispatcher](class.yaf-dispatcher.md).
Маршрутизація відбувається лише один раз: при початковому отриманні
запиту та до відправлення першого контролера. **Yaf_Router** призначений
для забезпечення функціональності, подібної до mod_rewrite, з використанням
чистих структур PHP. Він заснований на маршрутизації Ruby on Rails і не
вимагає будь-яких попередніх знань про перезапис URL веб-сервера.
Він призначений для роботи з одним правилом Apache mod_rewrite (одним
з):

**Приклад #1 Правило перезапису для Apache**

```confcode
RewriteEngine on
RewriteRule !\.(js|ico|gif|jpg|png|css|html)$ index.php
````

або (переважно):

**Приклад #2 Правило перезапису для Apache**

```confcode
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} -s [OR]
RewriteCond %{REQUEST_FILENAME} -l [OR]
RewriteCond %{REQUEST_FILENAME} -d
RewriteRule ^.*$ - [NC,L]
RewriteRule ^.*$ index.php [NC,L]
````

При використанні Lighttpd використовуйте таке правило перезапису:

**Приклад #3 Правило перезапису для Lighttpd**

```confcode
url.rewrite-once u003d (
".*\?(.*)$" u003d> "/index.php?$1",
".*\.(js|ico|gif|jpg|png|css|html)$" u003d> "$0",
"" u003d> "/index.php"
)
````

При використанні Nginx використовуйте таке правило перезапису:

**Приклад #4 Правило перезапису для Nginx**

```confcode
server {
listen****;
server_name yourdomain.com;
root document_root;
index index.php index.md;

if (!-e $request_filename) {
rewrite ^/(.*) /index.php/$1 last;
}
}
````

## Маршрут за замовчуванням

**Yaf_Router** поставляється з попередньо налаштованим маршрутом за
замовчуванням [Yaf_Route_Static](class.yaf-route-static.md), який буде
відповідати URI у формі контролера/дії. Крім того, ім'я модуля
може бути зазначено як перший елемент шляху, що дозволяє
використовувати URI форми модуля/контролера/дії. Нарешті, він також
буде відповідати будь-яким додатковим параметрам, що додаються до URI
за промовчанням - controller /action/var1/value1/var2/value2.

> **Примітка**:
>
> Ім'я модуля має бути визначено у конфігурації з урахуванням
> application.moduleu003d"Index,Foo,Bar", у цьому випадку тільки index, foo та
> bar можна як ім'я модуля. Якщо не налаштовано, є
> лише один модуль під назвою "Index".

Деякі приклади відповідності таких маршрутів:

**Приклад #5 Приклад використання
[Yaf_Route_Static](class.yaf-route-static.md)(маршрут за замовчуванням)**

```confcode
// Припускаючи наступне налаштування:
$conf u003d array(
"application" u003d> array(
"modules" u003d> "Index,Blog",
),
);

Тільки контролер:
http://example/news
controller u003du003d news
Тільки дія (якщо визначено yaf.action_preferu003d1 у php.ini)
action u003du003d news

Невірний модуль відображається на ім'я контролера:
http://example/foo
controller u003du003d foo

Модуль + контролер:
http://example/blog/archive
module u003du003d blog
controller u003du003d archive

Модуль + контролер + дія:
http://example/blog/archive/list
module u003du003d blog
controller u003du003d archive
action u003du003d list

Модуль + контролер + дія + параметри:
http://example/blog/archive/list/sort/alpha/date/desc
module u003du003d blog
controller u003du003d archive
action u003du003d list
sort u003du003d alpha
date u003du003d desc
````

## Огляд класів

class **Yaf_Router** {

/\* Властивості \*/

protected `$_routes`;

protected `$_current`;

/\* Методи \*/

public [\_\_construct](yaf-router.construct.md)()

public
[addConfig](yaf-router.addconfig.md)([Yaf_Config_Abstract](class.yaf-config-abstract.md)
`$config`): bool

public [addRoute](yaf-router.addroute.md)(string `$name`,
Yaf_Route_Abstract `$route`): bool

public [getCurrentRoute](yaf-router.getcurrentroute.md)(): string

public [getRoute](yaf-router.getroute.md)(string `$name`):
[Yaf_Route_Interface](class.yaf-route-interface.md)

public [getRoutes](yaf-router.getroutes.md)():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public
[route](yaf-router.route.md)([Yaf_Request_Abstract](class.yaf-request-abstract.md)
`$request`): bool

}

## Властивості

`_routes`
стек зареєстрованих маршрутів

`_current`
після фази маршрутизації вказується назва того, який маршрут
використовується для маршрутизації поточного запиту. Ви можете отримати його
ім'я за допомогою
[Yaf_Router::getCurrentRoute()](yaf-router.getcurrentroute.md).

## Зміст

- [Yaf_Router::addConfig](yaf-router.addconfig.md) — Додає
налаштовані маршрути на маршрутизатор
- [Yaf_Router::addRoute](yaf-router.addroute.md) — Додає новий
маршрут у маршрутизатор
- [Yaf_Router::\_\_construct](yaf-router.construct.md) - Конструктор
класу Yaf_Router
- [Yaf_Router::getCurrentRoute](yaf-router.getcurrentroute.md)
Отримує ім'я діючого маршруту
- [Yaf_Router::getRoute](yaf-router.getroute.md) — Отримує маршрут
по імені
- [Yaf_Router::getRoutes](yaf-router.getroutes.md) — Отримує
зареєстровані маршрути
- [Yaf_Router::route](yaf-router.route.md) — Призначення route
