- [« Zookeeper::addAuth](zookeeper.addauth.md)
- [Zookeeper::connect »](zookeeper.connect.md)

- [PHP Manual](index.md)
- [Zookeeper](class.zookeeper.md)
- Закриває обробник zookeeper та звільняє будь-які ресурси

# Zookeeper::close

(PECL zookeeper \>u003d 0.5.0)

Zookeeper::close — Закриває обробник zookeeper та звільняє будь-які
ресурси

### Опис

public **Zookeeper::close**(): void

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Помилки

Метод генерує [ZookeeperException](class.zookeeperexception.md) та
його похідні при закритті неініціалізованого екземпляра.

### Дивіться також

- [Zookeeper::\_\_construct()](zookeeper.construct.md) - Створює
дескриптор для спілкування з zookeeper
- [Zookeeper::connect()](zookeeper.connect.md) - Створює дескриптор
для спілкування з zookeeper
- [ZookeeperException](class.zookeeperexception.md)
