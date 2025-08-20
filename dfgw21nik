function FindProxyForURL(url, host) {
if (

shExpMatch(url, "*cloudflare.com*") ||

shExpMatch(url, "*chatgpt.com*") ||
shExpMatch(url, "*openai.com*") ||

shExpMatch(url, "*youtube.com*") ||
shExpMatch(url, "*ytimg.com*") ||
//shExpMatch(url, "*youtubei.googleapis.com*") ||
//shExpMatch(url, "*jnn-pa.googleapis.com*") ||
shExpMatch(url, "*youtu.be*") ||
shExpMatch(url, "*googlevideo.com*") ||
//shExpMatch(url, "*nhacmp3youtube.com*") ||
//shExpMatch(url, "*ytimg.l.google.com*") ||
//shExpMatch(url, "*googleusercontent.com*") ||
//shExpMatch(url, "*gstatic.com*") ||
shExpMatch(url, "*ggpht.com*")

)
{return "PROXY 127.0.0.1:2080";}

if (
    isInNet(host, "185.77.231.177", "255.255.255.255")
)
{return "PROXY 127.0.0.1:2080";}

return "DIRECT";
}
