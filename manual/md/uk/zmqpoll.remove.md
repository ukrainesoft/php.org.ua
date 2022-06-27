- [«ZMQPoll::poll](zmqpoll.poll.md)
- [ZMQDevice »](class.zmqdevice.md)

- [PHP Manual](index.md)
- [ZMQPoll](class.zmqpoll.md)
- Видалити елемент із пулу опитування

# ZMQPoll::remove

(PECL zmq \>u003d 0.5.0)

ZMQPoll::remove — Видалити елемент із пулу опитування

### Опис

public
**ZMQPoll::remove**([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$item`): bool

Видаляє елемент із пулу опитування. Параметр `item` має бути об'єктом
ZMQSocket, потоковим ресурсом або ідентифікатором, отриманим у
результат виконання методу [ZMQPoll::add()](zmqpoll.add.md).

### Список параметрів

`item`
Об'єкт ZMQSocket, потік PHP або рядковий ідентифікатор елемента.

### Значення, що повертаються

Повертає **`true`**, якщо видалення виконано успішно та **`false`**,
якщо елемент не знайдено.
