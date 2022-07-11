- [« VarnishAdmin::ban](varnishadmin.ban.md)
- [VarnishAdmin::clearPanic »](varnishadmin.clearpanic.md)

- [PHP Manual](index.md)
- [VarnishAdmin](class.varnishadmin.md)
- Заборонити URL, використовуючи вираз VCL

# VarnishAdmin::banUrl

(PECL varnish \>u003d 0.3)

VarnishAdmin::banUrl — Заборонити URL-адресу, використовуючи вираз VCL

### Опис

public **VarnishAdmin::banUrl**(string `$vcl_regex`): int

### Список параметрів

`vcl_regex`
Регулярний вираз URL у синтаксисі, сумісному з PCRE. Воно
ґрунтується на команді varnish ban.

### Значення, що повертаються

Повертає статус команди Varnish.
