- [«radius_server_secret](function.radius-server-secret.md)
- [Модулі для роботи з командним рядком
»](refs.utilspec.cmdline.md)

- [PHP Manual](index.md)
- [Функції Radius](ref.radius.md)
- Повертає повідомлення про помилку

#radius_strerror

(PECL radius \>u003d 1.1.0)

radius_strerror — Повертає повідомлення про помилку

### Опис

**radius_strerror**(resource `$radius_handle`): string

У разі помилки функцій radius, вони записують повідомлення
про помилку. Це повідомлення можна отримати за допомогою цієї функції.

### Список параметрів

`radius_handle`
Ресурс RADIUS

### Значення, що повертаються

Повертає повідомлення про помилки у вигляді рядка з функції radius,
що завершилися помилкою.
