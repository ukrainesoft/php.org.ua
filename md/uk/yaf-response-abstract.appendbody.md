- [« Yaf_Response_Abstract](class.yaf-response-abstract.md)
- [Yaf_Response_Abstract::clearBody
»](yaf-response-abstract.clearbody.md)

- [PHP Manual](index.md)
- [Yaf_Response_Abstract](class.yaf-response-abstract.md)
- Додає вміст до тіла відповіді

# Yaf_Response_Abstract::appendBody

(Yaf \>u003d1.0.0)

Yaf_Response_Abstract::appendBody — Додає вміст до тіла відповіді

### Опис

public **Yaf_Response_Abstract::appendBody**(string `$content`, string
`$key` u003d ?): bool

Додає вміст до існуючого блоку вмісту

### Список параметрів

`body`
Рядок вмісту

`key`
Ключ контенту, ви можете встановити контент з ключем, якщо ви не
вкажете, то використовуватиметься Yaf_Response_Abstract::DEFAULT_BODY

> **Примітка**:
>
> Параметр додано з 2.2.0

### Значення, що повертаються

bool

### Приклади

**Приклад #1 Приклад використання
**Yaf_Response_Abstract::appendBody()****

` <?php$response u003d new Yaf_Response_Http();$response->setBody("Привіт")->prependBody(", Світ");echo $response;?> `

Результатом виконання цього прикладу буде щось подібне:

Привіт світ

### Дивіться також

- [Yaf_Config_Ini](class.yaf-config-ini.md)
- [Yaf_Response_Abstract::getBody()](yaf-response-abstract.getbody.md) -
Отримує існуючий вміст
- [Yaf_Response_Abstract::setBody()](yaf-response-abstract.setbody.md) -
Встановлює вміст відповіді
- [Yaf_Response_Abstract::prependBody()](yaf-response-abstract.prependbody.md) -
Призначення prependBody
- [Yaf_Response_Abstract::clearBody()](yaf-response-abstract.clearbody.md) -
Скидає все існуюче тіло відповіді
