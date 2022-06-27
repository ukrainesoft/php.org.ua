- [« Yaf_Dispatcher::initView](yaf-dispatcher.initview.md)
- [Yaf_Dispatcher::returnResponse
»](yaf-dispatcher.returnresponse.md)

- [PHP Manual](index.md)
- [Yaf_Dispatcher](class.yaf-dispatcher.md)
- реєструє плагін

# Yaf_Dispatcher::registerPlugin

(Yaf \>u003d1.0.0)

Yaf_Dispatcher::registerPlugin — Реєструє плагін

### Опис

public
**Yaf_Dispatcher::registerPlugin**([Yaf_Plugin_Abstract](class.yaf-plugin-abstract.md)
`$plugin`): [Yaf_Dispatcher](class.yaf-dispatcher.md)

Реєструє плагін (дивіться
[Yaf_Plugin_Abstract](class.yaf-plugin-abstract.md)). Як правило, ми
реєструємо плагіни в Bootstrap (дивіться
[Yaf_Bootstrap_Abstract](class.yaf-bootstrap-abstract.md)).

### Список параметрів

`plugin`

### Значення, що повертаються

### Приклади

**Приклад #1 Приклад використання **Yaf_Dispatcher::registerPlugin()****

`<?phpclass Bootstrap extends Yaf_Bootstrap_Abstract { public function _initPlugin(Yaf_Dispatcher $dispatcher) {    /**    * Yaf             "/plugins" для цього випадку буде:  * [application.directory] . "/plugins/". "User" . [application.ext]   */    $user u003d new UserPlugin(); $dispatcher->registerPlugin($user); }}?> `

### Дивіться також

- [Yaf_Plugin_Abstract](class.yaf-plugin-abstract.md)



- [Yaf_Bootstrap_Abstract](class.yaf-bootstrap-abstract.md)
