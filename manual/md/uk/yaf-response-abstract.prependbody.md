- [«
Yaf_Response_Abstract::getHeader](yaf-response-abstract.getheader.md)
- [Yaf_Response_Abstract::response
»](yaf-response-abstract.response.md)

- [PHP Manual](index.md)
- [Yaf_Response_Abstract](class.yaf-response-abstract.md)
- Призначення prependBody

# Yaf_Response_Abstract::prependBody

(Yaf \>u003d1.0.0)

Yaf_Response_Abstract::prependBody — Призначення prependBody

### Опис

public **Yaf_Response_Abstract::prependBody**(string `$content`, string
`$key` u003d ?): bool

Додає вміст до існуючого блоку вмісту

### Список параметрів

`body`
Рядок вмісту

`key`
Ключ вмісту, ви можете встановити вміст із ключем, якщо ви не
вкажете, то використовуватиметься Yaf_Response_Abstract::DEFAULT_BODY

> **Примітка**:
>
> Параметр додано з 2.2.0

### Значення, що повертаються

bool

### Приклади

**Приклад #1 Приклад використання
**Yaf_Response_Abstract::prependBody()****

` <?php$response u003d new Yaf_Response_Http();$response->setBody("Світ")->prependBody("Привіт ,");echo $response;?> `

Результатом виконання цього прикладу буде щось подібне:

Привіт світ

### Дивіться також

- [Yaf_Response_Abstract::getBody()](yaf-response-abstract.getbody.md) -
Отримує існуючий вміст
- [Yaf_Response_Abstract::setBody()](yaf-response-abstract.setbody.md) -
Встановлює вміст відповіді
- [Yaf_Response_Abstract::appendBody()](yaf-response-abstract.appendbody.md) -
Додає вміст до тіла відповіді
- [Yaf_Response_Abstract::clearBody()](yaf-response-abstract.clearbody.md) -
Скидає все існуюче тіло відповіді
