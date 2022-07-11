- [« GearmanWorker](class.gearmanworker.md)
- [GearmanWorker::addOptions »](gearmanworker.addoptions.md)

- [PHP Manual](index.md)
- [GearmanWorker](class.gearmanworker.md)
- Реєстрація та додавання callback-функції

# GearmanWorker::addFunction

(PECL gearman u003d 0.5.0)

GearmanWorker::addFunction — Реєстрація та додавання callback-функції

### Опис

public **GearmanWorker::addFunction**(
string `$function_name`,
[callable](language.types.callable.md) `$function`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`&$context` u003d ?,
int `$timeout` u003d ?
): bool

Реєструє ім'я функції на сервері завдань та додає посилання на це
функцію зворотного дзвінка. Необов'язково можна задати додаткові
дані контексту, які будуть використовуватися під час виклику
callback-функції та час очікування.

### Список параметрів

`function_name`
Ім'я функції, яке потрібно зареєструвати на сервері завдань.

`function`
Callback-функція, яка буде викликатись, коли сервер отримає завдання
для зареєстрованого імені.

`context`
Посилання на довільні дані контексту програми, до яких потрібно
забезпечити доступ із функції.

`timeout`
Часовий інтервал у секундах

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Простий обробник використовує додаткові дані
контексту програми**

` <?php# отримуємо обробник gearman$workeru003d new GearmanWorker();# додаємо сервер за мовчанням (localhost)$worker->addServer();# визначаємо зміну, в про "reverse"$worker->addFunction("reverse", "reverse_cb", $count);# запускаємо обробникwhile ($worker->work());function reverse_cb($job, &$count){  $count++; return "$count: " . strrev($job->workload());}?> `

Якщо клієнт надішле два завдання для функції reverse, то висновок буде
наступним:

1: olleh
2: dlrow

### Дивіться також

- [GearmanClient::do()](gearmanclient.do.md) - Виконує одне завдання
і повертає результат [Застарілий метод]
