- [« Swoole\Atomic::cmpset](swoole-atomic.cmpset.md)
- [Swoole\Atomic::get »](swoole-atomic.get.md)

- [PHP Manual](index.md)
- [Swoole\Atomic](class.swoole-atomic.md)
- Створює атомний об'єкт swoole

# Swoole\Atomic::\_\_construct

(PECL swoole \>u003d 1.9.0)

Swoole\Atomic::\_\_construct - Створює атомарний об'єкт swoole

### Опис

public **Swoole\Atomic::\_\_construct**(int `$value` u003d ?)

Атомарний об'єкт Swoole - це ціла змінна, яка
дозволяє будь-якому процесору атомарно тестувати та модифікувати. Він
реалізований з урахуванням атомарних інструкцій процесора. Атомарні
Змінні Swoole повинні бути визначені до swoole_server-start.

Порівняння та заміна (CAS) - це атомарна інструкція, яка використовується в
багатопоточності для досягнення синхронізації. Вона порівнює вміст
області пам'яті із заданим значенням і, тільки якщо вони збігаються,
змінює вміст цієї області пам'яті на нове значення.

### Список параметрів

`value`
Значення атомарного об'єкта.
