- [« Yaf_Registry::set](yaf-registry.set.md)
- [Yaf_Request_Abstract::clearParams
»](yaf-request-abstract.clearparams.md)

- [PHP Manual](index.md)
- [Yaf](book.yaf.md)
- Клас Yaf_Request_Abstract

# Клас Yaf_Request_Abstract

(Yaf \>u003d1.0.0)

## Вступ

## Огляд класів

class **Yaf_Request_Abstract** {

/\* Константи \*/

const string `SCHEME_HTTP` u003d http;

const string `SCHEME_HTTPS` u003d https;

/\* Властивості \*/

public `$module`;

public `$controller`;

public `$action`;

public `$method`;

protected `$params`;

protected `$language`;

protected `$_exception`;

protected `$_base_uri`;

protected `$uri`;

protected `$dispatched`;

protected `$routed`;

/\* Методи \*/

public [clearParams](yaf-request-abstract.clearparams.md)(): bool

public [getActionName](yaf-request-abstract.getactionname.md)(): void

public [getBaseUri](yaf-request-abstract.getbaseuri.md)(): void

public
[getControllerName](yaf-request-abstract.getcontrollername.md)(): void

public [getEnv](yaf-request-abstract.getenv.md)(string `$name`, string
`$default` u003d ?): void

public [getException](yaf-request-abstract.getexception.md)(): void

public [getLanguage](yaf-request-abstract.getlanguage.md)(): void

public [getMethod](yaf-request-abstract.getmethod.md)(): string

public [getModuleName](yaf-request-abstract.getmodulename.md)(): void

public [getParam](yaf-request-abstract.getparam.md)(string `$name`,
string `$default` u003d ?):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public [getParams](yaf-request-abstract.getparams.md)(): array

public [getRequestUri](yaf-request-abstract.getrequesturi.md)(): void

public [getServer](yaf-request-abstract.getserver.md)(string `$name`,
string `$default` u003d ?): void

public [isCli](yaf-request-abstract.iscli.md)(): bool

public [isDispatched](yaf-request-abstract.isdispatched.md)(): bool

public [isGet](yaf-request-abstract.isget.md)(): bool

public [isHead](yaf-request-abstract.ishead.md)(): bool

public [isOptions](yaf-request-abstract.isoptions.md)(): bool

public [isPost](yaf-request-abstract.ispost.md)(): bool

public [isPut](yaf-request-abstract.isput.md)(): bool

public [isRouted](yaf-request-abstract.isrouted.md)(): bool

public [isXmlHttpRequest](yaf-request-abstract.isxmlhttprequest.md)():
bool

public [setActionName](yaf-request-abstract.setactionname.md)(string
`$action`, bool `$format_name` u003d true): void

public [setBaseUri](yaf-request-abstract.setbaseuri.md)(string
`$uir`): bool

public
[setControllerName](yaf-request-abstract.setcontrollername.md)(string
`$controller`, bool `$format_name` u003d true): void

public [setDispatched](yaf-request-abstract.setdispatched.md)(): void

public [setModuleName](yaf-request-abstract.setmodulename.md)(string
`$module`, bool `$format_name` u003d true): void

public [setParam](yaf-request-abstract.setparam.md)(string `$name`,
string `$value` u003d ?): bool

public [setRequestUri](yaf-request-abstract.setrequesturi.md)(string
`$uir`): void

public [setRouted](yaf-request-abstract.setrouted.md)(string `$flag` u003d
?): void

}

## Властивості

`module`

`controller`

`action`

`method`

`params`

`language`

`_exception`

`_base_uri`

`uri`

`dispatched`

`routed`

## Зумовлені константи

**`Yaf_Request_Abstract::SCHEME_HTTP`**

**`Yaf_Request_Abstract::SCHEME_HTTPS`**

## Зміст

