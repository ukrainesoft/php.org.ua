- [« Нові глобальні константи](migration70.constants.md)
- [Видалені модулі та SAPI »](migration70.removed-exts-sapis.md)

- [PHP Manual](index.md)
- [Міграція з PHP 5.6.x на PHP 7.0.x](migration70.md)
- Зміни у модулях SAPI

## Зміни в модулях SAPI

### [FPM](book.fpm.md)

#### Не повністю визначений порт [listen](install.fpm.configuration.md#listen) тепер слухає як IPv4, так і IPv6

У PHP 5 директива [listen](install.fpm.configuration.md#listen)
що містить тільки номер порту, призводила до прослуховування всіх
інтерфейси, але тільки по IPv4. PHP 7 тепер буде приймати як з IPv4,
так і з IPv6.

Це не впливає на директиви, що містять конкретні IP-адреси.
