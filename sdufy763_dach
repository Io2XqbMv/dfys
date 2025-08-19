function FindProxyForURL(url, host) {
if (

shExpMatch(url, "*cloudflare.com*") ||
shExpMatch(url, "*play.google.com*") ||
shExpMatch(url, "*chatgpt.com*") ||
shExpMatch(url, "*openai.com*") ||

shExpMatch(url, "*nnmclub.to*") ||
shExpMatch(url, "*nnmstatic.win*") ||
shExpMatch(url, "*rutor.info*") ||
shExpMatch(url, "*rutracker.org*") ||
shExpMatch(url, "*rutracker.cc*") ||

shExpMatch(url, "*youtube.com*") ||
shExpMatch(url, "*googlevideo.com*") ||
shExpMatch(url, "*ggpht.com*")
)
{return "PROXY 127.0.0.1:2080";}

return "DIRECT";
}
