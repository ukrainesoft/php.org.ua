- [« Функції Stomp](ref.stomp.md)
- [stomp_version »](function.stomp-version.md)

- [PHP Manual](index.md)
- [Функції Stomp](ref.stomp.md)
- Повертає рядок із описом останньої помилки підключення

#stomp_connect_error

(PECL stomp \>u003d 0.3.0)

stomp_connect_error — Повертає рядок із описом останньої помилки
підключення

### Опис

**stomp_connect_error**(): string

Повертає рядок із описом останньої помилки підключення.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Рядок з описом помилки, або **`null`**, якщо помилки не сталося.

### Приклади

**Приклад #1 Приклад використання **stomp_connect_error()****

` <?php$link u003d stomp_connect('http://localhost:61613');if(!$link) {    die('Помилка з'єднання: ' . stomp_connect_error());}?> `

Результатом виконання цього прикладу буде щось подібне:

Помилка з'єднання: Invalid Broker URI scheme
