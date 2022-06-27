- [«
radius_request_authenticator](function.radius-request-authenticator.md)
- [radius_send_request »](function.radius-send-request.md)

- [PHP Manual](index.md)
- [Функції Radius](ref.radius.md)
- Зашифровує значення за допомогою солі

#radius_salt_encrypt_attr

(PECL radius \>u003d 1.3.0)

radius_salt_encrypt_attr — Зашифровує значення за допомогою солі

### Опис

**radius_salt_encrypt_attr**(resource `$radius_handle`, string `$data`):
string\|false

Застосовує алгоритм шифрування RADIUS до заданого значення.

Як правило, це робиться автоматично шляхом надання опції
**`RADIUS_OPTION_SALT`** функції встановлення атрибута, але цю функцію
можна використовувати, якщо потрібне створення низькорівневого запиту.

### Список параметрів

`data`
Дані, які потрібно зашифрувати за допомогою солі.

### Значення, що повертаються

Повертає дані, зашифровані за допомогою солі або **`false`** у разі
виникнення помилки.

### Дивіться також

- [radius_put_addr()](function.radius-put-addr.md) - Приєднує
атрибут IP-адреси
- [radius_put_attr()](function.radius-put-attr.md) - Приєднує
бінарний атрибут
- [radius_put_int()](function.radius-put-int.md) - Приєднує
цілісний атрибут
- [radius_put_string()](function.radius-put-string.md) -
Приєднує рядковий атрибут
