- [«
Yaf_Response_Abstract::\_\_destruct](yaf-response-abstract.destruct.md)
- [Yaf_Response_Abstract::getHeader
»](yaf-response-abstract.getheader.md)

- [PHP Manual](index.md)
- [Yaf_Response_Abstract](class.yaf-response-abstract.md)
- Отримує існуючий вміст

# Yaf_Response_Abstract::getBody

(Yaf \>u003d1.0.0)

Yaf_Response_Abstract::getBody — Отримує існуючий вміст

### Опис

public **Yaf_Response_Abstract::getBody**(string `$key` u003d ?):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

Отримує існуючий вміст

### Список параметрів

`key`
Ключ вмісту, якщо ви не вкажете, буде використовуватися
Yaf_Response_Abstract::DEFAULT_BODY. Якщо ви передасте **`null`**,
тоді весь вміст буде повернено як масив

> **Примітка**:
>
> Параметр було додано з 2.2.0

### Значення, що повертаються

### Приклади

**Приклад #1 Приклад використання **Yaf_Response_Abstract::getBody()****

` <?php$response u003d new Yaf_Response_Http();$response->setBody("Привіт")->setBody(", Світ", "footer");var_dump($response->getBody()); //за умовчанням var_dump($response->getBody(Yaf_Response_Abstract::DEFAULT_BODY)); //так ж, як і вище var_dump($response->getBody("footer"));var_dump($response->getBody(NULL)); //отримати все?> `

Результатом виконання цього прикладу буде щось подібне:

string(5) "Привіт"
string(5) "Привіт"
string(6) ", Світ"
array(2) {
["content"]u003d>
string(5) "Привіт"
["footer"]u003d>
string(6) ", Світ"
}

### Дивіться також

- [Yaf_Response_Abstract::setBody()](yaf-response-abstract.setbody.md) -
Встановлює вміст відповіді
- [Yaf_Response_Abstract::appendBody()](yaf-response-abstract.appendbody.md) -
Додає вміст до тіла відповіді
- [Yaf_Response_Abstract::prependBody()](yaf-response-abstract.prependbody.md) -
Призначення prependBody
- [Yaf_Response_Abstract::clearBody()](yaf-response-abstract.clearbody.md) -
Скидає все існуюче тіло відповіді
