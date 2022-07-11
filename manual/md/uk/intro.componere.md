- [«Componere](book.componere.md)
- [Встановлення та налаштування »](componere.setup.md)

- [PHP Manual](index.md)
- [Componere](book.componere.md)
-   Вступ

# Вступ

Componere _((латинська,\ англійська:\ compose)) призначений для
виробничих оточень та надає API для складання класів,
мавпячих патчів та приведення.

##### Структура:

[Componere\Definition](class.componere-definition.md) використовується для
визначення (або перевизначення) класу під час виконання; Потім
клас може бути зареєстрований і у разі перевизначення він замінює
вихідний клас доти, доки існує
[Componere\Definition](class.componere-definition.md).

public
[Componere\Definition::\_\_construct](componere-definition.construct.md)(string
`$name`)

public
[Componere\Definition::\_\_construct](componere-definition.construct.md)(string
`$name`, string `$parent`)

public
[Componere\Definition::\_\_construct](componere-definition.construct.md)(string
`$name`, array `$interfaces`)

public
[Componere\Definition::\_\_construct](componere-definition.construct.md)(string
`$name`, string `$parent`, array `$interfaces`)

##### Патчінг:

[Componere\Patch](class.componere-patch.md) використовується для зміни
класу конкретного екземпляра об'єкта під час виконання; Після
застосування виправлення буде застосовуватися до тих пір, поки існує
[Componere\Patch](class.componere-patch.md) і його можна скасувати.

public
[Componere\Patch::\_\_construct](componere-patch.construct.md)(object
`$instance`)

public
[Componere\Patch::\_\_construct](componere-patch.construct.md)(object
`$instance`, array `$interfaces`)

##### Приведення:

**Componere\** функції приведення можуть наводити серед певних
користувачем сумісних типів; У разі сумісності означає, що
**Type** є підлеглим або супер типом `object`.

[Componer

[Componer
`$object`): Type
