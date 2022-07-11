- [« Phar::addFromString](phar.addfromstring.md)
- [Phar::buildFromDirectory »](phar.buildfromdirectory.md)

- [PHP Manual](index.md)
- [Phar](class.phar.md)
- Повертає версію API

# Phar::apiVersion

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL phar u003d 1.0.0)

Phar::apiVersion — Повертає версію API

### Опис

final public static **Phar::apiVersion**(): string

Повертає версію API формату phar-файлу, яка буде використана для
створення архівів. Модуль Phar підтримує читання з версії API
1.0. Для використання хешей SHA-256 та SHA-512 потрібна версія API
1.1.0, а для зберігання порожніх директорій потрібна версія API 1.1.1.

### Список параметрів

### Значення, що повертаються

Рядок версії API, як у ``1.0.0``.

### Приклади

**Приклад #1 Приклад використання **Phar::apiVersion()****

` <?phpecho Phar::apiVersion();?> `

Результат виконання цього прикладу:

1.1.1
