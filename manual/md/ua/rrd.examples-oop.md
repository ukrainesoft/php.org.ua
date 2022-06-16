- [« Процедурний приклад PECL/rrd](rrd.examples-procedural.md)
- [Функції RRD»] (ref.rrd.md)

- [PHP Manual](index.md)
- [Приклади](rrd.examples.md)
- Об'єктно-орієнтований приклад PECL/rrd

## Об'єктно-орієнтований приклад PECL/rrd

**Приклад #1 Використання rrd в об'єктно-орієнтованому стилі**

` <?php$rrdFile u003d dirname(__FILE__) . "/speed.rrd";$outputPngFileu003du003ddirname(__FILE__) . "/speed.png";$creatoru003du003dnew RRDCreator($rrdFile, "now -10d", 500);$creator->addDataSource("speed:COUNTER:600:U:U");$creator->addArchive( "AVERAGE:0.5:1:24");$creator->addArchive("AVERAGE:0.5:6:10");$creator->save();$updater u003d new RRDUpdater($rrdFile);$updater-> update(array("speed" u003d> "12345"), "920804700");$updater->update(array("speed" u003d> "12357"), "920805000");$graphObj $u003d );$graphObj->setOptions(    array(        "--start" u003d> "920804400",        "--end" u003d> 920808000,        "--vertical-label" u003d> "m/s",        "DEF:myspeedu003d $rrdFile:speed:AVERAGE",  |CDEF:realspeedu003dmyspeed,1000,*",        "LINE2:realspeed#FF0000"    ));$graphObj->>
