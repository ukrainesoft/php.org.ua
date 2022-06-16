- [« Приклади](ldap.examples.md)
- [LDAP Controls »](ldap.examples-controls.md)

- [PHP Manual](index.md)
- [Приклади](ldap.examples.md)
- Базове використання

## Базове використання

Отримати інформацію для всіх записів, де прізвище починається з "S" з
сервера каталогів, показуючи в результаті ім'я та адресу електронної пошти.

**Приклад #1 Приклад LDAP пошуку**

` <?php// базова послідовність роботи с LDAP:// підключення, прив'язка, пошук, інтерпретація результату, закриття підключенняecho "<h3>Перевірочний запит к LDAP</h3>"; ldap_connect("localhost"); // Необхідно вказати коректний LDAP серверecho "Результат підключення: " . $ds . "<br />";if ($ds) {    echo "Прив'язка ..."; $ru003dldap_bind($ds); //"анонімна" прив'язка, | $r . "<br />"; echo "Пошук (snu003dS*) ..."; // Пошук за прізвищами записів    $sru003dldap_search($ds, "ou003dMy Company, cu003dUS", "snu003dS*"); echo "Результат пошуку: " . $sr . "<br />"; echo "Отримано кількість записів " . ldap_count_entries($ds, $sr). "<br />"; echo "Отримання елементів ...<p>"; $info u003d ldap_get_entries($ds, $sr); echo "Елемент: " . $info["count"] . "Дані:<p>"; for ($iu003d0;$i<$info["count"];$i++) {        echo "dn: " . $info[$i]["dn"] . "<br />"; echo "перший cn: " . $info[$i]["cn"][0] . "<br />"; echo "перший email: " . $info[$i]["mail"][0] . "<br /><hr />"; }   echo "Закриття з'єднання"; ldap_close($ds);} else {    echo "<h4>Неможливо підключитися до серверу LDAP</h4>";}?> `
