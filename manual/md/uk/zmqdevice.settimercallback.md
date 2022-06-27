- [« ZMQDevice::setIdleTimeout](zmqdevice.setidletimeout.md)
- [ZMQDevice::setTimerTimeout »](zmqdevice.settimertimeout.md)

- [PHP Manual](index.md)
- [ZMQDevice](class.zmqdevice.md)
- Встановити callback-функцію за таймером

# ZMQDevice::setTimerCallback

(No version information available, might only be in Git)

ZMQDevice::setTimerCallback — Встановити callback-функцію за таймером

### Опис

public
**ZMQDevice::setTimerCallback**([callable](language.types.callable.md)
`$cb_func`, int `$timeout`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$user_data` u003d ?): [ZMQDevice](class.zmqdevice.md)

Встановлює callback-функцію за таймером. Періодично запускає
callback-функцію. Від callback-функції простою відрізняється тим, що
запускається в будь-якому випадку, а не тільки при простому пристрої.
Сигнатура функції – (mixed $user_data). Додано у версії 1.1.0.

### Список параметрів

`cb_func`
Callback-функція для запуску за таймером. Повернення **`false`** або
значення, яке наводиться до **`false`** призведе до зупинки
пристрої.

`timeout`
Час очікування у мілісекундах. Callback-функція буде викликатися через
задані проміжки часу. Гарантує, що між запусками функції
відбуватиметься не менше заданої кількості мілісекунд.

`user_data`
Додаткові дані, які передаватимуться в callback-функцію.

### Значення, що повертаються

Повертає поточний об'єкт.
