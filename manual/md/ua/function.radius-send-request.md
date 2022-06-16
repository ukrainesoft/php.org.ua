- [«radius_salt_encrypt_attr](function.radius-salt-encrypt-attr.md)
- [radius_server_secret »](function.radius-server-secret.md)

- [PHP Manual](index.md)
- [Функції Radius](ref.radius.md)
- Надсилає запит і чекає відповіді

# radius_send_request

(PECL radius \>u003d 1.1.0)

radius_send_request — Надсилає запит і чекає відповіді

### Опис

**radius_send_request**(resource `$radius_handle`): int

Після створення запиту Radius надсилає його за допомогою
**radius_send_request()**.

Функція **radius_send_request()** відправляє запит і чекає на коректний
відповідь, повторюючи спроби з певними серверами в циклічному режимі
по мірі необхідності.

### Список параметрів

`radius_handle`
Ресурс RADIUS

### Значення, що повертаються

Якщо отримано коректну відповідь, **radius_send_request()** повертає код
Радіус, який вказує тип відповіді. Зазвичай це
**`RADIUS_ACCESS_ACCEPT`**, **`RADIUS_ACCESS_REJECT`** або
**`RADIUS_ACCESS_CHALLENGE`**. Якщо коректної відповіді не отримано,
**radius_send_request()** повертає **`false`**.

### Дивіться також

- [radius_create_request()](function.radius-create-request.md) -
Створює обліковий запис або запит автентифікації
