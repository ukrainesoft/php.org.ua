- [« zookeeper_dispatch](function.zookeeper-dispatch.md)
- [Zookeeper::addAuth »](zookeeper.addauth.md)

- [PHP Manual](index.md)
- [ZooKeeper](book.zookeeper.md)
- Клас Zookeeper

# Клас Zookeeper

(PECL zookeeper \>u003d 0.1.0)

## Вступ

Представляє сесію ZooKeeper.

## Огляд класів

class **Zookeeper** {

/\* Методи \*/

public [\_\_construct](zookeeper.construct.md)(string `$host` u003d '',
[callable](language.types.callable.md) `$watcher_cb` u003d **`null`**, int
`$recv_timeout` u003d 10000)

public [addAuth](zookeeper.addauth.md)(string `$scheme`, string
`$cert`, [callable](language.types.callable.md) `$completion_cb` u003d
**`null`**): bool

public [close](zookeeper.close.md)(): void

public [connect](zookeeper.connect.md)(string `$host`,
[callable](language.types.callable.md) `$watcher_cb` u003d **`null`**, int
`$recv_timeout` u003d 10000): void

public [create](zookeeper.create.md)(
string `$path`,
string `$value`,
array `$acls`,
int `$flags` u003d **`null`**
): string

public [delete](zookeeper.delete.md)(string `$path`, int `$version` u003d
-1): bool

public [exists](zookeeper.exists.md)(string `$path`,
[callable](language.types.callable.md) `$watcher_cb` u003d **`null`**):
array

public [get](zookeeper.get.md)(
string `$path`,
[callable](language.types.callable.md) `$watcher_cb` u003d
**`null`**,
array `&$stat` u003d **`null`**,
int `$max_size` u003d 0
): string

public [getAcl](zookeeper.getacl.md)(string `$path`): array

public [getChildren](zookeeper.getchildren.md)(string `$path`,
[callable](language.types.callable.md) `$watcher_cb` u003d **`null`**):
array

public [getClientId](zookeeper.getclientid.md)(): int

public [getConfig](zookeeper.getconfig.md)():
[ZookeeperConfig](class.zookeeperconfig.md)

public [getRecvTimeout](zookeeper.getrecvtimeout.md)(): int

public [getState](zookeeper.getstate.md)(): int

public [isRecoverable](zookeeper.isrecoverable.md)(): bool

public [set](zookeeper.set.md)(
string `$path`,
string `$value`,
int `$version` u003d -1,
array `&$stat` u003d **`null`**
): bool

public [setAcl](zookeeper.setacl.md)(string `$path`, int `$version`,
array `$acl`): bool

public static [setDebugLevel](zookeeper.setdebuglevel.md)(int
`$logLevel`): bool

public static
[setDeterministicConnOrder](zookeeper.setdeterministicconnorder.md)(bool
`$yesOrNo`): bool

public [setLogStream](zookeeper.setlogstream.md)(resource `$stream`):
bool

public
[setWatcher](zookeeper.setwatcher.md)([callable](language.types.callable.md)
`$watcher_cb`): bool

/\* Константи \*/

const int `PERM_READ` u003d 1;

const int `PERM_WRITE` u003d 2;

const int `PERM_CREATE` u003d 4;

const int `PERM_DELETE` u003d 8;

const int `PERM_ADMIN` u003d 16;

const int `PERM_ALL` u003d 31;

const int `EPHEMERAL` u003d 1;

const int `SEQUENCE` u003d 2;

const int `LOG_LEVEL_ERROR` u003d 1;

const int `LOG_LEVEL_WARN` u003d 2;

const int `LOG_LEVEL_INFO` u003d 3;

const int `LOG_LEVEL_DEBUG` u003d 4;

const int `EXPIRED_SESSION_STATE` u003d -112;

const int `AUTH_FAILED_STATE` u003d -113;

const int `CONNECTING_STATE` u003d 1;

const int `ASSOCIATING_STATE` u003d 2;

const int `CONNECTED_STATE` u003d 3;

const int `READONLY_STATE` u003d 5;

const int `NOTCONNECTED_STATE` u003d 999;

const int `CREATED_EVENT` u003d 1;

const int `DELETED_EVENT` u003d 2;

const int `CHANGED_EVENT` u003d 3;

const int `CHILD_EVENT` u003d 4;

const int `SESSION_EVENT` u003d -1;

const int `NOTWATCHING_EVENT` u003d -2;

const int `SYSTEMERROR` u003d -1;

const int `RUNTIMEINCONSISTENCY` u003d -2;

const int `DATAINCONSISTENCY` u003d -3;

const int `CONNECTIONLOSS` u003d -4;

const int `MARSHALLINGERROR` u003d -5;

const int `UNIMPLEMENTED` u003d -6;

const int `OPERATIONTIMEOUT` u003d -7;

const int `BADARGUMENTS` u003d -8;

const int `INVALIDSTATE` u003d -9;

const int `NEWCONFIGNOQUORUM` u003d -13;

const int `RECONFIGINPROGRESS` u003d -14;

const int `OK` u003d 0;

const int `APIERROR` u003d -100;

const int `NONODE` u003d -101;

const int `NOAUTH` u003d -102;

const int `BADVERSION` u003d -103;

const int `NOCHILDRENFOREPHEMERALS` u003d -108;

const int `NODEEXISTS` u003d -110;

const int `NOTEMPTY` u003d -111;

const int `SESSIONEXPIRED` u003d -112;

const int `INVALIDCALLBACK` u003d -113;

const int `INVALIDACL` u003d -114;

const int `AUTHFAILED` u003d -115;

const int `CLOSING` u003d -116;

const int `NOTHING` u003d -117;

const int `SESSIONMOVED` u003d -118;

const int `NOTREADONLY` u003d -119;

const int `EPHEMERALONLOCALSESSION` u003d -120;

const int `NOWATCHER` u003d -121;

const int `RECONFIGDISABLED` u003d -122;

}

