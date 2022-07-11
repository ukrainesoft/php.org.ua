- [« GearmanWorker::setOptions](gearmanworker.setoptions.md)
- [GearmanWorker::timeout »](gearmanworker.timeout.md)

- [PHP Manual](index.md)
- [GearmanWorker](class.gearmanworker.md)
- Встановлення часу очікування на введення/виводу на сокеті

# GearmanWorker::setTimeout

(PECL gearman \>u003d 0.6.0)

GearmanWorker::setTimeout — Встановлення часу очікування на введення/виведення на
сокеті

### Опис

public **GearmanWorker::setTimeout**(int `$timeout`): bool

Встановлює час очікування на активність на сокеті.

### Список параметрів

`timeout`
Часовий інтервал у мілісекундах. Негативне значення вказує на
відсутність обмежень.

### Значення, що повертаються

Завжди повертає **`true`**.

### Приклади

**Приклад #1 Простий обробник з п'ятисекундним часом очікування**

`<?phpecho "Запуск
";# створюємо об'єкт обробника.$gmworkeru003d new GearmanWorker();# додаємо сервер за мовчанням (localhost).$gmworker->addServer();# реєструємо функцію "reverse "reverse_fn");# встановлюємо час очікування 5 секунд$gmworker->setTimeout(5000);echo "Чекання завдання...
";while(@$gmworker->work() ||||$gmworker->returnCode() u003du003d GEARMAN_TIMEOUT){  if ($gmworker->returnCode() u003du003d GEARMAN_TIMEOUT)що         | ...   echo "Час вийшов. Очікування наступного завдання...
";   continue;  }  if ($gmworker->returnCode() !u003d GEARMAN_SUCCESS)  {    echo "Код повернення: " . $gmworker->|
";    break;  }}echo "Готово
";function reverse_fn($job){ return strrev($job->workload());}?> `

Якщо запустити цей обробник і не передавати йому завдань, висновок буде
приблизно таким:

Запуск
Очікування завдання...
Час вийшов. Очікування наступного завдання.
Час вийшов. Очікування наступного завдання.
Час вийшов. Очікування наступного завдання.

### Дивіться також

- [GearmanWorker::timeout()](gearmanworker.timeout.md) - Отримання
значення час очікування запитів на сокеті
