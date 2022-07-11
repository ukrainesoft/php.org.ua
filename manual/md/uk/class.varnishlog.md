- [« VarnishStat::getSnapshot](varnishstat.getsnapshot.md)
- [VarnishLog::\_\_construct »](varnishlog.construct.md)

- [PHP Manual](index.md)
- [Varnish](book.varnish.md)
- Клас VarnishLog

# Клас VarnishLog

(PECL varnish \>u003d 0.6)

## Вступ

## Огляд класів

class **VarnishLog** {

/\* Constants \*/

const int `TAG_Debug` u003d 0;

const int `TAG_Error` u003d 1;

const int `TAG_CLI` u003d 2;

const int `TAG_StatSess` u003d 3;

const int `TAG_ReqEnd` u003d 4;

const int `TAG_SessionOpen` u003d 5;

const int `TAG_SessionClose` u003d 6;

const int `TAG_BackendOpen` u003d 7;

const int `TAG_BackendXID` u003d 8;

const int `TAG_BackendReuse` u003d 9;

const int `TAG_BackendClose` u003d 10;

const int `TAG_HttpGarbage` u003d 11;

const int `TAG_Backend` u003d 12;

const int `TAG_Length` u003d 13;

const int `TAG_FetchError` u003d 14;

const int `TAG_RxRequest` u003d 15;

const int `TAG_RxResponse` u003d 16;

const int `TAG_RxStatus` u003d 17;

const int `TAG_RxURL` u003d 18;

const int `TAG_RxProtocol` u003d 19;

const int `TAG_RxHeader` u003d 20;

const int `TAG_TxRequest` u003d 21;

const int `TAG_TxResponse` u003d 22;

const int `TAG_TxStatus` u003d 23;

const int `TAG_TxURL` u003d 24;

const int `TAG_TxProtocol` u003d 25;

const int `TAG_TxHeader` u003d 26;

const int `TAG_ObjRequest` u003d 27;

const int `TAG_ObjResponse` u003d 28;

const int `TAG_ObjStatus` u003d 29;

const int `TAG_ObjURL` u003d 30;

const int `TAG_ObjProtocol` u003d 31;

const int `TAG_ObjHeader` u003d 32;

const int `TAG_LostHeader` u003d 33;

const int `TAG_TTL` u003d 34;

const int `TAG_Fetch_Body` u003d 35;

const int `TAG_VCL_acl` u003d 36;

const int `TAG_VCL_call` u003d 37;

const int `TAG_VCL_trace` u003d 38;

const int `TAG_VCL_return` u003d 39;

const int `TAG_VCL_error` u003d 40;

const int `TAG_ReqStart` u003d 41;

const int `TAG_Hit` u003d 42;

const int `TAG_HitPass` u003d 43;

const int `TAG_ExpBan` u003d 44;

const int `TAG_ExpKill` u003d 45;

const int `TAG_WorkThread` u003d 46;

const int `TAG_ESI_xmlerror` u003d 47;

const int `TAG_Hash` u003d 48;

const int `TAG_Backend_health` u003d 49;

const int `TAG_VCL_Log` u003d 50;

const int `TAG_Gzip` u003d 51;

/\* Методи \*/

public [\_\_construct](varnishlog.construct.md)(array `$args` u003d ?)

public [getLine](varnishlog.getline.md)(): array

public static [getTagName](varnishlog.gettagname.md)(int `$index`):
string

}

## Зумовлені константи

**`VarnishLog::TAG_Debug`**

**`VarnishLog::TAG_Error`**

**`VarnishLog::TAG_CLI`**

**`VarnishLog::TAG_StatSess`**

**`VarnishLog::TAG_ReqEnd`**

**`VarnishLog::TAG_SessionOpen`**

**`VarnishLog::TAG_SessionClose`**

**`VarnishLog::TAG_BackendOpen`**

**`VarnishLog::TAG_BackendXID`**

**`VarnishLog::TAG_BackendReuse`**

**`VarnishLog::TAG_BackendClose`**

**`VarnishLog::TAG_HttpGarbage`**

**`VarnishLog::TAG_Backend`**

**`VarnishLog::TAG_Length`**

**`VarnishLog::TAG_FetchError`**

**`VarnishLog::TAG_RxRequest`**

**`VarnishLog::TAG_RxResponse`**

**`VarnishLog::TAG_RxStatus`**

**`VarnishLog::TAG_RxURL`**

**`VarnishLog::TAG_RxProtocol`**

**`VarnishLog::TAG_RxHeader`**

**`VarnishLog::TAG_TxRequest`**

**`VarnishLog::TAG_TxResponse`**

**`VarnishLog::TAG_TxStatus`**

**`VarnishLog::TAG_TxURL`**

**`VarnishLog::TAG_TxProtocol`**

**`VarnishLog::TAG_TxHeader`**

**`VarnishLog::TAG_ObjRequest`**

**`VarnishLog::TAG_ObjResponse`**

**`VarnishLog::TAG_ObjStatus`**

**`VarnishLog::TAG_ObjURL`**

**`VarnishLog::TAG_ObjProtocol`**

**`VarnishLog::TAG_ObjHeader`**

**`VarnishLog::TAG_LostHeader`**

**`VarnishLog::TAG_TTL`**

**`VarnishLog::TAG_Fetch_Body`**

**`VarnishLog::TAG_VCL_acl`**

**`VarnishLog::TAG_VCL_call`**

**`VarnishLog::TAG_VCL_trace`**

**`VarnishLog::TAG_VCL_return`**

**`VarnishLog::TAG_VCL_error`**

**`VarnishLog::TAG_ReqStart`**

**`VarnishLog::TAG_Hit`**

**`VarnishLog::TAG_HitPass`**

**`VarnishLog::TAG_ExpBan`**

**`VarnishLog::TAG_ExpKill`**

**`VarnishLog::TAG_WorkThread`**

**`VarnishLog::TAG_ESI_xmlerror`**

**`VarnishLog::TAG_Hash`**

**`VarnishLog::TAG_Backend_health`**

**`VarnishLog::TAG_VCL_Log`**

**`VarnishLog::TAG_Gzip`**

## Зміст

- [VarnishLog::\_\_construct](varnishlog.construct.md) - Конструктор
Varnishlog
- [VarnishLog::getLine](varnishlog.getline.md) — Отримати наступну
рядок журналу
- [VarnishLog::getTagName](varnishlog.gettagname.md) — Отримати
строкове представлення тега журналу за його індексом
