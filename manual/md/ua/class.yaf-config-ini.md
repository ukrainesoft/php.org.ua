- [« Yaf_Config_Abstract::toArray](yaf-config-abstract.toarray.md)
- [Yaf_Config_Ini::\_\_construct »](yaf-config-ini.construct.md)

- [PHP Manual](index.md)
- [Yaf](book.yaf.md)
- Клас Yaf_Config_Ini

# Клас Yaf_Config_Ini

(Yaf \>u003d1.0.0)

## Вступ

Yaf_Config_Ini дозволяє розробникам зберігати конфігураційні дані в
відомому INI форматі та читати їх у додатку з використанням
синтаксису вкладених властивостей об'єкта INI формат спеціалізується на
забезпечення можливості мати ієрархію ключів конфігураційних даних та
успадкування між розділами конфігураційних даних. Ієрархія
конфігураційних даних підтримується шляхом поділу ключів із точкою
("."). Розділи можна розширювати або успадковувати від інших розділів шляхом
проставлення після імені розділу двокрапки (":") та назви розділу від
якого дані успадковані.

> **Примітка**:
>
> Yaf_Config_Ini використовує функцію parse_ini_file(). Будь ласка, вивчіть
> документацію розуміння її поведінки, яке успадковує
> Yaf_Config_Ini, такого як обробка спеціальних значень
> "**`true`**", "**`false`**", "yes", "no", і "**`null`**".

## Огляд класів

class **Yaf_Config_Ini** extends
[Yaf_Config_Abstract](class.yaf-config-abstract.md) implements
[Iterator](class.iterator.md), [ArrayAccess](class.arrayaccess.md),
[Countable](class.countable.md) {

/\* Властивості \*/

/\* Методи \*/

public [\_\_construct](yaf-config-ini.construct.md)(string
`$config_file`, string `$section` u003d ?)

public [count](yaf-config-ini.count.md)(): void

public [current](yaf-config-ini.current.md)(): void

public [\_\_get](yaf-config-ini.get.md)(string `$name` u003d ?): void

public [\_\_isset](yaf-config-ini.isset.md)(string `$name`): void

public [key](yaf-config-ini.key.md)(): void

public [next](yaf-config-ini.next.md)(): void

public [offsetExists](yaf-config-ini.offsetexists.md)(string `$name`):
void

public [offsetGet](yaf-config-ini.offsetget.md)(string `$name`): void

public [offsetSet](yaf-config-ini.offsetset.md)(string `$name`, string
`$value`): void

public [offsetUnset](yaf-config-ini.offsetunset.md)(string `$name`):
void

public [readonly](yaf-config-ini.readonly.md)(): void

public [rewind](yaf-config-ini.rewind.md)(): void

public [\_\_set](yaf-config-ini.set.md)(string `$name`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value`): void

public [toArray](yaf-config-ini.toarray.md)(): array

public [valid](yaf-config-ini.valid.md)(): void

/\* Наслідувані методи \*/

abstract public
[Yaf_Config_Abstract::get](yaf-config-abstract.get.md)(string `$name`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value`):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

abstract public
[Yaf_Config_Abstract::readonly](yaf-config-abstract.readonly.md)():
bool

abstract public
[Yaf_Config_Abstract::set](yaf-config-abstract.set.md)():
[Yaf_Config_Abstract](class.yaf-config-abstract.md)

abstract public
[Yaf_Config_Abstract::toArray](yaf-config-abstract.toarray.md)():
array

}

## Властивості

`_config`

`_readonly`

## Приклади

**Приклад #1 **Yaf_Config_Ini()**example**

Цей приклад розкриває основні особливості використання Yaf_Config_Ini
під час завантаження даних із INI-файлу. У цьому прикладі задається конфігурація
для промислового та демонстраційного середовища. Оскільки конфігурація
демо-середовища дуже схожа на конфігурацію промислової, вона успадковує
від неї. Але ви у своїх програмах вільні чинити як хочете. В загальному,
ось така конфігурація задана у /path/to/config.ini:

`` inicode
; Промислове середовище
[production]
webhost u003d www.example.com
database.adapter u003d pdo_mysql
database.params.host u003d db.example.com
database.params.usernameu003ddbuser
database.params.password u003d secret
database.params.dbname u003d dbname

; Демо-середовище. Наслідує конфігурацію промислової з деякими поправками
[staging: production]
database.params.host u003d dev.example.com
database.params.usernameu003ddevuser
database.params.password u003d devsecret
````

` <?php$config u003d new Yaf_Config_Ini('/path/to/config.ini', 'staging');var_dump($config->database->params->host);var_dump($config->database-> params->dbname);var_dump($config->get("database.params.username"));?> `

Результатом виконання цього прикладу буде щось подібне:

string(15) "dev.example.com"
string(6) "dbname"
string(7) "devuser

## Зміст

- [Yaf_Config_Ini::\_\_construct](yaf-config-ini.construct.md) -
Конструктор класу Yaf_Config_Ini
- [Yaf_Config_Ini::count](yaf-config-ini.count.md) - Підраховує
усі елементи в Yaf_Config.ini
- [Yaf_Config_Ini::current](yaf-config-ini.current.md) - Отримує
поточне значення
- [Yaf_Config_Ini::\_\_get](yaf-config-ini.get.md) - Отримує
елемент
- [Yaf_Config_Ini::\_\_isset](yaf-config-ini.isset.md) — Визначає,
чи існує ключ
- [Yaf_Config_Ini::key](yaf-config-ini.key.md) — Отримує ключ
поточного елемента
- [Yaf_Config_Ini::next](yaf-config-ini.next.md) - Просуває
внутрішній покажчик
- [Yaf_Config_Ini::offsetExists](yaf-config-ini.offsetexists.md)
Призначення offsetExists
- [Yaf_Config_Ini::offsetGet](yaf-config-ini.offsetget.md) -
Призначення offsetGet
- [Yaf_Config_Ini::offsetSet](yaf-config-ini.offsetset.md) -
Призначення offsetSet
- [Yaf_Config_Ini::offsetUnset](yaf-config-ini.offsetunset.md) -
Призначення offsetUnset
- [Yaf_Config_Ini::readonly](yaf-config-ini.readonly.md)
Призначення readonly
- [Yaf_Config_Ini::rewind](yaf-config-ini.rewind.md) — Призначення
rewind
- [Yaf_Config_Ini::\_\_set](yaf-config-ini.set.md) — Призначення
\_\_set
- [Yaf_Config_Ini::toArray](yaf-config-ini.toarray.md) - Повертає
конфігурацію як масив PHP
- [Yaf_Config_Ini::valid](yaf-config-ini.valid.md) — Призначення
valid
