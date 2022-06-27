- [« Просте використання VarnishAdmin](varnish.example.admin.md)
- [Просте використання VarnishLog »](varnish.example.log.md)

- [PHP Manual](index.md)
- [Приклади](varnish.examples.md)
- Просте використання VarnishStat

## Просте використання VarnishStat

Цей приклад ілюструє отримання знімка статистики varnish з
пам'яті

**Приклад #1 Отримати фотографію статистики**

` <?php$vs u003d new VarnishStat;try {   $data u003d $vs->getSnapshot();} catch (VarnishException $e) {    echo $e->es; exit(3);}exit(0);?> `
