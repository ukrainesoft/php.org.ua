- [« Просте використання VarnishLog](varnish.example.log.md)
- [VarnishAdmin::auth »](varnishadmin.auth.md)

- [PHP Manual](index.md)
- [Varnish](book.varnish.md)
- Клас VarnishAdmin

# Клас VarnishAdmin

(PECL varnish \>u003d 0.3)

## Вступ

## Огляд класів

class **VarnishAdmin** {

/\* Методи \*/

public [auth](varnishadmin.auth.md)(): bool

public [ban](varnishadmin.ban.md)(string `$vcl_regex`): int

public [banUrl](varnishadmin.banurl.md)(string `$vcl_regex`): int

public [clearPanic](varnishadmin.clearpanic.md)(): int

public [connect](varnishadmin.connect.md)(): bool

public [\_\_construct](varnishadmin.construct.md)(array `$args` u003d ?)

public [disconnect](varnishadmin.disconnect.md)(): bool

public [getPanic](varnishadmin.getpanic.md)(): string

public [getParams](varnishadmin.getparams.md)(): array

public [isRunning](varnishadmin.isrunning.md)(): bool

public [setCompat](varnishadmin.setcompat.md)(int `$compat`): void

public [setHost](varnishadmin.sethost.md)(string `$host`): void

public [setIdent](varnishadmin.setident.md)(string `$ident`): void

public [setParam](varnishadmin.setparam.md)(string `$name`,
string\|int `$value`): int

public [setPort](varnishadmin.setport.md)(int `$port`): void

public [setSecret](varnishadmin.setsecret.md)(string `$secret`): void

public [setTimeout](varnishadmin.settimeout.md)(int `$timeout`): void

public [start](varnishadmin.start.md)(): int

public [stop](varnishadmin.stop.md)(): int

}

## Зміст

- [VarnishAdmin::auth](varnishadmin.auth.md) — Аутентифікація на
екземплярі varnish
- [VarnishAdmin::ban](varnishadmin.ban.md) — Заборонити URL-адресу,
використовуючи вираз VCL
- [VarnishAdmin::banUrl](varnishadmin.banurl.md) — Заборонити URL,
використовуючи вираз VCL
- [VarnishAdmin::clearPanic](varnishadmin.clearpanic.md) — Очистити
критичні повідомлення екземпляра varnish
- [VarnishAdmin::connect](varnishadmin.connect.md) — Підключення до
інтерфейсу адміністрування екземпляра varnish
- [VarnishAdmin::\_\_construct](varnishadmin.construct.md) -
VarnishAdmin constructor
- [VarnishAdmin::disconnect](varnishadmin.disconnect.md) -
Відключення від інтерфейсу адміністрування екземпляра varnish
- [VarnishAdmin::getPanic](varnishadmin.getpanic.md) — Отримати
останнє критичне повідомлення на екземплярі varnish
- [VarnishAdmin::getParams](varnishadmin.getparams.md) — Отримати
параметри конфігурації поточного екземпляра varnish
- [VarnishAdmin::isRunning](varnishadmin.isrunning.md) — Перевірити,
виконується зараз підпорядкований процес varnish
- [VarnishAdmin::setCompat](varnishadmin.setcompat.md) — Встановити
параметр конфігурації compat класу
- [VarnishAdmin::setHost](varnishadmin.sethost.md) — Встановити
параметр конфігурації host класу
- [VarnishAdmin::setIdent](varnishadmin.setident.md) — Встановити
параметр конфігурації ident класу
- [VarnishAdmin::setParam](varnishadmin.setparam.md) — Встановити
параметр конфігурації на поточному екземплярі varnish
- [VarnishAdmin::setPort](varnishadmin.setport.md) — Встановити
параметр конфігурації port класу
- [VarnishAdmin::setSecret](varnishadmin.setsecret.md) — Встановити
параметр конфігурації secret класу
- [VarnishAdmin::setTimeout](varnishadmin.settimeout.md) -
Встановити параметр конфігурації timeout класу
- [VarnishAdmin::start](varnishadmin.start.md) — Запустити робочого
процес varnish
- [VarnishAdmin::stop](varnishadmin.stop.md) — Зупинити робітник
процес varnish
