function FindProxyForURL(url, host) {
if (

shExpMatch(url, "*nnmclub.to*") ||
shExpMatch(url, "*nnmstatic.win*") ||
shExpMatch(url, "*rutor.info*") ||
shExpMatch(url, "*rutracker.org*") ||
shExpMatch(url, "*rutracker.cc*") ||
shExpMatch(url, "*btdig.com*") ||

shExpMatch(url, "*instagram.com*") ||
shExpMatch(url, "*cdninstagram.com*")
)
{return "PROXY 127.0.0.1:2080";}

return "DIRECT";
}
