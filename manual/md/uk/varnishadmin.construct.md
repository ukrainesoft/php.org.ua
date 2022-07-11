- [« VarnishAdmin::connect](varnishadmin.connect.md)
- [VarnishAdmin::disconnect »](varnishadmin.disconnect.md)

- [PHP Manual](index.md)
- [VarnishAdmin](class.varnishadmin.md)
- VarnishAdmin constructor

# VarnishAdmin::\_\_construct

(PECL varnish \>u003d 0.3)

VarnishAdmin::\_\_construct — VarnishAdmin constructor

### Опис

public **VarnishAdmin::\_\_construct**(array `$args` u003d ?)

### Список параметрів

`args`
Аргументи конфігурації. Можливі ключі:

``` parameterscode
VARNISH_CONFIG_IDENT - ідентифікатор екземпляра varnish
VARNISH_CONFIG_HOST - IP-адреса екземпляра varnish
VARNISH_CONFIG_PORT - порт екземпляра varnish
VARNISH_CONFIG_SECRET - секрет екземпляра varnish
VARNISH_CONFIG_TIMEOUT - час очікування на читання підключення
VARNISH_CONFIG_COMPAT - сумісність зі старшими версіями varnish
````

### Значення, що повертаються

### Приклади

**Приклад #1 Приклад використання **VarnishAdmin::\_\_construct()****

` <?php    $args u003d array(        VARNISH_CONFIG_HOST u003d> "::1",        VARNISH_CONFIG_PORT u003d> 6082,        VARNISH_CONFIG_SECRET u003d> "5174826b-8595-4958-aa7a-0609632ad7ca",        VARNISH_CONFIG_TIMEOUT u003d> 300,    ); $va u003d new VarnishAdmin($args);?> `
