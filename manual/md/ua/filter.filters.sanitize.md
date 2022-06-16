- [« Фільтри валідації даних](filter.filters.validate.md)
- [Інші фільтри »](filter.filters.misc.md)

- [PHP Manual](index.md)
- [Типи фільтрів](filter.filters.md)
- Очищувальні фільтри

## Очищуючі фільтри

| Ідентифікатор Ім'я Прапори | Опис |
|------------------------------------------|------ ----------------|--------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------|------------ -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- ---------------|
| **`FILTER_SANITIZE_EMAIL`** | "email" | | Видаляє всі символи, окрім букв, цифр і `` !#$%&'*+-u003d?^_`{|}~@.[] ``. |
| **`FILTER_SANITIZE_ENCODED`** | "encoded" | **`FILTER_FLAG_STRIP_LOW`**, **`FILTER_FLAG_STRIP_HIGH`**, **`FILTER_FLAG_STRIP_BACKTICK`**, **`FILTER_FLAG_ENCODE_LOW`**, **`FILTER_FLAG_ENCODE_HIGH`** | Кодує рядок у формат URL, у разі потреби видаляє або кодує спеціальні символи. |
| **`FILTER_SANITIZE_MAGIC_QUOTES`** | "magic_quotes" | | Використовується функція [addslashes()](function.addslashes.md). (*УСТАРІЛА* з PHP 7.3.0 та *Видалена* з PHP 8.0.0, використовуйте замість неї **`FILTER_SANITIZE_ADD_SLASHES`**.) |
| **`FILTER_SANITIZE_ADD_SLASHES`** | "add_slashes" | | Використовується функція [addslashes()](function.addslashes.md). (Доступно з PHP 7.3.0) |
| **`FILTER_SANITIZE_NUMBER_FLOAT`** | "number_float" | **`FILTER_FLAG_ALLOW_FRACTION`**, **`FILTER_FLAG_ALLOW_THOUSAND`**, **`FILTER_FLAG_ALLOW_SCIENTIFIC`** | Видаляє всі символи, окрім цифр, `+-` і, при необхідності, `.,eE`. |
| **`FILTER_SANITIZE_NUMBER_INT`** | "number_int" | | Видаляє всі символи, крім цифр та знаків плюсу та мінусу. |
| **`FILTER_SANITIZE_SPECIAL_CHARS`** | "special_chars" | **`FILTER_FLAG_STRIP_LOW`**, **`FILTER_FLAG_STRIP_HIGH`**, **`FILTER_FLAG_STRIP_BACKTICK`**, **`FILTER_FLAG_ENCODE_HIGH`** | Екранує HTML-символи `'"<>&` та символи з ASCII-кодом, меншим 32, при необхідності видаляє або кодує інші спеціальні символи.
| **`FILTER_SANITIZE_FULL_SPECIAL_CHARS`** | "full_special_chars" | **`FILTER_FLAG_NO_ENCODE_QUOTES`**, | Еквівалентно виклику [htmlspecialchars()](function.mdspecialchars.md) із встановленим параметром **`ENT_QUOTES`**. Кодування лапок може бути вимкнено за допомогою установки прапора **`FILTER_FLAG_NO_ENCODE_QUOTES`**. Аналогічно [htmlspecialchars()](function.mdspecialchars.md), цей фільтр бере до уваги [default_charset](ini.core.md#ini.default-charset) і, якщо буде виявлена некоректна послідовність байт для даного кодування, то весь рядок буде визнано непридатним і результатом буде рядок нульової довжини. Якщо використовується цей фільтр як фільтр за замовчуванням, ознайомтеся з попередженням нижче про встановлення прапорів за замовчуванням у 0. |
| **`FILTER_SANITIZE_STRING`** | "string" | **`FILTER_FLAG_NO_ENCODE_QUOTES`**, **`FILTER_FLAG_STRIP_LOW`**, **`FILTER_FLAG_STRIP_HIGH`**, **`FILTER_FLAG_STRIP_BACKTICK`**, **`FILTER_FLAG_ENCODE_LOW`** ** `FILTER_FLAG_ENCODE_AMP`** | Видаляє теги та кодує подвійні та одинарні лапки, при необхідності видаляє або кодує спеціальні символи. Кодування лапок можна вимкнути, встановивши **`FILTER_FLAG_NO_ENCODE_QUOTES`**. (Оголошено *застарілим*, починаючи з PHP 8.1.0, використовуйте замість нього функцію [htmlspecialchars()](function.mdspecialchars.md)). |
| **`FILTER_SANITIZE_STRIPPED`** | "stripped" | | Псевдонім фільтру "string". (Оголошено *застарілим*, починаючи з PHP 8.1.0, використовуйте замість нього функцію [htmlspecialchars()](function.mdspecialchars.md)). |
| **`FILTER_SANITIZE_URL`** | "url" | | Видаляє всі символи, крім букв, цифр і ``$-_.+!*'(),{}|\^~[]`<>#%";/?:@&u003d ``.
| **`FILTER_UNSAFE_RAW`** | "unsafe_raw" | **`FILTER_FLAG_STRIP_LOW`**, **`FILTER_FLAG_STRIP_HIGH`**, **`FILTER_FLAG_STRIP_BACKTICK`**, **`FILTER_FLAG_ENCODE_LOW`**, **`FILTER_FLAG_ENCODE_HIGH`**, ** Не діє, при необхідності видаляє або кодує спеціальні символи. Цей фільтр є псевдонімом **`FILTER_DEFAULT`**. |

**Список фільтрів, що очищають**

**Увага**

При використанні одного з цих фільтрів як фільтр
замовчуванням або через ваш ini-файл, або через конфігурацію веб-сервера,
прапори за замовчуванням встановлені на значення
**`FILTER_FLAG_NO_ENCODE_QUOTES`**. Вам необхідно явно встановити
параметру filter.default_flags значення 0 для наявності порожніх лапок по
замовчуванням. Наприклад:

**Приклад #1 Налаштування стандартного фільтра для роботи аналогічно функції
htmlspecialchars**

`filter.defaultu003du003dfull_special_charsfilter.default_flagsu003du003d0`

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -|
| 8.0.0 | Видалено **`FILTER_SANITIZE_MAGIC_QUOTES`**. |
| 7.3.0 | Додано **`FILTER_SANITIZE_ADD_SLASHES`** для заміни **`FILTER_SANITIZE_MAGIC_QUOTES`** |
| 7.3.0 | **`FILTER_SANITIZE_MAGIC_QUOTES`** оголошена застарілою. |
