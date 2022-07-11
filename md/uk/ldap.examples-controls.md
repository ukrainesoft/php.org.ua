- [« Базове використання](ldap.examples-basic.md)
- [Функції LDAP »](ref.ldap.md)

- [PHP Manual](index.md)
- [Приклади](ldap.examples.md)
- LDAP Controls

## LDAP Controls

Нижче наведено кілька прикладів використання LDAP Controls з
використанням PHP u003d 7.3.0.

**Приклад #1 Прив'язка до інформації policy**

` <?php$user   u003d 'cnu003dadmin,dcu003dexample,dcu003dcom';$passwd u003d 'adminpassword';$ds u003d ldap_connect('ldap://localhost');if ($ds) {  $r u003dldap_bind_ext($ds,$user,$passwd,[['oid' u003d> LDAP_CONTROL_PASSWORDPOLICYREQUEST]]); if (ldap_parse_result($ds, $r, $errcode, $matcheddn, $errmsg, $referrals, $ctrls)) {   if ($errcode !u003d r)|||| }   if (isset($ctrls[LDAP_CONTROL_PASSWORDPOLICYRESPONSE])) {     $value u003d$ctrls[LDAP_CONTROL_PASSWORDPOLICYRESPONSE]['value echo "Закінчується: ".$value['expire']." seconds
";      echo "Кількість що залишилися аутентифікацій: ".$value['grace']."
";      if (isset($value['error'])) {        echo "Код ошибки Ppolicy: ".$value['error'];      }    }  }} else {  die("Невозможно подключиться к серверу LDAP");} ?> `

**Приклад #2 Зміна опису, тільки якщо він не порожній**

` <?php  // $link - это LDAP-соединение  $result u003d ldap_mod_replace_ext(    $link,    'ou003dtest,dcu003dexample,dcu003dcom',    ['description' u003d> 'New description'],    [      [        ' oid'         u003d> LDAP_CONTROL_ASSERT,        'iscritical'  u003d> TRUE,        'value'       u003d> ['filter' u003d> '(!(descriptionu003d*))']      ]    ]  ); // Потім використовуйте ldap_parse_result?> `

**Приклад #3 Читання певних значень перед видаленням**

` <?php  // $link - это LDAP-соединение  $result u003d ldap_delete_ext(    $link,    'ou003dtest,dcu003dexample,dcu003dcom',    [      [        'oid'         u003d> LDAP_CONTROL_PRE_READ,        'iscritical'  u003d> TRUE , |      'value'       u003d> ['attrs' u003d> ['o', 'description']]       ]    ]  )); // Потім використовуйте ldap_parse_result?> `

**Приклад #4 Видалення посилання**

` <?php  /// $link - це LDAP-з'єднання  // Без управління він удалив посилальний вузол  // Обов'язково налаштуйте управління так, щоб уникнути $result u003d ldap_delete_ext(    $link,   'cnu003dreference,dcu003dexample,dcu003dcom',    [['oid' u003d> LDAP_CONTROL_MANAGEDSAIT, 'iscritical' ]| ] // Потім використовуйте ldap_parse_result?> `

**Приклад #5 Використання пагінації для пошуку**

`<?php  // $link - це LDAP-з'єднання  $cookie u003d ''; do {   $result u003dldap_search(    | , 'value' u003d> ['size' u003d> 2, 'cookie' u003d> $cookie]]]    ); ldap_parse_result($link,$result,$errcode , $matcheddn , $errmsg , $referrals, $controls); // Щоб зберегти приклад, короткі помилки не перевіряються    $entries u003d ldap_get_entries($link, $result); foreach ($entries as $entry) {      echo "cn: ".$entry['cn'][0]."
";    }    if (isset($controls[LDAP_CONTROL_PAGEDRESULTS]['value']['cookie'])) {      // Вам необходимо передать cookie с последнего вызова на следующий      $cookie u003d $controls[LDAP_CONTROL_PAGEDRESULTS]['value'][ 'cookie'];   } else {      $cookie u003d '';    }    // Порожній cookie означає останню сторінку  |