## Зумовлені константи

## Дозволи ZooKeeper

**`Zookeeper::PERM_READ`**
Можна читати значення вузла та список дочірніх вузлів

**`Zookeeper::PERM_WRITE`**
Можна встановлювати значення вузла

**`Zookeeper::PERM_CREATE`**
Можна створювати дочірні елементи

**`Zookeeper::PERM_DELETE`**
Можна видаляти дочірні елементи

**`Zookeeper::PERM_ADMIN`**
Можна запускати set_acl()

**`Zookeeper::PERM_ALL`**
Можна використовувати всі вищезгадані прапори разом

## Прапори створення ZooKeeper

**`Zookeeper::EPHEMERAL`**
Якщо встановлено прапорець Zookeeper::EPHEMERAL, вузол буде автоматично
видалено після завершення клієнтської сесії.

**`Zookeeper::SEQUENCE`**
Якщо встановлено прапорець Zookeeper::SEQUENCE, до імені шляху буде додано
унікальний номер із монотонно зростаючої послідовності. Номер із
послідовності завжди має фіксовану довжину 10 цифр,
доповнену лідируючими нулями за потребою.

## Рівень логування ZooKeeper

**`Zookeeper::LOG_LEVEL_ERROR`**
Виводити лише повідомлення про помилки

**`Zookeeper::LOG_LEVEL_WARN`**
Виводити помилки та попередження

**`Zookeeper::LOG_LEVEL_INFO`**
Виводити великі повідомлення про дії, крім помилок та попереджень

**`Zookeeper::LOG_LEVEL_DEBUG`**
Виводити все

## Стан ZooKeeper

**`Zookeeper::EXPIRED_SESSION_STATE`**
З'єднання встановлено, але сесія закінчилася

**`Zookeeper::AUTH_FAILED_STATE`**
З'єднання встановлено, але автентифікація невдала

**`Zookeeper::CONNECTING_STATE`**
Встановлюється з'єднання

**`Zookeeper::ASSOCIATING_STATE`**
Асоціювання

**`Zookeeper::CONNECTED_STATE`**
З'єднання встановлено

