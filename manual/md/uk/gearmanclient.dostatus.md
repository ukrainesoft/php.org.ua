- [« GearmanClient::doNormal](gearmanclient.donormal.md)
- [GearmanClient::echo »](gearmanclient.echo.md)

- [PHP Manual](index.md)
- [GearmanClient](class.gearmanclient.md)
- Отримання статусу завдання, що виконується

# GearmanClient::doStatus

(PECL gearman u003d 0.5.0)

GearmanClient::doStatus — Отримання статусу завдання, що виконується

### Опис

public **GearmanClient::doStatus**(): array

Повертає статус обробки запущеного завдання. Цей метод викликається
між викликами, що повторюються
[GearmanClient::doNormal()](gearmanclient.donormal.md).

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Масив, що становить відсоткове відношення виконаної роботи. Перший
елемент відповідає кількості оброблених чанків, другий - загальне
кількість даних.

### Приклади

**Приклад #1 Отримання стану виконання довгого завдання**

У цьому прикладі в обробник, що перевертає рядок, впроваджено затримку,
щоб змоделювати завдання, що довго виконується. Після кожної паузи
обробник виконує [GearmanJob::status()](gearmanjob.status.md),
результат якого підхоплюється клієнтом.

`<?phpecho "Запуск
";# Створюємо об'єкт клієнта.$gmclientu003d new GearmanClient();# Додаємо сервер за замовчуванням (localhost).$gmclient->addServer();echo "Відправка завдання
";# Отправляем задание перевернуть строкуdo{  $result u003d $gmclient->doNormal("reverse", "Hello!");  # Проверяем, есть ли ошибки или готовые данные.  switch($gmclient->returnCode())  {    case GEARMAN_WORK_DATA :      break;    case GEARMAN_WORK_STATUS:      # получить статус выполнения задания      list($numerator, $denominator)u003d $gmclient->doStatus();      echo "Статус: $numerator/$denominator завершено
";      break;    case GEARMAN_WORK_FAIL:      echo "Помилка
";     exit;   case GEARMAN_SUCCESS:      break;    default:      echo "Код повернення: " . |
";      exit;  }}while($gmclient->returnCode() !u003d GEARMAN_SUCCESS);echo "Успішно: $result
";?> `

Результатом виконання цього прикладу буде щось подібне:

Запуск
Надсилання завдання
Стан: 1/6 завершено
Стан: 2/6 завершено
Стан: 3/6 завершено
Стан: 4/6 завершено
Стан: 5/6 завершено
Стан: 6/6 завершено
Успішно: !olleH

### Дивіться також

- [GearmanClient::doNormal()](gearmanclient.donormal.md) - Виконує
одиночне завдання та повертає результат
- [GearmanJob::status()](gearmanjob.status.md) - Надсилання статусу
завдання (застарілий метод)
