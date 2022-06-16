- [«
Yaf_Plugin_Abstract::routerStartup](yaf-plugin-abstract.routerstartup.md)
- [Yaf_Registry::\_\_construct »](yaf-registry.construct.md)

- [PHP Manual](index.md)
- [Yaf](book.yaf.md)
- Клас Yaf_Registry

# Клас Yaf_Registry

(Yaf \>u003d1.0.0)

## Вступ

Усі методи **Yaf_Registry** визначені як статичні, роблячи їх
Універсально доступними. Це надає можливості прочитати або
записати будь-які дані з будь-якого місця у вашому додатку.

## Огляд класів

class **Yaf_Registry** {

/\* Властивості \*/

static `$_instance`;

protected `$_entries`;

/\* Методи \*/

private [\_\_construct](yaf-registry.construct.md)()

public static [del](yaf-registry.del.md)(string `$name`): void

public static [get](yaf-registry.get.md)(string `$name`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public static [has](yaf-registry.has.md)(string `$name`): bool

public static [set](yaf-registry.set.md)(string `$name`, string
`$value`): bool

}

## Властивості

`_instance`

`_entries`

## Зміст

- [Yaf_Registry::\_\_construct](yaf-registry.construct.md) -
Yaf_Registry реалізує шаблон проектування "Одиночка"
- [Yaf_Registry::del](yaf-registry.del.md) — Видаляє елемент з
реєстру
- [Yaf_Registry::get](yaf-registry.get.md) — Отримує елемент із
реєстру
- [Yaf_Registry::has](yaf-registry.has.md) — Перевіряє, чи існує
чи елемент
- [Yaf_Registry::set](yaf-registry.set.md) — Додає елемент до
реєстр
