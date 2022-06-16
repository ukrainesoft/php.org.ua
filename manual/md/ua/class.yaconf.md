- [«Зумовлені константи](yaconf.constants.md)
- [Yaconf::get »](yaconf.get.md)

- [PHP Manual](index.md)
- [Yaconf] (book.yaconf.md)
- Клас Yaconf

# Клас Yaconf

(PECL yaconf \>u003d 1.0.0)

## Вступ

Yaconf - контейнер конфігурацій, він розбирає конфігураційні файли,
зберігає результат у PHP при запуску PHP, результат зберігається на
протягом усього життєвого циклу PHP.

## Огляд класів

class **Yaconf** {

/\* Методи \*/

public static [get](yaconf.get.md)(string `$name`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$default_value` u003d NULL):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public static [has](yaconf.has.md)(string `$name`): bool

}

## Зміст

- [Yaconf::get](yaconf.get.md) — Вийняти елемент
- [Yaconf::has](yaconf.has.md) — Визначити, чи існує елемент
