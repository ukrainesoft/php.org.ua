- [«
Yaf_Request_Simple::isXmlHttpRequest](yaf-request-simple.isxmlhttprequest.md)
- [Yaf_Response_Abstract::appendBody
»](yaf-response-abstract.appendbody.md)

- [PHP Manual](index.md)
- [Yaf](book.yaf.md)
- Клас Yaf_Response_Abstract

# Клас Yaf_Response_Abstract

(Yaf \>u003d1.0.0)

## Вступ

## Огляд класів

class **Yaf_Response_Abstract** {

/\* Константи \*/

const string `DEFAULT_BODY` u003d "content";

/\* Властивості \*/

protected `$_header`;

protected `$_body`;

protected `$_sendheader`;

/\* Методи \*/

public [\_\_construct](yaf-response-abstract.construct.md)()

public [appendBody](yaf-response-abstract.appendbody.md)(string
`$content`, string `$key` u003d ?): bool

public [clearBody](yaf-response-abstract.clearbody.md)(string `$key` u003d
?): bool

public [clearHeaders](yaf-response-abstract.clearheaders.md)(): void

public [getBody](yaf-response-abstract.getbody.md)(string `$key` u003d ?):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public [getHeader](yaf-response-abstract.getheader.md)(): void

public [prependBody](yaf-response-abstract.prependbody.md)(string
`$content`, string `$key` u003d ?): bool

public [response](yaf-response-abstract.response.md)(): void

protected [setAllHeaders](yaf-response-abstract.setallheaders.md)():
void

public [setBody](yaf-response-abstract.setbody.md)(string `$content`,
string `$key` u003d ?): bool

public [setHeader](yaf-response-abstract.setheader.md)(string `$name`,
string `$value`, bool `$replace` u003d ?): bool

public [setRedirect](yaf-response-abstract.setredirect.md)(string
`$url`): bool

private [\_\_toString](yaf-response-abstract.tostring.md)(): string

public [\_\_destruct](yaf-response-abstract.destruct.md)()

}

## Властивості

`_header`

`_body`

`_sendheader`

## Зміст

- [Yaf_Response_Abstract::appendBody](yaf-response-abstract.appendbody.md)
— Додає вміст до тіла відповіді
- [Yaf_Response_Abstract::clearBody](yaf-response-abstract.clearbody.md)
- Скидає все існуюче тіло відповіді
- [Yaf_Response_Abstract::clearHeaders](yaf-response-abstract.clearheaders.md)
- Скидає всі встановлені заголовки
- [Yaf_Response_Abstract::\_\_construct](yaf-response-abstract.construct.md)
- Конструктор класу Yaf_Response_Abstract
- [Yaf_Response_Abstract::\_\_destruct](yaf-response-abstract.destruct.md)
- Деструктор класу Yaf_Response_Abstract
- [Yaf_Response_Abstract::getBody](yaf-response-abstract.getbody.md)
— Отримує наявний вміст
- [Yaf_Response_Abstract::getHeader](yaf-response-abstract.getheader.md)
- Призначення getHeader
- [Yaf_Response_Abstract::prependBody](yaf-response-abstract.prependbody.md)
- Призначення prependBody
- [Yaf_Response_Abstract::response](yaf-response-abstract.response.md)
- Відправляє відповідь
- [Yaf_Response_Abstract::setAllHeaders](yaf-response-abstract.setallheaders.md)
- Призначення setAllHeaders
- [Yaf_Response_Abstract::setBody](yaf-response-abstract.setbody.md)
- Встановлює вміст відповіді
- [Yaf_Response_Abstract::setHeader](yaf-response-abstract.setheader.md)
- Встановлює заголовок відповіді
- [Yaf_Response_Abstract::setRedirect](yaf-response-abstract.setredirect.md)
- Призначення setRedirect
- [Yaf_Response_Abstract::\_\_toString](yaf-response-abstract.tostring.md)
— Отримує все тіло у вигляді рядка
