- [« Типи ресурсів](ldap.resources.md)
- [Використання викликів PHP LDAP »](ldap.using.md)

- [PHP Manual](index.md)
- [LDAP](book.ldap.md)
- Обумовлені константи

# Зумовлені константи

Наведені нижче константи визначені даним модулем і можуть бути
доступні лише в тому випадку, якщо PHP був зібраний за допомогою цього
модуля або в тому випадку, якщо даний модуль був динамічно завантажений
під час виконання.

**`LDAP_DEREF_NEVER`** (int)
Правило розіменування псевдонімів – Never.

**`LDAP_DEREF_SEARCHING`** (int)
Правило розіменування псевдонімів – Searching.

**`LDAP_DEREF_FINDING`** (int)
Правило розіменування псевдонімів – Finding.

**`LDAP_DEREF_ALWAYS`** (int)
Правило розіменування псевдонімів – Always.

**`LDAP_OPT_DEREF`** (int)
Визначає альтернативні правила для таких псевдонімів на сервері.

**`LDAP_OPT_SIZELIMIT`** (int)
Визначає максимальну кількість записів, які можуть бути
повернені під час операції пошуку.

> **Примітка**: Межа фактичного розміру для операцій також
> обмежений максимальною кількістю записів, що повертаються, яка
> задається конфігурацією сервера. Найменше з цих двох параметрів
> є фактичним обмеженням розміру.

**`LDAP_OPT_TIMELIMIT`** (int)
Визначає кількість секунд для очікування на результати пошуку.

> **Примітка**: Межа фактичного часу виконання для операцій
> також обмежений максимальним часом, який задається конфігурацією
> сервера. Найменше з цих двох параметрів є фактичним
> обмеженням часу виконання.

**`LDAP_OPT_NETWORK_TIMEOUT`** (int)
Опція ldap_set_option дозволяє настроїти мережний час очікування.
(Доступна з PHP 5.3.0)

**`LDAP_OPT_PROTOCOL_VERSION`** (int)
Визначає використовуваний протокол LDAP (V2 або V3).

**`LDAP_OPT_ERROR_NUMBER`** (int)
Останній код сесії помилки.

**`LDAP_OPT_REFERRALS`** (int)
Визначає, чи слідувати автоматично рефералам, повернутим сервером
LDAP.

**`LDAP_OPT_RESTART`** (int)
Визначає, чи неявно потрібно перезапустити з'єднання.

**`LDAP_OPT_HOST_NAME`** (int)
Встановлює/отримує розділені пробілами хости при спробі
підключення.

**`LDAP_OPT_ERROR_STRING`** (int)
Псевдонім для **LDAP_OPT_DIAGNOSTIC_MESSAGE**.

**`LDAP_OPT_DIAGNOSTIC_MESSAGE`** (int)
Останнє повідомлення про помилку у сесії.

**`LDAP_OPT_MATCHED_DN`** (int)
Встановлює/отримує DN, що перевіряються, пов'язані зі з'єднанням.

**`LDAP_OPT_SERVER_CONTROLS`** (int)
Визначає список серверних елементів керування за умовчанням, який
повинен бути надісланий з кожним запитом.

**`LDAP_OPT_CLIENT_CONTROLS`** (int)
Визначає список клієнтських елементів керування за замовчуванням, які
повинні оброблятись з кожним запитом.

**`LDAP_OPT_DEBUG_LEVEL`** (int)
Визначає порозрядний рівень для трасування налагодження.

**`LDAP_OPT_X_KEEPALIVE_IDLE`** (int)
Визначає кількість секунд, протягом яких з'єднання має бути
неактивним, перш ніж почнуть надсилатися пакети keepalive.

**`LDAP_OPT_X_KEEPALIVE_PROBES`** (int)
Визначає максимальну кількість пакетів keepalive, яка повинна
бути надіслано, перш ніж з'єднання буде розірвано.

**`LDAP_OPT_X_KEEPALIVE_INTERVAL`** (int)
Визначає інтервал у секундах між посилками keepalive.

**`LDAP_OPT_X_TLS_CACERTDIR`** (string)
Визначає шлях до директорії, де лежать сертифікати CA.

**`LDAP_OPT_X_TLS_CACERTFILE`** (string)
Визначає повний шлях до файлу сертифіката CA.

**`LDAP_OPT_X_TLS_CERTFILE`** (string)
Визначає повний шлях до файлу сертифіката.

**`LDAP_OPT_X_TLS_CIPHER_SUITE`** (string)
Вказує допустимий набір шифрів.

