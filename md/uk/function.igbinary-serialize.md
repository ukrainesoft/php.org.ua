- [« Функції Igbinary](ref.igbinary.md)
- [igbinary_unserialize »](function.igbinary-unserialize.md)

- [PHP Manual](index.md)
- [Функції Igbinary](ref.igbinary.md)
- Створює компактне, двійкове уявлення значення, що зберігається.

#igbinary_serialize

(PECL igbinary \>u003d 1.1.1)

igbinary_serialize — Створює компактне двійкове, що зберігається.
подання значення

### Опис

**igbinary_serialize**([mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value`): string\|false

Створює уявлення значення, що зберігається.

Корисно для зберігання або передачі значень PHP без втрати їх типу
структури.

Щоб знову перетворити серіалізований рядок на значення PHP, можна
використовувати
[igbinary_unserialize()](function.igbinary-unserialize.md).

### Список параметрів

`value`
Значення, яке потрібно серіалізувати. **igbinary_serialize()**
обробляє всі типи, крім ресурсів (resource) та деяких об'єктів
(object) (див. примітку нижче). Навіть масиви (array), що містять
посилання на себе можуть бути серіалізовані функцією
**igbinary_serialize()**. Циклічні посилання всередині серіалізуються
масивів (array) або об'єктів (object) також буде збережено. Будь-яка
інше посилання буде втрачено.

При серіалізації об'єктів, igbinary намагатиметься викликати функції
[\_\_serialize()](language.oop5.magic.md#object.serialize) або
[\_\_sleep()](language.oop5.magic.md#object.sleep) перед
серіалізацією. Це дозволить об'єкту виконати будь-яке очищення в останню
хвилину тощо. перед серіалізацією. Аналогічно, коли об'єкт
відновлюється за допомогою
[igbinary_unserialize()](function.igbinary-unserialize.md), викликається
функція [\_\_unserialize()](language.oop5.magic.md#object.unserialize)
або [\_\_wakeup()](language.oop5.magic.md#object.wakeup).

> **Примітка**:
>
> Початок імен закритих членів об'єкта (object) доповнюються ім'ям
> класу, а початок імен захищених членів символом "*". Ці
> доповнені значення оточуються нульовим байтом з обох боків.

### Значення, що повертаються

Повертає рядок, що містить уявлення потоку байтів `value`,
яке може бути збережено будь-де.

Зверніть увагу, що це двійковий рядок, який може включати в
себе будь-яке байтове значення і має зберігатися і оброблятися як
така. Наприклад, виведення функції **igbinary_serialize()** зазвичай має
зберігатися в полі бази даних `BLOB`, а не в полі `CHAR` або `TEXT`.

### Приклади

**Приклад #1 Приклад використання **igbinary_serialize()****

` <?php$ser u003d igbinary_serialize(['test', 'test']);echo urlencode($ser), "
";var_export(igbinary_unserialize($ser));?> `

Результат виконання цього прикладу:

%00%00%00%02%14%02%06%00%11%04test%06%01%0E%00
array (
0 u003d> 'test',
1 u003d> 'test',
)

### Примітки

> **Примітка**:
>
> Зверніть увагу, що багато вбудованих об'єктів PHP не можуть бути
> серіалізовані. Проте ті, хто має таку можливість, реалізують
> або інтерфейс [Serializable](class.serializable.md), або
> магічні методи
> [\_\_serialize()](language.oop5.magic.md#object.serialize)/[\_\_unserialize()](language.oop5.magic.md#object.unserialize)
> або
> [\_\_sleep()](language.oop5.magic.md#object.sleep)/[\_\_wakeup()](language.oop5.magic.md#object.wakeup).
> Якщо внутрішній клас не відповідає жодній з цих вимог,
> він не може бути надійно серіалізований за допомогою будь-якого
> Серіалізатор.
>
> Є кілька історичних винятків із наведеного вище правила,
> коли деякі внутрішні об'єкти можуть бути серіалізовані без
> реалізації інтерфейсу чи розкриття методів.

### Дивіться також

- [serialize()](function.serialize.md) - Генерує придатне для
зберігання уявлення змінної
- [igbinary_unserialize()](function.igbinary-unserialize.md) -
Створює значення PHP із збереженого уявлення функцією
igbinary_serialize
- [var_export()](function.var-export.md) - Виводить або повертає
інтерпретоване рядкове подання змінної
- [json_encode()](function.json-encode.md) - Повертає
JSON-подання даних
- [Серіалізація об'єктів](language.oop5.serialization.md)
- [\_\_sleep()](language.oop5.magic.md#object.sleep)
- [\_\_wakeup()](language.oop5.magic.md#object.wakeup)
- [\_\_serialize()](language.oop5.magic.md#object.serialize)
- [\_\_unserialize()](language.oop5.magic.md#object.unserialize)
