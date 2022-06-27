- [« Yaf_Bootstrap_Abstract](class.yaf-bootstrap-abstract.md)
- [Yaf_Dispatcher::autoRender »](yaf-dispatcher.autorender.md)

- [PHP Manual](index.md)
- [Yaf](book.yaf.md)
- Клас Yaf_Dispatcher

# Клас Yaf_Dispatcher

(Yaf \>u003d1.0.0)

## Вступ

**Yaf_Dispatcher** призначений для ініціалізації оточення запиту,
маршрутизації вхідного запиту, та подальшого відправлення будь-яких
виявлених завдань; агрегує всі відповіді та повертає їх після завершення
процесу.

**Yaf_Dispatcher** реалізує шаблон проектування Singleton, тобто
що тільки один екземпляр класу може бути доступний у будь-який час. Це
дозволяє йому також виступати як реєстр в який інші
об'єкти у процесі диспетчеризації можуть підтягуватись.

## Огляд класів

final class **Yaf_Dispatcher** {

/\* Властивості \*/

protected `$_router`;

protected `$_view`;

protected `$_request`;

protected `$_plugins`;

protected static `$_instance`;

protected `$_auto_render`;

protected `$_return_response`;

protected `$_instantly_flush`;

protected `$_default_module`;

protected `$_default_controller`;

protected `$_default_action`;

/\* Методи \*/

public [\_\_construct](yaf-dispatcher.construct.md)()

public [autoRender](yaf-dispatcher.autorender.md)(bool `$flag` u003d ?):
[Yaf_Dispatcher](class.yaf-dispatcher.md)

public [catchException](yaf-dispatcher.catchexception.md)(bool `$flag`
u003d?): [Yaf_Dispatcher](class.yaf-dispatcher.md)

public [disableView](yaf-dispatcher.disableview.md)(): bool

public
[dispatch](yaf-dispatcher.dispatch.md)([Yaf_Request_Abstract](class.yaf-request-abstract.md)
`$request`): [Yaf_Response_Abstract](class.yaf-response-abstract.md)

public [enableView](yaf-dispatcher.enableview.md)():
[Yaf_Dispatcher](class.yaf-dispatcher.md)

public [flushInstantly](yaf-dispatcher.flushinstantly.md)(bool `$flag`
u003d?): [Yaf_Dispatcher](class.yaf-dispatcher.md)

public [getApplication](yaf-dispatcher.getapplication.md)():
[Yaf_Application](class.yaf-application.md)

public [getDefaultAction](yaf-dispatcher.getdefaultaction.md)():
string

public
[getDefaultController](yaf-dispatcher.getdefaultcontroller.md)():
string

public [getDefaultModule](yaf-dispatcher.getdefaultmodule.md)():
string

public static [getInstance](yaf-dispatcher.getinstance.md)():
[Yaf_Dispatcher](class.yaf-dispatcher.md)

public [getRequest](yaf-dispatcher.getrequest.md)():
[Yaf_Request_Abstract](class.yaf-request-abstract.md)

public [getRouter](yaf-dispatcher.getrouter.md)():
[Yaf_Router](class.yaf-router.md)

public [initView](yaf-dispatcher.initview.md)(string `$templates_dir`,
array `$options` u003d ?):
[Yaf_View_Interface](class.yaf-view-interface.md)

public
[registerPlugin](yaf-dispatcher.registerplugin.md)([Yaf_Plugin_Abstract](class.yaf-plugin-abstract.md)
`$plugin`): [Yaf_Dispatcher](class.yaf-dispatcher.md)

public [returnResponse](yaf-dispatcher.returnresponse.md)(bool
`$flag`): [Yaf_Dispatcher](class.yaf-dispatcher.md)

public [setDefaultAction](yaf-dispatcher.setdefaultaction.md)(string
`$action`): [Yaf_Dispatcher](class.yaf-dispatcher.md)

public
[setDefaultController](yaf-dispatcher.setdefaultcontroller.md)(string
`$controller`): [Yaf_Dispatcher](class.yaf-dispatcher.md)

public [setDefaultModule](yaf-dispatcher.setdefaultmodule.md)(string
`$module`): [Yaf_Dispatcher](class.yaf-dispatcher.md)

public [setErrorHandler](yaf-dispatcher.seterrorhandler.md)(call
`$callback`, int `$error_types`):
[Yaf_Dispatcher](class.yaf-dispatcher.md)

public
[setRequest](yaf-dispatcher.setrequest.md)([Yaf_Request_Abstract](class.yaf-request-abstract.md)
`$request`): [Yaf_Dispatcher](class.yaf-dispatcher.md)

public
[setView](yaf-dispatcher.setview.md)([Yaf_View_Interface](class.yaf-view-interface.md)
`$view`): [Yaf_Dispatcher](class.yaf-dispatcher.md)

public [throwException](yaf-dispatcher.throwexception.md)(bool `$flag`
u003d?): [Yaf_Dispatcher](class.yaf-dispatcher.md)

}

