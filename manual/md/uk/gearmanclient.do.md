- [« GearmanClient::data](gearmanclient.data.md)
- [GearmanClient::doBackground »](gearmanclient.dobackground.md)

- [PHP Manual](index.md)
- [GearmanClient](class.gearmanclient.md)
- Виконує одне завдання і повертає результат [Застарілий метод]

# GearmanClient::do

(PECL gearman u003d 0.5.0)

GearmanClient::do — Виконує одне завдання та повертає результат
\[Застарілий метод\]

### Опис

public **GearmanClient::do**(string `$function_name`, string
`$workload`, string `$unique` u003d ?): string

Метод **GearmanClient::do()** застарів, починаючи з pecl/gearman 1.0.0.
Використовуйте [GearmanClient::doNormal()](gearmanclient.donormal.md).

### Список параметрів

`function_name`
Зареєстрована функція, що викликається робочим процесом

`workload`
Серіалізовані дані, що підлягають обробці

`unique`
Унікальний ID, призначений для певної задачі

### Значення, що повертаються

Результат виконання завдання у вигляді рядка.

### Приклади

**Приклад #1 Просте представлення завдання з безпосереднім поверненням**

`<?php# Код клієнтаecho "Початок
";# Створення клієнта$gmclientu003d new GearmanClient();# Вказівка сервера за мовчанням (localhost).$gmclient->addServer();echo "Відправлення завдання
";$result u003d $gmclient->doNormal("reverse", "Hello!");echo "Успішно: $result
";?> `

`<?phpecho "Початок
";# Создание экземпляра обработчика$gmworkeru003d new GearmanWorker();# Указание сервера по умолчанию (localhost).$gmworker->addServer();# Регистрация функции "reverse" на сервере. Изменение функции обработчика на# "reverse_fn_fast" для более швидкої обробки без висновку.$gmworker->addFunction("reverse", "reverse_fn");print "Чекання завдання...
";while($gmworker->work()){ if ($gmworker->returnCode() !u003d GEARMAN_SUCCESS)  {    echo "return_code: " . $gmworker->returnCode|
";   break; }}function reverse_fn($job){ return strrev($job->workload());}?> `

Результатом виконання цього прикладу буде щось подібне:

початок
Надсилання завдання
Успішно: !olleH

**Приклад #2 Передача завдання та отримання інкрементного стану**

Відправляється завдання та встановлюється цикл для отримання інформації про
зміни статусу. У обробника вказана штучна затримка для
моделювання тривалого виконання завдання та задане відправлення стану
та даних під час обробки. Кожен наступний виклик
**GearmanClient::do()** виводить інформацію про статус виконання поточного
завдання.

`<?php# Код клієнта# Створення примірника клієнта Gearman$gmclientu003d new GearmanClient();# Вказівка сервера за замовчуванням (localhost).$gmclient->addServer();ech
";# Отправка задания reversedo{  $result u003d $gmclient->doNormal("reverse", "Hello!");  # Проверка на различные возвращаемые форматы и ошибки  switch($gmclient->returnCode())  {    case GEARMAN_WORK_DATA:      echo " Дані: $result
";      break;   case GEARMAN_WORK_STATUS:     list($numerator, $denominator)u003d $gmclient->doStatus(); Та:
";      break;    case GEARMAN_WORK_FAIL:      echo "Помилка
";    exit;   case GEARMAN_SUCCESS:      break;    default:     echo "RET: " . $gmclient|
";      echo "Error: " . $gmclient->error() . "
";      echo "Errno: " . $gmclient->getErrno() . "
";      exit;  }}while($gmclient->returnCode() !u003d GEARMAN_SUCCESS);echo "Успішно: $result
";?> `

`<?php# Код обробникаecho "Початок
";# Створення примірника обробника.$gmworkeru003d new GearmanWorker();# Вказівка сервера за мовчанням  (localhost). , "reverse_fn");print "Чекання завдання...
";while($gmworker->work()){ if ($gmworker->returnCode() !u003d GEARMAN_SUCCESS)  {    echo "return_code: " . $gmworker->returnCode|.
";    break;  }}function reverse_fn($job){  echo "Отримане завдання: " . $job->handle() . "
";  $workload u003d $job->workload();  $workload_size u003d $job->workloadSize(); echo "Робоче навантаження: $workload ($workload_size)
"; | # Даний цикл не є необхідним, тільки ілюструє процесс  for ($xu003d 0; $x < $workload_size; $x++)  { + виправа"| ||||||||
";   $job->sendStatus($x+1, $workload_size);   $job->sendData(substr($workload, $x, 1));    sleep(1);  }  $$ echo "Результат: $result
";  # Повернення результату, надсилається клієнту return $result;}?> `

Результатом виконання цього прикладу буде щось подібне:

Висновок оброблювача:

початок
Очікування завдання...
Отримане завдання: H:foo.local:106
Робоче навантаження: Hello! (6)
1/6 виконано
2/6 виконано
3/6 виконано
4/6 виконано
5/6 виконано
6/6 виконано
Результат: !olleH

Висновок клієнта:

початок
Надсилання завдання
Заголовок: 1/6 виконано
Дані: H
Заголовок: 2/6 виконано
Дані: e
Заголовок: 3/6 виконано
Дані: l
Заголовок: 4/6 виконано
Дані: l
Заголовок: 5/6 виконано
Дані: o
Заголовок: 6/6 виконано
Дані: !
Успішно: !olleH

### Дивіться також

- [GearmanClient::doHigh()](gearmanclient.dohigh.md) - Запускає на
виконання завдання з високим пріоритетом
- [GearmanClient::doLow()](gearmanclient.dolow.md) - Запускає на
виконання завдання з низьким пріоритетом
- [GearmanClient::doBackground()](gearmanclient.dobackground.md) -
Запускає виконання завдання у фоновому режимі
- [GearmanClient::doHighBackground()](gearmanclient.dohighbackground.md) -
Запускає на виконання з високим пріоритетом завдання у фоновому режимі
режимі
- [GearmanClient::doLowBackground()](gearmanclient.dolowbackground.md) -
Запускає виконання з низьким пріоритетом завдання у фоновому режимі
