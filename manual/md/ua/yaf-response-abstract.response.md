- [«
Yaf_Response_Abstract::prependBody](yaf-response-abstract.prependbody.md)
- [Yaf_Response_Abstract::setAllHeaders
»](yaf-response-abstract.setallheaders.md)

- [PHP Manual](index.md)
- [Yaf_Response_Abstract](class.yaf-response-abstract.md)
- Надсилає відповідь

# Yaf_Response_Abstract::response

(Yaf \>u003d1.0.0)

Yaf_Response_Abstract::response — Надсилає відповідь

### Опис

public **Yaf_Response_Abstract::response**(): void

Відправляє відповідь

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

### Приклади

**Приклад #1 Приклад використання **Yaf_Response_Abstract::response()****

` <?php$response u003d new Yaf_Response_Http();$response->setBody("Привіт")->setBody(", Світ", "footer");$response->response();?> `

Результатом виконання цього прикладу буде щось подібне:

Привіт світ

### Дивіться також

- [Yaf_Response_Abstract::setBody()](yaf-response-abstract.setbody.md) -
Встановлює вміст відповіді
- [Yaf_Response_Abstract::clearBody()](yaf-response-abstract.clearbody.md) -
Скидає все існуюче тіло відповіді
