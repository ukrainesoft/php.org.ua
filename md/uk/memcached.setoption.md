- [« Memcached::setMultiByKey](memcached.setmultibykey.md)
- [Memcached::setOptions »](memcached.setoptions.md)

- [PHP Manual](index.md)
- [Memcached](class.memcached.md)
- Встановлює параметр для Memcached

# Memcached::setOption

(PECL memcached \>u003d 0.1.0)

Memcached::setOption — Встановлює параметр для Memcached

### Опис

public **Memcached::setOption**(int `$option`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value`): bool

Метод встановлює значення параметра Memcached, переданого в
`option`. Деякі параметри визначені в бібліотеці libmemcached, а
деякі вказані у модулі.

### Список параметрів

`option`
Одна з констант `Memcached::OPT_*`. Вивчіть розділ [константи
Memcached](memcached.constants.md) для отримання повнішої
інформації.

`value`
Значення, яке потрібно встановити.

> **Примітка**:
>
> Наведені нижче параметри вимагають значень, вказаних за допомогою
> Констант.
>
> - `Memcached::OPT_HASH` вимагає `Memcached::HASH_*` значень.
> - `Memcached::OPT_DISTRIBUTION` вимагає `Memcached::DISTRIBUTION_*`
> значень.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Встановлює Memcached параметр**

` <?php$m u003d new Memcached();var_dump($m->getOption(Memcached::OPT_HASH) u003du003d Memcached::HASH_DEFAULT);$m->setOption(Memcached::OPT_HASH, M; $m->setOption(Memcached::OPT_PREFIX_KEY, "widgets");echo "Prefix key is now: ", $m->getOption(Memcached::OPT_PREFIX_KEY), "
";?> `

Результат виконання цього прикладу:

bool(true)
Prefix key is now: widgets

### Дивіться також

- [Memcached::getOption()](memcached.getoption.md) - Отримує
значення Memcached параметра
- [Memcached::setOptions()](memcached.setoptions.md) - Встановлює
кілька Memcached параметрів
- [Memcached константи](memcached.constants.md)
