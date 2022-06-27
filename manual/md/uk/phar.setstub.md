- [« Phar::setSignatureAlgorithm](phar.setsignaturealgorithm.md)
- [Phar::startBuffering »](phar.startbuffering.md)

- [PHP Manual](index.md)
- [Phar](class.phar.md)
- Встановити завантажувач або завантажувальну заглушку в Phar-архів

# Phar::setStub

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL phar u003d 1.0.0)

Phar::setStub — Встановити завантажувач або завантажувальну заглушку в
Phar-архів

### Опис

public **Phar::setStub**(string `$stub`, int `$len` u003d -1): bool

> **Примітка**:
>
> Для коректної роботи з об'єктами [Phar](class.phar.md) цим методом
> необхідна установка значення `php.ini` `phar.readonly` у `0`. В
> інакше, буде викинуто виняток
> [PharException](class.pharexception.md).

Цей метод використовується для додавання початкової завантажувальної заглушки
PHP (PHP bootstrap loader stub) в новий Phar-архів, або для заміни вже
існуючого завантажувальної заглушки.

Завантажувач заглушки використовується при підключенні Phar-архіву за допомогою
included:

`<?phpinclude ''myphar.phar';?> `

Завантажувач недоступний, коли архів вмикається з використанням обгортки
`phar`, як у прикладі нижче:

`<?phpinclude 'phar://myphar.phar/somefile.php';?> `

### Список параметрів

`stub`
Рядок, або відкритий ресурс потоку.

`len`

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Помилки

Викидається виняток
[UnexpectedValueException](class.unexpectedvalueexception.md), якщо
[phar.readonly](phar.configuration.md#ini.phar.readonly) дозволено у
php.ini. У разі проблем із записом на диск буде викинуто виняток
[PharException](class.pharexception.md).

### Приклади

**Приклад #1 Приклад використання **Phar::setStub()****

` <?phptry {    $p u003d new Phar(dirname(__FILE__) . '/brandnewphar.phar', 0, 'brandnewphar.phar'); $p['a.php'] u003d '<?php var_dump("Hello");'; $p->setStub('<?php var_dump("First"); Phar::mapPhar("brandnewphar.phar"); __HALT_COMPILER(); ?>'); include 'phar://brandnewphar.phar/a.php'; var_dump($p->getStub()); $p['b.php'] u003d '<?php var_dump("World");'; $p->setStub('<?php var_dump("Second"); Phar::mapPhar("brandnewphar.phar"); __HALT_COMPILER(); ?>'); include 'phar://brandnewphar.phar/b.php'; var_dump($p->getStub());} catch (Exception $e) {   echo 'Операції запису на brandnewphar.phar завершилися невдачею: ', $e;}?> `

Результат виконання цього прикладу:

string(5) "Hello"
string(82) "<?php var_dump("First"); Phar::mapPhar("brandnewphar.phar"); __HALT_COMPILER(); ?>"
string(5) "World"
string(83) "<?php var_dump("Second"); Phar::mapPhar("brandnewphar.phar"); __HALT_COMPILER(); ?>"

### Дивіться також

- [Phar::getStub()](phar.getstub.md) - Отримати завантажувач PHP або
завантажувач заглушки Phar-архіву
- [Phar::createDefaultStub()](phar.createdefaultstub.md) - Створити
заглушку у форматі phar-архіву
