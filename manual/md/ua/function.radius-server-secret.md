- [«radius_send_request](function.radius-send-request.md)
- [radius_strerror »](function.radius-strerror.md)

- [PHP Manual](index.md)
- [Функції Radius](ref.radius.md)
- Повертає загальний секрет

#radius_server_secret

(PECL radius \>u003d 1.1.0)

radius_server_secret — Повертає загальний секрет

### Опис

**radius_server_secret**(resource `$radius_handle`): string

Загальний секрет необхідний як сіль для розбирання спотворених даних, таких
як паролі та ключі шифрування.

### Список параметрів

`radius_handle`
Ресурс RADIUS

### Значення, що повертаються

Повертає загальний секрет сервера у вигляді рядка або **`false`** у разі
виникнення помилки.
