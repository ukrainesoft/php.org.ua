- [« PharData::offsetUnset](phardata.offsetunset.md)
- [PharData::setDefaultStub »](phardata.setdefaultstub.md)

- [PHP Manual](index.md)
- [PharData](class.phardata.md)
- Функція заглушка (Phar::setAlias не можна використовувати для PharData)

# PharData::setAlias

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL phar u003d 2.0.0)

PharData::setAlias — Функція заглушка (Phar::setAlias не можна
використовувати для PharData)

### Опис

public **PharData::setAlias**(string `$alias`): bool

Незапускані tar/zip-архіви не можуть мати псевдоніма, тому цей
Метод просто викидає виняток.

### Список параметрів

`alias`
Параметр ігнорується.

### Значення, що повертаються

### Помилки

Викидає виняток [PharException](class.pharexception.md)

### Дивіться також

- [Phar::setAlias()](phar.setalias.md) - Встановити псевдонім для
Phar-архіву
