- [« Yaf_Loader::setLibraryPath](yaf-loader.setlibrarypath.md)
- [Yaf_Plugin_Abstract::dispatchLoopShutdown
»](yaf-plugin-abstract.dispatchloopshutdown.md)

- [PHP Manual](index.md)
- [Yaf](book.yaf.md)
- Клас Yaf_Plugin_Abstract

# Клас Yaf_Plugin_Abstract

(Yaf \>u003d1.0.0)

## Вступ

Плагіни дозволяють легко розширювати та налаштовувати фреймворк.

Плагіни є класами. Визначення класу змінюватиметься в
залежно від компонента - вам може знадобитися реалізувати цей
інтерфейс, але факт залишається фактом, плагін сам є класом.

Плагін повинен бути завантажений у Yaf з використанням
[Yaf_Dispatcher::registerPlugin()](yaf-dispatcher.registerplugin.md).
Після реєстрації, всі методи, реалізовані плагіном відповідно до
цим інтерфейсом, викликатимуться вчасно.

## Приклади

**Приклад #1 Приклад плагіна**

` <?php   /* Класс bootstrap должен быть определён как ./application/Bootstrap.php */   class Bootstrap extends Yaf_Bootstrap_Abstract {        public function _initPlugin(Yaf_Dispatcher $dispatcher) {            /* регистрируем плагин */            $dispatcher->registerPlugin(new TestPlugin( )); }   }   /* класс плагина должен лежать в ./application/plugins/ */   class TestPlugin extends Yaf_Plugin_Abstract {        public function routerStartup(Yaf_Request_Abstract $request, Yaf_Response_Abstract $response) {            /* перед тем, как приступит к работе маршрутизатор,                пользователь может сам поработать з перезаписом URL */            var_dump("routerStartup"); }        public function routerShutdown(Yaf_Request_Abstract $request, Yaf_Response_Abstract $response) {            /* Маршрутизатор отработал, следовательно можно перейти к проверке логина */            var_dump("routerShutdown"); }                     <br><br><br><br><br> }                          < }         public function postDispatch(Yaf_Request_Abstract $request, Yaf_Response_Abstract $response) {                  ¦  }        public function dispatchLoopShutdown(Yaf_Request_Abstract $request, Yaf_Response_Abstract $response) {            /* последняя возможность для пользователя что-то сделать */            var_dump("dispatchLoopShutdown"); }   }   ClassClassIndexController extends Yaf_Controller_Abstract {        public function indexAction() {             | //предотвращаем рендеринг        }   }   $config u003d array(       "application" u003d> array(           "directory" u003d> dirname(__FILE__) . "/application/",       ),   ); $app u003d new Yaf_Application($config); $app->bootstrap()->run();?> `

Результатом виконання цього прикладу буде щось подібне:

string(13) "routerStartup"
string(14) "routerShutdown"
string(19) "dispatchLoopStartup"
string(11) "preDispatch"
string(12) "postDispatch"
string(20) "dispatchLoopShutdown"

## Огляд класів

class **Yaf_Plugin_Abstract** {

/\* Методи \*/

public
[dispatchLoopShutdown](yaf-plugin-abstract.dispatchloopshutdown.md)([Yaf_Request_Abstract](class.yaf-request-abstract.md)
`$request`, [Yaf_Response_Abstract](class.yaf-response-abstract.md)
`$response`): void

public
[dispatchLoopStartup](yaf-plugin-abstract.dispatchloopstartup.md)([Yaf_Request_Abstract](class.yaf-request-abstract.md)
`$request`, [Yaf_Response_Abstract](class.yaf-response-abstract.md)
`$response`): void

public
[postDispatch](yaf-plugin-abstract.postdispatch.md)([Yaf_Request_Abstract](class.yaf-request-abstract.md)
`$request`, [Yaf_Response_Abstract](class.yaf-response-abstract.md)
`$response`): void

public
[preDispatch](yaf-plugin-abstract.predispatch.md)([Yaf_Request_Abstract](class.yaf-request-abstract.md)
`$request`, [Yaf_Response_Abstract](class.yaf-response-abstract.md)
`$response`): void

public
[preResponse](yaf-plugin-abstract.preresponse.md)([Yaf_Request_Abstract](class.yaf-request-abstract.md)
`$request`, [Yaf_Response_Abstract](class.yaf-response-abstract.md)
`$response`): void

public
[routerShutdown](yaf-plugin-abstract.routershutdown.md)([Yaf_Request_Abstract](class.yaf-request-abstract.md)
`$request`, [Yaf_Response_Abstract](class.yaf-response-abstract.md)
`$response`): void

public
[routerStartup](yaf-plugin-abstract.routerstartup.md)([Yaf_Request_Abstract](class.yaf-request-abstract.md)
`$request`, [Yaf_Response_Abstract](class.yaf-response-abstract.md)
`$response`): void

}

## Зміст

- [Yaf_Plugin_Abstract::dispatchLoopShutdown](yaf-plugin-abstract.dispatchloopshutdown.md)
— Призначення dispatchLoopShutdown
- [Yaf_Plugin_Abstract::dispatchLoopStartup](yaf-plugin-abstract.dispatchloopstartup.md)
- Хук перед відправкою циклу
- [Yaf_Plugin_Abstract::postDispatch](yaf-plugin-abstract.postdispatch.md)
- Призначення postDispatch
- [Yaf_Plugin_Abstract::preDispatch](yaf-plugin-abstract.predispatch.md)
- Призначення preDispatch
- [Yaf_Plugin_Abstract::preResponse](yaf-plugin-abstract.preresponse.md)
- Призначення preResponse
- [Yaf_Plugin_Abstract::routerShutdown](yaf-plugin-abstract.routershutdown.md)
- Призначення routerShutdown
- [Yaf_Plugin_Abstract::routerStartup](yaf-plugin-abstract.routerstartup.md)
- Перехоплювач RouterStartup
