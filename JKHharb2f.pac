function FindProxyForURL(url, host) {
if (

shExpMatch(url, "*cloudflare.com*") ||

shExpMatch(url, "*nnmclub.to*") ||
shExpMatch(url, "*nnmstatic.win*") ||
shExpMatch(url, "*rutor.info*") ||
shExpMatch(url, "*rutracker.org*") ||
shExpMatch(url, "*rutracker.cc*") ||

shExpMatch(url, "*xxxclub.to*") ||
shExpMatch(url, "*imgxclub.com*") ||
shExpMatch(url, "*pornolab.net*") ||
shExpMatch(url, "*imgtraffic.com*") ||

shExpMatch(url, "*.x.com*") ||
shExpMatch(url, "*/x.com*") ||
shExpMatch(url, "*twimg.com*") ||
shExpMatch(url, "*twitter.com*") ||
shExpMatch(url, "*.t.co*") ||
shExpMatch(url, "*/t.co*") ||

shExpMatch(url, "*instagram.com*") ||
shExpMatch(url, "*cdninstagram.com*") ||

shExpMatch(url, "*youtube.com*") ||
shExpMatch(url, "*ytimg.com*") ||
shExpMatch(url, "*googlevideo.com*") ||
shExpMatch(url, "*ggpht.com*")
)
{return "PROXY 127.0.0.1:2080";}

return "DIRECT";
}
