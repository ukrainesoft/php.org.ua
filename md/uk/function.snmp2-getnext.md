- [« snmp2_get](function.snmp2-get.md)
- [snmp2_real_walk »](function.snmp2-real-walk.md)

- [PHP Manual](index.md)
- [Функції SNMP](ref.snmp.md)
- Отримує об'єкт SNMP, який слідує за цим ідентифікатором
об'єкта

# snmp2_getnext

(PHP \>u003d 5.2.0, PHP 7, PHP 8)

snmp2_getnext — Отримує об'єкт SNMP, який слідує за даними
ідентифікатором об'єкта

### Опис

**snmp2_getnext**(
string `$hostname`,
string `$community`,
array\|string `$object_id`,
int `$timeout` u003d -1,
int `$retries` u003d -1
):
[mixed](language.types.declarations.md#language.types.declarations.mixed)

Функція **snmp2_get_next()** використовується для читання значення об'єкта
SNMP, який слідує за вказаним `object_id`.

### Список параметрів

`hostname`
Ім'я хоста агента (сервера) SNMP.

`community`
Read-спільнота.

`object_id`
Ідентифікатор об'єкта SNMP, який передує бажаному.

`timeout`
Час очікування у мікросекундах.

`retries`
Кількість повторних спроб після закінчення часу очікування.

### Значення, що повертаються

Повертає значення об'єкта SNMP у разі успішного виконання або
**`false`** у разі виникнення помилки. У разі виникнення помилки
виводиться помилка рівня E_WARNING.

### Приклади

**Приклад #1 Приклад використання **snmp2_get_next()****

` <?php$nameOfSecondInterface u003d snmp2_get_next('localhost', 'public', 'IF-MIB::ifName.1');?> `

### Дивіться також

- [snmp2_get()](function.snmp2-get.md) - Отримує об'єкт SNMP
- [snmp2_walk()](function.snmp2-walk.md) - Отримує всі об'єкти SNMP
з агента
