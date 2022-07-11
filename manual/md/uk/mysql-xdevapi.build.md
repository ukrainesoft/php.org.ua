- [« Налаштування під час виконання](mysql-xdevapi.configuration.md)
- [Предвизначені константи »](mysql-xdevapi.constants.md)

- [PHP Manual](index.md)
- [Встановлення та налаштування](mysql-xdevapi.setup.md)
- Складання / Компіляція з вихідного коду

## Складання / Компіляція з вихідного коду

Міркування компіляції цього модуля з вихідного коду.

- Ім'я модуля – 'mysql_xdevapi', тому використовуйте
`--enable-mysql-xdevapi`.

- Boost: обов'язковий, за необхідності використовуйте параметр
конфігурації --with-boostu003dDIR або задайте змінну оточення
MYSQL_XDEVAPI_BOOST_ROOT. Потрібні лише файли заголовків boost;
не двійкові файли.

- Google Protocol Buffers (protobuf): обов'язковий, за необхідності
використовуйте параметр конфігурації --with-protobufu003dDIR або задайте
змінну оточення MYSQL_XDEVAPI_PROTOBUF_ROOT.

За бажанням використовуйте `make protobufs` для створення файлів
protobuf (\*.pb.cc/.h) і `make clean-protobufs` для видалення
створені файли protobuf.

Примітка до protobuf на Windows: залежно від оточення може
потрібно статична бібліотека з багатопоточним часом
виконання DLL. Для підготовки використовуйте такі параметри:
*-Dprotobuf_MSVC_STATIC_RUNTIMEu003dOFF
-Dprotobuf_BUILD_SHARED_LIBSu003dOFF*

- Google Protocol Buffers / protocol compiler (protoc): обов'язкові,
переконайтеся, що під час складання в PATH доступний правильний 'protoc'.
Це особливо важливо, оскільки пакетні сценарії Windows PHP SDK
можуть перезаписувати оточення.

- Bison: обов'язковий і доступний з PATH.

Примітка до bison на Windows: ми настійно рекомендуємо, щоб
bison, що поставляється з вибраним PHP SDK, використав ще одну
помилку, схожу на "zend_globals_macros.h(39): error C2375:
'zendparse': redefinition; different linkage
Zend/zend_language_parser.h(214): примітка: note: see declaration
of 'zendparse'". Крім того, пакетні сценарії Windows PHP SDK можуть
перезаписувати оточення.

- Примітки для Windows: Щоб підготувати оточення, ознайомтесь з
офіційною документацією зі збирання Windows для [» поточного
SDK](https://wiki.php.net/internals/windows/stepbystepbuild_sdk_2).

Ми рекомендуємо використовувати зворотну косу межу '\\' замість косої
риси '/' всім шляхів.
