- [«
Yaf_Request_Abstract::setRouted](yaf-request-abstract.setrouted.md)
- [Yaf_Request_Http::\_\_construct »](yaf-request-http.construct.md)

- [PHP Manual](index.md)
- [Yaf](book.yaf.md)
- Клас Yaf_Request_Http

# Клас Yaf_Request_Http

(Yaf \>u003d1.0.0)

## Вступ

Будь-який запит від клієнта ініціалізується як **Yaf_Request_Http**. Ви
можете отримати інформацію про запит, наприклад, URI та параметри запиту,
використовуючи методи цього.

> **Примітка**:
>
> З метою безпеки $\_GET/$\_POST доступні тільки для читання в Yaf,
> що означає, що якщо ви встановите значення для цих глобальних
> змінних, ви не зможете отримати їх за допомогою
> [Yaf_Request_Http::getQuery()](yaf-request-http.getquery.md) або
> [Yaf_Request_Http::getPost()](yaf-request-http.getpost.md).
>
> Якщо виникає необхідність використання такого функціоналу при
> модульному тестуванні, Yaf може бути зібраний за допомогою
> --enable-yaf-debug, який дозволить Yaf прочитати значення, задане
> Користувачем через скрипт.
>
> У цьому випадку Yaf видасть попередження E_STRICT, щоб нагадати вам
> про це: Strict Standards: you are running yaf in debug mode

## Огляд класів

class **Yaf_Request_Http** extends
[Yaf_Request_Abstract](class.yaf-request-abstract.md) {

/\* Властивості \*/

/\* Методи \*/

public [\_\_construct](yaf-request-http.construct.md)(string
`$request_uri` u003d ?, string `$base_uri` u003d ?)

public [get](yaf-request-http.get.md)(string `$name`, string
`$default` u003d ?):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public [getCookie](yaf-request-http.getcookie.md)(string `$name`,
string `$default` u003d ?):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public [getFiles](yaf-request-http.getfiles.md)(): void

public [getPost](yaf-request-http.getpost.md)(string `$name`, string
`$default` u003d ?):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public [getQuery](yaf-request-http.getquery.md)(string `$name`, string
`$default` u003d ?):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public [getRaw](yaf-request-http.getraw.md)():
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public [getRequest](yaf-request-http.getrequest.md)(): void

public [isXmlHttpRequest](yaf-request-http.isxmlhttprequest.md)():
bool

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

## Зміст

- [Yaf_Request_Http::\_\_construct](yaf-request-http.construct.md) -
Конструктор класу Yaf_Request_Http
- [Yaf_Request_Http::get](yaf-request-http.get.md) - Отримує
змінну від клієнта
- [Yaf_Request_Http::getCookie](yaf-request-http.getcookie.md) -
Отримує змінну Cookie
- [Yaf_Request_Http::getFiles](yaf-request-http.getfiles.md) -
Призначення getFiles
- [Yaf_Request_Http::getPost](yaf-request-http.getpost.md) -
Отримує змінну POST
- [Yaf_Request_Http::getQuery](yaf-request-http.getquery.md) -
Отримує параметр запиту
- [Yaf_Request_Http::getRaw](yaf-request-http.getraw.md) - Отримує
необроблене тіло запиту
- [Yaf_Request_Http::getRequest](yaf-request-http.getrequest.md) -
Призначення getRequest
- [Yaf_Request_Http::isXmlHttpRequest](yaf-request-http.isxmlhttprequest.md)
— Визначає, чи є запит Ajax-запитом
