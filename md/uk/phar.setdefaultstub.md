- [« Phar::setAlias](phar.setalias.md)
- [Phar::setMetadata »](phar.setmetadata.md)

- [PHP Manual](index.md)
- [Phar](class.phar.md)
- Встановити завантажувач PHP або початкову заглушку Phar-архіву
завантажувач за замовчуванням

# Phar::setDefaultStub

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL phar u003d 2.0.0)

Phar::setDefaultStub — Встановити завантажувач PHP або початкову заглушку
Phar-архів у завантажувач за замовчуванням

### Опис

public **Phar::setDefaultStub**(?string `$index` u003d **`null`**, ?string
`$webIndex` u003d **`null`**): bool

> **Примітка**:
>
> Для коректної роботи з об'єктами [Phar](class.phar.md) цим методом
> необхідна установка значення `php.ini` `phar.readonly` у `0`. В
> інакше, буде викинуто виняток
> [PharException](class.pharexception.md).

Цей метод комбінує функціональність двох інших методів,
[Phar::createDefaultStub()](phar.createdefaultstub.md) та
[Phar::setStub()](phar.setstub.md).

### Список параметрів

`index`
Відносний шлях у phar-архіві для запуску при доступі з командної
рядки

`webIndex`
Відносний шлях у phar-архіві для запуску при доступі з веб-браузера

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Помилки

Буде викинуто виняток
[UnexpectedValueException](class.unexpectedvalueexception.md), якщо
[phar.readonly](phar.configuration.md#ini.phar.readonly) дозволено у
php.ini. У разі проблем із записом на диск буде викинуто виняток
[PharException](class.pharexception.md).

### Список змін

| Версія | Опис |
|--------|---------------------------------------- ----|
| 8.0.0 | `webIndex` тепер припускає значення null. |

### Приклади

**Приклад #1 Приклад використання **Phar::setDefaultStub()****

`<?phptry {   $phar u003d new Phar('myphar.phar'); $phar->setDefaultStub('cli.php', 'web/index.php'); // це аналогічно такому коду:    /// $phar->setStub($phar->createDefaultStub('cli.php', 'web/index.php'));} catch (Exception $e) { | ?> `

### Дивіться також

- [Phar::setStub()](phar.setstub.md) - Встановити завантажувач або
завантажувальну заглушку в Phar-архів
- [Phar::createDefaultStub()](phar.createdefaultstub.md) - Створити
заглушку у форматі phar-архіву
