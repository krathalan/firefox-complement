/*  Firefox user.js by krathalan
 *  Updated June 27, 2020
 *  License: GPLv3
 *  Copyright (c) 2018-2020 krathalan
 *  Homepage: https://git.sr.ht/~krathalan/firefox-complement
 *
 *  This user.js file contains personal or performance preferences and some
 *  common overrides for Ghack's user.js. Append this file to the end of
 *  Ghack's: https://github.com/ghacksuserjs/ghacks-user.js/wiki/1.1-Overview
*/

// -----------------------------------
// ------------ Annoyances -----------
// -----------------------------------

// Disable recommended extensions in about:addons
// user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);

// Disable "What's new" popup every time Firefox updates to a new version
// user_pref("browser.messaging-system.whatsNewPanel.enabled", false);

// Stop Firefox from warning you when closing multiple tabs
// user_pref("browser.tabs.warnOnClose", false);

// Make single clicking the URL bar select all the text
// This is set to false by default on Linux
// user_pref("browser.urlbar.clickSelectsAll", true);

// Block new permission requests
// user_pref("permissions.default.camera", 2);
// user_pref("permissions.default.desktop-notification", 2);
// user_pref("permissions.default.geo", 2);
// user_pref("permissions.default.microphone", 2);

// -----------------------------------
// - Common Ghacks user.js overrides -
// -----------------------------------

// Restore animations
// user_pref("ui.prefersReducedMotion", 0);

// Disable Pocket
// user_pref("extensions.pocket.enabled", false);

// Re-enable regular search behavior
// user_pref("keyword.enabled", true);

// Re-enable disk cache
// user_pref("browser.cache.disk.enable", true);

// Disable EME (Digital Restrictions Management)
// user_pref("media.gmp-provider.enabled", false);

// Stop logins and history from being cleared on shutdown
// user_pref("privacy.clearOnShutdown.cookies", false);
// user_pref("privacy.clearOnShutdown.history", false); // Browsing & Download History
// user_pref("privacy.clearOnShutdown.sessions", false); // Active Logins

// Do NOT dynamically resize the "inner window"
// user_pref("privacy.resistFingerprinting.letterboxing", false); // [HIDDEN PREF]

// -----------------------------------
// ----- Performance preferences -----
// -----------------------------------

// Force hardware acceleration for increased performance
// user_pref("layers.acceleration.force-enabled", true);

// Change maximum number of web content processes to 8 (default 4). Increasing
// this is from 4 will not always improve performance. Higher values require
// more RAM but offer more stability and responsiveness than lower values when
// a high number of tabs are open. Set to -1 to remove process limit and create
// a new process for each tab instead of balancing tabs across the process
// count.
// user_pref("dom.ipc.processCount", 8);

// -----------------------------------
// ------- Personal preferences ------
// -----------------------------------

// Make Firefox load userChrome.css/userContent.css
// https://www.ghacks.net/2019/05/24/firefox-69-userchrome-css-and-usercontent-css-disabled-by-default/
// user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);

// Make Ctrl+Tab cycle through tabs NOT in recently used order, but instead
// from left to right
// user_pref("browser.ctrlTab.recentlyUsedOrder", false);

// Draw tabs in the title bar on Linux
// user_pref("browser.tabs.drawInTitlebar", true);

// Set default fonts. Don't leave these blank if uncommented
// IBM Plex is my FOSS font of choice.
// user_pref("font.name.monospace.x-western", "IBM Plex Mono");
// user_pref("font.name.sans-serif.x-western", "IBM Plex Sans");
// user_pref("font.name.serif.x-western", "IBM Plex Sans");

// Disable full screen video fade -- making a video full screen happens
// immediately, like Google Chrome
// user_pref("full-screen-api.transition-duration.enter", "0 0");
// user_pref("full-screen-api.transition-duration.leave", "0 0");
// user_pref("full-screen-api.warning.timeout", 0);

// Make Firefox scrolling feel like Microsoft Edge
// user_pref("general.smoothScroll.currentVelocityWeighting", "0.1");
// user_pref("general.smoothScroll.mouseWheel.durationMaxMS", 250);
// user_pref("general.smoothScroll.stopDecelerationWeighting", "0.7");
// Might need to change this value depending on your mouse/trackpad
// user_pref("mousewheel.min_line_scroll_amount", 40);

// Make Firefox scrolling feel like Google Chrome
// user_pref("general.smoothScroll.mouseWheel.durationMaxMS", 200);
// user_pref("general.smoothScroll.stopDecelerationWeighting", "0.82");

// Disable about:config warning
// user_pref("browser.aboutConfig.showWarning", false);
// user_pref("general.warnOnAboutConfig", false);

// Set global zoom -- also zooms interface elements. May be useful on some DPIs
// Default value is 1 (100%). If you want global zoom to be 90%, set to 0.9.
// If you want global zoom to be 130%, set to 1.3, etc. Convert % to decimal.
// user_pref("layout.css.devPixelsPerPx", "1.0");
