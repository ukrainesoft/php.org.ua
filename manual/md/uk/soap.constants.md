- [« Типи ресурсів](soap.resources.md)
- [Функції SOAP »](ref.soap.md)

- [PHP Manual](index.md)
- [SOAP](book.soap.md)
- Обумовлені константи

# Зумовлені константи

Наведені нижче константи визначені даним модулем і можуть бути
доступні лише в тому випадку, якщо PHP був зібраний за допомогою цього
модуля або в тому випадку, якщо даний модуль був динамічно завантажений
під час виконання.

| Константа Значення | Опис |
|-----------------------------------------|------- ---------------------------|---------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- -----------------------------------------------|
| **`SOAP_1_1`** (int) | 1 | Визначає використання SOAP 1.1 при передачі як параметр `soap_version` методу [SoapServer::\_\_construct()](soapserver.construct.md) або [SoapClient::\_\_construct()](soapclient.construct.md) . |
| **`SOAP_1_2`** (int) | 2 | Визначає використання SOAP 1.2 при передачі в якості параметра `soap_version` методу [SoapServer::\_\_construct()](soapserver.construct.md) або [SoapClient::\_\_construct()](soapclient.construct.md) . |
| **`SOAP_PERSISTENCE_SESSION`** (int) | 1 | |
| **`SOAP_PERSISTENCE_REQUEST`** (int) | 2 | |
| **`SOAP_FUNCTIONS_ALL`** (int) | 999 | |
| **`SOAP_ENCODED`** (int) | 1 | Визначає використання кодування SOAP при передачі як параметр use методу [SoapClient::\_\_construct()](soapclient.construct.md). |
| **`SOAP_LITERAL`** (int) | 2 | Визначає використання специфічного для сервісу кодування при передачі як параметра `use` методу [SoapClient::\_\_construct()](soapclient.construct.md). |
| **`SOAP_RPC`** (int) | 1 | Визначає використання прив'язки в стилі RPC при передачі як параметр "style" методу [SoapClient::\_\_construct()](soapclient.construct.md). |
| **`SOAP_DOCUMENT`** (int) | 2 | Визначає використання прив'язки до документа під час передачі як параметр `style` методу [SoapClient::\_\_construct()](soapclient.construct.md). |
| **`SOAP_ACTOR_NEXT`** (int) | 1 | |
| **`SOAP_ACTOR_NONE`** (int) | 2 | |
| **`SOAP_ACTOR_UNLIMATERECEIVER`** (int) | 3 | |
| **`SOAP_COMPRESSION_ACCEPT`** (int) | 32 | Визначає використання заголовка "Accept-Encoding" при передачі [параметра `compression`](soapclient.construct.md#soapclient.construct.options.compression) методу [SoapClient::\_\_construct()](soapclient.construct.md) . |
| **`SOAP_COMPRESSION_GZIP`** (int) | 0 | Визначає використання стиснення gzip під час передачі [параметра `compression`](soapclient.construct.md#soapclient.construct.options.compression) методом [SoapClient::\_\_construct()](soapclient.construct.md). |
| **`SOAP_COMPRESSION_DEFLATE`** (int) | 16 | Визначає використання стиснення deflate при передачі [параметра `compression`](soapclient.construct.md#soapclient.construct.options.compression) методом [SoapClient::\_\_construct()](soapclient.construct.md). |
| **`SOAP_AUTHENTICATION_BASIC`** (int) | 0 | Визначає використання базової аутентифікації HTTP під час передачі параметра `authentication` методу [SoapClient::\_\_construct()](soapclient.construct.md). |
| **`SOAP_AUTHENTICATION_DIGEST`** (int) | 1 | Визначає використання аутентифікації HTTP Digest Authentication під час передачі параметра `authentication` методу [SoapClient::\_\_construct()](soapclient.construct.md). |
| **`SOAP_SSL_METHOD_TLS`** (int) | 0 | Використовується з застарілим методом [SoapClient::\_\_construct()](soapclient.construct.md). |
| **`SOAP_SSL_METHOD_SSLv2`** (int) | 1 | Використовується з застарілим методом [SoapClient::\_\_construct()](soapclient.construct.md). |
| **`SOAP_SSL_METHOD_SSLv3`** (int) | 2 | Використовується з застарілим методом [SoapClient::\_\_construct()](soapclient.construct.md). |
| **`SOAP_SSL_METHOD_SSLv23`** (int) | 3 | Використовується з застарілим методом [SoapClient::\_\_construct()](soapclient.construct.md). |
| **`UNKNOWN_TYPE`** (int) | 999998 | |
| **`XSD_STRING`** (int) | 101 | |
| **`XSD_BOOLEAN`** (int) | 102 | |
| **`XSD_DECIMAL`** (int) | 103 | |
| **`XSD_FLOAT`** (int) | 104 | |
| **`XSD_DOUBLE`** (int) | 105 | |
| **`XSD_DURATION`** (int) | 106 | |
| **`XSD_DATETIME`** (int) | 107 | |
| **`XSD_TIME`** (int) | 108 | |
| **`XSD_DATE`** (int) | 109 | |
| **`XSD_GYEARMONTH`** (int) | 110 | |
| **`XSD_GYEAR`** (int) | 111 | |
| **`XSD_GMONTHDAY`** (int) | 112 | |
| **`XSD_GDAY`** (int) | 113 | |
| **`XSD_GMONTH`** (int) | 114 | |
| **`XSD_HEXBINARY`** (int) | 115 | |
| **`XSD_BASE64BINARY`** (int) | 116 | |
| **`XSD_ANYURI`** (int) | 117 | |
| **`XSD_QNAME`** (int) | 118 | |
| **`XSD_NOTATION`** (int) | 119 | |
| **`XSD_NORMALIZEDSTRING`** (int) | 120 | |
| **`XSD_TOKEN`** (int) | 121 | |
| **`XSD_LANGUAGE`** (int) | 122 | |
| **`XSD_NMTOKEN`** (int) | 123 | |
| **`XSD_NAME`** (int) | 124 | |
| **`XSD_NCNAME`** (int) | 125 | |
| **`XSD_ID`** (int) | 126 | |
| **`XSD_IDREF`** (int) | 127 | |
| **`XSD_IDREFS`** (int) | 128 | |
| **`XSD_ENTITY`** (int) | 129 | |
| **`XSD_ENTITIES`** (int) | 130 | |
| **`XSD_INTEGER`** (int) | 131 | |
| **`XSD_NONPOSITIVEINTEGER`** (int) | 132 | |
| **`XSD_NEGATIVEINTEGER`** (int) | 133 | |
| **`XSD_LONG`** (int) | 134 | |
| **`XSD_INT`** (int) | 135 | |
| **`XSD_SHORT`** (int) | 136 | |
| **`XSD_BYTE`** (int) | 137 | |
| **`XSD_NONNEGATIVEINTEGER`** (int) | 138 | |
| **`XSD_UNSIGNEDLONG`** (int) | 139 | |
| **`XSD_UNSIGNEDINT`** (int) | 140 | |
| **`XSD_UNSIGNEDSHORT`** (int) | 141 | |
| **`XSD_UNSIGNEDBYTE`** (int) | 142 | |
| **`XSD_POSITIVEINTEGER`** (int) | 143 | |
| **`XSD_NMTOKENS`** (int) | 144 | |
| **`XSD_ANYTYPE`** (int) | 145 | |
| **`XSD_ANYXML`** (int) | 147 | |
| **`APACHE_MAP`** (int) | 200 | |
| **`SOAP_ENC_OBJECT`** (int) | 301 | |
| **`SOAP_ENC_ARRAY`** (int) | 300 | |
| **`XSD_1999_TIMEINSTANT`** (int) | 401 | |
| **`XSD_NAMESPACE`** (int) | http://www.w3.org/2001/XMLSchema | |
| **`XSD_1999_NAMESPACE`** (int) | http://www.w3.org/1999/XMLSchema | |
| **`SOAP_SINGLE_ELEMENT_ARRAYS`** (int) | 1 | Використовується з [параметром `features`](soapclient.construct.md#soapclient.construct.options.features) методу [SoapClient::\_\_construct()](soapclient.construct.md). |
| **`SOAP_WAIT_ONE_WAY_CALLS`** (int) | 2 | Використовується з [параметром `features`](soapclient.construct.md#soapclient.construct.options.features) методу [SoapClient::\_\_construct()](soapclient.construct.md). |
| **`SOAP_USE_XSI_ARRAY_TYPE`** (int) | 4 | Використовується з [параметром `features`](soapclient.construct.md#soapclient.construct.options.features) методу [SoapClient::\_\_construct()](soapclient.construct.md). |
| **`WSDL_CACHE_NONE`** (int) | 0 | Відключає кеш WSDL при використанні з параметром [soap.wsdl_cache](soap.configuration.md#ini.soap.wsdl-cache) або параметром `wsdl_cache` методів [SoapClient::\_\_construct()](soapclient.construct.md ) та [SoapServer::\_\_construct()](soapserver.construct.md). |
| **`WSDL_CACHE_DISK`** (int) | 1 | Визначає використання кеша WSDL на диску лише при використанні з параметром [soap.wsdl_cache](soap.configuration.md#ini.soap.wsdl-cache) або параметром `wsdl_cache` методів [SoapClient::\_\_construct()](soapclient .construct.md) і [SoapServer::\_\_construct()](soapserver.construct.md). |
| **`WSDL_CACHE_MEMORY`** (int) | 2 | Визначає використання кеша WSDL у пам'яті лише при використанні з параметром [soap.wsdl_cache](soap.configuration.md#ini.soap.wsdl-cache) або параметром `wsdl_cache` методів [SoapClient::\_\_construct()](soapclient .construct.md) і [SoapServer::\_\_construct()](soapserver.construct.md). |
| **`WSDL_CACHE_BOTH`** (int) | 3 | Визначає використання кеша WSDL як на диску, так і в пам'яті лише при використанні з параметром [soap.wsdl_cache](soap.configuration.md#ini.soap.wsdl-cache) або параметром `wsdl_cache` методів [SoapClient::\_\ _construct()](soapclient.construct.md) та [SoapServer::\_\_construct()](soapserver.construct.md). |

**Константи SOAP**
