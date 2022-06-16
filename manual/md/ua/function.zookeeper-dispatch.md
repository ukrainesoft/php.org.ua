- [« Функції ZooKeeper](ref.zookeeper.md)
- [Zookeeper »](class.zookeeper.md)

- [PHP Manual](index.md)
- [Функції ZooKeeper](ref.zookeeper.md)
- Викликати callback-функції для операцій, що очікують

# zookeeper_dispatch

(PECL zookeeper \>u003d 0.4.0)

zookeeper_dispatch — Викликати callback-функції для операцій, що очікують

### Опис

**zookeeper_dispatch**(): void

Функція **zookeeper_dispatch()** викликає callback-функції, передані
операціями, такими як [Zookeeper::get()](zookeeper.get.md) або
[Zookeeper::exists()](zookeeper.exists.md).

**Застереження**

З версії 0.4.0 ця функція повинна викликатися вручну для асинхронних
операцій. Якщо ви хочете, щоб це було зроблено автоматично, ви
можете оголосити тики на початку скрипту, використовуючи директиву
declare.

Після PHP 7.1 можна ігнорувати цю функцію. Модуль використовує EG
(vm_interrupt) для реалізації асинхронного виклику callback-функцій.

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Помилки

Ця функція викликає попередження PHP, якщо callback-функція не може
бути викликано.

### Приклади

**Приклад #1 **zookeeper_dispatch()** example #1**

Виклик callback-функцій вручну.

` <?php$client u003d new Zookeeper();$client->connect('localhost:2181');$client->get('/zookeeper', function() {    echo "Була викликана"CALF-HP ;});while(true) {    sleep(1); zookeeper_dispatch();}?> `

**Приклад #2 Приклад використання **zookeeper_dispatch()** #2**

Оголошення тиків.

` <?phpdeclare(ticksu003d1);$client u003d new Zookeeper();$client->connect('localhost:2181');$client->get('/zookeeper', function() {    echo "Була| callback-функція".PHP_EOL;});while(true) {    sleep(1);}?> `

### Дивіться також

- [Zookeeper::addAuth()](zookeeper.addauth.md) - Вказує облікові
дані програми
- [Zookeeper::connect()](zookeeper.connect.md) - Створює дескриптор
для спілкування з zookeeper
- [Zookeeper::\_\_construct()](zookeeper.construct.md) - Створює
дескриптор для спілкування з zookeeper
- [Zookeeper::exists()](zookeeper.exists.md) - Синхронно перевіряє
наявність вузла в zookeeper
- [Zookeeper::get()](zookeeper.get.md) - Синхронно отримує дані,
пов'язані з вузлом
- [Zookeeper::getChildren()](zookeeper.getchildren.md) - Виводить
список нащадків вузла синхронно
- [Zookeeper::setWatcher()](zookeeper.setwatcher.md) - Встановлює
функцію спостерігача
