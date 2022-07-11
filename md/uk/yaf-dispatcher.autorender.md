- [«Yaf_Dispatcher](class.yaf-dispatcher.md)
- [Yaf_Dispatcher::catchException
»](yaf-dispatcher.catchexception.md)

- [PHP Manual](index.md)
- [Yaf_Dispatcher](class.yaf-dispatcher.md)
- Включає/вимикає авторендеринг

# Yaf_Dispatcher::autoRender

(Yaf \>u003d1.0.0)

Yaf_Dispatcher::autoRender — Включає/вимикає авторендеринг

### Опис

public **Yaf_Dispatcher::autoRender**(bool `$flag` u003d ?):
[Yaf_Dispatcher](class.yaf-dispatcher.md)

[Yaf_Dispatcher](class.yaf-dispatcher.md) відображатиметься
автоматично після надсилання вхідного запиту. Ви можете запобігти
рендеринг, викликавши цей метод за допомогою `flag`**`true`**

> **Примітка**:
>
> Ви можете просто повернути **`false`** у дії, щоб запобігти
> автоматичний рендеринг цієї дії

### Список параметрів

`flag`
bool

> **Примітка**:
>
> починаючи з 2.2.0, якщо цей параметр не заданий, буде повернено поточне
> стан

### Значення, що повертаються

### Приклади

**Приклад #1 Приклад використання **Yaf_Dispatcher::autoRender()****

` <?phpclass IndexController extends Yaf_Controller_Abstract {     /* Метод init будет вызван, как только будет инициализирован контроллер */     public function init() {         if ($this->getRequest()->isXmlHttpRequest()) {             //не вызывать render для ajax-запиту               //ми виведемо рядокJSON             Yaf_Dispatcher::getInstance()->autoRender(FAL }     }}?> `

Результатом виконання цього прикладу буде щось подібне:
