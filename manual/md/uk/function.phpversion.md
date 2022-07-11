- [«phpinfo](function.phpinfo.md)
- [putenv»] (function.putenv.md)

- [PHP Manual](index.md)
- [Опції PHP/інформаційні функції](ref.info.md)
- Отримує поточну версію PHP

# phpversion

(PHP 4, PHP 5, PHP 7, PHP 8)

phpversion — Отримує поточну версію PHP

### Опис

**phpversion**(?string `$extension` u003d **`null`**): string\|false

Повертає рядок з номером версії поточного PHP-інтерпретатора або
модуля.

### Список параметрів

`extension`
Необов'язкове ім'я модуля.

### Значення, що повертаються

Повертає поточну версію PHP у вигляді рядка (string). Якщо у параметрі
`extension` вказано строкове значення (string), **phpversion()** поверне
версію цього модуля або **`false`**, якщо інформації про версію немає
модуль не ввімкнено.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -----|
| 8.0.0 | ` extension ` тепер допускає значення null. |

### Приклади

**Приклад #1 Приклад використання **phpversion()****

`<?php// Виводить рядок типу 'Поточна версія PHP: 4.1.1'echo 'Поточна версія PHP: ' . phpversion();//Виводить рядок типу '2.0' або нічого, якщомодуль не включеноecho phpversion('tidy');?> `

**Приклад #2 Приклад використання **`PHP_VERSION_ID`****

`<?php// PHP_VERSION_ID доступна в версіях PHP 5.2.7 і вище. Якщо// наша версія нижче, можна ее семулюватиif (!defined('PHP_VERSION_ID')) {    $version u003d explode('.', PHP_VERSION); define('PHP_VERSION_ID', ($version[0] * 10000 + $version[1] * 100 + $version[2]));}//PHP_VERSION_ID визначена як число. Чим більша кількість, тим новіше / / PHP. Эта константа задаётся по той же схеме, что приведена выше://// $version_id u003d $major_version * 10000 + $minor_version * 100 + $release_version;//// Теперь с PHP_VERSION_ID можно проверять, какая функциональность есть в// текущей версии PHP. Не обязательно пользоваться version_compare()// каждый раз, когда требуется проверить, поддерживает ли PHP нужную// нам функцию.//// Например, мы можем задать значения констант PHP_VERSION_*,// которые недоступны в версиях ранее 5.2.7if (PHP_VERSION_ID < 50207) {   define('PHP_MAJOR_VERSION',  $version[0]); define('PHP_MINOR_VERSION',  $version[1]); define('PHP_RELEASE_VERSION', $version[2]); // і так далі ...}?> `

### Примітки

> **Примітка**:
>
> Ця інформація також доступна через певну константу
> **`PHP_VERSION`**. Більш детальну інформацію можна отримати за допомогою
> констант **`PHP_VERSION_*`**.

### Дивіться також

- [Константи
PHP_VERSION](reserved.constants.md#reserved.constants.core)
- [version_compare()](function.version-compare.md) - Порівнює дві
"стандартизовані" рядки з номером версії PHP
- [phpinfo()](function.phpinfo.md) - Виводить інформацію про поточну
конфігурації PHP
- [phpcredits()](function.phpcredits.md) - Виводить список
розробників PHP
- [zend_version()](function.zend-version.md) - Отримує версію
движка Zend