- [Yaf_Request_Abstract::clearParams](yaf-request-abstract.clearparams.md)
— Видаляє всі параметри
- [Yaf_Request_Abstract::getActionName](yaf-request-abstract.getactionname.md)
— Призначення getActionName
- [Yaf_Request_Abstract::getBaseUri](yaf-request-abstract.getbaseuri.md)
- Призначення getBaseUri
- [Yaf_Request_Abstract::getControllerName](yaf-request-abstract.getcontrollername.md)
— Призначення getControllerName
- [Yaf_Request_Abstract::getEnv](yaf-request-abstract.getenv.md) -
Отримує змінну ENV
- [Yaf_Request_Abstract::getException](yaf-request-abstract.getexception.md)
- Призначення getException
- [Yaf_Request_Abstract::getLanguage](yaf-request-abstract.getlanguage.md)
— Отримує кращу мову клієнта
- [Yaf_Request_Abstract::getMethod](yaf-request-abstract.getmethod.md)
— Отримує метод запиту
- [Yaf_Request_Abstract::getModuleName](yaf-request-abstract.getmodulename.md)
— Призначення getModuleName
- [Yaf_Request_Abstract::getParam](yaf-request-abstract.getparam.md)
— Отримує параметр дзвінка
- [Yaf_Request_Abstract::getParams](yaf-request-abstract.getparams.md)
— Отримує всі настройки виклику
- [Yaf_Request_Abstract::getRequestUri](yaf-request-abstract.getrequesturi.md)
- Призначення getRequestUri
- [Yaf_Request_Abstract::getServer](yaf-request-abstract.getserver.md)
— Отримує змінну SERVER
- [Yaf_Request_Abstract::isCli](yaf-request-abstract.iscli.md)
Визначає, чи є запит CLI-запитом
- [Yaf_Request_Abstract::isDispatched](yaf-request-abstract.isdispatched.md)
— Визначає, чи надіслано запит
- [Yaf_Request_Abstract::isGet](yaf-request-abstract.isget.md) -
Визначає, чи є запит GET-запитом
- [Yaf_Request_Abstract::isHead](yaf-request-abstract.ishead.md)
Визначає, чи є запит HEAD-запитом
- [Yaf_Request_Abstract::isOptions](yaf-request-abstract.isoptions.md)
— Визначає, чи є запит OPTIONS-запитом
- [Yaf_Request_Abstract::isPost](yaf-request-abstract.ispost.md) -
Визначає, чи запит POST-запитом
- [Yaf_Request_Abstract::isPut](yaf-request-abstract.isput.md) -
Визначає, чи запит PUT-запитом
- [Yaf_Request_Abstract::isRouted](yaf-request-abstract.isrouted.md)
— Визначає, чи запит надіслано
- [Yaf_Request_Abstract::isXmlHttpRequest](yaf-request-abstract.isxmlhttprequest.md)
- Визначає, чи є запит AJAX-запитом
- [Yaf_Request_Abstract::setActionName](yaf-request-abstract.setactionname.md)
- Встановлює ім'я дії
- [Yaf_Request_Abstract::setBaseUri](yaf-request-abstract.setbaseuri.md)
- Встановлює базовий URI
- [Yaf_Request_Abstract::setControllerName](yaf-request-abstract.setcontrollername.md)
- Встановлює ім'я контролера
- [Yaf_Request_Abstract::setDispatched](yaf-request-abstract.setdispatched.md)
- Призначення setDispatched
- [Yaf_Request_Abstract::setModuleName](yaf-request-abstract.setmodulename.md)
- Встановлює ім'я модуля
- [Yaf_Request_Abstract::setParam](yaf-request-abstract.setparam.md)
— Встановлює дзвінок для запиту
- [Yaf_Request_Abstract::setRequestUri](yaf-request-abstract.setrequesturi.md)
- Призначення setRequestUri
- [Yaf_Request_Abstract::setRouted](yaf-request-abstract.setrouted.md)
— Призначення setRouted
