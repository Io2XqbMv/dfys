function FindProxyForURL(url, host) {
if (

shExpMatch(url, "*cloudflare.com*") ||

shExpMatch(url, "*play.google.com*") ||

shExpMatch(url, "*ntc.party*") ||

shExpMatch(url, "*nnmclub.to*") ||
shExpMatch(url, "*nnmstatic.win*") ||
shExpMatch(url, "*rutor.info*") ||
shExpMatch(url, "*rutracker.org*") ||
shExpMatch(url, "*rutracker.cc*") ||
shExpMatch(url, "*btdig.com*") ||

shExpMatch(url, "*xxxclub.to*") ||
shExpMatch(url, "*imgxclub.com*") ||
shExpMatch(url, "*pornolab.net*") ||
shExpMatch(url, "*imgtraffic.com*") ||
shExpMatch(url, "*redgifs.com*") ||
shExpMatch(url, "*torrentsbay.org*") ||

shExpMatch(url, "*.x.com*") ||
shExpMatch(url, "*/x.com*") ||
shExpMatch(url, "*twimg.com*") ||
shExpMatch(url, "*twitter.com*") ||
shExpMatch(url, "*.t.co*") ||
shExpMatch(url, "*/t.co*") ||

shExpMatch(url, "*instagram.com*") ||
shExpMatch(url, "*cdninstagram.com*") ||

shExpMatch(url, "*ggpht.com*") ||

shExpMatch(url, "*anilibria.top*") ||
shExpMatch(url, "*dreamerscast.com*")
)
{return "PROXY 127.0.0.1:2080";}

return "DIRECT";
}
