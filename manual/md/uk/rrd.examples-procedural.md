- [« Приклади](rrd.examples.md)
- [Об'єктно-орієнтований приклад PECL/rrd »](rrd.examples-oop.md)

- [PHP Manual](index.md)
- [Приклади](rrd.examples.md)
- Процедурний приклад PECL/rrd

## Процедурний приклад PECL/rrd

**Приклад #1 Використання rrd у процедурному стилі**

` <?php$rrdFile u003d dirname(__FILE__) . "/speed.rrd";//створення файлу ",  "RRA:AVERAGE:0.5:6:10"  ));//оновлення файлу rrdrrd_update($rrdFile, array( ""920804700:12345",  "92080500; . "/speed.png", array(  "--start", "920804400", "--end", "920808000", "--vertical-label", "m/s", DEF:myed rrdFile:speed:AVERAGE", "CDEF:realspeedu003dmyspeed,1000,*", "LINE2:realspeed#FF0000" ));?> `
