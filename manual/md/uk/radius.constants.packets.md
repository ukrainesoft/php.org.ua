- [« Опції RADIUS](radius.constants.options.md)
- [Типи атрибутів RADIUS »](radius.constants.attributes.md)

- [PHP Manual](index.md)
- [Предвизначені константи](radius.constants.md)
- Типи пакетів RADIUS

## типи пакетів RADIUS

Пакети RADIUS, будь то запит або відповідь завжди включають тип. Ці
константи корисні при заданні типу при використанні
[radius_create_request()](function.radius-create-request.md) та при
обробці відповіді
[radius_send_request()](function.radius-send-request.md).

**`RADIUS_ACCESS_REQUEST`** (int)
Запит Access-Request (Запит доступу), використовується для автентифікації
користувача сервером RADIUS Дані пакети повинні містити атрибут
[**`RADIUS_NAS_IP_ADDRESS`**](radius.constants.attributes.md#constant.radius-nas-ip-address)
або
[**`RADIUS_NAS_IDENTIFIER`**](radius.constants.attributes.md#constant.radius-nas-identifier)
, також повинні утримувати
[**`RADIUS_USER_PASSWORD`**](radius.constants.attributes.md#constant.radius-user-password),
[**`RADIUS_CHAP_PASSWORD`**](radius.constants.attributes.md#constant.radius-chap-password)
або
[**`RADIUS_STATE`**](radius.constants.attributes.md#constant.radius-state)
, і можуть містити атрибут
[**`RADIUS_USER_NAME`**](radius.constants.attributes.md#constant.radius-user-name).

**`RADIUS_ACCESS_ACCEPT`** (int)
Відповідь Access-Accept (Доступ дозволено) надходить у відповідь на запит
Access-Request і означає, що сервер RADIUS успішно автентифікував
користувача.

**`RADIUS_ACCESS_REJECT`** (int)
Відповідь Access-Reject (У доступі відмовлено) надходить у відповідь на запит
Access-Request і означає, що сервер RADIUS не зміг аутентифікувати
користувача.

**`RADIUS_ACCESS_CHALLENGE`** (int)
Відповідь Access-Challenge (Зміна у праві на доступ) надходить у відповідь
запит Access-Request і означає, що сервер RADIUS потребує
додаткова інформація для прийняття рішення щодо автентифікації.

**`RADIUS_ACCOUNTING_REQUEST`** (int)
Запит Accounting-Request (Запит облікових даних), використовується для
передачі облікової інформації для служби сервера RADIUS.

**`RADIUS_ACCOUNTING_RESPONSE`** (int)
Відповідь Accounting-Response (Облікові дані) є відповіддю на запит
Accounting-Request.

**`RADIUS_COA_REQUEST`** (int)
Запит CoA-Request надсилається з сервера RADIUS і означає, що
змінилася авторизація у сеансі користувача. Відповідь має бути
відправлений у формі CoA-ACK або CoA-NAK.

Ця константа доступна в PECL radius 1.3.0 та вище.

**`RADIUS_COA_ACK`** (int)
Відповідь CoA-ACK посилається на сервер RADIUS для позначення, що
авторизацію користувача оновлено.

Ця константа доступна в PECL radius 1.3.0 та вище.

**`RADIUS_COA_NAK`** (int)
Відповідь CoA-NAK посилається на сервер RADIUS для позначення, що
авторизацію користувача не можна оновити.

Ця константа доступна в PECL radius 1.3.0 та вище.

**`RADIUS_DISCONNECT_REQUEST`** (int)
Запит Disconnect-Request (Запит переривання сесії), що посилається з
сервера RADIUS і означає, що необхідно перервати сеанс користувача.

Ця константа доступна в PECL radius 1.3.0 та вище.

**`RADIUS_DISCONNECT_ACK`** (int)
Відповідь Disconnect-ACK посилається на сервер RADIUS і означає, що
сесія користувача завершена.

Ця константа доступна в PECL radius 1.3.0 та вище.

**`RADIUS_DISCONNECT_NAK`** (int)
Відповідь Disconnect-NAK посилається на сервер RADIUS і означає, що
сесія користувача не може бути завершена.

Ця константа доступна в PECL radius 1.3.0 та вище.
