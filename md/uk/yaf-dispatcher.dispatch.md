- [« Yaf_Dispatcher::disableView](yaf-dispatcher.disableview.md)
- [Yaf_Dispatcher::enableView »](yaf-dispatcher.enableview.md)

- [PHP Manual](index.md)
- [Yaf_Dispatcher](class.yaf-dispatcher.md)
- Надсилає запит

# Yaf_Dispatcher::dispatch

(Yaf \>u003d1.0.0)

Yaf_Dispatcher::dispatch — Надсилає запит

### Опис

public
**Yaf_Dispatcher::dispatch**([Yaf_Request_Abstract](class.yaf-request-abstract.md)
`$request`): [Yaf_Response_Abstract](class.yaf-response-abstract.md)

Метод виконує тяжку роботу
[Yaf_Dispatcher](class.yaf-dispatcher.md). Потрібний об'єкт запиту.

Процес відправлення має три різні події:

- Маршрутизація
- Диспетчеризація
- Відповідь

Маршрутизація виконується рівно один раз з використанням значень у
об'єкті запиту під час виклику **Yaf_Dispatcher::dispatch()**.
Диспетчеризація відбувається у циклі; запит може або вказувати на
кілька дій для відправки, або контролер або модуль, що підключається
може скинути об'єкт запиту, щоб примусово виконати надсилання
додаткових дій (дивіться
[Yaf_Plugin_Abstract](class.yaf-plugin-abstract.md). Коли все буде
готовий, [Yaf_Dispatcher](class.yaf-dispatcher.md) повертає відповідь.

### Список параметрів

`request`

### Значення, що повертаються
