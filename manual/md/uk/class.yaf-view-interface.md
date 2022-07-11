- [«
Yaf_Action_Abstract::getControllerName](yaf-controller-abstract.getcontrollername.md)
- [Yaf_View_Interface::assign »](yaf-view-interface.assign.md)

- [PHP Manual](index.md)
- [Yaf](book.yaf.md)
- Клас Yaf_View_Interface

# Клас Yaf_View_Interface

(Yaf \>u003d1.0.0)

## Вступ

Yaf надає розробникам можливість використовувати їх власний
двигун відображення, що відрізняється від вбудованого
[Yaf_View_Simple](class.yaf-view-simple.md). Приклад реалізації
дивіться в описі
[Yaf_Dispatcher::setView()](yaf-dispatcher.setview.md).

## Огляд класів

class **Yaf_View_Interface** {

/\* Методи \*/

abstract public [assign](yaf-view-interface.assign.md)(string `$name`,
string `$value` u003d ?): bool

abstract public [display](yaf-view-interface.display.md)(string
`$tpl`, array `$tpl_vars` u003d ?): bool

abstract public
[getScriptPath](yaf-view-interface.getscriptpath.md)(): void

abstract public [render](yaf-view-interface.render.md)(string `$tpl`,
array `$tpl_vars` u003d ?): string

abstract public
[setScriptPath](yaf-view-interface.setscriptpath.md)(string
`$template_dir`): void

}

## Зміст

- [Yaf_View_Interface::assign](yaf-view-interface.assign.md) -
Призначає значення для движка відображення
- [Yaf_View_Interface::display](yaf-view-interface.display.md) -
Відмальовує та виводить шаблон
- [Yaf_View_Interface::getScriptPath](yaf-view-interface.getscriptpath.md)
- Призначення getScriptPath
- [Yaf_View_Interface::render](yaf-view-interface.render.md) -
Малює шаблон
- [Yaf_View_Interface::setScriptPath](yaf-view-interface.setscriptpath.md)
- Призначення setScriptPath
