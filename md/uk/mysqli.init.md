- [« mysqli::$info](mysqli.info.md)
- [mysqli::$insert_id »](mysqli.insert-id.md)

- [PHP Manual](index.md)
- [mysqli](class.mysqli.md)
- Ініціалізує MySQLi та повертає об'єкт для використання в
функції mysqli_real_connect()

# mysqli::init

# mysqli_init

(PHP 5, PHP 7, PHP 8)

mysqli::init -- mysqli_init — Ініціалізує MySQLi та повертає об'єкт
для використання у функції mysqli_real_connect()

### Опис

Об'єктно-орієнтований стиль

public **mysqli::init**(): ?bool

Процедурний стиль

**mysqli_init**(): [mysqli](class.mysqli.md)\|false

Виділяє пам'ять або ініціалізує об'єкт MySQL, придатний для
використання у функціях [mysqli_options()](mysqli.options.md).

> **Примітка**:
>
> Будь-які подальші виклики mysqli-функцій із цим ресурсом (крім
> [mysqli_options()](mysqli.options.md)) зазнають невдачі, доки
> буде викликано функцію
> [mysqli_real_connect()](mysqli.real-connect.md).

### Список параметрів

Ця функція не має параметрів.

### Значення, що повертаються

Метод **mysqli::init()** повертає **`null`** у разі успішного
виконання або **`false`** у разі виникнення помилки. Функція
**mysqli_init()** повертає об'єкт у разі успішного виконання або
**`false`** у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- --------------|
| 8.1.0 | Об'єктно-орієнтований стиль виклику методу **mysqli::init()** застарів. Замініть виклик методу **parent::init()** за допомогою **parent::\_\_construct()**. |

### Приклади

Дивіться [mysqli_real_connect()](mysqli.real-connect.md).

### Дивіться також

- [mysqli_options()](mysqli.options.md) - Встановлення установок
- [mysqli_close()](mysqli.close.md) - Закриває раніше відкрите
з'єднання з базою даних
- [mysqli_real_connect()](mysqli.real-connect.md) - Встановлює
з'єднання з сервером mysql
- [mysqli_connect()](function.mysqli-connect.md) - Псевдонім
mysqli::\_\_construct
