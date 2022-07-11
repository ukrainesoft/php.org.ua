- [« Обробник сесій WinCache](wincache.sessionhandler.md)
- [Типи ресурсів»] (wincache.resources.md)

- [PHP Manual](index.md)
- [Встановлення та налаштування](wincache.setup.md)
- Перенаправлення функцій WinCache

## Перенаправлення функцій WinCache

*ЗВЕРНІТЬ УВАГУ:*
[wincache.rerouteini](wincache.configuration.md#ini.wincache.rerouteini)
видалено у WinCache 1.3.7.0. Вона була замінена автоматичним
перенапрямком. Дивіться
[wincache.reroute_enabled](wincache.configuration.md#ini.wincache.reroute_enabled).

Перенаправлення функцій WinCache (доступно з WinCache 1.2.0, видалено з
WinCache 1.3.7.0) може використовуватися для заміни вбудованих функцій їх
еквіваленти, оптимізовані для роботи з файловим кешем. Модуль
WinCache включає оптимізовані під Windows реалізації функцій роботи
з файлами, що може підвищити продуктивність PHP-додатків у
випадках роботи з файлами та мережевими папками. Оптимізовані версії
представлені для наступних функцій:

- [file_exists](function.file-exists.md)
- [file_get_contents](function.file-get-contents.md)
- [readfile](function.readfile.md)
- [is_readable](function.is-readable.md)
- [is_writable](function.is-writable.md)
- [is_dir](function.is-dir.md)
- [realpath](function.realpath.md)
- [filesize](function.filesize.md)

Для налаштування використання перенаправлення у WinCache використовується файл
`reroute.ini`, який включено в інсталяційний пакет. Скопіюйте цей
файл в ту ж директорію, де знаходиться php.ini. Після цього додайте в
`php.ini` налаштування wincache.rerouteini та вкажіть абсолютний або
відносний шлях до `reroute.ini`.

**Приклад #1 Увімкнення перенаправлення функцій у WinCache**

``` php.inicode
wincache.rerouteini u003d C:\PHPeroute.ini
````

> **Примітка**: Якщо перенаправлення функцій увімкнено, рекомендується
> Збільшити розмір файлового кеша WinCache. Його розмір налаштовується в
> директиві
> [wincache.fcachesize](wincache.configuration.md#ini.wincache.fcachesize).

Файл `reroute.ini` містить опис прив'язок вбудованих функцій PHP до
їх еквіваленти модуля WinCache. Кожен рядок файлу визначає прив'язку
з використанням наступного синтаксису:

`<Ім'я функції PHP>:[<кількість параметрів функції>]u003d<ім'я функції wincache>`

Приклад файлу наведено нижче. У цьому прикладі виклик PHP-функції
[file_get_contents()](function.file-get-contents.md) змінюється
викликом функції **wincache_file_get_contents()** тільки якщо кількість
переданих параметрів менше або дорівнює 2. Вказує кількість параметрів
корисно якщо підмінна функція реалізує обробку не всіх вихідних
параметрів.

**Приклад #2 Вміст файлу Reroute.ini**

``` php.inicode
[FunctionRerouteList]
file_existsu003dwincache_file_exists
file_get_contents:2u003dwincache_file_get_contents
readfile:2u003dwincache_readfile
is_readableu003dwincache_is_readable
is_writableu003dwincache_is_writable
is_writeableu003dwincache_is_writable
is_fileu003dwincache_is_file
is_diru003dwincache_is_dir
realpathu003dwincache_realpath
filesizeu003dwincache_filesize
````
