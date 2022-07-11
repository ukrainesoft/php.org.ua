- [« RRDCreator::addArchive](rrdcreator.addarchive.md)
- [RRDCreator::\_\_construct »](rrdcreator.construct.md)

- [PHP Manual](index.md)
- [RRDCreator](class.rrdcreator.md)
- Додає визначення джерела даних для бази даних RRD

# RRDCreator::addDataSource

(PECL rrd \>u003d 0.9.0)

RRDCreator::addDataSource — Додає визначення джерела даних для
бази даних RRD

### Опис

public **RRDCreator::addDataSource**(string `$description`): void

RRD може приймати введення від кількох джерел даних (ІД), наприклад,
з вхідного та вихідного трафіку. Цей метод додає джерело даних
за описом. Необхідно викликати цей метод для кожного джерела
даних.

### Список параметрів

`description`
Визначення джерела даних – ВД. Має той самий формат, що й
визначення ІД у команді rrd create. Дивіться сторінку посібника з
rrd create для отримання більш детальної інформації.

### Значення, що повертаються

Функція не повертає значення після виконання.
