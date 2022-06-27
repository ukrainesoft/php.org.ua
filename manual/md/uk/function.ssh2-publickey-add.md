- [« ssh2_poll](function.ssh2-poll.md)
- [ssh2_publickey_init »](function.ssh2-publickey-init.md)

- [PHP Manual](index.md)
- [Функції SSH2](ref.ssh2.md)
- Додає авторизований відкритий ключ

#ssh2_publickey_add

(PECL ssh2 \>u003d 0.10)

ssh2_publickey_add — Додає авторизований відкритий ключ

### Опис

**ssh2_publickey_add**(
resource `$pkey`,
string `$algoname`,
string `$blob`,
bool `$overwrite` u003d **`false`**,
array `$attributes` u003d ?
): bool

> **Примітка**: Підсистема відкритих ключів використовується для керування
> відкритими ключами на сервері, на якому клієнт *вже* пройшов
> Авторизацію. Для авторизації за допомогою відкритого ключа на віддаленій
> системі, використовуйте натомість функцію
> [ssh2_auth_pubkey_file()](function.ssh2-auth-pubkey-file.md).

### Список параметрів

`pkey`
Ресурс підсистеми відкритого ключа, створений за допомогою
[ssh2_publickey_init()](function.ssh2-publickey-init.md).

`algoname`
Алгоритм ключа: ssh-dss, ssh-rsa

`blob`
Бінарний рядок, який містить відкритий ключ

`overwrite`
Чи потрібно перезаписати ключ, якщо він є?

`attributes`
Асоціативний масив атрибутів, що надаються відкритому ключу. перелік
підтримуваних атрибутів шукайте за словами
"ietf-secsh-publickey-subsystem". Для вказівки будь-якого атрибуту
обов'язковим, поставте перед ім'ям зірочку. Якщо сервер не
підтримує будь-який атрибут, позначений обов'язковим – це перерва
процес додавання.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Додаємо відкритий ключ за допомогою **ssh2_publickey_add()****

` <?php$ssh2 u003d ssh2_connect('shell.example.com', 22);ssh2_auth_password($ssh2, 'jdoe', 'password');$pkey u003d ssh2_publickey_init($ssh2);$keyblob u003d base64_decode('AAAAB3NzaC1yc2EAAAABIwAAAIEA5HVt6VqSGd5PTrLRdjNONxXH1tVFGn0Bd26BF0aCP9qyJRlvdJ3j4WBeX4ZmrveGrjMgkseSYc4xZ26sDHwfL351xjzaLpipu \BGRrw17mWVBhuCExo476ri5tQFzbTc54VEHYckxQ16CjSTibI5X69GmnYC9PNqEYq/1TP+HF10u003d');ssh2_publickey_add($pkey, 'ssh-rsa', $keyblo''

### Дивіться також

- [ssh2_publickey_init()](function.ssh2-publickey-init.md) -
Ініціалізує підсистему відкритого ключа
- [ssh2_publickey_remove()](function.ssh2-publickey-remove.md) -
Видаляє авторизований відкритий ключ
- [ssh2_publickey_list()](function.ssh2-publickey-list.md) - Список
вже авторизованих відкритих ключів
