- [« ZMQDevice::run](zmqdevice.run.md)
- [ZMQDevice::setIdleTimeout »](zmqdevice.setidletimeout.md)

- [PHP Manual](index.md)
- [ZMQDevice](class.zmqdevice.md)
- Встановити callback-функцію бездіяльності

# ZMQDevice::setIdleCallback

(No version information available, might only be in Git)

ZMQDevice::setIdleCallback — Встановити callback-функцію бездіяльності

### Опис

public
**ZMQDevice::setIdleCallback**([callable](language.types.callable.md)
`$cb_func`, int `$timeout`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$user_data` u003d ?): [ZMQDevice](class.zmqdevice.md)

Встановлює callback-функцію бездіяльності. Якщо встановлено час очікування
простою, то ця функція буде запущена, якщо цикл опитування не отримає жодного
однієї події протягом цього часу. Якщо функція поверне ефективне
**`false`**, то пристрій буде зупинено. Сигнатура функції - (mixed
$user_data).

### Список параметрів

`cb_func`
Callback-функція для запуску у разі тривалого простою. Повернення
**`false`** або значення, яке наводиться до **`false`** призведе до
зупинки пристрою.

`timeout`
Час очікування простою у мілісекундах. Callback-функція буде
викликатися щоразу, коли протягом заданого часу не буде
відбуватися жодних подій. Гарантується, що між запусками функції
відбуватиметься не менше заданої кількості мілісекунд.

`user_data`
Додаткові дані, які передаватимуться в callback-функцію.

### Значення, що повертаються

У разі успішного виконання поточний об'єкт повертає.