## Властивості

`_router`

`_view`

`_request`

`_plugins`

`_instance`

`_auto_render`

`_return_response`

`_instantly_flush`

`_default_module`

`_default_controller`

`_default_action`

## Зміст

- [Yaf_Dispatcher::autoRender](yaf-dispatcher.autorender.md) -
Включає/вимикає авторендеринг
- [Yaf_Dispatcher::catchException](yaf-dispatcher.catchexception.md)
— Включає/вимикає перехоплення виключень
- [Yaf_Dispatcher::\_\_construct](yaf-dispatcher.construct.md) -
Конструктор класу Yaf_Dispatcher
- [Yaf_Dispatcher::disableView](yaf-dispatcher.disableview.md) -
Вимикає механізм перегляду
- [Yaf_Dispatcher::dispatch](yaf-dispatcher.dispatch.md)
Надсилає запит
- [Yaf_Dispatcher::enableView](yaf-dispatcher.enableview.md) -
Включає механізм перегляду
- [Yaf_Dispatcher::flushInstantly](yaf-dispatcher.flushinstantly.md)
— Вмикає/вимикає миттєве очищення
- [Yaf_Dispatcher::getApplication](yaf-dispatcher.getapplication.md)
— Отримує програму
- [Yaf_Dispatcher::getDefaultAction](yaf-dispatcher.getdefaultaction.md)
— Отримує ім'я стандартної дії
- [Yaf_Dispatcher::getDefaultController](yaf-dispatcher.getdefaultcontroller.md)
— Отримує ім'я контролера за умовчанням
- [Yaf_Dispatcher::getDefaultModule](yaf-dispatcher.getdefaultmodule.md)
— Отримує ім'я модуля за замовчуванням
- [Yaf_Dispatcher::getInstance](yaf-dispatcher.getinstance.md) -
Отримує екземпляр диспетчера
- [Yaf_Dispatcher::getRequest](yaf-dispatcher.getrequest.md) -
Отримує екземпляр запиту
- [Yaf_Dispatcher::getRouter](yaf-dispatcher.getrouter.md)
Отримує екземпляр маршрутизатора
- [Yaf_Dispatcher::initView](yaf-dispatcher.initview.md) -
Ініціалізує виставу та повертає її
- [Yaf_Dispatcher::registerPlugin](yaf-dispatcher.registerplugin.md)
- Реєструє плагін
- [Yaf_Dispatcher::returnResponse](yaf-dispatcher.returnresponse.md)
— Призначення returnResponse
- [Yaf_Dispatcher::setDefaultAction](yaf-dispatcher.setdefaultaction.md)
— Змінює стандартне ім'я дії
- [Yaf_Dispatcher::setDefaultController](yaf-dispatcher.setdefaultcontroller.md)
— Змінює стандартне ім'я контролера
- [Yaf_Dispatcher::setDefaultModule](yaf-dispatcher.setdefaultmodule.md)
— Змінює стандартне ім'я модуля
- [Yaf_Dispatcher::setErrorHandler](yaf-dispatcher.seterrorhandler.md)
- Встановлює обробник помилок
- [Yaf_Dispatcher::setRequest](yaf-dispatcher.setrequest.md)
Призначення setRequest
- [Yaf_Dispatcher::setView](yaf-dispatcher.setview.md)
Встановлює користувальницький механізм відображення
- [Yaf_Dispatcher::throwException](yaf-dispatcher.throwexception.md)
— Вмикає/вимикає викидання виключень
