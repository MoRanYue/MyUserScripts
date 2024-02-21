// ==UserScript==
// @name         BiliTools
// @namespace    moranyue
// @version      0.1
// @description  去除无用组件，去除广告，去除B站专栏复制时自动添加的字符串
// @author       MoRanYue
// @match        https://*.bilibili.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    window.addEventListener('copy', (ev) => {
        ev.stopPropagation();
    }, true);
    console.log('已去除复制限制');

    async function removeNavbarItems() {
        const navbar = document.getElementsByClassName("bili-header")[0]
        if (!navbar) {
            setTimeout(removeNavbarItems, 500)
            return
        }

        const navbarItems = Array.prototype.slice.call(navbar.getElementsByClassName("v-popover-wrap"))
        navbarItems.forEach(el => {
            if (["游戏中心", "会员购", "漫画", "赛事", "下载客户端"].includes(el.querySelector("span").innerText)) {
                el.remove()
            }
        })
        console.log("已去除导航栏组件")
    }
    removeNavbarItems()

    async function removeTips() {
        const clientTip = document.getElementsByClassName("desktop-download-tip")[0]
        if (clientTip) {
            clientTip.remove()
        }

        const popLiveTip = document.getElementsByClassName("pop-live-small-mode")[0]
        if (popLiveTip) {
            popLiveTip.remove()
        }
        const popLiveLink = document.getElementById("right-bottom-banner")
        if (popLiveLink) {
            popLiveLink.remove()
        }
    }
    setInterval(removeTips, 3000)

    async function removeUselessBtns() {
        const rbTools = document.getElementsByClassName("palette-button-wrap")[0]
        if (rbTools) {
            rbTools.remove()
        }

        const aiAssistantTool = document.getElementsByClassName("video-ai-assistant")[0]
        if (aiAssistantTool) {
            aiAssistantTool.remove()
        }

        const videoTool = document.getElementsByClassName("video-tool-more")[0]
        if (videoTool) {
            videoTool.remove()
        }
    }
    setInterval(removeUselessBtns, 3000)

    async function removeAdVideo() {
        const cards = Array.prototype.slice.call(document.getElementsByClassName("bili-video-card"))
        cards.forEach(el => {
            if (el.getElementsByClassName("bili-video-card__info--ad")[0]) {
                el.remove()
            }
        })

        const adCover = document.getElementsByClassName("ad-floor-cover")[0]
        if (adCover) {
            adCover.remove()
        }
        const adBanner = document.getElementById("bannerAd")
        if (adBanner) {
            adBanner.remove()
        }
        const adVideo = document.getElementsByClassName("vcd")[0]
        if (adVideo) {
            adVideo.remove()
        }
    }
    setInterval(removeAdVideo, 3000)

})();
