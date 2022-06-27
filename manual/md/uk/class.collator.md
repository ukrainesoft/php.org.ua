- [« Основи використання модуля](intl.examples.basic.md)
- [Collator::asort »](collator.asort.md)

- [PHP Manual](index.md)
- [intl](book.intl.md)
- Клас Collator

# Клас Collator

(PHP 5 u003d 5.3.0, PHP 7, PHP 8, PECL intl u003d 1.0.0)

## Вступ

Здійснює порівняння рядків із підтримкою порядку сортування специфічного
для локалі

## Огляд класів

class **Collator** {

/\* Методи \*/

public [\_\_construct](collator.construct.md)(string `$locale`)

public [asort](collator.asort.md)(array `&$array`, int `$flags` u003d
Collator::SORT_REGULAR): bool

public [compare](collator.compare.md)(string `$string1`, string
`$string2`): int\|false

public static [create](collator.create.md)(string `$locale`):
?[Collator](class.collator.md)

public [getAttribute](collator.getattribute.md)(int `$attribute`):
int\|false

public [getErrorCode](collator.geterrorcode.md)(): int\|false

public [getErrorMessage](collator.geterrormessage.md)(): string\|false

public [getLocale](collator.getlocale.md)(int `$type`): string\|false

public [getSortKey](collator.getsortkey.md)(string `$string`):
string\|false

public [getStrength](collator.getstrength.md)(): int

public [setAttribute](collator.setattribute.md)(int `$attribute`, int
`$value`): bool

public [setStrength](collator.setstrength.md)(int `$strength`): bool

public [sortWithSortKeys](collator.sortwithsortkeys.md)(array
`&$array`): bool

public [sort](collator.sort.md)(array `&$array`, int `$flags` u003d
Collator::SORT_REGULAR): bool

}

## Зумовлені константи

**`Collator::FRENCH_COLLATION`** (int)
Сортування рядків із акцентами з кінця рядка. Цей атрибут автоматично
проставляється в *On* для французької та деяких інших локалей. Зазвичай
користувачам немає потреби спеціально задавати цей параметр. Є
деяке просідання продуктивності якщо цей параметр встановлений як
*On*, але не впливає на довжину ключа сортування. Можливі значення:

- **`Collator::ON`**
- **`Collator::OFF`**(за замовчуванням)
- **`Collator::DEFAULT_VALUE`**

**Приклад #1 Правила FRENCH_COLLATION**

- Fu003dOFF cote \< coté \< côte \< côté
- Fu003dON cote \< côte \< coté \< côté

