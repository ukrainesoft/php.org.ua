- [« Yaf_Router::addConfig](yaf-router.addconfig.md)
- [Yaf_Router::\_\_construct »](yaf-router.construct.md)

- [PHP Manual](index.md)
- [Yaf_Router](class.yaf-router.md)
- Додає новий маршрут до маршрутизатора

# Yaf_Router::addRoute

(Yaf \>u003d1.0.0)

Yaf_Router::addRoute — Додає новий маршрут до маршрутизатора

### Опис

public **Yaf_Router::addRoute**(string `$name`, Yaf_Route_Abstract
`$route`): bool

За замовчуванням, Yaf_Router використовує
[Yaf_Route_Static](class.yaf-route-static.md) як маршрут по
замовчуванням. Ви можете додати нові маршрути до стек маршрутів
маршрутизатор, викликавши цей метод.

Новіший маршрут буде викликаний раніше, ніж старий (стек маршрутів), і
якщо новий маршрутизатор поверне **`true`**, процес маршрутизатора
буде завершено. Інакше буде викликано старіший.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

### Приклади

**Приклад #1 Приклад використання
[Yaf_Dispatcher::autoRender()](yaf-dispatcher.autorender.md)**

` <?phpclass Bootstrap extends Yaf_Bootstrap_Abstract{    public function _initConfig() {       $config u003dYaf_Application::app()->getConf Yaf_Registry::set("config", $config); }    public function _initRoute(Yaf_Dispatcher $dispatcher) {       $router u003d$$dispatcher->getRouter(); /**         * ми ми можемо додати кілька визначених маршрутів в application.ini        | /**         * добавьте Rewrite route, затем запрос uri:         * http://example.com/product/list/22/foo         * будет соответствовать этому маршруту, и результат:         *         *  [module] u003d>         *  [controller] u003d> product         *  [action] u003d> info         *  [method] u003d> GET         *  [params:protected] u003d> Array         *      (         *          [id] u003d> 22         *          [name] u003d> foo         *      )         *         */        $route  u003d new Yaf_Route_Rewrite (            "/product/list/:id/:name",            array(                "controller" u003d> "product",                "action"     u003d> "info",            )        ); $router->addRoute('dummy', $route); }}?> `

### Дивіться також

- [Yaf_Router::addConfig()](yaf-router.addconfig.md) - Додає
налаштовані маршрути на маршрутизатор
- [Yaf_Route_Static](class.yaf-route-static.md)
- [Yaf_Route_Supervar](class.yaf-route-supervar.md)
- [Yaf_Route_Simple](class.yaf-route-simple.md)
- [Yaf_Route_Regex](class.yaf-route-regex.md)
- [Yaf_Route_Rewrite](class.yaf-route-rewrite.md)
- [Yaf_Route_Map](class.yaf-route-map.md)
