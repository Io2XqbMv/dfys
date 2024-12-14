function FindProxyForURL(url, host) {

//if (shExpMatch(host, "*nnmclub.to")) {return "PROXY 127.0.0.1:2080";}
//if (shExpMatch(host, "*nnmstatic.win")) {return "PROXY 127.0.0.1:2080";}
if (shExpMatch(host, "*add0n.com")) {return "PROXY 127.0.0.1:2080";}
if (shExpMatch(host, "*pornolab.net")) {return "PROXY 127.0.0.1:2080";}
if (shExpMatch(host, "*xxxclub.to")) {return "PROXY 127.0.0.1:2080";}

if (
    shExpMatch(url,"*nnmclub.to") ||
    shExpMatch(url,"*nnmstatic.win") ||
)
return "PROXY 127.0.0.1:2080";

//if (shExpMatch(host, "*")) {return "PROXY 127.0.0.1:2080";}
//if (shExpMatch(host, "*")) {return "PROXY 127.0.0.1:2080";}

return "DIRECT";
}
