- [« ldap_bind_ext](function.ldap-bind-ext.md)
- [ldap_close »](function.ldap-close.md)

- [PHP Manual](index.md)
- [Функції LDAP](ref.ldap.md)
- Прив'язати до LDAP директорії

#ldap_bind

(PHP 4, PHP 5, PHP 7, PHP 8)

ldap_bind — Прив'язати до директорії LDAP

### Опис

**ldap_bind**([LDAP\Connection](class.ldap-connection.md) `$ldap`,
?string `$dn` u003d **`null`**, ?string `$password` u003d **`null`**): bool

Зв'язує LDAP-директорію із зазначеним RDN та паролем.

### Список параметрів

`ldap`
Примірник [LDAP\Connection](class.ldap-connection.md), що повертається
функцією [ldap_connect()](function.ldap-connect.md).

`dn`

`password`

Якщо `password` не визначено, то буде спроба анонімної прив'язки. Також
для анонімної прив'язки можна залишити порожнім `dn`, як визначено в
https://translate.google.com/translate?hl=emj&sl=ru&tl=uk&u=https://tools.ietf.org/html/rfc2251#section-4.2.2

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- ---------------|
| 8.1.0 | Параметр `ldap` тепер очікує на екземпляр [LDAP\Connection](class.ldap-connection.md); раніше очікувався ресурс ([resource](language.types.resource.md)). |

### Приклади

**Приклад #1 Приклад використання прив'язки LDAP**

` <?php// використовується|ldap-прив'язка$ldaprdn u003d 'uname'; //ldap rdn або dn$ldappass u003d 'password'; // асоційований пароль// з'єднання з сервером$ldapconn u003d ldap_connect("ldap://ldap.example.com")    or die("Не можу з'єднатися з сервером LDAP."   ldap-серверу $ldapbind u003d ldap_bind ($ ldapconn, $ ldaprdn, $ ldappass); // перевірка прив'язки    if ($ldapbind) {        echo "LDAP-прив'язка успішна..."; } else {        echo "LDAP-прив'язка не удалася..."; }}?> `

**Приклад #2 Використання анонімної прив'язки LDAP**

` <?php//анонімне використання ldap-прив'язки// з'єднання з сервером ldap$ldapconn u003d ldap_connect("ldap://ldap.example.com")    or die("Не можу з'єднатися | $ldapconn) {    // анонімна прив'язка   $ldapbind u003dldap_bind($ldapconn); if ($ldapbind) {        echo "Анонімна прив'язка LDAP минула успішно..."; } else {        echo "Анонімна прив'язка LDAP не удалася..."; }}?> `

### Дивіться також

- [ldap_bind_ext()](function.ldap-bind-ext.md) - Прив'язати до
директорії LDAP
- [ldap_unbind()](function.ldap-unbind.md) - Розірвати прив'язку до
директорії LDAP
