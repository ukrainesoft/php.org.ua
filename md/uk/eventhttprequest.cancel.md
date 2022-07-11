- [«EventHttpRequest::addHeader](eventhttprequest.addheader.md)
- [EventHttpRequest::clearHeaders
»](eventhttprequest.clearheaders.md)

- [PHP Manual](index.md)
- [EventHttpRequest](class.eventhttprequest.md)
- Скасує очікування HTTP-запиту

# EventHttpRequest::cancel

(PECL event \>u003d 1.4.0-beta)

EventHttpRequest::cancel — Скасує очікування HTTP-запиту

### Опис

public **EventHttpRequest::cancel**(): void

Скасує очікування HTTP-запиту.

Скасує поточний запит HTTP. Callback-функція, пов'язана з цим
запитом, що не виконається, об'єкт запиту звільняється. Якщо запит у
в даний час обробляється, наприклад, безперервний запит,
відповідний об'єкт
[EventHttpConnection](class.eventhttpconnection.md) буде скинуто.

Запит може бути скасовано, якщо його callback-функция вже виконано.
Запит може бути анульований повторно з його фрагментованої
callback-функції.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Функція не повертає значення після виконання.
