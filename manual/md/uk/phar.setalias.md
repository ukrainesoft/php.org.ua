- [« Phar::running](phar.running.md)
- [Phar::setDefaultStub »](phar.setdefaultstub.md)

- [PHP Manual](index.md)
- [Phar](class.phar.md)
- Встановити псевдонім для Phar-архіву

# Phar::setAlias

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL phar u003d 1.2.1)

Phar::setAlias — Встановити псевдонім для Phar-архіву

### Опис

public **Phar::setAlias**(string `$alias`): bool

> **Примітка**:
>
> Для коректної роботи з об'єктами [Phar](class.phar.md) цим методом
> необхідна установка значення `php.ini` `phar.readonly` у `0`. В
> інакше, буде викинуто виняток
> [PharException](class.pharexception.md).

Встановлює псевдонім для Phar-архіву та записує його як постійний
псевдонім для цього архіву. Псевдонім можна використовувати всередині
phar-архіву для впевненості в тому, що доступ через потокову обгортку
`phar` для доступу до внутрішніх файлів буде працювати завжди, незалежно
від розташування phar-архіву на файловій системі. Іншою альтернативою
є надія на перехоплення [include](function.include.md) або
використання [Phar::interceptFileFuncs()](phar.interceptfilefuncs.md)
разом із відносними шляхами.

### Список параметрів

`alias`
Коротке ім'я, яке можна використовувати з доступом через
потокову обгортку `phar`.

### Значення, що повертаються

### Помилки

Викидає виняток
[UnexpectedValueException](class.unexpectedvalueexception.md), якщо
доступ заборонено і [PharException](class.pharexception.md), якщо
псевдонім вже використовується, або виникли проблеми із записом на диск.

### Приклади

**Приклад #1 Приклад використання **Phar::setAlias()****

`<?phptry {   $phar u003d new Phar('myphar.phar'); $phar->setAlias('myp.phar');} catch (Exception $e) {    // обробка помилок}?> `

### Дивіться також

- [Phar::\_\_construct()](phar.construct.md) - Створює об'єкт
Phar-архіву
- [Phar::interceptFileFuncs()](phar.interceptfilefuncs.md) -
Вказує phar перехоплювати fopen, file_get_contents, opendir і все
stat-функції
