- [«msg_get_queue](function.msg-get-queue.md)
- [msg_receive »](function.msg-receive.md)

- [PHP Manual](index.md)
- [Функції семафорів](ref.sem.md)
- Перевірка існування черги повідомлень

# msg_queue_exists

(PHP 5 \>u003d 5.3.0, PHP 7, PHP 8)

msg_queue_exists — Перевірка існування черги повідомлень

### Опис

**msg_queue_exists**(int `$key`): bool

Перевіряє існування черги повідомлень, що задається ключем `key`.

### Список параметрів

`key`
Ключ черги.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Дивіться також

- [msg_remove_queue()](function.msg-remove-queue.md) - Видалення
черги повідомлень
- [msg_receive()](function.msg-receive.md) - Отримання повідомлення з
черги повідомлень
- [msg_stat_queue()](function.msg-stat-queue.md) - Отримання
інформації із структури даних черги повідомлень
