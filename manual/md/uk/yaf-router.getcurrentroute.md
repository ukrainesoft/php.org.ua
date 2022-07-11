- [« Yaf_Router::\_\_construct](yaf-router.construct.md)
- [Yaf_Router::getRoute »](yaf-router.getroute.md)

- [PHP Manual](index.md)
- [Yaf_Router](class.yaf-router.md)
- Отримує ім'я діючого маршруту

# Yaf_Router::getCurrentRoute

(Yaf \>u003d1.0.0)

Yaf_Router::getCurrentRoute — Отримує ім'я діючого маршруту

### Опис

public **Yaf_Router::getCurrentRoute**(): string

Отримує ім'я діючого маршруту.

> **Примітка**:
>
> Ви повинні викликати цей метод після завершення процесу маршрутизації,
> оскільки до цього цей метод завжди повертатиме **`null`**.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Рядок, назва діючого маршруту.

### Приклади

**Приклад #1 Реєстрація деяких маршрутів у Bootstrap**

` <?phpclass Bootstrap extends Yaf_Bootstrap_Abstract{    public function _initConfig() {       $config u003dYaf_Application::app()->getConf Yaf_Registry::set("config", $config); }    public function _initRoute(Yaf_Dispatcher $dispatcher) {       $router u003d$$dispatcher->getRouter(); $rewrite_route  u003d new Yaf_Route_Rewrite(            "/product/list/:page",            array(                "controller" u003d> "product",                "action"     u003d> "list",            )        ); $regex_route  u003d new Yaf_Route_Rewrite(            "#^/product/info/(\d+)",            array(                "controller" u003d> "product",                "action"     u003d> "info",            )        ); $router->addRoute('rewrite', $rewrite_route)->addRoute('regex', $regex_route); }   /**     * зареєструвати плагін     */   public function __initPlugins(Yaf_Dispatcher $dispatcher) { {         | }}?> `

**Приклад #2 Плагін Dummy.php (в
[application.directory](yaf.appconfig.md#configuration.yaf.directory)/plugins)**

` <?phpclass DummyPlugin extends Yaf_Plugin_Abstract {    public function routerShutdown(Yaf_Request_Abstract $request, Yaf_Response_Abstract $response) {         var_dump(Yaf_Dispatcher::getInstance()->getRouter()->getCurrentRoute()); }}?> `

Результатом виконання цього прикладу буде щось подібне:

/* для http://yourdomain.com/product/list/1
* DummyPlugin виведе:
*/
string(7) "rewrite"

/* для http://yourdomain.com/product/info/34
* DummyPlugin виведе:
*/
string(5) "regex"

/* для іншого запиту URI
* DummyPlugin виведе:
*/
string(8) "_default"

### Дивіться також

- [Yaf_Bootstrap_Abstract](class.yaf-bootstrap-abstract.md)
- [Yaf_Plugin_Abstract](class.yaf-plugin-abstract.md)
- [Yaf_Router::addRoute()](yaf-router.addroute.md) - Додає новий
маршрут у маршрутизатор
