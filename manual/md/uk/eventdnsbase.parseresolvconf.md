- [«EventDnsBase::loadHosts](eventdnsbase.loadhosts.md)
- [EventDnsBase::setOption »](eventdnsbase.setoption.md)

- [PHP Manual](index.md)
- [EventDnsBase](class.eventdnsbase.md)
- Сканує файл у форматі resolv.conf

# EventDnsBase::parseResolvConf

(PECL event \>u003d 1.2.6-beta)

EventDnsBase::parseResolvConf — Сканує файл у форматі resolv.conf

### Опис

public **EventDnsBase::parseResolvConf**( int `$flags` , string
`$filename` ): bool

Сканує файл у форматі resolv.conf, що зберігається в filename, та зчитує
всі параметри з нього, які перелічені у прапорах.

### Список параметрів

`flags`
Визначає, яка інформація аналізується із файлу `resolv.conf`.
Перегляньте довідкову сторінку `resolv.conf` за форматом цього файлу.

Наступні директиви не аналізуються з файлу:
`sortlist, rotate, no-check-names, inet6, debug`.

Якщо функція виявляє помилку, можливі значення, що повертаються:

- **`1`** u003d не вдалося відкрити файл
- **`2`** u003d не вдалося визначити розмір файлу
- **`3`** u003d файл занадто великий
- **`4`** u003d недостатньо пам'яті
- **`5`** u003d коротке читання з файлу
- **`6`** u003d у файлі немає серверів імен

`filename`
Шлях до `resolv.conf` файлу.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.
