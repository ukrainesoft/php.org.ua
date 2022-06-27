- [« Yaf_Config_Simple::valid](yaf-config-simple.valid.md)
- [Yaf_Controller_Abstract::\_\_construct
»](yaf-controller-abstract.construct.md)

- [PHP Manual](index.md)
- [Yaf](book.yaf.md)
- Клас Yaf_Controller_Abstract

# Клас Yaf_Controller_Abstract

(Yaf \>u003d1.0.0)

## Вступ

**Yaf_Controller_Abstract** це серце системи Yaf. MVC розшифровується
як Model-View-Controller і є шаблоном проектування,
призначений для відокремлення логіки програми від логіки відображення

Кожен контролер повинен успадковувати
**Yaf_Controller_Abstract**.

Ви виявите, що не можете визначити функцію \_\_construct для свого
користувача контролера, тому **Yaf_Controller_Abstract**
надає

Якщо ви визначили метод init() у своєму контролері користувача, він
буде викликатися доти, доки буде створено екземпляр контролера.

У дії під час надходження запиту може бути аргументи. Якщо в
параметри запиту є одна і та ж змінна імені
([Yaf_Request_Abstract::getParam()](yaf-request-abstract.getparam.md))
після перенаправлення, Yaf передасть їх методу дії
([Yaf_Action_Abstract::execute()](yaf-action-abstract.execute.md)).

> **Примітка**:
>
> Аргументи витягуються безпосередньо без фільтрації, перед використанням їх
> слід ретельно обробити.

## Огляд класів

abstract class **Yaf_Controller_Abstract** {

/\* Властивості \*/

public `$actions`;

protected `$_module`;

protected `$_name`;

protected `$_request`;

protected `$_response`;

protected `$_invoke_args`;

protected `$_view`;

/\* Методи \*/

final private [\_\_construct](yaf-controller-abstract.construct.md)()

protected [display](yaf-controller-abstract.display.md)(string `$tpl`,
array `$parameters` u003d ?): bool

public [forward](yaf-controller-abstract.forward.md)(string `$action`,
array `$paramters` u003d ?): bool

public [getInvokeArg](yaf-controller-abstract.getinvokearg.md)(string
`$name`): void

public [getInvokeArgs](yaf-controller-abstract.getinvokeargs.md)():
void

public [getModuleName](yaf-controller-abstract.getmodulename.md)():
string

public [getName](yaf-controller-abstract.getname.md)(): string

public [getRequest](yaf-controller-abstract.getrequest.md)():
[Yaf_Request_Abstract](class.yaf-request-abstract.md)

public [getResponse](yaf-controller-abstract.getresponse.md)():
[Yaf_Response_Abstract](class.yaf-response-abstract.md)

public [getView](yaf-controller-abstract.getview.md)():
[Yaf_View_Interface](class.yaf-view-interface.md)

public [getViewpath](yaf-controller-abstract.getviewpath.md)(): string

public [init](yaf-controller-abstract.init.md)(): void

public [initView](yaf-controller-abstract.initview.md)(array
`$options` u003d ?): void

public [redirect](yaf-controller-abstract.redirect.md)(string `$url`):
bool

protected [render](yaf-controller-abstract.render.md)(string `$tpl`,
array `$parameters` u003d ?): string

public [setViewpath](yaf-controller-abstract.setviewpath.md)(string
`$view_directory`): void

}

## Властивості

`actions`
Ви також можете визначити спосіб дії в окремому скрипті PHP,
використовуючи цю властивість і
[Yaf_Action_Abstract](class.yaf-action-abstract.md).

**Приклад #1 Визначення дії в окремому файлі**

` <?phpclass IndexController extends Yaf_Controller_Abstract {    protected $actions u003d array(        /** теперь dummyAction определяется в отдельном файле */        "dummy" u003d> "actions/Dummy_action.php",    ); /* у метода действия могут быть аргументы */    public function indexAction($name, $id) {       /* $name и $id небезопасные необработанные данные */       assert($name u003du003d $this->getRequest()->getParam( "name")); assert($id  u003du003du003d$this->_request->getParam("id")); }}?> `

**Приклад #2 Dummy_action.php**

`<?phpclass DummyAction extends Yaf_Action_Abstract {    /* класс дії повинен визначити цейметод як точку входу */    public       

`_module`
ім'я модуля

`_name`
ім'я контролера

`_request`
поточний об'єкт запиту

`_response`
поточний об'єкт відповіді

`_invoke_args`

`_view`
об'єкт движка відображення

## Зміст

- [Yaf_Controller_Abstract::\_\_construct](yaf-controller-abstract.construct.md)
- Конструктор класу Yaf_Controller_Abstract
- [Yaf_Controller_Abstract::display](yaf-controller-abstract.display.md)
- Призначення display
- [Yaf_Controller_Abstract::forward](yaf-controller-abstract.forward.md)
— Переходить до іншої дії
- [Yaf_Controller_Abstract::getInvokeArg](yaf-controller-abstract.getinvokearg.md)
- Призначення getInvokeArg
- [Yaf_Controller_Abstract::getInvokeArgs](yaf-controller-abstract.getinvokeargs.md)
— Призначення getInvokeArgs
- [Yaf_Controller_Abstract::getModuleName](yaf-controller-abstract.getmodulename.md)
— Отримує ім'я модуля
- [Yaf_Controller_Abstract::getName](yaf-controller-abstract.getname.md)
— Отримує своє ім'я
- [Yaf_Controller_Abstract::getRequest](yaf-controller-abstract.getrequest.md)
— Отримує поточний об'єкт запиту
- [Yaf_Controller_Abstract::getResponse](yaf-controller-abstract.getresponse.md)
— Отримує поточний об'єкт відповіді
- [Yaf_Controller_Abstract::getView](yaf-controller-abstract.getview.md)
- Отримує двигун відображення
- [Yaf_Controller_Abstract::getViewpath](yaf-controller-abstract.getviewpath.md)
- Призначення getViewpath
- [Yaf_Controller_Abstract::init](yaf-controller-abstract.init.md)
Ініціалізатор контролера
- [Yaf_Controller_Abstract::initView](yaf-controller-abstract.initview.md)
- Призначення initView
- [Yaf_Controller_Abstract::redirect](yaf-controller-abstract.redirect.md)
— Перенаправляє на URL
- [Yaf_Controller_Abstract::render](yaf-controller-abstract.render.md)
— Відображає шаблон представлення
- [Yaf_Controller_Abstract::setViewpath](yaf-controller-abstract.setviewpath.md)
- Призначення setViewpath
