- [« ssh2_publickey_list](function.ssh2-publickey-list.md)
- [ssh2_scp_recv »](function.ssh2-scp-recv.md)

- [PHP Manual](index.md)
- [Функції SSH2](ref.ssh2.md)
- Видаляє авторизований відкритий ключ

# ssh2_publickey_remove

(PECL ssh2 \>u003d 0.10)

ssh2_publickey_remove — Видаляє авторизований відкритий ключ

### Опис

**ssh2_publickey_remove**(resource `$pkey`, string `$algoname`, string
`$blob`): bool

Видаляє авторизований відкритий ключ.

### Список параметрів

`pkey`
Ресурс підсистеми відкритого ключа

`algoname`
Алгоритм ключа: ssh-dss, ssh-rsa

`blob`
Бінарний рядок, що містить ключ

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Примітки

> **Примітка**: Підсистема відкритих ключів використовується для керування
> відкритими ключами на сервері, на якому клієнт *вже* пройшов
> Авторизацію. Для авторизації за допомогою відкритого ключа на віддаленій
> системі, використовуйте натомість функцію
> [ssh2_auth_pubkey_file()](function.ssh2-auth-pubkey-file.md).

### Дивіться також

- [ssh2_publickey_init()](function.ssh2-publickey-init.md) -
Ініціалізує підсистему відкритого ключа
- [ssh2_publickey_add()](function.ssh2-publickey-add.md) - Додає
авторизований відкритий ключ
- [ssh2_publickey_list()](function.ssh2-publickey-list.md) - Список
вже авторизованих відкритих ключів
