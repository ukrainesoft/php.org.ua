- [«
Yaf_Dispatcher::throwException](yaf-dispatcher.throwexception.md)
- [Yaf_Config_Abstract::get »](yaf-config-abstract.get.md)

- [PHP Manual](index.md)
- [Yaf](book.yaf.md)
- Клас Yaf_Config_Abstract

# Клас Yaf_Config_Abstract

(Yaf \>u003d1.0.0)

## Вступ

## Огляд класів

abstract class **Yaf_Config_Abstract** {

/\* Властивості \*/

protected `$_config`;

protected `$_readonly`;

/\* Методи \*/

abstract public [get](yaf-config-abstract.get.md)(string `$name`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

abstract public [readonly](yaf-config-abstract.readonly.md)(): bool

abstract public [set](yaf-config-abstract.set.md)():
[Yaf_Config_Abstract](class.yaf-config-abstract.md)

abstract public [toArray](yaf-config-abstract.toarray.md)(): array

}

## Властивості

`_config`

`_readonly`

## Зміст

- [Yaf_Config_Abstract::get](yaf-config-abstract.get.md) - Геттер
- [Yaf_Config_Abstract::readonly](yaf-config-abstract.readonly.md) -
Знаходить конфігурацію лише для читання
- [Yaf_Config_Abstract::set](yaf-config-abstract.set.md) - Сеттер
- [Yaf_Config_Abstract::toArray](yaf-config-abstract.toarray.md)
Приведення до масиву
