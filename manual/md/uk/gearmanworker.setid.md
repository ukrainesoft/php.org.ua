- [« GearmanWorker::returnCode](gearmanworker.returncode.md)
- [GearmanWorker::setOptions »](gearmanworker.setoptions.md)

- [PHP Manual](index.md)
- [GearmanWorker](class.gearmanworker.md)
- Призначає обробнику ідентифікатор, щоб надалі мати
можливість опитати всі доступні обробники

# GearmanWorker::setId

(No version information available, might only be in Git)

GearmanWorker::setId — Призначає обробнику ідентифікатор, щоб у
надалі мати можливість опитати всі доступні обробники

### Опис

public **GearmanWorker::setId**(string `$id`): bool

Призначає обробнику ідентифікатор.

### Список параметрів

`id`
Строковий ідентифікатор.

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **GearmanWorker::setId()****

Визначення ідентифікатора для простого обробника.

` <?php$workeru003d new GearmanWorker();$worker->setId('test');?> `

Результатом виконання цього прикладу буде щось подібне:

Run the following command:
gearadmin --workers

Output:
30 ::3a3a:3361:3361:3a33%976303667 - : test
