- [« Yaf_Route_Simple::assemble](yaf-route-simple.assemble.md)
- [Yaf_Route_Simple::route »](yaf-route-simple.route.md)

- [PHP Manual](index.md)
- [Yaf_Route_Simple](class.yaf-route-simple.md)
- Конструктор класу Yaf_Route_Simple

# Yaf_Route_Simple::\_\_construct

(Yaf \>u003d1.0.0)

Yaf_Route_Simple::\_\_construct - Конструктор класу Yaf_Route_Simple

### Опис

public **Yaf_Route_Simple::\_\_construct**(string `$module_name`, string
`$controller_name`, string `$action_name`)

[Yaf_Route_Simple](class.yaf-route-simple.md) отримає інформацію про
маршруті з рядка запиту та параметри конструктора будуть використовуватися
як ключі при пошуку інформації про маршрут у $\_GET.

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

### Список параметрів

`module_name`
Ім'я ключа інформації про модуль.

`controller_name`
Ім'я ключа інформації про контролера.

`action_name`
Ім'я ключа інформації про дію.

### Значення, що повертаються

Завжди повертає **`true`**.

### Приклади

**Приклад #1 Приклад використання
[Yaf_Route_Simple::route()](yaf-route-simple.route.md)**

` <?php  $route u003d new Yaf_Route_Simple("m", "controller", "act"); Yaf_Router::getInstance()->addRoute("simple", $route);?> `

**Приклад #2 Приклад використання
[Yaf_Route_Simple::route()](yaf-route-simple.route.md)**

``` bashcode
Запит: http://yourdomain.com/path/?controlleru003da&actu003db
u003d> module u003d default(index), controller u003d a, action u003d b

Запит: http://yourdomain.com/path
u003d> module u003d default(index), controller u003d default(index), action u003d default(index)
````

### Дивіться також

- [Yaf_Route_Supervar::route()](yaf-route-supervar.route.md) -
Призначення route
- [Yaf_Route_Static::route()](yaf-route-static.route.md) -
Надсилає запит
- [Yaf_Route_Regex::route()](yaf-route-regex.route.md) - Ціль
маршруту
- [Yaf_Route_Rewrite::route()](yaf-route-rewrite.route.md) -
Призначення route
- [Yaf_Route_Map::route()](yaf-route-map.route.md) - Призначення
route
