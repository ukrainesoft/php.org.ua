- [« Типи ресурсів](oauth.resources.md)
- [Приклади »](oauth.examples.md)

- [PHP Manual](index.md)
- [OAuth](book.oauth.md)
- Обумовлені константи

# Зумовлені константи

Наведені нижче константи визначені даним модулем і можуть бути
доступні лише в тому випадку, якщо PHP був зібраний за допомогою цього
модуля або в тому випадку, якщо даний модуль був динамічно завантажений
під час виконання.

Більшість із цих констант торкаються проблем, зазначених у тому числі
в офіційних [» повідомленнях про
проблем](http://wiki.oauth.net/ProblemReporting) OAuth. Проте
Зауважте, хоча дані імена констант і мають схожу схему імен, вони
характерні лише для PHP.

**`OAUTH_SIG_METHOD_RSASHA1`** (string)
Метод підпису OAuth *RSA-SHA1*.

**`OAUTH_SIG_METHOD_HMACSHA1`** (string)
Метод підпису OAuth * HMAC-SHA1 *.

**`OAUTH_SIG_METHOD_HMACSHA256`** (string)
Метод підпису OAuth * HMAC-SHA256 *.

**`OAUTH_AUTH_TYPE_AUTHORIZATION`** (string)
Ця константа вказує, що OAuth параметри буде поміщено в заголовок
`Authorization`.

**`OAUTH_AUTH_TYPE_NONE`** (string)
Ця константа означає NoAuth OAuth запит.

**`OAUTH_AUTH_TYPE_URI`** (string)
Ця константа вказує, що OAuth параметри будуть розміщені в URI
запиту. URI.

**`OAUTH_AUTH_TYPE_FORM`** (string)
Ця константа вказує на те, що OAuth параметри будуть поміщені в тіло HTTP
POST запит.

**`OAUTH_HTTP_METHOD_GET`** (string)
Константа вказує на використання *GET* методу OAuth запиту.

**`OAUTH_HTTP_METHOD_POST`** (string)
Константа вказує на використання методу *POST* для OAuth запиту.

**`OAUTH_HTTP_METHOD_PUT`** (string)
Константа вказує на використання методу *PUT* для OAuth запиту.

**`OAUTH_HTTP_METHOD_HEAD`** (string)
Константа вказує на використання *HEAD* методу OAuth запиту.

**`OAUTH_HTTP_METHOD_DELETE`** (string)
Константа вказує на використання *DELETE* методу OAuth запиту.

**`OAUTH_REQENGINE_STREAMS`** (int)
Використовується методом
[OAuth::setRequestEngine()](oauth.setrequestengine.md) для вибору
[потоків PHP](book.stream.md) як двигун, на противагу
константі **`OAUTH_REQENGINE_CURL`**, що використовується для вибору
[Curl](book.curl.md).

**`OAUTH_REQENGINE_CURL`** (int)
Використовується методом
[OAuth::setRequestEngine()](oauth.setrequestengine.md) для вибору
[Curl](book.curl.md) як двигун, на противагу константі
**`OAUTH_REQENGINE_STREAMS`**, що використовується для вибору [потоків
PHP] (book.stream.md).

**`OAUTH_OK`** (int)
Життя прекрасне.

**`OAUTH_BAD_NONCE`** (int)
Значення *oauth_nonce* використовувалося у попередньому запиті,
отже, не можна використовувати зараз.

**`OAUTH_BAD_TIMESTAMP`** (int)
Значення *oauth_timestamp* не було прийнято провайдером. В цьому випадку,
відповідь також має містити параметр *oauth_acceptable_timestamps*.

**`OAUTH_CONSUMER_KEY_UNKNOWN`** (int)
*oauth_consumer_key* тимчасово недоступний провайдеру. Наприклад, якщо
провайдер заблокував споживача

**`OAUTH_CONSUMER_KEY_REFUSED`** (int)
Ключ споживача було відхилено.

**`OAUTH_INVALID_SIGNATURE`** (int)
Значення *oauth_signature* недійсне, тому що не збігається з
підписом, обчисленим провайдером.

**`OAUTH_TOKEN_USED`** (int)
*oauth_token* було вжито. Він уже використовувався у попередньому
запит/запит і більше не може бути використаний.

**`OAUTH_TOKEN_EXPIRED`** (int)
*oauth_token* застарів.

**`OAUTH_TOKEN_REVOKED`** (int)
*oauth_token* був відкликаний і надалі не буде прийнято.

**`OAUTH_TOKEN_REJECTED`** (int)
Провайдер не прийняв *oauth_token*. Причина невідома, але можливо
полягає в тому, що токен ніколи не був виданий, або вже був
використаний, або застарів, або був забутий провайдером.

**`OAUTH_VERIFIER_INVALID`** (int)
Некоректний *oauth_verifier*.

**`OAUTH_PARAMETER_ABSENT`** (int)
Необхідний параметр не отримано. У цьому випадку, відповідь повинна також
містити параметр *oauth_parameters_absent*.

**`OAUTH_SIGNATURE_METHOD_REJECTED`** (int)
*oauth_signature_method* не було прийнято провайдером.