**`Zookeeper::READONLY_STATE`**
TODO: допоможіть нам покращити модуль

**`Zookeeper::NOTCONNECTED_STATE`**
З'єднання не встановлено

## Типи подій ZooKeeper

**`Zookeeper::CREATED_EVENT`**
Вузол був створений

Генерується лише шляхом спостереження за неіснуючими вузлами. Ці
спостерігачі задаються за допомогою Zookeeper::exists.

**`Zookeeper::DELETED_EVENT`**
Вузол був вилучений

Генерується лише шляхом спостереження за вузлами. Ці спостерігачі задаються
за допомогою Zookeeper::exists та Zookeeper::get.

**`Zookeeper::CHANGED_EVENT`**
Вузол був змінений

Генерується лише шляхом спостереження за вузлами. Ці спостерігачі задаються
за допомогою Zookeeper::exists та Zookeeper::get.

**`Zookeeper::CHILD_EVENT`**
Відбулася зміна у списку дочірніх вузлів

Генерується лише шляхом спостереження за списком дочірніх вузлів. Ці
спостерігачі задаються за допомогою Zookeeper:: getChildren.

**`Zookeeper::SESSION_EVENT`**
Сесія була втрачена

Генерується коли клієнт втратив з'єднання з сервером, або
ініціював переєднання.

**`Zookeeper::NOTWATCHING_EVENT`**
Спостерігач був вилучений

Генерується сервером з різних причин, наприклад, пов'язаних з
обмеженням ресурсу, і говорить про те, що подальше спостереження за
вузлом неможливо.

## Системні помилки та помилки на стороні сервера ZooKeeper

**`Zookeeper::SYSTEMERROR`**
Ніколи не викидається сервером і може використовуватись тільки для
обмеження діапазону кодів помилок. Всі помилки більші за цю, але менші
Zookeeper::APIERROR є системними помилками.

**`Zookeeper::RUNTIMEINCONSISTENCY`**
Виявлено неузгодженість під час виконання.

**`Zookeeper::DATAINCONSISTENCY`**
Виявлено неузгодженість даних.

**`Zookeeper::CONNECTIONLOSS`**
Втрачено з'єднання із сервером.

**`Zookeeper::MARSHALLINGERROR`**
Помилка при маршалінгу та демаршалінгу даних.

**`Zookeeper::UNIMPLEMENTED`**
Операцію не реалізовано.

**`Zookeeper::OPERATIONTIMEOUT`**
Перевищення часу очікування операції.

**`Zookeeper::BADARGUMENTS`**
Неправильний аргумент.

**`Zookeeper::INVALIDSTATE`**
Неправильний статус zhandle.

**`Zookeeper::NEWCONFIGNOQUORUM`**
Кворум нової конфігурації не підключений і синхронізований з лідером
останньої доведеної конфігурації. Спробуйте запустити
переконфігурацію після підключення та синхронізації нових серверів.

Доступно з версії ZooKeeper 3.5.0

**`Zookeeper::RECONFIGINPROGRESS`**
Запит переконфігурації під час іншого процесу
переконфігурації. На даний момент не підтримується. Спробуйте
повторити пізніше.

Доступно з версії ZooKeeper 3.5.0

## ZooKeeper API Errors

**`Zookeeper::OK`**
Все добре.

**`Zookeeper::APIERROR`**
Ніколи не викидається сервером і може використовуватись тільки для
обмеження діапазону кодів помилок. Всі помилки великі цієї, є
помилками API (значення менші за це означають системні помилки).

**`Zookeeper::NONODE`**
Вузол відсутній.

**`Zookeeper::NOAUTH`**
Відсутня автентифікація.

**`Zookeeper::BADVERSION`**
Конфлікт версій.

**`Zookeeper::NOCHILDRENFOREPHEMERALS`**
Ефемерні вузли не повинні мати нащадків.

**`Zookeeper::NODEEXISTS`**
Вузол уже існує.

**`Zookeeper::NOTEMPTY`**
Вузол має нащадків.

**`Zookeeper::SESSIONEXPIRED`**
Термін дії сесії минув.