**`LDAP_OPT_X_TLS_CRLCHECK`** (int)
Визначає стратегію оцінки CRL. Одна з констант:
**`LDAP_OPT_X_TLS_CRL_NONE`**,**`LDAP_OPT_X_TLS_CRL_PEER`**,
**`LDAP_OPT_X_TLS_CRL_ALL`**.

> **Примітка**: Ця опція коректна лише для OpenSSL.

**`LDAP_OPT_X_TLS_CRLFILE`** (string)
Визначає повний шлях до файлу CRL.

> **Примітка**: Ця опція коректна лише для GnuTLS.

**`LDAP_OPT_X_TLS_DHFILE`** (string)
Визначає повний шлях до файлу, що містить параметри Протоколу
Діффі-Хеллмана.

> **Примітка**: Ця опція ігнорується GnuTLS та Mozilla NSS.

**`LDAP_OPT_X_TLS_KEYFILE`** (string)
Визначає повний шлях файлу ключа сертифіката.

**`LDAP_OPT_X_TLS_PROTOCOL_MIN`** (int)
Визначає мінімальну версію протоколу. Одна з констант:
**`LDAP_OPT_X_TLS_PROTOCOL_SSL2`**, **`LDAP_OPT_X_TLS_PROTOCOL_SSL3`**,
**`LDAP_OPT_X_TLS_PROTOCOL_TLS1_0`**,
**`LDAP_OPT_X_TLS_PROTOCOL_TLS1_1`**,
**`LDAP_OPT_X_TLS_PROTOCOL_TLS1_2`**

**`LDAP_OPT_X_TLS_RANDOM_FILE`** (string)
Встановлює/отримує випадковий файл коли один із системних файлів по
замовчування недоступне.

**`LDAP_OPT_X_TLS_REQUIRE_CERT`** (int)
Визначає стратегію перевірки сертифіката. Одна з констант:
**`LDAP_OPT_X_TLS_NEVER`**, **`LDAP_OPT_X_TLS_HARD`**,
**`LDAP_OPT_X_TLS_DEMAND`**, **`LDAP_OPT_X_TLS_ALLOW`**,
**`LDAP_OPT_X_TLS_TRY`**. (Доступно з PHP 7.0.0)

**`GSLC_SSL_NO_AUTH`** (int)
Режим автентифікації SSL - автентифікація не потрібна (Тільки для
Oracle LDAP)

**`GSLC_SSL_ONEWAY_AUTH`** (int)
Режим автентифікації SSL - потрібна лише серверна автентифікація
(Тільки для Oracle LDAP)

**`GSLC_SSL_TWOWAY_AUTH`** (int)
Режим аутентифікації SSL - потрібен як серверний, так і клієнтський
аутентифікація (Тільки для Oracle LDAP)

