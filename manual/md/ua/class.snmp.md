- [« snmpwalkoid](function.snmpwalkoid.md)
- [SNMP::close »](snmp.close.md)

- [PHP Manual](index.md)
- [SNMP](book.snmp.md)
- Клас SNMP

# Клас SNMP

(PHP 5 \>u003d 5.4.0, PHP 7, PHP 8)

## Вступ

Представляє сесію SNMP.

## Огляд класів

class **SNMP** {

/\* Властивості \*/

public readonly array `$info`;

public ?int `$max_oids`;

public int `$valueretrieval`;

public bool `$quick_print`;

public bool `$enum_print`;

public int `$oid_output_format`;

public bool `$oid_increasing_check`;

public int `$exceptions_enabled`;

/\* Методи \*/

public [\_\_construct](snmp.construct.md)(
int `$version`,
string `$hostname`,
string `$community`,
int `$timeout` u003d -1,
int `$retries` u003d -1
)

public [close](snmp.close.md)(): bool

public [get](snmp.get.md)(array\|string `$objectId`, bool
`$preserveKeys` u003d **`false`**):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public [getErrno](snmp.geterrno.md)(): int

public [getError](snmp.geterror.md)(): string

public [getnext](snmp.getnext.md)(array\|string `$objectId`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

public [set](snmp.set.md)(array\|string `$objectId`, array\|string
`$type`, array\|string `$value`): bool

public [setSecurity](snmp.setsecurity.md)(
string `$securityLevel`,
string `$authProtocol` u003d "",
string `$authPassphrase` u003d "",
string `$privacyProtocol` u003d "",
string `$privacyPassphrase` u003d "",
string `$contextName` u003d "",
string `$contextEngineId` u003d ""
): bool

public [walk](snmp.walk.md)(
array\|string `$objectId`,
bool `$suffixAsKey` u003d **`false`**,
int `$maxRepetitions` u003d -1,
int `$nonRepeaters` u003d -1
): array\|false

/\* Константи \*/

const int `ERRNO_NOERROR` u003d 0;

const int `ERRNO_GENERIC` u003d 2;

const int `ERRNO_TIMEOUT` u003d 4;

const int `ERRNO_ERROR_IN_REPLY` u003d 8;

const int `ERRNO_OID_NOT_INCREASING` u003d 16;

const int `ERRNO_OID_PARSING_ERROR` u003d 32;

const int `ERRNO_MULTIPLE_SET_QUERIES` u003d 64;

const int `ERRNO_ANY` u003d 126;

const int `VERSION_1` u003d 0;

const int `VERSION_2C` u003d 1;

const int `VERSION_2c` u003d 1;

const int `VERSION_3` u003d 3;

}

## Властивості

`max_oids`
Максимальний OID для запитів GET/SET/GETBULK

`valueretrieval`
Контролює спосіб, як повертатимуться значення SNMP

| | |
|--------------------------|---------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- ------------------------------|
| **`SNMP_VALUE_LIBRARY`** | Значення, що повертаються, будуть такими, ніби повернені бібліотекою Net-SNMP. |
| **`SNMP_VALUE_PLAIN`** | Значення, що повертаються, будуть простими, без інформації про типи SNMP. |
| **`SNMP_VALUE_OBJECT`** | Значення, що повертаються будуть об'єктами з властивостями "value" і "type", де "type" міститиме одну з констант: SNMP_OCTET_STR, SNMP_COUNTER і т.д., а "value" буде залежати від того, встановлено **`SNMP_VALUE_LIBRARY`** або **`SNMP_VALUE_PLAIN`**. |

`quick_print`
Значення `quick_print` у бібліотеці NET-SNMP

Встановлює значення `quick_print` у бібліотеці NET-SNMP. якщо поставлено
як (1), бібліотека SNMP повертатиме значення 'quick printed'.
Це означає, що буде надруковано лише значення. Якщо `quick_print` не
дозволено (за замовчуванням), бібліотека NET-SNMP друкуватиме
додаткову інформацію, включаючи тип значення (тобто IpAddress або
OID). Додатково, якщо quick_print не дозволено, бібліотека буде
друкувати шістнадцяткові значення для всіх рядків коротше за чотири
символів.

`enum_print`
Контролює спосіб, яким будуть друкуватись значення перерахувань

Параметр перемикає поведінку walk/get тощо, щоб вони автоматично
дивилися значення перерахувань у MIB і повертали їх разом із зрозумілим
людина тексту.

`oid_output_format`
Контролює формат виводу OID

| | |
|-------------------------------|----------------- -------------------------------------------------- --|
| **`SNMP_OID_OUTPUT_FULL`** | .iso.org.dod.internet.mgmt.mib-2.system.sysUpTime.sysUpTimeInstance |
| **`SNMP_OID_OUTPUT_NUMERIC`** | .1.3.6.1.2.1.1.3.0 |
| **`SNMP_OID_OUTPUT_MODULE`** | DISMAN-EVENT-MIB::sysUpTimeInstance |
| **`SNMP_OID_OUTPUT_SUFFIX`** | sysUpTimeInstance |
| **`SNMP_OID_OUTPUT_UCD`** | system.sysUpTime.sysUpTimeInstance |
| **`SNMP_OID_OUTPUT_NONE`** | Undefined |

**OID-представлення .1.3.6.1.2.1.1.3.0 для різних значень
`oid_output_format`**

`oid_increasing_check`
Контролює заборону на перевірку збільшення OID під час обходу дерева OID

Деякі агенти SNMP відомі тим, що повертають OID не по порядку, але
все одно завершують прохід. Інші агенти, що повертають OID не по порядку
і можуть викликати нескінченне зациклювання [SNMP::walk()](snmp.walk.md),
доки не буде вичерпано всю пам'ять. Бібліотека PHP SNMP за замовчуванням
проводить перевірку збільшення OID і припиняє обхід дерева, якщо
визначає можливе закольцювання, видаючи відповідне
попередження. Встановіть `oid_increasing_check` у значення **`false`**
для заборони цієї перевірки.

`exceptions_enabled`
Контролює, у яких випадках викидатимуться винятки
SNMPException замість попереджень. Використовуйте побітове АБО з
констант **`SNMP::ERRNO_*`**. За промовчанням SNMP не викидає
винятки.

`info`
Властивість доступна лише для читання, що містить конфігурацію віддаленого
агента: ім'я хоста, порт, очікування за замовчуванням, кількість
повторів за замовчуванням

## Зумовлені константи

## Типи помилок SNMP

**`SNMP::ERRNO_NOERROR`**
Помилки SNMP відсутні.

**`SNMP::ERRNO_GENERIC`**
Загальна помилка SNMP.

**`SNMP::ERRNO_TIMEOUT`**
Перевищено час очікування запиту до агента SNMP.

**`SNMP::ERRNO_ERROR_IN_REPLY`**
SNMP-агент повернув помилку у відповідь.

**`SNMP::ERRNO_OID_NOT_INCREASING`**
SNMP-агент виявив можливе закольцювання через незбільшення OID при
виконання команд (BULK)WALK. Говорить нам, що віддалений SNMP-агент
фіктивний.

**`SNMP::ERRNO_OID_PARSING_ERROR`**
Бібліотека не змогла розібрати OID (та/або тип команди SET). Запитів
не було.

**`SNMP::ERRNO_MULTIPLE_SET_QUERIES`**
Бібліотека використовує багато запитів для операції SET. Це
означає, що операція виконуватиметься без транзакції, і якщо
виникне помилка типу чи значення, другий чи наступні фрагменти
можуть завершитися помилкою.

**`SNMP::ERRNO_ANY`**
Усі коди SNMP::ERRNO\_\* об'єднані побітовим АБО.

## Версії протоколу SNMP

**`SNMP::VERSION_1`**

**`SNMP::VERSION_2C`**, **`SNMP::VERSION_2c`**

**`SNMP::VERSION_3`**

## Зміст

- [SNMP::close](snmp.close.md) — Закриває сесію SNMP
- [SNMP::\_\_construct](snmp.construct.md) — Створює екземпляр SNMP,
представляє сесію віддаленого агента SNMP
- [SNMP::get](snmp.get.md) — Отримує об'єкт SNMP
- [SNMP::getErrno](snmp.geterrno.md) — Отримує код останньої помилки
- [SNMP::getError](snmp.geterror.md) — Отримує останнє повідомлення
про помилку
- [SNMP::getnext](snmp.getnext.md) — Отримати об'єкт SNMP, який
слідує за цим ідентифікатором об'єкта
- [SNMP::set](snmp.set.md) — Встановлює значення об'єкта SNMP
- [SNMP::setSecurity](snmp.setsecurity.md) — Налаштовує пов'язані з
безпекою параметри сесії SNMPv3
- [SNMP::walk](snmp.walk.md) — Отримує піддерево об'єкта SNMP
