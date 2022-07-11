- [«ZMQPoll](class.zmqpoll.md)
- [ZMQPoll::clear »](zmqpoll.clear.md)

- [PHP Manual](index.md)
- [ZMQPoll](class.zmqpoll.md)
- Додати елемент у пул опитування

# ZMQPoll::add

(PECL zmq \>u003d 0.5.0)

ZMQPoll::add — Додати елемент до пулу опитування

### Опис

public
**ZMQPoll::add**([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$entry`, int `$type`): string

Додає елемент у пул опитування та повертає його внутрішній ідентифікатор
у вигляді рядка. Надалі, за цим ідентифікатором, елемент можна
буде видалити.

### Список параметрів

`entry`
Об'єкт ZMQSocket або потоковий ресурс PHP

`type`
Визначає, яка активність відстежуватиметься. Дивіться константи
**`ZMQ::POLL_IN`** та **`ZMQ::POLL_OUT`**.

### Значення, що повертаються

Повертає рядковий ідентифікатор доданого елемента, який
надалі можна буде використовуватиме його видалення. В разі
Виникнення помилки викидає виняток ZMQPollException.
