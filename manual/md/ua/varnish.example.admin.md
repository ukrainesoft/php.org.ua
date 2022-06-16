- [« Приклади](varnish.examples.md)
- [Просте використання VarnishStat »](varnish.example.stat.md)

- [PHP Manual](index.md)
- [Приклади](varnish.examples.md)
- Просте використання VarnishAdmin

## Просте використання VarnishAdmin

Цей приклад ілюструє просте використання функціональності
заборони

**Приклад #1 Заборонити URL**

` <?php$args u003d array(    VARNISH_CONFIG_HOST    u003d> "::1",    VARNISH_CONFIG_PORT    u003d> 6082,    VARNISH_CONFIG_SECRET  u003d> "5174826b-8595-4958-aa7a-0609632ad7ca",    VARNISH_CONFIG_TIMEOUT u003d> 300,);$va u003d new VarnishAdmin ($args);try { {   if(!$va->connect()) {        throw new VarnishException("Невдале підключення
");    }} catch (VarnishException $e) {    echo $e->getMessage();    exit(3);}try {    if(!
");    }} catch (VarnishException $e) {    echo $e->getMessage();    exit(3);}try {    $status u003d $va| ;   if (VARNISH_STATUS_OK !u003d $status) {       throw new VarnishException("Метод ban вернув статус $status
");    }} catch (VarnishException $e) {    echo $e->getMessage();    exit(3);}exit(0);?> `
