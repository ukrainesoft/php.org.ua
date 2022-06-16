- [« Установка](zookeeper.installation.md)
- [Типи ресурсів »](zookeeper.resources.md)

- [PHP Manual](index.md)
- [Встановлення та налаштування](zookeeper.setup.md)
- Налаштування під час виконання

## Налаштування під час виконання

Поведінка цих функцій залежить від установок `php.ini`.

| Ім'я За замовчуванням | Місце зміни | Історія змін
|------------------------------------------------- --------------------------------------|----------- ---|-----------------|-------------------|
| [zookeeper.recv_timeout](zookeeper.configuration.md#ini.zookeeper.recv_timeout) | 10000 | PHP_INI_ALL | |
| [zookeeper.session_lock](zookeeper.configuration.md#ini.zookeeper.session_lock) | 1 | PHP_INI_SYSTEM | |
| [zookeeper.sess_lock_wait](zookeeper.configuration.md#ini.zookeeper.sess_lock_wait) | 150000 | PHP_INI_ALL | |

**Опції налаштування Zookeeper**

Для детального опису констант PHP_INI\_\*, зверніться до розділу [Де
можуть бути встановлені параметри
конфігурації] (configuration.changes.modes.md).

Коротке пояснення конфігураційних директив.

`zookeeper.recv_timeout` int
Час очікування за промовчанням для всіх сесій ZooKeeper.

`zookeeper.session_lock` int
Дозволяє блокувати сесії PHP.

`zookeeper.sess_lock_wait` int
Час очікування повтору при взаємному блокуванні сесії PHP
мікросекундах. Будьте обережні, встановлюючи це значення. Коректні
значення - цілі числа, за замовчуванням використовуються 0. Негативні
значення призводить до зменшення спроб блокування.
