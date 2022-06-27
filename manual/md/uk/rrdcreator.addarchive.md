- [«RRDCreator](class.rrdcreator.md)
- [RRDCreator::addDataSource »](rrdcreator.adddatasource.md)

- [PHP Manual](index.md)
- [RRDCreator](class.rrdcreator.md)
- Додає RRA – архів значень даних для кожного джерела даних

# RRDCreator::addArchive

(PECL rrd \>u003d 0.9.0)

RRDCreator::addArchive — Додає RRA - архів значень даних для
кожного джерела даних

### Опис

public **RRDCreator::addArchive**(string `$description`): void

Додає визначення RRA за описом архіву. Архів складається з низки
значень даних або статистики для кожного з певних джерел
даних (ІД). Джерела даних визначаються методом
[RRDCreator::addDataSource()](rrdcreator.adddatasource.md). Необхідно
викликати цей метод кожному за запитаного архіву.

### Список параметрів

`description`
Визначення архіву – RRA. Має той самий формат, що і визначення RRA в
команда rrd create. Дивіться сторінку посібника з rrd create для
отримання більш детальної інформації.

### Значення, що повертаються

Функція не повертає значення після виконання.
