- [«curl_multi_select](function.curl-multi-select.md)
- [curl_multi_strerror »](function.curl-multi-strerror.md)

- [PHP Manual](index.md)
- [Функції cURL](ref.curl.md)
- Встановити налаштування для множинного дескриптора cURL

#curl_multi_setopt

(PHP 5 \>u003d 5.5.0, PHP 7, PHP 8)

curl_multi_setopt — Встановити налаштування для множинного дескриптора cURL

### Опис

**curl_multi_setopt**([CurlMultiHandle](class.curlmultihandle.md)
`$multi_handle`, int `$option`,
[mixed](language.types.declarations.md#language.types.declarations.mixed)
`$value`): bool

**Увага**

На цей час ця функція ще була документована; для
ознайомлення доступний лише список аргументів.

### Список параметрів

`multi_handle`

`option`
Одна із констант **`CURLMOPT_*`**.

`value`
Значення, яке потрібно встановити для `option`.

`value` має бути типу int для наступних значень параметра `option`:

[TABLE]

### Значення, що повертаються

Повертає **`true`** у разі успішного виконання або **`false`** у
у разі виникнення помилки.

### Список змін

| Версія | Опис |
|--------|---------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -----------------------------|
| 8.0.0 | `multi_handle` тепер чекає екземпляр; раніше, очікувався ресурс (resource). |
| 7.1.0 | Додано константу **`CURLMOPT_PUSHFUNCTION`**. |
| 7.0.7 | Додані константи **`CURLMOPT_CHUNK_LENGTH_PENALTY_SIZE`**, **`CURLMOPT_CONTENT_LENGTH_PENALTY_SIZE`**, **`CURLMOPT_MAX_HOST_CONNECTIONS`**, **`CURLMOPT_MAX_PIPELINE_LENGTH`** та **`` |
