- [« SoapClient::\_\_getTypes](soapclient.gettypes.md)
- [SoapClient::\_\_setLocation »](soapclient.setlocation.md)

- [PHP Manual](index.md)
- [SoapClient](class.soapclient.md)
- Встановлює cookie для запитів SOAP

# SoapClient::\_\_setCookie

(PHP 5 \>u003d 5.0.4, PHP 7, PHP 8)

SoapClient::\_\_setCookie — Встановлює cookie для запитів SOAP

### Опис

public **SoapClient::\_\_setCookie**(string `$name`, ?string `$value` u003d
**`null`**): void

Визначає cookie, які будуть надіслані із SOAP-запитами.

> **Примітка**:
>
> Виклик цього методу вплине на всі наступні виклики методів
> [SoapClient](class.soapclient.md).

### Список параметрів

`name`
Ім'я cookie.

`value`
Значення cookie. Якщо не вказано, cookie буде видалено.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -|
| 8.0.0 | `value` тепер допускає значення null. |
