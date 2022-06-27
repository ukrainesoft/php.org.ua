- [« GearmanWorker::setTimeout](gearmanworker.settimeout.md)
- [GearmanWorker::unregister »](gearmanworker.unregister.md)

- [PHP Manual](index.md)
- [GearmanWorker](class.gearmanworker.md)
- Отримання значення час очікування запитів на сокеті

# GearmanWorker::timeout

(PECL gearman \>u003d 0.6.0)

GearmanWorker::timeout — Отримання значення час очікування запитів на
сокеті

### Опис

public **GearmanWorker::timeout**(): int

Повертає поточне значення часу очікування, тобто час протягом
якого обробник очікує запит від сервера завдань.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Часовий інтервал у мілісекундах. Негативне значення вказує на
нескінченний час очікування.

### Дивіться також

- [GearmanWorker::setTimeout()](gearmanworker.settimeout.md) -
Завдання часу очікування на введення/виведення на сокеті