**`LDAP_EXOP_START_TLS`** (int)
Константа розширеної операції - Start TLS ([»RFC
4511](http://www.faqs.org/rfcs/rfc4511)).

**`LDAP_EXOP_MODIFY_PASSWD`** (string)
Константа розширеної операції - Modify password ([»RFC
3062](http://www.faqs.org/rfcs/rfc3062)).

**`LDAP_EXOP_REFRESH`** (string)
Константа розширеної операції - Refresh ([»RFC
2589](http://www.faqs.org/rfcs/rfc2589)).

**`LDAP_EXOP_WHO_AM_I`** (string)
Константа розширеної операції - WHOAMI ([»RFC
4532](http://www.faqs.org/rfcs/rfc4532)).

**`LDAP_EXOP_TURN`** (string)
Константа розширеної операції - Turn ([»RFC
4531](http://www.faqs.org/rfcs/rfc4531)).

**`LDAP_CONTROL_MANAGEDSAIT`** (string)
Керуюча константа - управління DSA IT ([» RFC
3296](http://www.faqs.org/rfcs/rfc3296)). Доступно з PHP 7.3.0.

**`LDAP_CONTROL_PROXY_AUTHZ`** (string)
Керуюча константа - проксі-авторизація ([»RFC
4370](http://www.faqs.org/rfcs/rfc4730)). Доступно з PHP 7.3.0.

**`LDAP_CONTROL_SUBENTRIES`** (string)
Керуюча константа - підрозділи ([»RFC
3672](http://www.faqs.org/rfcs/rfc3672)). Доступно з PHP 7.3.0.

**`LDAP_CONTROL_VALUESRETURNFILTER`** (string)
Керуюча константа - фільтрація значень, що повертаються ([» RFC
3876](http://www.faqs.org/rfcs/rfc3876)). Доступно з PHP 7.3.0.

**`LDAP_CONTROL_ASSERT`** (string)
Керуюча константа - контроль тверджень ([»RFC
4528](http://www.faqs.org/rfcs/rfc45282)). Доступно з PHP 7.3.0.

**`LDAP_CONTROL_PRE_READ`** (string)
Керуюча константа - повернення початкового значення ([»RFC
4527](http://www.faqs.org/rfcs/rfc4527)). Доступно з PHP 7.3.0.

**`LDAP_CONTROL_POST_READ`** (string)
Керуюча константа - повернення підсумкового значення ([» RFC
4527](http://www.faqs.org/rfcs/rfc4527)). Доступно з PHP 7.3.0.

**`LDAP_CONTROL_SORTREQUEST`** (string)
Керуюча константа - запит сортування ([»RFC
2891](http://www.faqs.org/rfcs/rfc2891)). Доступно з PHP 7.3.0.

**`LDAP_CONTROL_SORTRESPONSE`** (string)
Керуюча константа – відповідь на запит сортування (RFC 2891).

**`LDAP_CONTROL_PAGEDRESULTS`** (string)
Керуюча константа - пагінація результату ([» RFC
2696](http://www.faqs.org/rfcs/rfc2696)). Доступно з PHP 7.3.0.

**`LDAP_CONTROL_AUTHZID_REQUEST`** (string)
Керуюча константа - запит ідентифікації авторизації ([» RFC
3829](http://www.faqs.org/rfcs/rfc3829)). Доступно з PHP 7.3.0.

**`LDAP_CONTROL_AUTHZID_RESPONSE`** (string)
Керуюча константа - відповідь на запит ідентифікації авторизації
([»RFC 3829](http://www.faqs.org/rfcs/rfc3829)). Доступно з PHP 7.3.0.

**`LDAP_CONTROL_SYNC`** (string)
Керуюча константа - операція синхронізації контенту ([»RFC
4533](http://www.faqs.org/rfcs/rfc4533)). Доступно з PHP 7.3.0.

**`LDAP_CONTROL_SYNC_STATE`** (string)
Керуюча константа - стан операції синхронізації контенту
([»RFC 4533](http://www.faqs.org/rfcs/rfc4533)). Доступно з PHP 7.3.0.

**`LDAP_CONTROL_SYNC_DONE`** (string)
Керуюча константа - операція синхронізації контенту завершена
([»RFC 4533](http://www.faqs.org/rfcs/rfc4533)). Доступно з PHP 7.3.0.

**`LDAP_CONTROL_DONTUSECOPY`** (string)
Керуюча константа - не використовувати копію ([»RFC
6171](http://www.faqs.org/rfcs/rfc6171)). Доступно з PHP 7.3.0.

**`LDAP_CONTROL_PASSWORDPOLICYREQUEST`** (string)
Константа керування - запит парольної політики Доступно з PHP 7.3.0.

**`LDAP_CONTROL_PASSWORDPOLICYRESPONSE`** (string)
Керуюча константа - відповідь на запит парольної політики.
PHP 7.3.0.

**`LDAP_CONTROL_X_INCREMENTAL_VALUES`** (string)
Константа керування - інкрементні значення Active Directory Доступно
із PHP 7.3.0.

**`LDAP_CONTROL_X_DOMAIN_SCOPE`** (string)
Керуюча константа - доменна область Active Directory Доступно з PHP
7.3.0.

**`LDAP_CONTROL_X_PERMISSIVE_MODIFY`** (string)
Керуюча константа - зміна дозволів Active Directory
PHP 7.3.0.

**`LDAP_CONTROL_X_SEARCH_OPTIONS`** (string)
Константа керування - опції пошуку Active Directory Доступно з PHP
7.3.0.

**`LDAP_CONTROL_X_TREE_DELETE`** (string)
Константа керування - видалення дерева в Active Directory Доступно з
PHP 7.3.0.

**`LDAP_CONTROL_X_EXTENDED_DN`** (string)
Керуюча константа - розширений DN Active Directory Доступно з PHP
7.3.0.

**`LDAP_CONTROL_VLVREQUEST`** (string)
Керуюча константа - запит перегляду віртуального списку
PHP 7.3.0.

**`LDAP_CONTROL_VLVRESPONSE`** (string)
Керуюча константа – відповідь на запит перегляду віртуального списку
Доступно з PHP 7.3.0.
