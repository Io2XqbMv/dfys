function FindProxyForURL(url, host) {
if (
dnsDomainIs(host, "nnmclub.to") ||
dnsDomainIs(host, "nnmstatic.win") ||

dnsDomainIs(host, "xxxclub.to") ||

dnsDomainIs(host, "x.com") ||
dnsDomainIs(host, "twimg.com") ||
dnsDomainIs(host, "twitter.com") ||

dnsDomainIs(host, "instagram.com") ||

dnsDomainIs(host, "youtube.com") ||
dnsDomainIs(host, "ytimg.com") ||
dnsDomainIs(host, "googlevideo.com") ||
dnsDomainIs(host, "ggpht.com")
)
{return "PROXY 127.0.0.1:2080";}

return "DIRECT";
}
