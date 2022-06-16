- [«radius_put_vendor_string](function.radius-put-vendor-string.md)
- [radius_salt_encrypt_attr »](function.radius-salt-encrypt-attr.md)

- [PHP Manual](index.md)
- [Функції Radius](ref.radius.md)
- Повертає аутентифікатор запиту

#radius_request_authenticator

(PECL radius \>u003d 1.1.0)

radius_request_authenticator — Повертає автентифікатор запиту

### Опис

**radius_request_authenticator**(resource `$radius_handle`): string

Аутентифікатор запиту необхідний для розпізнавання спотворених даних,
таких як паролі та ключі шифрування.

### Список параметрів

`radius_handle`
Ресурс RADIUS

### Значення, що повертаються

Повертає аутентифікатор запиту у вигляді рядка або **`false`** у разі
виникнення помилки.

### Дивіться також

- [radius_demangle()](function.radius-demangle.md) - Розшифровує
дані
