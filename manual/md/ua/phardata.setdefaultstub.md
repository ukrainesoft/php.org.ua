- [« PharData::setAlias](phardata.setalias.md)
- [PharData::setMetadata »](phardata.setmetadata.md)

- [PHP Manual](index.md)
- [PharData](class.phardata.md)
- Функція заглушка (Phar::setDefaultStub не можна використовувати для
PharData)

# PharData::setDefaultStub

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL phar u003d 2.0.0)

PharData::setDefaultStub — Функція заглушка (Phar::setDefaultStub не можна
використовувати для PharData)

### Опис

public **PharData::setDefaultStub**(?string `$index` u003d **`null`**,
?string `$webIndex` u003d **`null`**): bool

Незапускані tar/zip-архіви не можуть мати заглушку, тому цей метод
просто викидає виняток.

### Список параметрів

`index`
Відносний шлях у phar-архіві для запуску при доступі з командної
рядки

`webIndex`
Відносний шлях у phar-архіві для запуску при доступі через браузер

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Помилки

Викидає виняток [PharException](class.pharexception.md)

### Список змін

| Версія | Опис |
|--------|---------------------------------------- ----|
| 8.0.0 | `webIndex` тепер припускає значення null. |

### Дивіться також

- [Phar::setDefaultStub()](phar.setdefaultstub.md) - Встановити
завантажувач PHP або початкову заглушку Phar-архіву в завантажувач
замовчуванням
