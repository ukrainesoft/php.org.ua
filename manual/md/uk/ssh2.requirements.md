- [« Встановлення та налаштування](ssh2.setup.md)
- [Установка »](ssh2.installation.md)

- [PHP Manual](index.md)
- [Встановлення та налаштування](ssh2.setup.md)
- Вимоги

## Вимоги

Для встановлення SSH2 потрібна наявність встановлених бібліотек
[» OpenSSL](http://www.openssl.org/) та [» libssh2](http://libssh2.org/).
Переконайтеся, що вказані бібліотеки є у системі. Типовим
назвою пакета може бути `openssl-dev`.

Необхідна версія libssh2 1.2 або новіша. Однак можливо, що нові
релізи pecl/ssh2 вимагатимуть новіші версії (дивіться примітки до
релізу).

Функція [ssh2_auth_agent()](function.ssh2-auth-agent.md) доступна
тільки з версією libssh u003d 1.2.3.

Підтримка канальних потоків у
[stream_set_timeout()](function.stream-set-timeout.md) доступна лише
з версією libssh u003d 1.2.9.

Libssh2 поставляється у двох варіантах: gcrypt або openssl. Деякі
дистрибутиви Linux збирають libssh2 з бібліотекою gcrypt, деякі з
openssl. Libssh2 має деякі проблеми при компіляції з gcrypt,
тому використовуйте версію з openssl.
