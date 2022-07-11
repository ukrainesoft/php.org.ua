- [« GearmanClient::do](gearmanclient.do.md)
- [GearmanClient::doHigh »](gearmanclient.dohigh.md)

- [PHP Manual](index.md)
- [GearmanClient](class.gearmanclient.md)
- Запускає виконання завдання у фоновому режимі

# GearmanClient::doBackground

(PECL gearman u003d 0.5.0)

GearmanClient::doBackground — Запускає виконання завдання у фоновому режимі
режимі

### Опис

public **GearmanClient::doBackground**(string `$function_name`, string
`$workload`, string `$unique` u003d ?): string

Запуск виконання завдання у фоновому режимі, повертаючи дескриптор
завдання, яке може бути використане для запиту стану
виконується завдання.

### Список параметрів

`function_name`
Зареєстрована функція, що викликається робочим процесом

`workload`
Серіалізовані дані, що підлягають обробці

`unique`
Унікальний ID, призначений для певної задачі

### Значення, що повертаються

Дескриптор завдання для надісланого завдання.

### Приклади

**Приклад #1 Надсилає та відстежує фонове завдання**

Обробник у цьому прикладі має штучну затримку, щоб
змоделювати тривале виконання завдання. Клієнт періодично
перевіряє стан завдання, що виконується.

` <?php/* створення об'єкта */$gmclientu003d new GearmanClient();/* вказівка сервера за мовчанням */$gmclient->addServer();/* запуск виконання клієнта $/$ "reverse", "this is a test");if($gmclient->returnCode() !u003d GEARMAN_SUCCESS){ echo "неуспішний код повернення
";  exit;}$done u003d false;do{   sleep(3);   $stat u003d $gmclient->jobStatus($job_handle);  if (!$stat[0])   не    true;  echo "Виконується: " . ($stat[1] ? "true" : "false") . ", числитель: " . $stat[2] . ", знаменник: " . .
";}while(!$done);echo "завершено!
";?> `

Результатом виконання цього прикладу буде щось подібне:

Виконується: true, чисельник: 3, знаменник: 14
Виконується: true, чисельник: 6, знаменник: 14
Виконується: true, чисельник: 9, знаменник: 14
Виконується: true, чисельник: 12, знаменник: 14
Виконується: false, чисельник: 0, знаменник: 0
завершено!

### Дивіться також

- [GearmanClient::doNormal()](gearmanclient.donormal.md) - Виконує
одиночне завдання та повертає результат
- [GearmanClient::doHigh()](gearmanclient.dohigh.md) - Запускає на
виконання завдання з високим пріоритетом
- [GearmanClient::doLow()](gearmanclient.dolow.md) - Запускає на
виконання завдання з низьким пріоритетом
- [GearmanClient::doHighBackground()](gearmanclient.dohighbackground.md) -
Запускає на виконання з високим пріоритетом завдання у фоновому режимі
режимі
- [GearmanClient::doLowBackground()](gearmanclient.dolowbackground.md) -
Запускає виконання з низьким пріоритетом завдання у фоновому режимі
