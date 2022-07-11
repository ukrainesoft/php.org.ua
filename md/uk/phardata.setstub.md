- [«
PharData::setSignatureAlgorithm](phardata.setsignaturealgorithm.md)
- [PharFileInfo »](class.pharfileinfo.md)

- [PHP Manual](index.md)
- [PharData](class.phardata.md)
- Функція заглушка (Phar::setStub не можна використовувати для PharData)

# PharData::setStub

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL phar u003d 2.0.0)

PharData::setStub — Функція заглушка (Phar::setStub не можна використовувати
для PharData)

### Опис

public **PharData::setStub**(string `$stub`, int `$len` u003d -1): bool

Незапускані tar/zip-архіви не можуть мати завантажувача (stub), тому
цей метод просто кидає виняток.

### Список параметрів

`stub`
Параметр ігнорується.

`len`
Параметр ігнорується.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Помилки

Викидає виняток [PharException](class.pharexception.md)

### Дивіться також

- [Phar::setStub()](phar.setstub.md) - Встановити завантажувач або
завантажувальну заглушку в Phar-архів
