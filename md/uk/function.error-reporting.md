- [«error_log](function.error-log.md)
- [restore_error_handler »](function.restore-error-handler.md)

- [PHP Manual](index.md)
- [Функції обробки помилок](ref.errorfunc.md)
- Задає, які помилки PHP потраплять у звіт

#error_reporting

(PHP 4, PHP 5, PHP 7, PHP 8)

error_reporting — Задає, які помилки PHP потраплять у звіт

### Опис

**error_reporting**(?int `$error_level` u003d **`null`**): int

Функція **error_reporting()** визначає значення директиви
[error_reporting](errorfunc.configuration.md#ini.error-reporting) у
час виконання. У PHP є багато рівнів помилок. Використовуючи цю
функцію, можна задати рівень помилок часу виконання скрипта, які
потраплять у звіт. Якщо необов'язковий аргумент `error_level` не заданий,
**error_reporting()** поверне поточне значення рівня протоколювання
помилок.

### Список параметрів

`error_level`
Нове значення рівня
[error_reporting](errorfunc.configuration.md#ini.error-reporting). Це
може бути бітова маска чи іменовані константи. При використанні
Названих констант необхідно буде стежити за сумісністю з новими
версіями PHP. У нових версіях можуть додатись нові рівні помилок,
збільшиться діапазон цілісних типів. Все це може призвести до
нестабільній роботі при використанні старих цілісних позначень
рівнів помилок.

Доступні константи рівнів помилок та їх описи наведено у розділі
[Предвизначені константи](errorfunc.constants.md).

### Значення, що повертаються

Повертає старе значення рівня
[error_reporting](errorfunc.configuration.md#ini.error-reporting) або
поточне значення якщо аргумент `error_level` не заданий.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------|
| 8.0.0 | `error_level` тепер припускає значення null. |

### Приклади

**Приклад #1 Приклади використання **error_reporting()****

` <?php// Выключение протоколирования ошибокerror_reporting(0);// Включать в отчёт простые описания ошибокerror_reporting(E_ERROR | E_WARNING | E_PARSE);// Включать в отчёт E_NOTICE сообщения (добавятся сообщения о// непроинициализированных переменных или ошибках в именах переменных) error_reporting(E_ERROR | E_WARNING | E_PARSE | E_NOTICE);// Добавлять сообщения обо всех ошибках, кроме E_NOTICEerror_reporting(E_ALL & ~E_NOTICE);// Добавлять в отчёт все ошибки PHPerror_reporting(E_ALL);// Добавлять в отчёт все ошибки PHPerror_reporting(- 1); / / Те, що, і error_reporting (E_ALL); ini_set ('error_reporting', E_ALL);?> `

### Примітки

**Підказка**

Якщо передати `-1`, будуть відображатися всі можливі помилки, навіть якщо в
нових версіях PHP додадуться рівні або константи. Поведінка еквівалентна
передачі константи **`E_ALL`**.

### Дивіться також

- Директива
[display_errors](errorfunc.configuration.md#ini.display-errors)
- Директива
[html_errors](errorfunc.configuration.md#ini.md-errors)
- Директива
[xmlrpc_errors](errorfunc.configuration.md#ini.xmlrpc-errors)
- [ini_set()](function.ini-set.md) - Встановлює значення
налаштування конфігурації