**`Zookeeper::INVALIDCALLBACK`**
Вказано неправильну функцію зворотного дзвінка.

**`Zookeeper::INVALIDACL`**
Вказано некоректний ACL.

**`Zookeeper::AUTHFAILED`**
Невдала аутентифікація клієнта.

**`Zookeeper::CLOSING`**
ZooKeeper закривається.

**`Zookeeper::NOTHING`**
(не помилка) Жодної відповіді від сервера для обробки.

**`Zookeeper::SESSIONMOVED`**
Сесія переміщена на інший сервер, таким чином операція
проігноровано.

**`Zookeeper::NOTREADONLY`**
Запит зміни статусу надіслано на сервер із режимом "тільки читання".

**`Zookeeper::EPHEMERALONLOCALSESSION`**
Спроба створити ефемерний вузол у локальній сесії.

**`Zookeeper::NOWATCHER`**
Неможливо знайти спостерігача.

**`Zookeeper::RECONFIGDISABLED`**
Спроба зробити операцію переконфігурації у випадку, якщо вона
заборонено.

## Зміст

- [Zookeeper::addAuth](zookeeper.addauth.md) — Вказує облікові
дані програми
- [Zookeeper::close](zookeeper.close.md) - Закриває обробник
zookeeper та звільняє будь-які ресурси
- [Zookeeper::connect](zookeeper.connect.md) — Створює дескриптор
для спілкування з zookeeper
- [Zookeeper::\_\_construct](zookeeper.construct.md) - Створює
дескриптор для спілкування з zookeeper
- [Zookeeper::create](zookeeper.create.md) — Створює синхронно вузол
- [Zookeeper::delete](zookeeper.delete.md) — Видаляє синхронно вузол
у zookeeper
- [Zookeeper::exists](zookeeper.exists.md) — Синхронно перевіряє
наявність вузла в zookeeper
- [Zookeeper::get](zookeeper.get.md) — Синхронно отримує дані,
пов'язані з вузлом
- [Zookeeper::getAcl](zookeeper.getacl.md) — Синхронно отримує ACL,
пов'язаний із вузлом
- [Zookeeper::getChildren](zookeeper.getchildren.md) - Виводить
список нащадків вузла синхронно
- [Zookeeper::getClientId](zookeeper.getclientid.md) — Повертає
ідентифікатор сесії клієнта дійсний лише в тому випадку, якщо
з'єднання в даний час підключені (тобто останній стан
спостерігача - ZOO_CONNECTED_STATE)
- [Zookeeper::getConfig](zookeeper.getconfig.md) — Отримує
екземпляр ZookeeperConfig
- [Zookeeper::getRecvTimeout](zookeeper.getrecvtimeout.md) -
Повертає час очікування для сесії, дійсний тільки якщо
з'єднання в даний час підключені (тобто останній стан
спостерігача – ZOO_CONNECTED_STATE). Це значення може змінитися
після повторного підключення до сервера
- [Zookeeper::getState](zookeeper.getstate.md) — Отримує стан
з'єднання zookeeper
- [Zookeeper::isRecoverable](zookeeper.isrecoverable.md)
Перевіряє, чи можна відновити поточний стан підключення
ZooKeeper
- [Zookeeper::set](zookeeper.set.md) — Встановлює дані,
пов'язані з вузлом
- [Zookeeper::setAcl](zookeeper.setacl.md) — Встановлює ACL,
пов'язаний з вузлом синхронно
- [Zookeeper::setDebugLevel](zookeeper.setdebuglevel.md)
Встановлює рівень логування для бібліотеки
- [Zookeeper::setDeterministicConnOrder](zookeeper.setdeterministicconnorder.md)
— Увімкнення/вимкнення рандомізації порядку кінцевих точок кворуму
- [Zookeeper::setLogStream](zookeeper.setlogstream.md) -
Встановлює потік, який використовуватиметься бібліотекою для
логування
- [Zookeeper::setWatcher](zookeeper.setwatcher.md) — Встановлює
функцію спостерігача
