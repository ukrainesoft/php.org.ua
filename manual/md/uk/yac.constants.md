- [« Типи ресурсів](yac.resources.md)
- [Yac »](class.yac.md)

- [PHP Manual](index.md)
- [Yac](book.yac.md)
- Обумовлені константи

# Зумовлені константи

Наведені нижче константи визначені даним модулем і можуть бути
доступні тільки в тому випадку, якщо PHP був зібраний за допомогою цього
модуля або в тому випадку, якщо даний модуль був динамічно завантажений
під час виконання.

**`YAC_VERSION`** (string)

**`YAC_MAX_KEY_LEN`** (int)
Максимальна довжина ключа може бути 48 байт.

**`YAC_MAX_VALUE_RAW_LEN`** (int)

**`YAC_MAX_RAW_COMPRESSED_LEN`** (int)

**`YAC_SERIALIZER_PHP`** (int)
Використовувати php serialize як серіалізатор

**`YAC_SERIALIZER_JSON`** (int)
Використовувати json як серіалізатор (потрібно --enable-json)

**`YAC_SERIALIZER_IGBINARY`** (int)
Використовувати igbinary як серіалізатор (потрібно
--enable-igbinary)

**`YAC_SERIALIZER_MSGPACK`** (int)
Використовувати msgpack як серіалізатор (потрібно
--enable-msgpack)

**`YAC_SERIALIZER`** (string)
Який серіалізатор використовується в yac
