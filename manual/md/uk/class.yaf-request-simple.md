- [«
Yaf_Request_Http::isXmlHttpRequest](yaf-request-http.isxmlhttprequest.md)
- [Yaf_Request_Simple::\_\_construct
»](yaf-request-simple.construct.md)

- [PHP Manual](index.md)
- [Yaf](book.yaf.md)
- Клас Yaf_Request_Simple

# Клас Yaf_Request_Simple

(Yaf \>u003d1.0.0)

## Вступ

**Yaf_Request_Simple** зазвичай використовується для тестування.
Наприклад, для емуляції спеціальних запитів із режиму CLI.

## Огляд класів

class **Yaf_Request_Simple** extends
[Yaf_Request_Abstract](class.yaf-request-abstract.md) {

/\* Константи \*/

const string `SCHEME_HTTP` u003d http;

const string `SCHEME_HTTPS` u003d https;

/\* Властивості \*/

/\* Методи \*/

public [\_\_construct](yaf-request-simple.construct.md)(
string `$method` u003d ?,
string `$module` u003d ?,
string `$controller` u003d ?,
string `$action` u003d ?,
array `$params` u003d ?
)

public [get](yaf-request-simple.get.md)(): void

public [getCookie](yaf-request-simple.getcookie.md)(): void

public [getFiles](yaf-request-simple.getfiles.md)(): void

public [getPost](yaf-request-simple.getpost.md)(): void

public [getQuery](yaf-request-simple.getquery.md)(): void

public [getRequest](yaf-request-simple.getrequest.md)(): void

public [isXmlHttpRequest](yaf-request-simple.isxmlhttprequest.md)():
void

/\* Наслідувані методи \*/

public
[Yaf_Request_Abstract::clearParams](yaf-request-abstract.clearparams.md)():
bool

public
[Yaf_Request_Abstract::getActionName](yaf-request-abstract.getactionname.md)():
void

public
[Yaf_Request_Abstract::getBaseUri](yaf-request-abstract.getbaseuri.md)():
void

public
[Yaf_Request_Abstract::getControllerName](yaf-request-abstract.getcontrollername.md)():
void

public
[Yaf_Request_Abstract::getEnv](yaf-request-abstract.getenv.md)(string
`$name`, string `$default` u003d ?): void

public
[Yaf_Request_Abstract::getException](yaf-request-abstract.getexception.md)():
void

public
[Yaf_Request_Abstract::getLanguage](yaf-request-abstract.getlanguage.md)():
void

public
[Yaf_Request_Abstract::getMethod](yaf-request-abstract.getmethod.md)():
string

public
[Yaf_Request_Abstract::getModuleName](yaf-request-abstract.getmodulename.md)():
void

public
[Yaf_Request_Abstract::getParam](yaf-request-abstract.getparam.md)(string
`$name`, string `$default` u003d ?):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public
[Yaf_Request_Abstract::getParams](yaf-request-abstract.getparams.md)():
array

public
[Yaf_Request_Abstract::getRequestUri](yaf-request-abstract.getrequesturi.md)():
void

public
[Yaf_Request_Abstract::getServer](yaf-request-abstract.getserver.md)(string
`$name`, string `$default` u003d ?): void

public [Yaf_Request_Abstract::isCli](yaf-request-abstract.iscli.md)():
bool

public
[Yaf_Request_Abstract::isDispatched](yaf-request-abstract.isdispatched.md)():
bool

public [Yaf_Request_Abstract::isGet](yaf-request-abstract.isget.md)():
bool

public
[Yaf_Request_Abstract::isHead](yaf-request-abstract.ishead.md)(): bool

public
[Yaf_Request_Abstract::isOptions](yaf-request-abstract.isoptions.md)():
bool

public
[Yaf_Request_Abstract::isPost](yaf-request-abstract.ispost.md)(): bool

public [Yaf_Request_Abstract::isPut](yaf-request-abstract.isput.md)():
bool

public
[Yaf_Request_Abstract::isRouted](yaf-request-abstract.isrouted.md)():
bool

public
[Yaf_Request_Abstract::isXmlHttpRequest](yaf-request-abstract.isxmlhttprequest.md)():
bool

public
[Yaf_Request_Abstract::setActionName](yaf-request-abstract.setactionname.md)(string
`$action`, bool `$format_name` u003d true): void

public
[Yaf_Request_Abstract::setBaseUri](yaf-request-abstract.setbaseuri.md)(string
`$uir`): bool

public
[Yaf_Request_Abstract::setControllerName](yaf-request-abstract.setcontrollername.md)(string
`$controller`, bool `$format_name` u003d true): void

public
[Yaf_Request_Abstract::setDispatched](yaf-request-abstract.setdispatched.md)():
void

public
[Yaf_Request_Abstract::setModuleName](yaf-request-abstract.setmodulename.md)(string
`$module`, bool `$format_name` u003d true): void

public
[Yaf_Request_Abstract::setParam](yaf-request-abstract.setparam.md)(string
`$name`, string `$value` u003d ?): bool

public
[Yaf_Request_Abstract::setRequestUri](yaf-request-abstract.setrequesturi.md)(string
`$uir`): void

public
[Yaf_Request_Abstract::setRouted](yaf-request-abstract.setrouted.md)(string
`$flag` u003d ?): void

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

**`Yaf_Request_Simple::SCHEME_HTTP`**

**`Yaf_Request_Simple::SCHEME_HTTPS`**

## Зміст

- [Yaf_Request_Simple::\_\_construct](yaf-request-simple.construct.md)
- Конструктор класу Yaf_Request_Simple
- [Yaf_Request_Simple::get](yaf-request-simple.get.md) — Призначення
get
- [Yaf_Request_Simple::getCookie](yaf-request-simple.getcookie.md) -
Призначення getCookie
- [Yaf_Request_Simple::getFiles](yaf-request-simple.getfiles.md) -
Призначення getFiles
- [Yaf_Request_Simple::getPost](yaf-request-simple.getpost.md) -
Призначення getPost
- [Yaf_Request_Simple::getQuery](yaf-request-simple.getquery.md) -
Призначення getQuery
- [Yaf_Request_Simple::getRequest](yaf-request-simple.getrequest.md)
- Призначення getRequest
- [Yaf_Request_Simple::isXmlHttpRequest](yaf-request-simple.isxmlhttprequest.md)
- Визначає, чи є запит AJAX-запитом
