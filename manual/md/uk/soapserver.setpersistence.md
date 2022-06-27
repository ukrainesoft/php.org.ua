- [« SoapServer::setObject](soapserver.setobject.md)
- [SoapFault »](class.soapfault.md)

- [PHP Manual](index.md)
- [SoapServer](class.soapserver.md)
- Встановлює режим збереження SoapServer

# SoapServer::setPersistence

(PHP 5, PHP 7, PHP 8)

SoapServer::setPersistence — Встановлює режим збереження SoapServer

### Опис

public **SoapServer::setPersistence**(int `$mode`): void

Ця функція дозволяє змінювати режим збереження об'єкта SoapServer між
запитами. Ця функція дозволяє зберігати дані між запитами
використовуючи механізм сесій PHP. Цей метод впливає лише на SoapServer
після експорту функцій, використовуючи
[SoapServer::setClass()](soapserver.setclass.md).

> **Примітка**:
>
> Збереження **`SOAP_PERSISTENCE_SESSION`** гарантує збереження
> лише об'єктів заданого класу, але з статичні дані класу. В
> у цьому випадку використовуйте `$this->bar` замість self::$bar.

> **Примітка**:
>
> **`SOAP_PERSISTENCE_SESSION`** серіалізує дані об'єкта класу та
> зберігає їх між запитами. Для коректної роботи з ресурсами
> (наприклад, [PDO](class.pdo.md)), слід використовувати магічні
> методи [\_\_wakeup()](language.oop5.magic.md#object.wakeup) та
> [\_\_sleep()](language.oop5.magic.md#object.sleep).

### Список параметрів

`mode`
Одна із констант `SOAP_PERSISTENCE_XXX`.

**`SOAP_PERSISTENCE_REQUEST`** - дані SoapServer не зберігаються між
запитами. Ця поведінка *за умовчанням* будь-якого об'єкта SoapServer після
виклику setClass.

**`SOAP_PERSISTENCE_SESSION`** - дані SoapServer зберігаються між
запитами. Це досягається шляхом серіалізації об'єкта SoapServer в
`$_SESSION['_bogus_session_name']`, отже необхідно викликати
перед включенням цього [session_start()](function.session-start.md)
режиму.

### Значення, що повертаються

Функція не повертає значення після виконання.

### Приклади

**Приклад #1 Приклад використання **SoapServer::setPersistence()****

` <?php class MyFirstPersistentSoapServer {     private $resource; // (Такі якPDO, mysqli і т.д.)    public $myvar1; public $myvar2; public function __construct() {          $this->__wakeup(); // Викликаємо __wakeup для перетворення $resource     }     public function __wakeup() {         $this->resource u003d CodeTo }     public function __sleep() {          // Не зберігаємо $resource тут. //Помилка в цьому методі призведе до того, що при наступній десеріалізації / / ми можемо відновити стан об'єкта. return array('myvar1','myvar2'); } } try {     session_start(); $server u003d new SoapServer(null, array('uri' u003d> $_SERVER['REQUEST_URI'])); $server->setClass('MyFirstPersistentSoapServer'); //setPersistence НЕОБХІДНО викликати після setClass, оскількиsetClass     // примусово встановлює SESSION_PERSISTENCE_REQUEST. $server->setPersistence(SOAP_PERSISTENCE_SESSION); $server->handle(); } catch(SoapFault $e) {     error_log("ПОМИЛКА SOAP: ". $e->getMessage()); }?> `

### Дивіться також

- [SoapServer::setClass()](soapserver.setclass.md) - Встановлює
клас, який обробляє SOAP-запити
