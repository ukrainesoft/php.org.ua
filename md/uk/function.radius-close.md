- [«radius_auth_open](function.radius-auth-open.md)
- [radius_config »](function.radius-config.md)

- [PHP Manual](index.md)
- [Функції Radius](ref.radius.md)
- Звільняє усі ресурси

# radius_close

(PECL radius \>u003d 1.1.0)

radius_close - Звільняє всі ресурси

### Опис

**radius_close**(resource `$radius_handle`): bool

Не потрібно викликати цю функцію, тому що php звільняє всі ресурси
наприкінці кожного запиту.

### Список параметрів

`radius_handle`
Ресурс RADIUS

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.
