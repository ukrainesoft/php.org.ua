- [« ssh2_forward_listen](function.ssh2-forward-listen.md)
- [ssh2_poll »] (function.ssh2-poll.md)

- [PHP Manual](index.md)
- [Функції SSH2](ref.ssh2.md)
- Повертає список узгоджених методів

#ssh2_methods_negotiated

(PECL ssh2 \>u003d 0.9.0)

ssh2_methods_negotiated — Повертає список узгоджених методів

### Опис

**ssh2_methods_negotiated**(resource `$session`): array

Повертає перелік узгоджених способів.

### Список параметрів

`session`
Ідентифікатор з'єднання SSH, отриманий з
[ssh2_connect()](function.ssh2-connect.md).

### Значення, що повертаються

### Приклади

**Приклад #1 Визначимо, які методи узгоджені**

` <?php$connection u003d ssh2_connect('shell.example.com', 22);$methods u003d ssh2_methods_negotiated($connection);echo "Ключі шифрування узгоджуються методом: {$methods['k
";echo "Сервер ідентифікований з використанням {$methods['hostkey']} і ";echo "відбитком: " . ssh2_fingerprint($connection) . ""
";echo "Пакети від клієнта до серверу:
";echo " Шифрування: {$methods['client_to_server']['crypt']}
";echo " Стиснення: {$methods['client_to_server']['comp']}
";echo " MAC: {$methods['client_to_server']['mac']}
";echo "Пакети від сервера до клієнту:
";echo " Шифрування: {$methods['server_to_client']['crypt']}
";echo " Стиснення: {$methods['server_to_client']['comp']}
";echo " MAC: {$methods['server_to_client']['mac']}
";?> `

### Дивіться також

- [ssh2_connect()](function.ssh2-connect.md) - Підключення до
SSH-серверу
