- [« Memcached::casByKey](memcached.casbykey.md)
- [Memcached::decrement »](memcached.decrement.md)

- [PHP Manual](index.md)
- [Memcached](class.memcached.md)
- Створює екземпляр класу Memcached

# Memcached::\_\_construct

(PECL memcached \>u003d 0.1.0)

Memcached::\_\_construct — Створює екземпляр класу Memcached

### Опис

public **Memcached::\_\_construct**(string `$persistent_id` u003d ?)

Створює екземпляр класу Memcached, який з'єднує з сервером
memcache.

### Список параметрів

`persistent_id`
За замовчуванням екземпляр класу Memcached знищується наприкінці запиту.
Для створення екземпляра, який зберігається між запитами, необхідно
використовувати `persistent_id`, щоб вказати унікальний ідентифікатор для
екземпляра. Усі екземпляри класу, створені з використанням одного та
той самий ідентифікатор `persistent_id` використовуватиме загальне
з'єднання.

### Приклади

**Приклад #1 Створення екземпляра класу Memcached**

` <?php/* Створює звичайний примірник класу */$m u003d new Memcached();echo get_class($m);/* Створює стійкий примірник класу */$m2 u003d Memcached('story_pool');/* Тепер об'єкти $m2 і $m3 використовують загальне з'єднання */?> `
