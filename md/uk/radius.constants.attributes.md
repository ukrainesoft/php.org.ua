- [«типи пакетів RADIUS](radius.constants.packets.md)
- [Атрибути RADIUS специфічні для різних виробників
»](radius.constants.vendor-specific.md)

- [PHP Manual](index.md)
- [Предвизначені константи](radius.constants.md)
- Типи атрибутів RADIUS

## Типи атрибутів RADIUS

Ці константи описують типи атрибутів RADIUS, які можна
використовувати у функціях
[radius_put_addr()](function.radius-put-addr.md),
[radius_put_attr()](function.radius-put-attr.md),
[radius_put_int()](function.radius-put-int.md) та
[radius_put_string()](function.radius-put-string.md).

**`RADIUS_USER_NAME`** (int)
Атрибут User-Name. Має бути типу string і містити ім'я
автентифікованого користувача. Атрибут можна встановити функцією
[radius_put_attr()](function.radius-put-attr.md).

**`RADIUS_USER_PASSWORD`** (int)
Атрибут User-Password. Має бути типу string і містити пароль
користувача. Атрибут можна встановити функцією
[radius_put_attr()](function.radius-put-attr.md). Це значення буде
обфусковано при передачі згідно [секції 5.2 RFC
2865](http://www.faqs.org/rfcs/rfc2865).

**`RADIUS_CHAP_PASSWORD`** (int)
Атрибут Chap-Password. Має бути типу string і містити ідентифікатор
CHAP користувача, 16 байт, що містять MD5-хеш ідентифікатора CHAP,
текстове представлення пароля та перевірочне значення CHAP з'єднаними
в один рядок. Зверніть увагу, що перевірочне значення CHAP також
має бути окремо надіслано в атрибуті
[**`RADIUS_CHAP_CHALLENGE`**](radius.constants.attributes.md#constant.radius-chap-challenge).

**Приклад #1 Використання паролів CHAP**

`<?php// Для початку створимо обробник аутентифікації і запит.$radh u003d radius_auth_open();radius_add_server($radh, $server, $port, $secret, 3, Вважаючи, що $password містить пароль в незашифрованому виді, ми робимо:// Створюємо перевірочне значення.$challenge u003d mt_rand();// Задаємо ідентифікатор c (pack('Ca*', $ident, $password.$challenge), true);radius_put_attr($radh, RADIUS_CHAP_PASSWORD, pack('C', $ident).$cp);// Добавляємо атрибут Chap-C radius_put_attr($radh, RADIUS_CHAP_CHALLENGE, $challenge);/* Тепер можна додавати інші необхідні аттріубти * і викликати radius_send_request(). */?> `

**`RADIUS_NAS_IP_ADDRESS`** (int)
Атрибут NAS IP-Address. Очікується, що значення буде IP-адресою клієнта
RADIUS як цілого числа. Атрибут встановлюється функцією
[radius_put_addr()](function.radius-put-addr.md).

**`RADIUS_NAS_PORT`** (int)
Атрибут NAS-Port. Очікується, що значення буде фізичним портом
клієнта RADIUS як цілого числа. Атрибут встановлюється функцією
[radius_put_addr()](function.radius-put-addr.md).

**`RADIUS_SERVICE_TYPE`** (int)
Атрибут Service-Type. Значення атрибуту означає тип сервісу
запитуваного клієнтом має бути цілим числом. Атрибут
встановлюється функцією
[radius_put_addr()](function.radius-put-addr.md).

Допустимі такі значення:

- **`RADIUS_LOGIN`**
- **`RADIUS_FRAMED`**
- **`RADIUS_CALLBACK_LOGIN`**
- **`RADIUS_CALLBACK_FRAMED`**
- **`RADIUS_OUTBOUND`**
- **`RADIUS_ADMINISTRATIVE`**
- **`RADIUS_NAS_PROMPT`**
- **`RADIUS_AUTHENTICATE_ONLY`**
- **`RADIUS_CALLBACK_NAS_PROMPT`**

**`RADIUS_FRAMED_PROTOCOL`** (int)
Атрибут Framed-Protocol. Атрибут має бути цілим числом, що означає
використовуваний протокол обертання. Атрибут встановлюється функцією
[radius_put_addr()](function.radius-put-addr.md). Допустимі значення:

- **`RADIUS_PPP`**
- **`RADIUS_SLIP`**
- **`RADIUS_ARAP`**
- **`RADIUS_GANDALF`**
- **`RADIUS_XYLOGICS`**

**`RADIUS_FRAMED_IP_ADDRESS`** (int)
Атрибут Framed-IP-Address. Атрибут повинен містити адресу
користувальницької мережі як цілого числа. Атрибут встановлюється
функцією [radius_put_addr()](function.radius-put-addr.md) та
вилучається функцією [radius_cvt_addr()](function.radius-cvt-addr.md).

**`RADIUS_FRAMED_IP_NETMASK`** (int)
Атрибут Framed-IP-Netmask. Атрибут повинен мати маску
користувальницької мережі як цілого числа. Атрибут встановлюється
функцією [radius_put_addr()](function.radius-put-addr.md) та
вилучається функцією [radius_cvt_addr()](function.radius-cvt-addr.md)

**`RADIUS_FRAMED_ROUTING`** (int)
Атрибут Framed-Routing. Атрибут має бути цілим числом та містити
метод маршрутизації. Атрибут встановлюється функцією
[radius_put_addr()](function.radius-put-addr.md).

Допустимі значення:

- `0`: Без маршрутизації
- `1`: Здійснення пакетів маршрутизації
- `2`: Чекати на пакети маршрутизації
- `3`: Посилати та очікувати

**`RADIUS_FILTER_ID`** (int)
Атрибут Filter-ID. Атрибут повинен бути залежним від реалізації,
людино-читаним рядком фільтрів. Атрибут встановлюється функцією
[radius_put_addr()](function.radius-put-addr.md)

**`RADIUS_FRAMED_MTU`** (int)
Атрибут Framed-MTU. Ціле число, що означає значення MTU. Атрибут
встановлюється функцією
[radius_put_addr()](function.radius-put-addr.md)

**`RADIUS_FRAMED_COMPRESSION`** (int)
Атрибут Framed-Compression. Ціле число, що означає протокол стиснення.
Атрибут встановлюється функцією
[radius_put_addr()](function.radius-put-addr.md) Допустимі значення:

- **`RADIUS_COMP_NONE`**: Без стиснення
- **`RADIUS_COMP_VJ`**: Стиснення заголовків VJ TCP/IP
- **`RADIUS_COMP_IPXHDR`**: Стиснення заголовків IPX
- **`RADIUS_COMP_STAC_LZS`**: Стиснення Stac-LZS (додано до PECL radius
1.3.0b2)

**`RADIUS_LOGIN_IP_HOST`** (int)
Атрибут Login-IP-Host. Ціле число, що представляє IP-адресу, з якою
з'єднується користувач. Атрибут встановлюється функцією
[radius_put_addr()](function.radius-put-addr.md)

**`RADIUS_LOGIN_SERVICE`** (int)
Атрибут Login-Service Значення атрибута означає обслуговування, з яким
Користувач з'єднується на сервері аутентифікації. Це значення можна
перетворити на ціле число PHP за допомогою функції
[radius_cvt_int()](function.radius-cvt-int.md).

**`RADIUS_LOGIN_TCP_PORT`** (int)
Атрибут Login-TCP-Port Значення атрибута означає порт, з яким
Користувач з'єднується на сервері аутентифікації. Це значення можна
перетворити на ціле число PHP за допомогою функції
[radius_cvt_int()](function.radius-cvt-int.md).

**`RADIUS_REPLY_MESSAGE`** (int)
Атрибут Reply-Message. Значення атрибута містить текст, який можна
показати користувачеві у відповідь на запит автентифікації.

**`RADIUS_CALLBACK_NUMBER`** (int)
Атрибути Callback-Number. Атрибут містить рядок, який можна
використовувати як функцію зворотного дзвінка.

**`RADIUS_CALLBACK_ID`** (int)
Атрибут Callback-Id. Рядок, що містить ім'я методу, що викликається
специфічного для конкретної реалізації.

**`RADIUS_FRAMED_ROUTE`** (int)
Атрибут Framed-Route. Рядок, що містить список, що залежить від реалізації,
маршрутів налаштованих для користувача.

**`RADIUS_FRAMED_IPX_NETWORK`** (int)
Атрибут Framed-IPX-Network. Ціле число, що визначає мережу IPX,
налаштовану для користувача або `0xFFFFFFFE`, що закликає клієнта
RADIUS вибрати мережу самостійно. Можна витягти за допомогою
[radius_cvt_int()](function.radius-cvt-int.md).

**`RADIUS_STATE`** (int)
Атрибут State. Залежний від реалізації рядок, включений у відповідь
Access-Challenge, що прийшов від сервера, яку необхідно включити в
подальший запит Access-Request. Повинен встановлюватися функцією
[radius_put_attr()](function.radius-put-attr.md).

**`RADIUS_CLASS`** (int)
Атрибут Class. Довільний рядок включений до повідомлення Access-Accept
та яка має бути надіслана серверу облікових даних у запиті
Accounting-Request. Повинен встановлюватися функцією
[radius_put_attr()](function.radius-put-attr.md).

**`RADIUS_VENDOR_SPECIFIC`** (int)
Атрибут Vendor-Specific. В цілому, значення цього атрибуту мають
встановлюватися з використанням функцій
[radius_put_vendor_addr()](function.radius-put-vendor-addr.md),
[radius_put_vendor_attr()](function.radius-put-vendor-attr.md),
[radius_put_vendor_int()](function.radius-put-vendor-int.md) та
[radius_put_vendor_string()](function.radius-put-vendor-string.md), а
не безпосередньо.

Ці константи необхідні інтерпретації специфічних, залежних від
виробника атрибутів, які у відповідях від сервера RADIUS; коли
отримані такі атрибути, потрібно використовувати функцію
[radius_get_vendor_attr()](function.radius-get-vendor-attr.md) для
вилучення ідентифікатора вендора, типу атрибута та його значення.

**`RADIUS_SESSION_TIMEOUT`** (int)
Час очікування сесії

**`RADIUS_IDLE_TIMEOUT`** (int)
Час очікування простою

**`RADIUS_TERMINATION_ACTION`** (int)
Припинення операції

**`RADIUS_CALLED_STATION_ID`** (int)
Ідентифікатор станції, що викликається

**`RADIUS_CALLING_STATION_ID`** (int)
Ідентифікатор зухвалої станції

**`RADIUS_NAS_IDENTIFIER`** (int)
NAS ID

**`RADIUS_PROXY_STATE`** (int)
Стан проксі

**`RADIUS_LOGIN_LAT_SERVICE`** (int)
Сервіс входу до системи LAT

**`RADIUS_LOGIN_LAT_NODE`** (int)
Вузол входу до системи LAT

**`RADIUS_LOGIN_LAT_GROUP`** (int)
Група входу до системи LAT

**`RADIUS_FRAMED_APPLETALK_LINK`** (int)
Framed Appletalk Link

**`RADIUS_FRAMED_APPLETALK_NETWORK`** (int)
Framed Appletalk Network

**`RADIUS_FRAMED_APPLETALK_ZONE`** (int)
Framed Appletalk Zone

**`RADIUS_CHAP_CHALLENGE`** (int)
Перевірочне значення

**`RADIUS_NAS_PORT_TYPE`** (int)
Тип порту NAS, одна з констант:

- **`RADIUS_ASYNC`**
- **`RADIUS_SYNC`**
- **`RADIUS_ISDN_SYNC`**
- **`RADIUS_ISDN_ASYNC_V120`**
- **`RADIUS_ISDN_ASYNC_V110`**
- **`RADIUS_VIRTUAL`**
- **`RADIUS_PIAFS`**
- **`RADIUS_HDLC_CLEAR_CHANNEL`**
- **`RADIUS_X_25`**
- **`RADIUS_X_75`**
- **`RADIUS_G_3_FAX`**
- **`RADIUS_SDSL`**
- **`RADIUS_ADSL_CAP`**
- **`RADIUS_ADSL_DMT`**
- **`RADIUS_IDSL`**
- **`RADIUS_ETHERNET`**
- **`RADIUS_XDSL`**
- **`RADIUS_CABLE`**
- **`RADIUS_WIRELESS_OTHER`**
- **`RADIUS_WIRELESS_IEEE_802_11`**

**`RADIUS_PORT_LIMIT`** (int)
Обмеження на порти

**`RADIUS_LOGIN_LAT_PORT`** (int)
Порт входу до системи LAT

**`RADIUS_CONNECT_INFO`** (int)
Інформація про з'єднання

**`RADIUS_ACCT_STATUS_TYPE`** (int)
Статус системи управління обліковими даними, одна із констант:

- **`RADIUS_START`**
- **`RADIUS_STOP`**
- **`RADIUS_ACCOUNTING_ON`**
- **`RADIUS_ACCOUNTING_OFF`**

**`RADIUS_ACCT_DELAY_TIME`** (int)
Час затримки системи управління обліковими даними

**`RADIUS_ACCT_INPUT_OCTETS`** (int)
Вхідні байти до системи управління обліковими даними

**`RADIUS_ACCT_OUTPUT_OCTETS`** (int)
Вихідні байти із системи управління обліковими даними

**`RADIUS_ACCT_SESSION_ID`** (int)
Ідентифікатор сесії системи керування обліковими даними

**`RADIUS_ACCT_AUTHENTIC`** (int)
Тип системи управління обліковими даними, одна із констант:

- **`RADIUS_AUTH_RADIUS`**
- **`RADIUS_AUTH_LOCAL`**
- **`RADIUS_AUTH_REMOTE`**

**`RADIUS_ACCT_SESSION_TIME`** (int)
Час сесії у системі управління обліковими даними

**`RADIUS_ACCT_INPUT_PACKETS`** (int)
Вхідні пакети до системи управління обліковими даними

**`RADIUS_ACCT_OUTPUT_PACKETS`** (int)
Вихідні пакети із системи управління обліковими даними

**`RADIUS_ACCT_TERMINATE_CAUSE`** (int)
Аварійне завершення сеансу управління обліковими даними:

- **`RADIUS_TERM_USER_REQUEST`**
- **`RADIUS_TERM_LOST_CARRIER`**
- **`RADIUS_TERM_LOST_SERVICE`**
- **`RADIUS_TERM_IDLE_TIMEOUT`**
- **`RADIUS_TERM_SESSION_TIMEOUT`**
- **`RADIUS_TERM_ADMIN_RESET`**
- **`RADIUS_TERM_ADMIN_REBOOT`**
- **`RADIUS_TERM_PORT_ERROR`**
- **`RADIUS_TERM_NAS_ERROR`**
- **`RADIUS_TERM_NAS_REQUEST`**
- **`RADIUS_TERM_NAS_REBOOT`**
- **`RADIUS_TERM_PORT_UNNEEDED`**
- **`RADIUS_TERM_PORT_PREEMPTED`**
- **`RADIUS_TERM_PORT_SUSPENDED`**
- **`RADIUS_TERM_SERVICE_UNAVAILABLE`**
- **`RADIUS_TERM_CALLBACK`**
- **`RADIUS_TERM_USER_ERROR`**
- **`RADIUS_TERM_HOST_REQUEST`**

**`RADIUS_ACCT_MULTI_SESSION_ID`** (int)
Багатосесійний ідентифікатор системи управління обліковими даними

**`RADIUS_ACCT_LINK_COUNT`** (int)
Кількість з'єднань системи управління обліковими даними
