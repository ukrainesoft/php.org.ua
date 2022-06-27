- [«Yaf_Router](class.yaf-router.md)
- [Yaf_Router::addRoute »](yaf-router.addroute.md)

- [PHP Manual](index.md)
- [Yaf_Router](class.yaf-router.md)
- Додає настроєні маршрути до маршрутизатора

# Yaf_Router::addConfig

(Yaf \>u003d1.0.0)

Yaf_Router::addConfig — Додає настроєні маршрути до маршрутизатора

### Опис

public
**Yaf_Router::addConfig**([Yaf_Config_Abstract](class.yaf-config-abstract.md)
`$config`): bool

Додає маршрути, визначені конфігураціями, у стек маршрутів
[Yaf_Router](class.yaf-router.md)

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Примірник [Yaf_Config_Abstract](class.yaf-config-abstract.md), який
повинен містити одну або кілька допустимих конфігурацій маршруту

### Приклади

**Приклад #1 Приклад використання **application.ini()****

`` inicode
порядок дуже важливий, попередній буде названий першим

;запит на переписування маршруту /product/*/*
routes.route_name.typeu003d"rewrite"
routes.route_name.matchu003d"/product/:name/:value"
routes.route_name.route.controlleru003dproduct
routes.route_name.route.actionu003dinfo

;запит відповідності регулярного вираження /list/*/*
routes.route_name1.typeu003d"regex"
routes.route_name1.matchu003d"#^list/([^/]*)/([^/]*)#"
routes.route_name1.route.controlleru003dIndex
routes.route_name1.route.actionu003daction
routes.route_name1.map.1u003dname
routes.route_name1.map.2u003dvalue

;проста відповідність маршруту /**?cu003dcontroller&au003daction&mu003dmodule
routes.route_name2.typeu003d"simple"
routes.route_name2.controlleru003dc
routes.route_name2.moduleu003dm
routes.route_name2.actionu003da

;проста відповідність маршрутизатора /**?ru003dPATH_INFO
routes.route_name3.typeu003d"supervar"
routes.route_name3.varnameu003dr

;карта маршруту відповідає будь-якому запиту до контролера
routes.route_name4.typeu003d"map"
routes.route_name4.controllerPreferu003dTRUE
routes.route_namer.delimiteru003d"#!"
````

**Приклад #2 Приклад використання **Yaf_Dispatcher::autoConfig()****

`<?phpclass Bootstrap extends Yaf_Bootstrap_Abstract{    public function _initConfig() {       $config u003d Yaf_Application::app()->getConf Yaf_Registry::set("config", $config); }    public function _initRoute(Yaf_Dispatcher $dispatcher) {        $router u003d$$dispatcher->getRouter(); /**         * ми ми можемо додати кілька визначених маршрутів в application.ini         || }?> `

### Дивіться також

- [Yaf_Router::addRoute()](yaf-router.addroute.md) - Додає новий
маршрут у маршрутизатор
- [Yaf_Route_Static](class.yaf-route-static.md)
- [Yaf_Route_Supervar](class.yaf-route-supervar.md)
- [Yaf_Route_Simple](class.yaf-route-simple.md)
- [Yaf_Route_Regex](class.yaf-route-regex.md)
- [Yaf_Route_Rewrite](class.yaf-route-rewrite.md)
- [Yaf_Route_Map](class.yaf-route-map.md)
