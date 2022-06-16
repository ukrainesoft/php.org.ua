- [« VarnishAdmin::auth](varnishadmin.auth.md)
- [VarnishAdmin::banUrl »](varnishadmin.banurl.md)

- [PHP Manual](index.md)
- [VarnishAdmin](class.varnishadmin.md)
- Заборонити URL-адресу, використовуючи вираз VCL

# VarnishAdmin::ban

(PECL varnish \>u003d 0.3)

VarnishAdmin::ban — Заборонити URL-адресу за допомогою виразу VCL

### Опис

public **VarnishAdmin::ban**(string `$vcl_regex`): int

### Список параметрів

`vcl_regex`
Вираз Varnish VCL. Воно ґрунтується на команді varnish ban.

### Значення, що повертаються

Повертає статус команди Varnish.
