- [«
Yaf_View_Interface::setScriptPath](yaf-view-interface.setscriptpath.md)
- [Yaf_View_Simple::assign »](yaf-view-simple.assign.md)

- [PHP Manual](index.md)
- [Yaf](book.yaf.md)
- Клас Yaf_View_Simple

# Клас Yaf_View_Simple

(Yaf \>u003d1.0.0)

## Вступ

**Yaf_View_Simple** - це вбудований шаблонний движок Yaf. Він простий,
але швидкий і підтримує лише шаблони PHP-скриптів.

## Огляд класів

class **Yaf_View_Simple** implements
[Yaf_View_Interface](class.yaf-view-interface.md) {

/\* Властивості \*/

protected `$_tpl_vars`;

protected `$_tpl_dir`;

/\* Методи \*/

final public [\_\_construct](yaf-view-simple.construct.md)(string
`$template_dir`, array `$options` u003d ?)

public [assign](yaf-view-simple.assign.md)(string `$name`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
$value u003d ?): bool

public [assignRef](yaf-view-simple.assignref.md)(string `$name`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`&$value`): bool

public [clear](yaf-view-simple.clear.md)(string `$name` u003d ?): bool

public [display](yaf-view-simple.display.md)(string `$tpl`, array
`$tpl_vars` u003d ?): bool

public [eval](yaf-view-simple.eval.md)(string `$tpl_content`, array
`$tpl_vars` u003d ?): string

public [\_\_get](yaf-view-simple.get.md)(string `$name` u003d ?): void

public [getScriptPath](yaf-view-simple.getscriptpath.md)(): string

public [\_\_isset](yaf-view-simple.isset.md)(string `$name`): void

public [render](yaf-view-simple.render.md)(string `$tpl`, array
`$tpl_vars` u003d ?): string

public [\_\_set](yaf-view-simple.set.md)(string `$name`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value`): void

public [setScriptPath](yaf-view-simple.setscriptpath.md)(string
`$template_dir`): bool

}

## Властивості

`_tpl_vars`

`_tpl_dir`

## Зміст

- [Yaf_View_Simple::assign](yaf-view-simple.assign.md) — Призначити
значення
- [Yaf_View_Simple::assignRef](yaf-view-simple.assignref.md) -
Призначення assignRef
- [Yaf_View_Simple::clear](yaf-view-simple.clear.md) - Скидає
призначені значення
- [Yaf_View_Simple::\_\_construct](yaf-view-simple.construct.md) -
Конструктор класу Yaf_View_Simple
- [Yaf_View_Simple::display](yaf-view-simple.display.md) -
Відмальовує та відображає
- [Yaf_View_Simple::eval](yaf-view-simple.eval.md) - Малює
шаблон
- [Yaf_View_Simple::\_\_get](yaf-view-simple.get.md) - Отримує
призначену змінну
- [Yaf_View_Simple::getScriptPath](yaf-view-simple.getscriptpath.md)
— Отримує каталог шаблонів
- [Yaf_View_Simple::\_\_isset](yaf-view-simple.isset.md) -
Призначення \_\_isset
- [Yaf_View_Simple::render](yaf-view-simple.render.md) -
Малює шаблон
- [Yaf_View_Simple::\_\_set](yaf-view-simple.set.md) - Встановлює
значення для двигуна
- [Yaf_View_Simple::setScriptPath](yaf-view-simple.setscriptpath.md)
— Встановлює каталог шаблонів
