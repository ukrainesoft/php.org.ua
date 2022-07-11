- [«
GearmanClient::doLowBackground](gearmanclient.dolowbackground.md)
- [GearmanClient::doStatus »](gearmanclient.dostatus.md)

- [PHP Manual](index.md)
- [GearmanClient](class.gearmanclient.md)
- Виконує одиночне завдання та повертає результат

# GearmanClient::doNormal

(No version information available, might only be in Git)

GearmanClient::doNormal — Виконує одиночне завдання та повертає
результат

### Опис

public **GearmanClient::doNormal**(string `$function_name`, string
`$workload`, string `$unique` u003d ?): string

Виконує одиночне завдання та повертає рядкову виставу
результату. Формат результату, що повертається, визначають об'єкти
[GearmanClient](class.gearmanclient.md) та
[GearmanWorker](class.gearmanworker.md).

### Список параметрів

`function_name`
Зареєстрована функція, що викликається робочим процесом

`workload`
Серіалізовані дані, що підлягають обробці

`unique`
Унікальний ID, призначений для певної задачі

### Значення, що повертаються

Рядок, що представляє результат виконання завдання.

### Приклади

**Приклад #1 Виконання простого завдання з негайним поверненням**

`<?php?>`

`<?php# Код клієнтаecho "Запуск
";# Створення клієнта.$gmclientu003d new GearmanClient();# Додавання сервера за мовчанням (localhost).$gmclient->addServer();echo "Відправлення завдання
";$result u003d $gmclient->doNormal("reverse", "Hello!");echo "Завдання виконано: $result
";?> `

`<?phpecho "Запуск
"Створення об'єкта обробника завдань. для швидкої обробки без висновку$gmworker->addFunction("reverse", "reverse_fn");print "Чекання завдання...
";while($gmworker->work()){ if ($gmworker->returnCode() !u003d GEARMAN_SUCCESS)  {   echo "Код повернення: " . $gmworker->return|
";   break; }}function reverse_fn($job){ return strrev($job->workload());}?> `

Результатом виконання цього прикладу буде щось подібне:

Запуск
Надсилання завдання
Завдання виконано: !olleH

**Приклад #2 Надсилання завдання на обробку та моніторинг стану**

Після надсилання завдання скрипт у циклі запитує поточний прогрес
обробки. В обробник введено штучну затримку, щоб
змоделювати завдання, що довго виконується. Обробник надсилає клієнту
свій поточний стан, як тільки завершено обробку чергової порції
даних. Послідовні виклики **GearmanClient::doNormal()**
запитують поточний стан завдання, що виконується.

`<?php# Код клієнта# Створення клієнта.$gmclientu003d new GearmanClient();# Додавання сервера за мовчанням (localhost).
";# Отправка задания перевернуть строкуdo{  $result u003d $gmclient->doNormal("reverse", "Hello!");  # Проверка состояния на ошибки или возвращаемые данные.  switch($gmclient->returnCode())  {    case GEARMAN_WORK_DATA: echo "Дані: $result
";      break;   case GEARMAN_WORK_STATUS:     list($numerator, $denominator)u003d $gmclient->doStatus();
";      break;    case GEARMAN_WORK_FAIL:      echo "Помилка
";     exit;   case GEARMAN_SUCCESS:      break;    default:      echo "Код повернення: " . |
";      echo "Помилка: " . $gmclient->error() . "
";      echo "Номер помилки: " . $gmclient->getErrno() . "
";      exit;  }}while($gmclient->returnCode() !u003d GEARMAN_SUCCESS);echo "Обробка завершена: $result
";?> `

`<?php# Код обробникаecho "Запуск
";# Створюємо свій об'єкт обробника.$gmworkeru003d new GearmanWorker();# Додавання сервера за мовчанням (localhost). ", "reverse_fn");print "Чекання завдання...
";while($gmworker->work()){ if ($gmworker->returnCode() !u003d GEARMAN_SUCCESS)  {   echo "Код повернення: " . $gmworker->return|
";    break;  }}function reverse_fn($job){  echo "Отримане завдання: " . $job->handle() . "
";  $workload u003d $job->workload();  $workload_size u003d $job->workloadSize(); echo "Завантажені дані: $workload ($workload_size)
";  # Цей цикл не є необхідним, просто показує, як все працює  for ($xu003d 0; $x < $workload_size; $x++) оправа"| |
";   $job->sendStatus($x+1, $workload_size);   $job->sendData(substr($workload, $x, 1));    sleep(1);  }  $$ echo "Результат: $result
";  # Повертаємо то, що хочемо надіслати клієнту  return $result;}?> `

Результатом виконання цього прикладу буде щось подібне:

Висновок оброблювача:

Запуск
Очікування завдання...
Отримане завдання: H:foo.local:106
Завантажені дані: Hello! (6)
1/6 завершено
2/6 завершено
3/6 завершено
4/6 завершено
5/6 завершено
6/6 завершено
Результат: !olleH

Висновок клієнта:

Запуск
Надсилання завдання
Стан: 1/6 завершено
Дані: H
Стан: 2/6 завершено
Дані: e
Стан: 3/6 завершено
Дані: l
Стан: 4/6 завершено
Дані: l
Стан: 5/6 завершено
Дані: o
Стан: 6/6 завершено
Дані: !
Обробка завершена: !olleH

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
