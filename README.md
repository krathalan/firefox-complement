# firefox-complement
Files that make Firefox nicer. Any addons mentioned are free software.

## Rulesets
Rulesets are included for [Request Control](https://addons.mozilla.org/en-US/firefox/addon/requestcontrol/) and [uMatrix](https://addons.mozilla.org/en-US/firefox/addon/umatrix/). 

## Filter Lists
Additional filter lists for [uBlock Origin](https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/) are recommended below.

### Annoyances
The Annoyances list seeks to remove ads, clutter, popovers, and popunders. The list also seeks to remove dark patterns that interrupt content or keep you on a website, like "content carousels", "most popular articles", "suggested content", and "recommended stories".

Krathalan's Annoyances list: https://gitlab.com/krathalan/firefox-tweaks/raw/master/uBlock_Filters/krathalans-annoyances.txt

### Third party fonts
Fanboy's Anti-thirdparty Fonts list: https://fanboy.co.nz/fanboy-antifonts.txt

The Fanboy list blocks some websites from loading fonts from their own domain, such as on gitlab.com for proper icons. I have created a fork of their anti-thirdparty fonts list that re-allows this functionality. This modified list will still block a majority of web fonts being loaded from CDNs.

Krathalan's Anti-thirdparty Fonts list: https://gitlab.com/krathalan/firefox-tweaks/raw/master/uBlock_Filters/krathalans-anti-third-party-fonts.txt

### Other
Many of these are simply good hosts lists meant to be used with Pihole or similar programs, but work well with uBlock Origin as well.

Anti-ad: https://raw.githubusercontent.com/anudeepND/blacklist/master/adservers.txt

Anti-coin miners: https://raw.githubusercontent.com/anudeepND/blacklist/master/CoinMiner.txt

Anti-Facebook: https://raw.githubusercontent.com/anudeepND/blacklist/master/facebook.txt

Anti-scam/trojans/etc: https://gitlab.com/quidsup/notrack-blocklists/raw/master/notrack-malware.txt

Anti-tracker: https://gitlab.com/quidsup/notrack-blocklists/raw/master/notrack-blocklist.txt

Anti-ad/malware: https://raw.githubusercontent.com/StevenBlack/hosts/master/hosts

Anti-ad/tracking/malware: https://v.firebog.net/hosts/static/w3kbl.txt

## `user.js`
The `user.js` in this repository is quite minimal. It's meant to be used as an appendage to [ghack's user.js](https://github.com/ghacksuserjs/ghacks-user.js). Read it and uncomment what you need.