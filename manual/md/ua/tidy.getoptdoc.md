- [« tidy::getOpt](tidy.getopt.md)
- [tidy::getRelease »](tidy.getrelease.md)

- [PHP Manual](index.md)
- [Tidy] (class.tidy.md)
- Повертає опис для опції із зазначеною назвою

# tidy::getOptDoc

# tidy_get_opt_doc

(PHP 5 \>u003d 5.1.0, PHP 7, PHP 8)

tidy::getOptDoc -- tidy_get_opt_doc -- Повертає опис для опції з
зазначеною назвою

### Опис

Об'єктно-орієнтований стиль

public **tidy::getOptDoc**(string `$option`): string\|false

Процедурний стиль

**tidy_get_opt_doc**([tidy](class.tidy.md) `$tidy`, string `$option`):
string\|false

Функція **tidy_get_opt_doc()** повертає опис для опції із зазначеним
назвою.

> **Примітка**:
>
> Для використання цієї функції потрібна бібліотека libtidy
> мінімум від 25 Квітня 2005 р.

### Список параметрів

`tidy`
Об'єкт [Tidy](class.tidy.md).

`optname`
Назва опції

### Значення, що повертаються

Повертається рядок існуючої опції та наявний опис, в іншому
У разі повертається **`false`**.

### Приклади

**Приклад #1 Друк усіх опцій разом з описом та значенням по
замовчуванням**

` <?php$tidy u003d new tidy;$config u003d $tidy->getConfig();ksort($config);foreach ($config as $opt u003d> $val) {    if (!$doc u003d $ti getOptDoc($opt))        $doc u003d 'документація неіснує!'; $val u003d ($tidy->getOpt($opt) u003du003du003d true) ? 'true':: $val; $val u003d ($tidy->getOpt($opt) u003du003du003d false) ? 'false' : $val; echo "<p><b>$opt</b> (default: '$val')<br />". "$doc</p><hr />
";}?> `

### Дивіться також

- [tidy::getconfig()](tidy.getconfig.md) - Отримує поточну
конфігурацію Tidy
- [tidy::getopt()](tidy.getopt.md) - Повертає значення вказаного
параметра конфігурації для документа tidy
