- [« Memcached::incrementByKey](memcached.incrementbykey.md)
- [Memcached::isPristine »](memcached.ispristine.md)

- [PHP Manual](index.md)
- [Memcached](class.memcached.md)
- Перевіряє, чи використовується стійке з'єднання з сервером memcache

# Memcached::isPersistent

(PECL memcached \>u003d 2.0.0)

Memcached::isPersistent — Перевіряє, чи використовується стійке
з'єднання з сервером memcache

### Опис

public **Memcached::isPersistent**(): bool

**Memcached::isPersistent()** перевіряє чи є з'єднання з
серверами memcache є стійким тобто. що зберігається між запитами.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Повертає true, якщо екземпляр класу Memcache використовує стійке
з'єднання, і false інакше.

### Дивіться також

- [Memcached::isPristine()](memcached.ispristine.md) - Перевіряє
чи вже створено екземпляр класу Memcached
