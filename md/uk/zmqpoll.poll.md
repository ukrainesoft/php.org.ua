- [«ZMQPoll::getLastErrors](zmqpoll.getlasterrors.md)
- [ZMQPoll::remove »](zmqpoll.remove.md)

- [PHP Manual](index.md)
- [ZMQPoll](class.zmqpoll.md)
- Опитати всі елементи пулу

# ZMQPoll::poll

(PECL zmq \>u003d 0.5.0)

ZMQPoll::poll — Опитувати всі елементи пулу

### Опис

public **ZMQPoll::poll**(array `&$readable`, array `&$writable`, int
$timeout u003d -1): int

Опитує всі елементи пулу. Читані та записувані елементи
поміщаються в параметри `readable` та `writable` відповідно. Для
перевірки помилок використовуйте метод
[ZMQPoll::getLastErrors()](zmqpoll.getlasterrors.md).

### Список параметрів

`readable`
Масив, в який будуть повернуті об'єкти, що читаються ZMQSockets/потоки
PHP. Перед початком роботи масив буде очищено.

`writable`
Масив, в який будуть повернуті записані об'єкти
ZMQSockets/потоки PHP. Перед початком роботи масив буде очищено.

`timeout`
Час очікування операції. -1 означає, що опитування чекатиме до
останнього. Зверніть увагу, що з версії 1.0.0, час очікування
задається в мілісекундах, а не мікросекундах, як раніше.

### Значення, що повертаються

Повертає кількість елементів, для яких відбувалася якась або
активність.

### Помилки

Викидає **ZMQPollException** у разі виникнення помилки.

### Приклади

**Приклад #1 Приклад використання **ZMQPoll()****

Створимо простий сервер опитування

`<?php/* Створюємо сокет, патерн request-reply (відповідальний сокет) */$context u003d new ZMQContext();$server u003d $context->getSocket(ZMQ::SOCKET_ | 127.0.0.1 */$server->bind("tcp://127.0.0.1:5555");/* Створюємо новий пул опитування для вхідних/вихідних повідомлень */$poll u003d new слухаємо на предмет опитування вхідних/вихідних */$id u003d $poll->add($server, ZMQ::POLL_IN | ZMQ::POLL_OUT);echo "Added object with id " . $id . "
";/* Инициализируем массив читаемых и записываемых элементов */$readable u003d array();$writable u003d array();while (true) {   /* Количество извлечённых событий */   $events u003d 0;   try {       /* Опрашиваем, пока есть что делать */       $events u003d $poll->poll($readable, $writable, -1);       $errors u003d $poll->getLastErrors();       if (count($errors) > 0) {           foreach ($errors as $error) {                echo "Помилка опитування об'єкта " . $error . "
";            }       }]  } catch (ZMQPollException $e) {        echo "Опрос"не |
";   }   if ($events > 0) {       /* Перебираем читаемые объекты и получаем сообщения */       foreach ($readable as $r) {           try {               echo "Получено сообщение: " . $r->recv() . "
";            } catch (ZMQException $e) {               echo "Помилка отримання: " > . .
";           }       }       /* Перебираем записываемые объекты и отправляем ответы */       foreach ($writable as $w) {           try {               $w->send("Получил!");           } catch (ZMQException $e) {               echo "Ошибка отправки: " . $e->getMessage() . "
";            }}?
