- [«
Yaf_Plugin_Abstract::preResponse](yaf-plugin-abstract.preresponse.md)
- [Yaf_Plugin_Abstract::routerStartup
»](yaf-plugin-abstract.routerstartup.md)

- [PHP Manual](index.md)
- [Yaf_Plugin_Abstract](class.yaf-plugin-abstract.md)
- Призначення routerShutdown

# Yaf_Plugin_Abstract::routerShutdown

(Yaf \>u003d1.0.0)

Yaf_Plugin_Abstract::routerShutdown — Призначення routerShutdown

### Опис

public
**Yaf_Plugin_Abstract::routerShutdown**([Yaf_Request_Abstract](class.yaf-request-abstract.md)
`$request`, [Yaf_Response_Abstract](class.yaf-response-abstract.md)
`$response`): void

Цей перехоплювач буде запущений після завершення процесу маршрутизації,
зазвичай використовується для перевірки входу до системи.

### Список параметрів

`request`

`response`

### Значення, що повертаються

### Приклади

**Приклад #1 Приклад використання
**Yaf_Plugin_Abstract::routerShutdown()****

`<?phpclass UserInitPlugin extends Yaf_Plugin_Abstract {                              ¦        /**         * Использовать контроллер доступа не нужно для API         */        if (in_array(strtolower($controller), array(            'api',        ))) {            return TRUE; }     if (Yaf_Session::getInstance()->has("login")) {            return TRUE; }        /* Помилка перевірки доступу, необхідно увійти */        $response->setRedirect("http://yourdomain.com/login/"); return FALSE; }}?> `

### Дивіться також

- [Yaf_Plugin_Abstract::routerStartup()](yaf-plugin-abstract.routerstartup.md) -
Перехоплювач RouterStartup
- [Yaf_Plugin_Abstract::dispatchLoopStartup()](yaf-plugin-abstract.dispatchloopstartup.md) -
Хук перед відправкою циклу
- [Yaf_Plugin_Abstract::preDispatch()](yaf-plugin-abstract.predispatch.md) -
Призначення preDispatch
- [Yaf_Plugin_Abstract::postDispatch()](yaf-plugin-abstract.postdispatch.md) -
Призначення postDispatch
- [Yaf_Plugin_Abstract::dispatchLoopShutdown()](yaf-plugin-abstract.dispatchloopshutdown.md) -
Призначення dispatchLoopShutdown
