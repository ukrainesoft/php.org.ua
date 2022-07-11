- [«usleep](function.usleep.md)
- [Seaslog »](book.seaslog.md)

- [PHP Manual](index.md)
- [Misc.](book.misc.md)
-   Список змін

# Список змін

Наступні зміни були зроблені з класами/функціями/методами
даного модуля.

| Version | Function | Description |
|--------------|---------------------------------- --------------------------------------|----------- -------------------------------------------------- -------------------------------------------------- ---------------------------------------------|
| 8.0.0 | [constant](function.constant.md) Якщо константа не визначена, функція constant тепер викидає виняток Error; раніше видавалась помилка рівня E_WARNING та поверталося значення null. |
| | [define](function.define.md) | Передача true до case_insensitive тепер видає помилку рівня E_WARNING. Передача false досі дозволена. |
| | [ignore_user_abort](function.ignore-user-abort.md) | enable тепер допускає значення null. |
| | [pack](function.pack.md) | Функція більше не повертає false у разі виникнення помилки. |
| | [sapi_windows_vt100_support](function.sapi-windows-vt100-support.md) | enable тепер допускає значення null. |
| 7.3.0 | [define](function.define.md) | Параметр case_insensitive оголошений застарілим і буде видалено у версії 8.0.0. |
| 7.2.0 | [pack](function.pack.md) | Типи float і double підтримують як зворотний, і прямий порядок передачі байтів. |
| | [unpack](function.unpack.md) | Типи float і double підтримують як зворотний, і прямий порядок передачі байтів. |
| 7.1.0 | [unpack](function.unpack.md) | Доданий необов'язковий параметр offset. |
| 7.0.15,7.1.1 | [pack](function.pack.md) | Додані коди "e", "E", "g" та "G" для підтримки примусової вказівки порядку байт для float та double. |
| 7.0.0 | [define](function.define.md) | Допустимі значення типу array. |
