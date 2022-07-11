- [«print_r](function.print-r.md)
- [settype »] (function.settype.md)

- [PHP Manual](index.md)
- [Функції для роботи зі змінними](ref.var.md)
- Генерує придатне для зберігання уявлення змінної

# serialize

(PHP 4, PHP 5, PHP 7, PHP 8)

serialize - Генерує придатне для зберігання уявлення змінної

### Опис

**serialize**([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value`): string

Генерує придатне для зберігання уявлення змінної.

Це корисно для зберігання або передачі значень PHP між скриптами без
втрати їх типу та структури.

Для перетворення серіалізованого рядка назад на PHP-значення,
використовуйте функцію [unserialize()](function.unserialize.md).

### Список параметрів

`value`
Значення, яке потрібно серіалізувати. **serialize()** обробляє
всі типи, крім resource та деяких типів object (див. примітку
нижче). Можливо також серіалізувати масиви, які містять посилання на
себе. Циклічні посилання всередині масиву/об'єкту, що серіалізується, також
зберігаються. Будь-які інші посилання будуть втрачені.

При серіалізації об'єкта PHP намагається викликати магічні методи
[\_\_serialize()](language.oop5.magic.md#object.serialize) або
[\_\_sleep()](language.oop5.magic.md#object.sleep) перед
серіалізацією. Це робиться для того, щоб дозволити об'єкту в
останній момент зробити очищення і тому подібні операції перед
серіалізацією. Аналогічно, коли об'єкт відновлюється функцією
[unserialize()](function.unserialize.md), викликається магічний метод
[\_\_unserialize()](language.oop5.magic.md#object.unserialize) або
[\_\_wakeup()](language.oop5.magic.md#object.wakeup).

> **Примітка**:
>
> Початок імен закритих членів об'єкта доповнюються іменем класу, а
> початок імен захищених членів символом '\*'. Ці доповнені значення
> оточуються нульовим байтом (0x00) з обох боків.

### Значення, що повертаються

Повертає рядок, що містить потокове представлення змінної
`value`, яка може бути збережена будь-де.

Зверніть увагу, що це бінарний рядок, який може включати
нульові байти, і її потрібно зберігати та обробляти відповідним
чином. Наприклад, виведення функції **serialize()** краще зберігати в
BLOB-поле бази даних, а чи не в полях типу CHAR чи TEXT.

### Приклади

**Приклад #1 Приклад використання **serialize()****

`<?php//$session_data містить багатомірний масив з сесійною// інформацією про поточному користувачеві. Ми  використовуємо serialize() для збереження// цій інформації в базі даних в кінці запиту.$conn u003d odbc_connect("webdb", "php", "chicken");$stmt  ? WHERE id u003d ?");$sqldata u003d array (serialize($session_data), $_SERVER['PHP_AUTH_USER']);if (!odbc_execute($stmt, $sqldata))           ¦ INSERT INTO sessions (id, data) VALUES(?, ?)"); if (!odbc_execute($stmt, array_reverse($sqldata))) {        /* Код, виконаний в випадку виникнення помилки.. */   

### Примітки

> **Примітка**:
>
> Зверніть увагу, що багато вбудованих у PHP об'єктів не може бути
> серіалізовано. Проте ті з них, які підтримують цю
> можливість, реалізують або інтерфейс
> [Serializable](class.serializable.md), або магічні методи
> [\_\_serialize()](language.oop5.magic.md#object.serialize)/[\_\_unserialize()](language.oop5.magic.md#object.unserialize)
> або
> [\_\_sleep()](language.oop5.magic.md#object.sleep)/[\_\_wakeup()](language.oop5.magic.md#object.wakeup).
> Якщо вбудований клас не відповідає цим вимогам, він не може
> бути надійно серіалізованим.
>
> Історично є деякі винятки з вищезгаданого правила, коли
> деякі внутрішні об'єкти можуть бути серіалізовані без реалізації
> інтерфейс або магічні методи.

**Увага**

При серіалізації об'єктів функцією **serialize()**, провідний зворотний
слєш не буде включений в ім'я класу із зазначеним простором імен для
найкращої зворотної сумісності.

### Дивіться також

- [unserialize()](function.unserialize.md) - Створює PHP-значення з
збереженого уявлення
- [var_export()](function.var-export.md) - Виводить або повертає
інтерпретоване рядкове подання змінної
- [json_encode()](function.json-encode.md) - Повертає
JSON-подання даних
- [Серіалізація об'єктів](language.oop5.serialization.md)
- [\_\_sleep()](language.oop5.magic.md#object.sleep)
- [\_\_wakeup()](language.oop5.magic.md#object.wakeup)
- [\_\_serialize()](language.oop5.magic.md#object.serialize)
- [\_\_unserialize()](language.oop5.magic.md#object.unserialize)
