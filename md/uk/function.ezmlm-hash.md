- [« Пошта](ref.mail.md)
- [mail »] (function.mail.md)

- [PHP Manual](index.md)
- [Пошта](ref.mail.md)
- обчислює хеш-суму, необхідну для EZMLM

#ezmlm_hash

(PHP 4 \>u003d 4.0.2, PHP 5, PHP 7)

ezmlm_hash — Обчислює хеш-суму, необхідну для EZMLM

**Увага**

Ця функція *ЗАСТАРІЛА*, починаючи з PHP 7.4.0 і була *ВИДАЛЕНА*, починаючи з
PHP 8.0.0 Використовувати цю функцію не рекомендується.

### Опис

**ezmlm_hash**(string `$addr`): int

**ezmlm_hash()** обчислює хеш-суму, необхідну при зберіганні поштових
списків EZMLM у базі MySQL.

### Список параметрів

`addr`
Хешована адреса електронної пошти.

### Значення, що повертаються

Хеш-сума параметра `addr`.

### Приклади

**Приклад #1 Обчислює хеш-суму та підписка користувача на щось**

` <?php$user u003d "joecool@example.com";$hash u003d ezmlm_hash($user);$query u003d sprintf("INSERT INTO sample VALUES (%s, '%s')", $hash, $user ); $ db-> query ($ query); // використовуючи інтерфейс PHPLIB db?> `
