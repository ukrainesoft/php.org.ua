- [« SoapClient::\_\_call](soapclient.call.md)
- [SoapClient::\_\_doRequest »](soapclient.dorequest.md)

- [PHP Manual](index.md)
- [SoapClient](class.soapclient.md)
- Конструктор класу SoapClient

# SoapClient::\_\_construct

(PHP 5, PHP 7, PHP 8)

SoapClient::\_\_construct - Конструктор класу SoapClient

### Опис

public **SoapClient::\_\_construct**(?string `$wsdl`, array `$options` u003d
\[\])

Створює об'єкт [SoapClient](class.soapclient.md) для підключення до
служби SOAP.

### Список параметрів

`wsdl`
URI WSDL-файлу, який описує сервіс, який використовується для
автоматичного налаштування клієнта. Якщо він не вказано, клієнт буде
працювати у режимі без WSDL. mode.

> **Примітка**:
>
> За замовчуванням WSDL-файл кешуватиметься для підвищення
> продуктивність. Щоб вимкнути або налаштувати кешування,
> дивіться розділ [Опції налаштування
> SOAP](soap.configuration.md#soap.configuration.list) та [параметр
> `cache_wsdl`](soapclient.construct.md#soapclient.construct.options.cache-wsdl).

`options`
Асоціативний масив, який визначає додаткові параметри для клієнта
SOAP. Якщо вказано параметр `wsdl`, це необов'язково, інакше
у випадку, принаймні параметри `location` та `url` повинні бути
вказані.

`location` string
URL-адреса сервера SOAP для надсилання запиту.

Обов'язковий, якщо параметр wsdl не вказаний. Якщо надані та
параметр `wsdl` і `location`, параметр `location` буде пріоритетнішим
розташування, вказаного у файлі WSDL.

`uri` string
Цільовий простір імен служби SOAP.

Обов'язковий, якщо параметр wsdl не вказаний; в іншому випадку
ігнорується.

`style` int
Визначає стиль зв'язування, який використовуватиме клієнт,
використовуючи константи **`SOAP_RPC`** та **`SOAP_DOCUMENT`**. Константа
**`SOAP_RPC`** вказує на прив'язку в стилі RPC, де тіло запиту SOAP
містить стандартне кодування виклику функції. Константа
**`SOAP_DOCUMENT`** вказує на прив'язку у стилі документа, де тіло
запит SOAP містить XML-документ з певним значенням служби.

Якщо вказано параметр `wsdl`, цей параметр ігнорується, а стиль
зчитується із WSDL-файлу.

Якщо ні цей параметр, ні параметр wsdl не вказано, використовується
RPC стиль.

`use` int
Визначає стиль кодування, який використовуватиметься клієнтом,
використовуючи константи **`SOAP_ENCODED`** або **`SOAP_LITERAL`**. Константа
**`SOAP_ENCODED`** вказує на кодування з використанням типів
визначених у специфікації SOAP. Константа **`SOAP_LITERAL`** вказує
кодування з використанням схеми певною службою.

Якщо вказано параметр `wsdl`, цей параметр ігнорується, а кодування
зчитується із файлу WSDL.

Якщо ні цей параметр, ні параметр wsdl не вказані, використовується стиль
"encoded".

`soap_version` int
Визначає версію протоколу SOAP: Константа **`SOAP_1_1`** для SOAP 1.1,
або **`SOAP_1_2`** для SOAP 1.2.

Якщо опущено, використовується SOAP 1.1.

`authentication` int
Вказує метод аутентифікації при використанні HTTP-аутентифікації
запити. Значення може бути або **`SOAP_AUTHENTICATION_BASIC`**, або
**`SOAP_AUTHENTICATION_DIGEST`**.

Якщо параметр не вказано, але вказано параметр `login`, використовується Basic
Authentication.

`login` string
Ім'я користувача для використання під час аутентифікації HTTP Basic або
Digest.

`password` string
Пароль для використання під час аутентифікації HTTP Basic або Digest.

Не слід плутати з параметром `passphrase`, який використовується при
автентифікації сертифіката клієнта HTTPS.

`local_cert` string
Шлях до сертифіката клієнта для використання з аутентифікацією
HTTPS. Повинен бути файл у кодуванні PEM, що містить сертифікат та
закритий ключ.

Файл також може включати ланцюжок емітентів, який повинен йти після
сертифікат клієнта.

Також може бути заданий за допомогою параметра
[`stream_context`](soapclient.construct.md#soapclient.construct.options.stream-context),
який також підтримує вказівку окремого файлу закритого ключа.

`passphrase` string
Ключова фраза для сертифіката клієнта, вказаного у параметрі
`local_cert`.

Не слід плутати з параметром `password`, який використовується для
автентифікації Basic чи Digest.

Можна також встановити за допомогою параметра
[`stream_context`](soapclient.construct.md#soapclient.construct.options.stream-context).

`proxy_host` string
Ім'я хоста для використання як проксі-сервер для HTTP-запитів.

Також має бути вказано параметр `proxy_port`.

`proxy_port` int
TCP-порт для використання під час підключення до проксі-сервера, вказаного
у параметрі `proxy_host`.

`proxy_login` string
Необов'язкове ім'я користувача для аутентифікації на проксі-сервері,
вказаному у параметрі `proxy_host`, використовуючи HTTP Basic Authentication.

`proxy_password` string
Необов'язковий пароль для аутентифікації на проксі-сервері, зазначеному в
параметрі `proxy_host`, використовуючи HTTP Basic Authentication

`compression` int
Включає стиснення HTTP SOAP запитів та відповідей.

Значення має бути побітовим АБО з трьох частин: необов'язкова
**`SOAP_COMPRESSION_ACCEPT`**, для надсилання заголовка "Accept-Encoding";
або константа **`SOAP_COMPRESSION_GZIP`** або
**`SOAP_COMPRESSION_DEFLATE`** для вказівки використовуваного алгоритму
стискування; число від 1 до 9, щоб вказати рівень стиснення, який буде
використовуватись у запиті. Наприклад, щоб увімкнути двосторонній стиск
gzip з максимальним рівнем стиснення, використовуйте
`SOAP_COMPRESSION_ACCEPT | SOAP_COMPRESSION_GZIP | 9`.

'encoding' string
Визначає внутрішнє кодування символів. Запити завжди відправляються в
UTF-8 і перетворюються на це кодування і назад.

`trace` bool
Захоплює інформацію про запит та відповідь, яка потім може бути
доступна за допомогою методів: **SoapClient::getLastRequest()**,
**SoapClient::getLastRequestHeaders()**,
**SoapClient::getLastResponse()**, або
**SoapClient::getLastResponseHeaders()**.

Якщо опущено, використовується значення **`false`**.

`classmap` array
Використовується для порівняння типів, визначених у WSDL із класами
PHP. Має бути асоціативний масив (array) з іменами типів з
WSDL як ключі та імена класів PHP як значення.
Зверніть увагу, що ім'я типу елемента не обов'язково збігається з
іменем елемента (тега).

Надані імена класів завжди повинні бути повністю визначені з
за допомогою будь-яких [простір імен](language.namespaces.md) і ніколи не
повинні починатися з ведучого сліша (`\`). Правильна форма може бути
вказана за допомогою
[::class](language.oop5.basic.md#language.oop5.basic.class.class).

Зверніть увагу, що при створенні класу конструктор не викликається
буде, але магічні методи
[\_\_set()](language.oop5.overloading.md#object.set) та
[\_\_get()](language.oop5.overloading.md#object.get) будуть викликатися
для окремих властивостей.

`typemap` array
Використовується для визначення зіставлень типів за допомогою визначених
Користувачем callback-функцій. Кожне зіставлення типів має
являти собою масив з ключами `type_name` (рядок (string),
визначальна тип елемента XML); `type_ns` (рядок (string), що містить
простір імен URI); `from_xml`
([callable](language.types.callable.md), що приймає один рядковий
параметр і об'єкт, що повертає) і `to_xml`
([callable](language.types.callable.md), що приймає один об'єктний
параметр і повертає рядок).

`exceptions` bool
Визначає, чи помилки викидатимуть виняток типу
[SoapFault](class.soapfault.md).

За промовчанням значення **`true`**

`connection_timeout` int
Визначає час очікування в секундах для підключення до сервісу SOAP.
Параметр не визначає час очікування служб із повільними відповідями. Щоб
обмежити час очікування завершення дзвінків, можна використовувати
параметр конфігурації
[default_socket_timeout](filesystem.configuration.md#ini.default-socket-timeout).

`cache_wsdl` int
Якщо вказано параметр `wsdl`, а також параметр
[soap.wsdl_cache_enabled](soap.configuration.md#ini.soap.wsdl-cache-enabled)
Увімкнено, цей параметр визначає тип кешування. Одне із значень:
**`WSDL_CACHE_NONE`**, **`WSDL_CACHE_DISK`**, **`WSDL_CACHE_MEMORY`**
або **`WSDL_CACHE_BOTH`**.

Доступні два типи кешу: кешування в пам'яті, яке кешує WSDL
пам'яті поточного процесу та дискове кешування, яке кешує WSDL в
файл на диску, що розділяється між усіма процесами. Каталог, який
буде використовуватися для дискового кешу, що визначається параметром
[soap.wsdl_cache_dir](soap.configuration.md#ini.soap.wsdl-cache-dir).
Обидва кеші використовують однаковий час життя, що визначається параметром
[soap.wsdl_cache_ttl](soap.configuration.md#ini.soap.wsdl-cache-ttl).
У кеша в пам'яті також є максимальна кількість записів, що визначається
параметром
[soap.wsdl_cache_limit](soap.configuration.md#ini.soap.wsdl-cache-limit).

Якщо не вказано, використовуватиметься параметр конфігурації
[soap.wsdl_cache](soap.configuration.md#ini.soap.wsdl-cache).

`user_agent` string
Значення для використання в заголовку HTTP `User-Agent` при виконанні
запитів.

Можна також встановити за допомогою параметра
[`stream_context`](soapclient.construct.md#soapclient.construct.options.stream-context).

Якщо не вказано, User-Agent буде ``PHP-SOAP/'` за яким слідує
значення **`PHP_VERSION`**.

`stream_context` resource
Контекст [stream context] (context.md) створений за допомогою функції
[stream_context_create()](function.stream-context-create.md), яка
дає змогу встановити додаткові параметри.

Контекст може містити [параметри контексту
сокета](context.socket.md), [параметри контексту
SSL](context.ssl.md), а також вибрані [опції контексту
HTTP](context.http.md): `content_type`, `header`, `max_redirects`,
`protocol_version`, та `user_agent`.

Зверніть увагу, що наступні заголовки HTTP генеруються
автоматично або на основі інших параметрів і ігноруватимуться,
якщо вказано в параметрі контексту ``header'`: `host`, `connection`,
`user-agent`, `content-length`, `content-type`, `cookie`,
'authorization' і 'proxy-authorization'

`features` int
Бітова маска для включення однієї або кількох таких функцій:

**`SOAP_SINGLE_ELEMENT_ARRAYS`**
При декодуванні відповіді масив за замовчуванням визначається, з'являється
чи ім'я елемента один або кілька разів у певному батьківському
елемент. Для елементів, які з'являються лише один раз, властивість
об'єкта дозволяє отримати прямий доступ до вмісту; для елементів,
які з'являються більше одного разу, властивість містить масив з
вміст кожного відповідного елемента.

Якщо увімкнено функцію **`SOAP_SINGLE_ELEMENT_ARRAYS`**, елементи,
які з'являються лише один раз, поміщаються в одноелементний масив,
щоб доступ був послідовним всім елементів. Це буде працювати
тільки при використанні WSDL, що містить схему відповіді. Для
демонстрації дивіться розділ із прикладами.

**`SOAP_USE_XSI_ARRAY_TYPE`**
Якщо [параметру
`use`](soapclient.construct.md#soapclient.construct.options.use) або
властивості WSDL передано значення `encoded`, масиви примусово
використовують тип `SOAP-ENC: Array`, а не специфічний для схеми.

**`SOAP_WAIT_ONE_WAY_CALLS`**
Очікування відповіді, навіть якщо WSDL вказує на односторонній запит.

`keep_alive` bool
Логічне значення, яке визначає, чи слід надсилати заголовок
`Connection: Keep-Alive` або `Connection: close`.

Типово **`true`**

`ssl_method` string
Визначає версію протоколу SSL або TLS для використання у захищених
HTTP-з'єднання замість узгодження за промовчанням. Вказівка
**`SOAP_SSL_METHOD_SSLv2`** або **`SOAP_SSL_METHOD_SSLv3`** змусить
використовувати SSL 2 або SSL 3 відповідно. Вказівка константи
**`SOAP_SSL_METHOD_SSLv23`** не має жодного сенсу; константа
існує лише зворотної сумісності. Починаючи з PHP 7.2,
вказівка константи **`SOAP_SSL_METHOD_TLS`** також не має жодного
сенсу; у ранніх версіях константа визначала примусове
Використання TLS 1.0.

Зверніть увагу, що SSL версій 2 та 3 вважаються небезпечними та можуть
не підтримувати встановлену бібліотеку OpenSSL.

Параметр оголошений *УСТАРШИМ*, починаючи з PHP 8.1.0. Більш гнучкою
альтернативою, що дозволяє вказувати окремі версії TLS, можна
використовувати параметр
[`stream_context`](soapclient.construct.md#soapclient.construct.options.stream-context)
з параметром 'crypto_method'.

**Приклад #1 Вказівка використання тільки TLS 1.3**

` <?php$context u003d stream_context_create([    'ssl' u003d> [        'crypto_method' u003d> STREAM_CRYPTO_METHOD_TLSv1_3_CLIENT     ]];$client u003d new SoapClient("some.wsdl", ['context' u003d> $context]); `

### Помилки

Метод **SoapClient::\_\_construct()** виводить помилку рівня
**`E_ERROR`**, якщо параметри `location` та `uri` не вказані в режимі
не-WSDL.

Викидається виняток [SoapFault](class.soapfault.md), якщо
параметр `wsdl` URI не може бути завантажений.

### Приклади

**Приклад #2 Приклад використання **SoapClient::\_\_construct()****

` <?php$client u003d new SoapClient("some.wsdl");$client u003d new SoapClient("some.wsdl", array('soap_version'   u003d> SOAP_1_2));$Clent u003d ", array('login'          u003d> "some_name",                                            'password'       u003d> "some_password"));$client u003d new SoapClient("some.wsdl", array('proxy_host'     u003d> "localhost",                                            'proxy_port' u003d> 8080));$client u003d new SoapClient("some.wsdl", array('proxy_host'     u003d> "localhost",                                            'proxy_port'     u003d> 8080,                                            'proxy_login'    u003d> "some_name",                                            'proxy_password' u003d> "some_password"));$clientu003du003dnew SoapClient("some.wsdl", array('local_cert'     u003d> "cert_key.pem"));$client u003d new SoapClient(null, y ¦                                                                                   | cation' u003d> "http://localhost/soap.php",                                     'uri'      u003d> "http://test-uri/",                                     'style'    u003d> SOAP_DOCUMENT,                                     'use'      u003d> SOAP_LITERAL));$client u003d new SoapClient("some.wsdl", array('compression' u003d> SOAP_COMPRESSION_ACCEPT | SOAP_COMPRESSION_GZIP|| 9));$client u003d new SoapClient("some.wsdl", array('encoding'u003d>'ISO-8859-1'));class MyBook {    public $title; public $author;}$client u003d new SoapClient("books.wsdl", array('classmap' u003d> array('book' u003d> "MyBook")));$typemap u003d array(    array("type_ "http://schemas.example.com",         "type_name" u003d> "book",         "from_xml"  u003d> "unserialize_book",         "to_xml"    u003d> "serialize_book"));$client u003d new SoapClient("books. wsdl", array('typemap' u003d> $typemap));?> `

**Приклад #3 Приклад використання **`SOAP_SINGLE_ELEMENT_ARRAYS`****

` /* Припускаючи, що відповідь, подібний цьому, і відповідний WSDL:<?xml versionu003d"1.0" encodingu003d"UTF-8"?><SOAP-ENV:Envelope xmlns:SOAP-ENVu003d"http://sche .xmlsoap.org/soap/envelope/" xmlnsu003d"urn:example">    <SOAP-ENV:Body>        <response>            <collection>                <item>Single</item>            </collection>            <collection>                <item>First </item>                         ¦¦¦¦                ¦         ¦       <br>
";$client u003d new TestSoapClient(__DIR__ . '/temp.wsdl');$response u003d $client->exampleRequest();var_dump( $response->collection[0]->item );var_dump(>$ collection[1]->item );echo "
За допомогою SOAP_SINGLE_ELEMENT_ARRAYS:
";$client u003d new TestSoapClient(__DIR__ . '/temp.wsdl', ['features' u003d> SOAP_SINGLE_ELEMENT_ARRAYS]);$response u003d $client->exampleRequest()>$_ item );var_dump( $response->collection[1]->item );`

Результат виконання цього прикладу:

За замовчуванням:
string(6) "Single"
array(2) {
[0] u003d>
string(5) "First"
[1] u003d>
string(6) "Second"
}

За допомогою SOAP_SINGLE_ELEMENT_ARRAYS:
array(1) {
[0] u003d>
string(6) "Single"
}
array(2) {
[0] u003d>
string(5) "First"
[1] u003d>
string(6) "Second"
}
