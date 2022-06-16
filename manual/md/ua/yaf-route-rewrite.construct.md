- [« Yaf_Route_Rewrite::assemble](yaf-route-rewrite.assemble.md)
- [Yaf_Route_Rewrite::route »](yaf-route-rewrite.route.md)

- [PHP Manual](index.md)
- [Yaf_Route_Rewrite](class.yaf-route-rewrite.md)
- Конструктор класу Yaf_Route_Rewrite

# Yaf_Route_Rewrite::\_\_construct

(Yaf \>u003d1.0.0)

Yaf_Route_Rewrite::\_\_construct - Конструктор класу Yaf_Route_Rewrite

### Опис

public **Yaf_Route_Rewrite::\_\_construct**(string `$match`, array
`$route`, array `$verify` u003d ?)

### Список параметрів

`match`
Шаблон, який буде використовуватися для порівняння запиту URI, якщо
він не збігається, [Yaf_Route_Rewrite](class.yaf-route-rewrite.md)
поверне **`false`**.

Ви можете використовувати: стиль імені для іменування співпадаючих сегментів
та використовувати \* для відповідності іншим сегментам URL.

`route`
Коли шаблон збігу відповідає запиту uri,
[Yaf_Route_Rewrite](class.yaf-route-rewrite.md) буде використовувати
це, щоб вирішити, який модуль/контролер/дія є пунктом
призначення.

Будь-який модуль/контролер/дія в цьому масиві не є
обов'язковим, якщо ви не призначите конкретного значення, воно буде
перенаправлено на значення за промовчанням.

`verify`

### Значення, що повертаються

### Приклади

**Приклад #1 Приклад використання **Yaf_Route_Rewrite()****

` <?php   /**    * Добавить маршрут перезаписи в стек маршрутов Yaf_Router    */    Yaf_Dispatcher::getInstance()->getRouter()->addRoute("name",        new Yaf_Route_rewrite(           "/product/:name/:id/* ", //запрос на совпадение с ведущим "/product"           array(               'controller' u003d> "product",  //маршрут к контроллеру product,           ),        )    );?> `

Результатом виконання цього прикладу буде щось подібне:

/* для http://yourdomain.com/product/foo/22/foo/bar
* результатом маршруту будуть наступні значення:
*/
array(
"controller" u003d> "product",
"module" u003d> "index", //(за замовчуванням)
"action" u003d> "index", //(за замовчуванням)
)

/**
* та параметри запиту:
*/
array(
"name" u003d> "foo",
"id" u003d> 22,
"foo" u003d> bar
)

**Приклад #2 Приклад використання **Yaf_Route_Rewrite()****

` <?php   /**    * Добавьте маршрут перезаписи в стек маршрутов Yaf_Router, вызвав addconfig    */    $config u003d array(        "name" u003d> array(           "type"  u003d> "rewrite",        //маршрут Yaf_Route_Rewrite           "match" u003d> "/user-list/:id", //совпадение только по /user/list/?/           "route" u003d> array(               'controller' u003d> "user",  //маршрут к контроллеру user,               'action'     u003d> "list",| Yaf_Dispatcher::getInstance()->getRouter()->addConfig(        new Yaf_Config_Simple($config));?> `

Результатом виконання цього прикладу буде щось подібне:

/* для http://yourdomain.com/user-list/22
* результатом маршруту будуть наступні значення:
*/
array(
"controller" u003d> "user",
"action" u003d> "list",
"module" u003d> "index", //(за замовчуванням)
)

/**
* та параметри запиту:
*/
array(
"id" u003d> 22,
)

**Приклад #3 Приклад використання **Yaf_Route_Rewrite(as of 2.3.0)()****

` <?php   /**    * Добавить переписать маршрут использовать результат поиска как имя м/к/д    */    $config u003d array(        "name" u003d> array(           "type"  u003d> "rewrite",           "match" u003d> " /user-list/:a/:id", //совпадение только по /user-list/*           "route" u003d> array(               'controller' u003d> "user",   //маршрут к контроллеру user,               'action'     u003d > ":a",     //маршрут к дії :a            ),        ),    ); Yaf_Dispatcher::getInstance()->getRouter()->addConfig(        new Yaf_Config_Simple($config));?> `

Результатом виконання цього прикладу буде щось подібне:

/* для http://yourdomain.com/user-list/list/22
* результатом маршруту будуть наступні значення:
*/
array(
"controller" u003d> "user",
"action" u003d> "list",
"module" u003d> "index", //(за замовчуванням)
)

/**
* та параметри запиту:
*/
array(
"id" u003d> 22,
)

### Дивіться також

- [Yaf_Router::addRoute()](yaf-router.addroute.md) - Додає новий
маршрут у маршрутизатор
- [Yaf_Router::addConfig()](yaf-router.addconfig.md) - Додає
налаштовані маршрути на маршрутизатор
- [Yaf_Route_Static](class.yaf-route-static.md)
- [Yaf_Route_Supervar](class.yaf-route-supervar.md)
- [Yaf_Route_Simple](class.yaf-route-simple.md)
- [Yaf_Route_Regex](class.yaf-route-regex.md)
- [Yaf_Route_Map](class.yaf-route-map.md)
