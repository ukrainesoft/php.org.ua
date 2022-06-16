- [«enchant_broker_free](function.enchant-broker-free.md)
- [enchant_broker_get_error »](function.enchant-broker-get-error.md)

- [PHP Manual](index.md)
- [Функції Enchant](ref.enchant.md)
- Повертає шлях словника для заданого бекенду

#enchant_broker_get_dict_path

(PHP 5 u003d 5.3.1, PHP 7, PHP 8, PECL enchant u003d 1.0.1)

enchant_broker_get_dict_path — Повертає шлях словника для заданого
бекенда

**Увага**

Ця функція була *Видалена* в PHP 8.0.0. Використання цієї функції не
рекомендується.

### Опис

**enchant_broker_get_dict_path**([EnchantBroker](class.enchantbroker.md)
`$broker`, int `$type`): string\|false

Повертає шлях словника для заданого бекенда.

### Список параметрів

`broker`
Провайдер Enchant, який повертається
[enchant_broker_init()](function.enchant-broker-init.md).

`type`
Тип словників, тобто. **`ENCHANT_MYSPELL`** або **`ENCHANT_ISPELL`**.

### Значення, що повертаються

Повертає шлях до директорії словника у разі успішного виконання або
**`false`** у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -----------------------------------------------|
| 8.0.0 | `broker` чекає екземпляр [EnchantBroker](class.enchantbroker.md); Раніше очікувався ресурс ([resource](language.types.resource.md)). |

### Примітки

> **Примітка**:
>
> Функція доступна лише тоді, коли модуль був скомпільований з Enchant v1.

### Дивіться також

- [enchant_broker_set_dict_path()](function.enchant-broker-set-dict-path.md) -
Встановити шлях для заданого бекенду
