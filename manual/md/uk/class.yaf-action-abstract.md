- [«
Yaf_Controller_Abstract::setViewpath](yaf-controller-abstract.setviewpath.md)
- [Yaf_Action_Abstract::execute »](yaf-action-abstract.execute.md)

- [PHP Manual](index.md)
- [Yaf](book.yaf.md)
- Клас Yaf_Action_Abstract

# Клас Yaf_Action_Abstract

(Yaf \>u003d1.0.0)

## Вступ

Дія повинна визначатися в окремому файлі Yaf (дивіться
[Yaf_Controller_Abstract](class.yaf-controller-abstract.md)). Також,
всі класи дії повинні розширювати **Yaf_Action_Abstract**.

Так як необхідна точка входу, яку зміг би використовувати Yaf, ви,
вашому класі, повинні реалізувати метод
[Yaf_Action_Abstract::execute()](yaf-action-abstract.execute.md).

## Огляд класів

class **Yaf_Action_Abstract** extends
[Yaf_Controller_Abstract](class.yaf-controller-abstract.md) {

/\* Властивості \*/

protected `$_controller`;

/\* Методи \*/

abstract
public[execute](yaf-action-abstract.execute.md)([mixed](language.types.declarations.md#language.types.declarations.mixed)
`...$args`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public[getController](yaf-action-abstract.getcontroller.md)():
[Yaf_Controller_Abstract](class.yaf-controller-abstract.md)

public
[getControllerName](yaf-controller-abstract.getcontrollername.md)():
string

/\* Наслідувані методи \*/

protected
[Yaf_Controller_Abstract::display](yaf-controller-abstract.display.md)(string
`$tpl`, array `$parameters` u003d ?): bool

public
[Yaf_Controller_Abstract::forward](yaf-controller-abstract.forward.md)(string
`$action`, array `$paramters` u003d ?): bool

public
[Yaf_Controller_Abstract::getInvokeArg](yaf-controller-abstract.getinvokearg.md)(string
`$name`): void

public
[Yaf_Controller_Abstract::getInvokeArgs](yaf-controller-abstract.getinvokeargs.md)():
void

public
[Yaf_Controller_Abstract::getModuleName](yaf-controller-abstract.getmodulename.md)():
string

public
[Yaf_Controller_Abstract::getName](yaf-controller-abstract.getname.md)():
string

public
[Yaf_Controller_Abstract::getRequest](yaf-controller-abstract.getrequest.md)():
[Yaf_Request_Abstract](class.yaf-request-abstract.md)

public
[Yaf_Controller_Abstract::getResponse](yaf-controller-abstract.getresponse.md)():
[Yaf_Response_Abstract](class.yaf-response-abstract.md)

public
[Yaf_Controller_Abstract::getView](yaf-controller-abstract.getview.md)():
[Yaf_View_Interface](class.yaf-view-interface.md)

public
[Yaf_Controller_Abstract::getViewpath](yaf-controller-abstract.getviewpath.md)():
string

public
[Yaf_Controller_Abstract::init](yaf-controller-abstract.init.md)():
void

public
[Yaf_Controller_Abstract::initView](yaf-controller-abstract.initview.md)(array
`$options` u003d ?): void

public
[Yaf_Controller_Abstract::redirect](yaf-controller-abstract.redirect.md)(string
`$url`): bool

protected
[Yaf_Controller_Abstract::render](yaf-controller-abstract.render.md)(string
`$tpl`, array `$parameters` u003d ?): string

public
[Yaf_Controller_Abstract::setViewpath](yaf-controller-abstract.setviewpath.md)(string
`$view_directory`): void

}

## Властивості

`_module`

`_name`

`_request`

`_response`

`_invoke_args`

`_view`

`_controller`

## Зміст

- [Yaf_Action_Abstract::execute](yaf-action-abstract.execute.md)
Точка входу для Action-класів
- [Yaf_Action_Abstract::getController](yaf-action-abstract.getcontroller.md)
— Отримати об'єкт контролера
- [Yaf_Action_Abstract::getControllerName](yaf-controller-abstract.getcontrollername.md)
— Отримує ім'я контролера
