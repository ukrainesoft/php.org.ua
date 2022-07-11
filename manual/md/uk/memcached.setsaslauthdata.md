- [« Memcached::setOptions](memcached.setoptions.md)
- [Memcached::touch »](memcached.touch.md)

- [PHP Manual](index.md)
- [Memcached](class.memcached.md)
- Встановлює облікові дані для автентифікації

# Memcached::setSaslAuthData

(PECL memcached \>u003d 2.0.0)

Memcached::setSaslAuthData — Встановлює облікові дані для
автентифікації

### Опис

public **Memcached::setSaslAuthData**(string `$username`, string
`$password`): void

**Memcached::setSaslAuthData()** встановлює ім'я користувача та
пароль, які повинні бути використані для SASL аутентифікації з
серверами memcache.

*Цей метод доступний тільки у випадку, якщо модуль memcached зібраний з
підтримкою SASL.* Зверніться до розділу [Установка
Memcached](memcached.setup.md), щоб дізнатися, як це зробити.

### Список параметрів

`username`
Ім'я користувача для автентифікації.

`password`
Пароль для автентифікації.

### Значення, що повертаються

Функція не повертає значення після виконання.