**`Collator::ALTERNATE_HANDLING`** (int)
Аттрибут "Alternate" використовується для контролю обробки так званих
"Змінні символи" в UCA: пробілові символи, знаки пунктуації та
символи. Якщо "Alternate" встановлено як *NonIgnorable* (N), то відмінності
у цих символах будуть вважатися такими ж значущими, як і відмінності
між літерами. Якщо "Alternate" встановлений як *Shifted* (S), то ці
символи матимуть низьку значимість. Значення *Shifted* часто
використовується в комбінації з *Strength* встановленим у "Quaternary". В
у таких випадках подібні символи будуть враховуватися при сортуванні, але
тільки якщо всі інші аспекти рядків (літери, акценти, реєстр)
ідентичні. Якщо "Alternate" не встановлено як "Shifted", то різниці
між "Strength" рівним 3 та 4 не буде. Докладніше і з прикладами
читайте у розділі "Variable_Weighting" на сайті
[» UCA](http://www.unicode.org/reports/tr10/). Причина, через яку
значення для "Alternate" не використовуються просто *On* у *Off* у тому, що
у майбутньому можуть бути додані додаткові варіанти. Опція UCA
"Blanked" виражається за допомогою "Strength" встановленого в "Alternate"
встановленого в "Shifted". Для більшості локалей цей параметр по
замовчуванням дорівнює "NonIgnorable". Якщо задано "Shifted", то обробка
може бути повільніше якщо у вас багато рядків, що відрізняються
лише пунктуацією. Довжина ключа сортування не торкається лише якщо
також не збільшувався рівень "Strength".

Можливі значення:

- **`Collator::NON_IGNORABLE`**(за замовчуванням)
- **`Collator::SHIFTED`**
- **`Collator::DEFAULT_VALUE`**

**Приклад #2 ALTERNATE_HANDLING rules**

- S u003d 3, A u003d N di Silva < Di Silva < diSilva < U.S.A. \< USA
- S u003d 3, A u003d S di Silva u003d diSilva < Di Silva < U.S.A. u003d USA
- S u003d 4, A u003d S di Silva < diSilva < Di Silva < U.S.A. \< USA

**`Collator::CASE_FIRST`** (int)
Аттрибут "Case_First" використовується для визначення порядку сортування в
залежно від регістру символів за відсутності інших відмінностей у
рядках. Можливі значення: *Uppercase_First*(U), *Lowercase_First*
(L), *Default* та *Off*. Між "Off" та "Lowercase_First" практично немає
різниці, так що користувачі зазвичай не використовують "Lowercase_First", а
тільки Off або Uppercase_First. (Ті, кому справді цікава
різниця між X і L можуть звернутися до `Налаштування Collation`). Завдання L
або U не позначається на швидкості порівняння, але впливає на довжину ключа
сортування.

Можливі значення:

- **`Collator::OFF`**(за замовчуванням)
- **`Collator::LOWER_FIRST`**
- **`Collator::UPPER_FIRST`**
- **`Collator:DEFAULT`**

**Приклад #3 Правила CASE_FIRST**

- Cu003dX or Cu003dL "china" \< "China" \< "denmark" \< "Denmark"
- Cu003dU "China" \< "china" \< "Denmark" \< "denmark"

**`Collator::CASE_LEVEL`** (int)
Аттрибут "Case_Level" використовується, коли акценти не важливі, а реєстр
важливий. У таких випадках встановіть "Strength" у значення *Primary*, та
"Case_Level" у *On*. У більшості локалів за замовчуванням встановлено значення
"Off". Має незначний вплив на швидкість порівняння та довжину
ключа сортування, якщо встановлено як *On*.

Можливі значення:

- **`Collator::OFF`**(за замовчуванням)
- **`Collator::ON`**
- **`Collator::DEFAULT_VALUE`**

**Приклад #4 CASE_LEVEL rules**

- S u003d 1, E u003d X role u003d Role u003d rôle
- Su003d1, Eu003dO role u003d rôle \< Role

**`Collator::NORMALIZATION_MODE`** (int)
Налаштування "Normalization" визначає, чи буде текст ретельно
нормалізований у порівнянні чи ні. Навіть якщо це налаштування вимкнено
(за замовчуванням для багатьох локалей) текст у загальному випадку буде
порівнюватися коректно (подробиці UTN #5). Проблеми можуть бути
тільки з відмітками акцентів, розташованими в неканонічному порядку. Якщо
встановлено як *On*, то буде гарантовано найкращий результат для всіх
можливі варіанти тексту. Проте, якщо встановлено як *On* - це
позначиться на швидкості порівняння, залежно від кількості
послідовностей, які необхідно нормалізувати. Будь-якого
помітного впливу на довжину ключа сортування не буде. Якщо
заздалегідь відомо, що текст вже нормалізовано як NFD або NFKD,
необхідності використання цього налаштування немає.

Можливі значення:

- **`Collator::OFF`**(за замовчуванням)
- **`Collator::ON`**
- **`Collator::DEFAULT_VALUE`**

**`Collator::STRENGTH`** (int)
ICU Collation Service підтримує безліч рівнів порівняння (вони
називаються "Levels", але також відомі як "Strengths"). Використання
цих налаштувань дозволяє ICU сортувати рядки точно відповідно до
правилами локалі. Однак, дозволяючи вибіркове використання цих
рівнів, пошук рядка у тексті можна проводити з використанням
різних умов. Більше інформації описано у розділі присвяченій
[collator_set_strength()](collator.setstrength.md).

Можливі значення:

- **`Collator::PRIMARY`**
- **`Collator::SECONDARY`**
- **`Collator::TERTIARY`**(за замовчуванням)
- **`Collator::QUATERNARY`**
- **`Collator::IDENTICAL`**
- **`Collator::DEFAULT_VALUE`**

**`Collator::HIRAGANA_QUATERNARY_MODE`** (int)
Сумісність з JIS x 4061 вимагає введення додаткового рівня
виділення символів Hiragana та Katakana. Якщо потрібна сумісність з
стандартом, цей атрибут необхідно задати як *On*, а "Strength"
як "Quaternary". Це позначиться на довжині ключа сортування та швидкості
порівняння.

Можливі значення:

- **`Collator::OFF`**(за замовчуванням)
- **`Collator::ON`**
- **`Collator::DEFAULT_VALUE`**

**`Collator::NUMERIC_COLLATION`** (int)
Якщо увімкнено, цей атрибут генерує ключ порівняння для числового
значення підрядка складається з цифр. Це дозволяє при сортуванні
поміщати '100' після '2'.

Можливі значення:

- **`Collator::OFF`**(за замовчуванням)
- **`Collator::ON`**
- **`Collator::DEFAULT_VALUE`**

**`Collator::DEFAULT_VALUE`** (int)

**`Collator::PRIMARY`** (int)

**`Collator::SECONDARY`** (int)

**`Collator::TERTIARY`** (int)

**`Collator::DEFAULT_STRENGTH`** (int)

**`Collator::QUATERNARY`** (int)

**`Collator::IDENTICAL`** (int)

**`Collator::OFF`** (int)

**`Collator::ON`** (int)

**`Collator::SHIFTED`** (int)

**`Collator::NON_IGNORABLE`** (int)

**`Collator::LOWER_FIRST`** (int)

**`Collator::UPPER_FIRST`** (int)

## Зміст

- [Collator::asort](collator.asort.md) — Сортує масив з
збереженням асоціації індексу
- [Collator::compare](collator.compare.md) — Порівнює два рядки
Unicode
- [Collator::\_\_construct](collator.construct.md) - Створює новий
екземпляр Collator
- [Collator::create](collator.create.md) — Створює новий екземпляр
Collator
- [Collator::getAttribute](collator.getattribute.md) — Отримує
значення атрибуту зіставлення
- [Collator::getErrorCode](collator.geterrorcode.md) — Отримує
останній код помилки Collator
- [Collator::getErrorMessage](collator.geterrormessage.md) -
Отримує текст для останньої помилки Collator
- [Collator::getLocale](collator.getlocale.md) — Отримує назву
локалі для Collator
- [Collator::getSortKey](collator.getsortkey.md) — Отримує ключ
сортування рядка
- [Collator::getStrength](collator.getstrength.md) - Отримує
поточну силу зіставлення
- [Collator::setAttribute](collator.setattribute.md) — Встановлює
атрибут зіставлення
- [Collator::setStrength](collator.setstrength.md) - Встановлює
силу зіставлення
- [Collator::sortWithSortKeys](collator.sortwithsortkeys.md) -
Сортує масив з використанням вказаного Collator та ключів
сортування
- [Collator::sort](collator.sort.md) — Сортує масив з
використанням зазначеного засобу сортування
