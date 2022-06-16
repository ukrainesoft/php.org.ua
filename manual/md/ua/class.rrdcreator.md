- [«rrdc_disconnect](function.rrdc-disconnect.md)
- [RRDCreator::addArchive »](rrdcreator.addarchive.md)

- [PHP Manual](index.md)
- [RRD](book.rrd.md)
- Клас RRDCreator

# Клас RRDCreator

(PECL rrd \>u003d 0.9.0)

## Вступ

Клас створення файлів бази даних RRD.

## Огляд класів

class **RRDCreator** {

/\* Методи \*/

public [\_\_construct](rrdcreator.construct.md)(string `$path`, string
`$startTime` u003d ?, int `$step` u003d 0)

public [addArchive](rrdcreator.addarchive.md)(string `$description`):
void

public [addDataSource](rrdcreator.adddatasource.md)(string
`$description`): void

public [save](rrdcreator.save.md)(): bool

}

## Зміст

- [RRDCreator::addArchive](rrdcreator.addarchive.md) — Додає
RRA – архів значень даних для кожного джерела даних
- [RRDCreator::addDataSource](rrdcreator.adddatasource.md)
Додає визначення джерела даних для бази даних RRD
- [RRDCreator::\_\_construct](rrdcreator.construct.md) - Створює
новий екземпляр RRDCreator
- [RRDCreator::save](rrdcreator.save.md) — Зберігає базу даних RRD
у файл
