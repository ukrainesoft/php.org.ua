- [« Функції TCP](ref.tcpwrap.md)
- [Varnish »](book.varnish.md)

- [PHP Manual](index.md)
- [Функції TCP](ref.tcpwrap.md)
- Проводить перевірку tcpwrap

#tcpwrap_check

(PECL tcpwrap \>u003d 0.1.0)

tcpwrap_check — Перевіряє tcpwrap

### Опис

**tcpwrap_check**(
string `$daemon`,
string `$address`,
string `$user` u003d ?,
bool `$nodns` u003d **`false`**
): bool

Функція звіряється з файлами `/etc/hosts.allow` та `/etc/hosts.deny` для
перевірки, можна чи не можна дати доступ клієнту до демона `daemon`.

### Список параметрів

`daemon`
Ім'я Сервісу.

`address`
Адреса клієнта. Може бути як доменне ім'я, так і IP-адресою.

`user`
Необов'язкове ім'я користувача.

`nodns`
Якщо адреса `address` виглядає як доменне ім'я, то робиться запит до
DNS для визначення його IP-адреси. Для блокування такої поведінки
встановіть `nodns` у значення **`true`**.

### Значення, що повертаються

Повертає **`true`**, якщо доступ дозволено і **`false`**, якщо ні.

### Приклади

**Приклад #1 Заборона всіх з'єднань з локального хоста**

Якщо `/etc/hosts.deny` є запис:

``` examplescode
php: 127.0.0.1
````

І ваш код виглядає якось так:

` <?phpif (!tcpwrap_check('php', $_SERVER['REMOTE_ADDR'])) { die('Вас тут не ждуть');}?> `

### Дивіться також

Для більш детальної інформації зверніться до документації
hosts_access(3).
