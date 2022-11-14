/*
Theme Name: eManga
Theme URI: http://enduser.id
Author: EndUser
Author URI: http://enduser.id
Version: 1.0
Description: Simple MangaNew
Tags: Light, two-columns, right-sidebar, custom-header, custom-menu, featured-images
*/

:focus {
    outline: none
}

body {
    background: #F1F1F1;
    color: #333;
    margin: 0 auto;
    font-family: "Droid Sans", arial;
    font-size: 13px
}

.black {
    background: #222
}

.black #pusat {
    background: none;
    color: #DDD;
    width: auto
}

.black .recommended {
    display: none
}

.black .genrehome {
    background: #333
}

.black .genrehome a {
    color: #ccc
}

.header {
    padding: 10px 0;
    background: rgba(6, 6, 6, 0.95);
    border-bottom: 1px solid #000;
    display: block;
    overflow: hidden
}

.logos {
    height: 45px;
    float: left;
    margin-right: 10px
}

.logos img {
    max-width: 200px;
    max-height: 45px
}

#pusat {
    margin: 15px auto;
    padding: 15px;
    border-radius: 5px;
    width: 960px;
    background: #FFF;
    position: relative;
    overflow: hidden
}

.pusat728 {
    margin: 0 auto;
    margin-bottom: 15px;
    max-width: 728px;
    overflow: hidden
}

.pusat728 .textwidget {
    margin: 0;
    text-align: center
}

.pusat728 .textwidget img {
    width: 100%;
    height: auto
}

#main {
    position: relative;
    width: 100%;
    margin: 0 auto
}

#content {
    margin: 0 auto;
    overflow: hidden
}

h1 {
    font-size: 36px;
    margin: 0
}

h2 {
    margin: 0
}

img {
    border: none
}

a {
    text-decoration: none;
    color: #5A5A5A
}

a:hover {
    text-decoration: underline
}

.clear {
    clear: both
}

blockquote {
    padding: 5px;
    background: #eef2f9;
    border-left: 3px solid #c0cbea;
    padding-left: 10px;
    font-style: italic
}

.carousel {
    margin: 0;
    height: 200px;
    overflow: hidden;
    margin-bottom: 15px
}

.carousel-cell {
    width: 14%;
    height: 200px;
    margin-right: 10px;
    counter-increment: carousel-cell
}

.carousel-cell img {
    width: 100%;
    height: 200px
}

.carousel-cell:before {
    display: block;
    text-align: center;
    line-height: 200px;
    font-size: 80px;
    color: #fff
}

.ctl {
    position: absolute;
    bottom: 0;
    width: 100%;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 6%, rgba(0, 0, 0, 0.85) 70%);
    text-shadow: rgba(0, 0, 0, 0.8) 1px 1px 0
}

.ctl h3 {
    padding: 8px;
    overflow: hidden;
    line-height: normal;
    color: #FFF;
    font-weight: 400;
    font-size: 12px;
    text-align: center;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin: 0px;
}

.flickity-page-dots {
    display: none
}

.popularmanga {
    overflow: hidden;
    margin-bottom: 10px;
}

.popularmanga h2 {
    font-size: 14px;
    padding: 8px;
    padding-left: 0;
    padding-top: 0;
    margin: 0;
    margin-bottom: 8px;
    border-bottom: 4px solid #ddd;
    color: #333;
    position: relative
}

.popularmanga h2 span {
    border-left: 5px solid #5A5A5A;
    padding-left: 10px
}

.popularmanga ul {
    margin: 0 -4px;
    list-style: none;
    padding: 0;
    overflow: hidden
}

.popularmanga ul li {
    float: left;
    width: 20%;
    margin-bottom: 8px;
    overflow: hidden
}

.popularmanga ul li .bxp {
    position: relative;
    overflow: hidden;
    margin: 0 4px
}

.popularmanga ul li .bxp .img {
    overflow: hidden;
    border: 1px solid #eaeaea;
    height: 160px
}

.popularmanga ul li .bxp img {
    width: 100%;
    height: auto;
    min-height: 160px
}

.lc {
    position: absolute;
    top: 5px;
    padding: 2px 5px;
    font-size: 11px;
    border-radius: 3px;
    background: #d6a418;
    right: 5px
}

.lc a {
    color: #FFF
}

.popularmanga ul li .bxp .ttlx {
    position: absolute;
    bottom: 0;
    width: 100%;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 6%, rgba(0, 0, 0, 0.85) 70%);
    text-shadow: rgba(0, 0, 0, 0.8) 1px 1px 0
}

.popularmanga ul li .bxp h3 {
    color: #f3f0f0;
    font-weight: 400;
    font-size: 13px;
    max-height: 27px;
    padding: 5px 2px;
    text-align: center;
    overflow: hidden;
    margin: 0px;
}

#infoside {
    background: #111;
    border-bottom: 1px solid #000;
    margin: 0 auto;
    color: #FFF;
    font-size: 11px;
    overflow: hidden;
    font-weight: 700;
    line-height: 33px;
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 9999;
    box-shadow: 0 1px 2px #000
}

#infoside .left {
    float: left;
    background: #0B0B0B;
    color: #DDD;
    padding: 0 10px
}

#infoside .right {
    float: right
}

#infoside .right b {
    font-size: 11px;
    background: #49803A;
    color: #FFF;
    padding: 3px;
    margin-top: 6px
}

#infoside .right a {
    color: #FFF
}

.iklan728 {
    float: right;
    margin-top: 8px;
    width: 468px;
    height: 60px;
    background: #151515
}

.iklan728bot {
    margin-top: 15px
}

.ads728 {
    width: 728px;
    margin: 0 auto;
    box-shadow: 0 1px 2px #000;
    margin-bottom: 10px
}

.perapih {
    margin: 0 auto;
    width: 990px
}

.sitename {
    width: 940px;
    height: 200px
}

.description {
    color: #a2a2a2;
    margin: -5px 0 0 5px
}

.search-block {
    position: relative;
    float: right;
    margin-left: 10px;
    margin-top: 7px
}

.search-block .search-center {
    margin: 0 auto;
    overflow: hidden
}

.search-block #s {
    width: 200px;
    border: 1px solid #FFF;
    color: #FFF;
    border-radius: 4px;
    font-family: "Droid Sans", arial;
    background: none;
    font-size: 13px;
    line-height: 30px;
    padding: 0 8px;
    margin: 0
}

#ssearch {
    margin: 0;
    margin-right: -2px;
    font-size: 11px;
    border: 0;
    padding: 5px;
    color: #c4c4c4;
    background: #343434;
    box-shadow: inset 0 2px 3px #2C2C2C
}

.search-submit {
    background: #3F3D3D;
    font-family: "Droid Sans";
    border: 0;
    color: #B5B4B4;
    font-size: 10px;
    text-transform: uppercase;
    font-weight: 700;
    padding: 6px;
    margin: 0;
    cursor: pointer
}

.search-block .tombols {
    background: #ccd4e3;
    color: #002873;
    border: 0;
    font-size: 12px;
    cursor: pointer;
    margin: 0;
    margin-left: -3px;
    padding: 0 7px;
    line-height: 40px;
    font-weight: 700;
    -webkit-font-smoothing: antialiased !important;
    font-family: helvetica;
    text-transform: uppercase
}

.rekomen {
    margin-bottom: 10px;
    padding-right: 5px;
    background: #1A1919;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    -webkit-font-smoothing: antialiased !important
}

.rekomen h2 {
    float: left;
    background: #2A2929;
    color: #DBD6D6;
    font-size: 12px;
    padding: 6px 8px;
    margin-right: 5px
}

.rekomen a {
    line-height: 26px;
    color: #C2C2C2;
    font-family: segoe ui;
    font-weight: 500
}

.seriestitle {
    display: block;
    font-size: 14px;
    font-weight: 700;
    background: #555;
    color: #FFF;
    margin: -5px -9px 5px;
    padding: 7px
}

.infseries {
    overflow: hidden;
    margin: 5px 0
}

.infseries img {
    float: left;
    width: 150px;
    height: 200px;
    padding: 1px;
    border: 1px solid #eaeaea;
    margin-right: 10px
}

.infseries .right {
    overflow: hidden;
    font-size: 13px;
    line-height: 16px;
    color: #222
}

.infseries .right .seriesin {
    margin: 0;
    margin-top: 5px;
    padding-top: 5px;
    border-top: 1px solid #e6e6e6
}

.infseries .right .seriesin p {
    margin: 0
}

.genrehome {
    overflow: hidden;
    margin: 0 auto;
    background: #FFF
}

.glimit {
    overflow: hidden;
    white-space: nowrap
}

.glimit a {
    color: #000;
    padding: 0 15px;
    line-height: 35px
}

.recommended {
    background: #efefef;
    margin: 0 auto;
    margin-bottom: 15px;
    font-size: 11px;
    border-radius: 3px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis
}

.recommended h2 {
    background: #5A5A5A;
    color: #FFF;
    float: left;
    font-size: 11px;
    font-weight: 400;
    padding: 5px;
    display: block;
    margin-right: 5px
}

.recommended a {
    color: #333;
    line-height: 23px
}

#nav {
    overflow: hidden;
    margin: 0 auto;
    padding: 15px 0;
    background: #5A5A5A
}

#nav ul {
    margin: 0;
    padding: 0;
    list-style: none;
    float: left
}

#nav ul li {
    float: left;
    position: relative
}

#nav ul li a {
    float: left;
    position: relative;
    color: #FFF;
    padding: 0 15px;
    font-size: 14px;
    line-height: 47px
}

#nav ul li a:hover {
    text-decoration: none;
    color: #F0F0F0
}

#nav ul ul {
    background: #1A1A1A;
    border: 1px solid #222;
    width: 160px;
    height: auto;
    font-family: "Droid Sans", arial;
    font-size: 11px;
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 9999;
    -webkit-transition: all .15s;
    -moz-transition: all .15s;
    -ms-transition: all .15s;
    -o-transition: all .15s;
    transition: all .15s;
    opacity: 0;
    visibility: hidden
}

#nav ul ul li {
    height: 30px;
    width: 160px;
    float: none
}

#nav ul ul li a {
    padding: 6px 7px;
    display: block;
    width: 146px;
    color: #333;
    line-height: 19px
}

#nav ul ul li.menu-item-object-page a:hover {
    background: #555;
    padding: 6px 7px;
    line-height: 19px;
    color: #FFF;
    float: none
}

#nav ul ul li.menu-item-object-page a {
    color: #CBCBCB
}

#nav ul ul li.current-menu-item a {
    color: #FFF
}

#nav ul ul ul {
    left: 100%;
    top: -2px
}

#nav li:hover > ul {
    opacity: 1;
    visibility: visible
}

#nav .select-div {
    display: none
}

.show-menu {
    display: none;
    color: #FFF;
    line-height: 37px;
    font-size: 16px;
    font-weight: 700;
    text-transform: uppercase;
    text-align: center;
    cursor: pointer
}

input[type=checkbox] {
    display: none;
    -webkit-appearance: none
}

input[type=checkbox]:checked ~ #menu-menu {
    display: block;
    z-index: 9999;
    float: none;
    background: #222;
    position: relative
}

.random {
    float: right;
    margin: 16px 8px
}

.random a {
    color: #E2E2E2;
    text-shadow: 0 1px #0E0E0E;
    padding: 7px 8px;
    font-size: 11px;
    border: 1px solid #666;
    background: #525353;
    border-radius: 3px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4) inset, 0 1px 0 rgba(162, 150, 150, 0.9);
    font-weight: 700
}

.random a:hover {
    text-decoration: none;
    background: #555;
    color: #DFDFDF;
    box-shadow: 0 0 4px #000;
    border: 1px solid #868686
}

#nav .sosialbutton {
    float: right
}

#nav .sosialbutton ul {
    margin: 0;
    padding: 0
}

#nav .sosialbutton ul li {
    line-height: 37px
}

#nav .sosialbutton ul li a {
    font-size: 18px;
    padding: 10px;
    padding-bottom: 9px
}

#genrelist {
    background: #121212;
    border-top: 1px solid #1D1D1D;
    padding: 0 5px;
    width: 980px;
    height: 30px;
    margin: 0 auto
}

.genreset {
    overflow: hidden;
    width: 730px;
    border-right: 1px solid #FFF;
    float: left
}

#genrelist h2 {
    float: left;
    font-size: 11px;
    background: #386494;
    color: #FFF;
    padding: 3px;
    margin-top: 6px
}

#genrelist ul {
    margin: 0;
    padding: 0;
    list-style: none
}

#genrelist ul li {
    float: left;
    margin: 8px 7px
}

#genrelist ul li a {
    color: #E5E5E5
}

.statistik {
    float: right;
    height: 30px;
    width: 258px;
    border-left: 1px solid #C9C9C9;
    overflow: hidden
}

.postsbody {
    float: left;
    width: 645px;
    margin-right: 15px
}

.ongoinglist {
    overflow: hidden
}

.ongoinglist h2 {
    font-size: 13px;
    padding: 0 0 5px;
    margin-bottom: 1px;
    color: #969696;
    border-bottom: 3px double #343434
}

.ongoinglist .onseries {
    overflow: hidden
}

.ongoinglist .onseries .ongoingimg {
    float: left;
    margin: 11px 0 9px 11px
}

.ongoinglist .onseries .ongoingimg img {
    width: 125px;
    height: 185px;
    border: 1px solid #000
}

.ongoinglist .onseries .ongoingimg .title {
    width: 115px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    font-weight: 400;
    font-size: 10px;
    padding: 5px;
    color: #FFF;
    background: #000;
    opacity: .9;
    margin-left: 1px;
    text-align: center;
    position: absolute
}

.allgreen {
    overflow: hidden;
    margin-bottom: 10px
}

.allc {
    margin-top: 5px;
    font-size: 14px
}

.releases {
    margin-bottom: 0;
    position: relative
}

.releases h2 {
    border-bottom: 4px solid #ddd;
    font-size: 14px;
    padding: 8px;
    padding-top: 0;
    padding-left: 0;
    margin-bottom: 8px;
    color: #333;
    position: relative
}

.releases h2 span {
    border-left: 5px solid #5A5A5A;
    padding-left: 10px
}

.efbi {
    position: absolute;
    right: 0;
    width: 100px;
    top: 6px
}

.rss {
    position: absolute;
    right: 10px;
    top: 8px
}

.rss a {
    color: #FFC200
}

.rss a:hover {
    color: #FFF;
    text-decoration: none
}

.postslist {
    overflow: hidden;
    padding: 5px;
    font-family: segoe ui;
    background: #242525;
    border-left: 3px solid #3A3A3A;
    border-right: 3px solid #3A3A3A;
    margin-bottom: 2px
}

.postslist .left {
    overflow: hidden;
    color: #999
}

.postslist .left h2 {
    font-size: 12px;
    font-weight: 400;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #444
}

.postslist .left h2 a {
    color: #B5B5B5
}

.postslist .left h2 a:hover {
    color: #FAFAFA;
    text-decoration: none
}

.postslist .right {
    float: right
}

.postslist .right a {
    color: #555
}

.postslist .right a:hover {
    text-decoration: underline
}

.postarea {
    overflow: hidden;
    border-bottom: 1px solid #454545;
    margin-bottom: 10px;
    padding-bottom: 10px;
}

.headpost {
    overflow: hidden;
    text-align: center;
    padding: 0;
    margin-bottom: 10px
}

.headpost h1 {
    border-bottom: 4px solid #ddd;
    font-size: 14px;
    padding: 8px;
    padding-top: 0;
    padding-left: 0;
    margin-bottom: 8px;
    color: #333;
    position: relative;
    text-align: left
}

.black .headpost h1 {
    border-bottom: 0;
    text-align: center;
    font-size: 20px;
    margin-bottom: 0;
    padding-bottom: 0;
    color: #FFF
}

.headpost .right {
    float: right
}

#readerarea {
    text-align: center
}

#readerarea img {
    border: none;
    display: block;
    margin: 0 auto;
    max-width: 100%;
}

.detail {
    color: #8D8D8D;
    padding: 5px 0 0;
    font-size: 11px;
    border-top: 4px solid #343434;
    overflow: hidden;
    margin-bottom: 6px
}

.detail .left {
    float: left;
    line-height: 14px
}

.detail .left a {
    color: #8D8D8D
}

.detail .left a:hover {
    text-decoration: underline
}

.detail .right {
    float: right;
    margin-top: 3px
}

.detail2 {
    width: auto;
    font-size: 11px;
    line-height: 18px;
    padding: 3px 5px;
    overflow: hidden;
    border-radius: 0 0 4px 4px;
    margin: 0 5px;
    box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.2), inset 0 -1px 2px rgba(0, 0, 0, 0.2);
    border-bottom: 1px solid #aaa
}

.detail2 .kiri {
    float: left;
    width: 380px;
    color: #555
}

.detail2 .kiri a {
    color: #555
}

.detail2 .kanan {
    float: right;
    background: #39A83D;
    font-weight: 700;
    border-radius: 3px;
    height: 18px;
    margin-top: 1px;
    color: #FFF;
    padding: 0 4px
}

.imgpost {
    text-align: center;
    margin-top: 10px;
    margin-bottom: 10px
}

.imgpost img {
    max-width: 550px;
    height: auto;
    box-shadow: 0 0 10px #888
}

.bodypost {
    line-height: 18px
}

.bodypost a:hover {
    text-decoration: underline
}

.bodypost p {
    margin: 10px 0
}

.download {
    font-size: 11px;
    font-weight: 700;
    float: right;
    padding: 3px 5px;
    text-transform: uppercase;
    background: #171717
}

.download ul {
    margin: 0;
    padding: 0;
    list-style: none
}

.download ul li {
    background: #E4E4E4;
    margin-bottom: 2px;
    line-height: 26px;
    padding: 0 5px
}

.download ul li strong {
    background: #477BB3;
    border-right: 2px solid #F5F5F5;
    width: 65px;
    display: block;
    float: left;
    margin-left: -5px;
    margin-right: 5px;
    color: #FFF;
    padding: 0 5px;
    text-align: left
}

.download ul li a {
    color: #857979
}

.download ul li a:hover {
    text-decoration: underline
}

.download .credit {
    width: auto;
    margin-bottom: 0;
    line-height: 26px;
    background: #E4E4E4;
    text-align: right;
    padding: 0 5px
}

.pagi {
    text-align: center;
    font-size: 12px;
    font-weight: 700;
    margin-bottom: 10px
}

.pagi a {
    background: #1F2F40;
    border-radius: 2px;
    color: #999;
    text-transform: uppercase;
    margin: 0 1px;
    display: inline-block
}

.pagi a:hover {
    background: #333435;
    color: #FFF
}

.pagi span {
    padding: 2px 6px;
    margin: 0 1px;
    display: inline-block
}

.ltsc {
    overflow: hidden
}

span.lcs {
    padding-top: 4px
}

.ltsc .mng {
    overflow: hidden;
    padding-bottom: 8px;
    border-bottom: 1px solid #f1f1f1;
    margin-bottom: 8px
}

.ltsc .mng .thumb {
    float: left;
    height: 40px;
    overflow: hidden;
    border: 1px solid #DDD;
    margin-right: 8px
}

.ltsc .mng .thumb img {
    width: 40px;
    height: auto
}

.ltsc .mng .title {
    overflow: hidden;
    line-height: 21px
}

.ltsc .mng .title a {
    font-weight: 700;
    display: block;
    max-width: 500px;
    overflow: hidden;
    float: left;
    text-overflow: ellipsis;
    white-space: nowrap
}

.ltsc .mng .title span.post-date {
    float: right;
    color: #555
}

.ltsc .mng .title span.hot {
    margin-left: 5px;
    color: #FFF;
    text-transform: uppercase;
    font-weight: 700;
    padding: 1px 2px;
    font-size: 10px;
    background: #de3b3b
}

.ltsc .mng ul {
    padding-top: 4px !important;
    padding-left: 7px !important;
    overflow: hidden
}

.ltsc .mng ul a {
    color: #333
}

.lcp_catlist li a {
    color: #4D4D4D
}

.disqusmen {
    margin: 10px 0
}

.disqusmen span {
    display: block;
    font-weight: 700;
    padding: 3px 0;
    font-size: 14px;
    border-bottom: 3px solid #2F2D2D;
    margin-bottom: 5px
}

.serisinf {
    overflow: hidden
}

.serisleft {
    float: left;
    width: 325px;
    padding-right: 7px;
    border-right: 1px solid #DDD
}

.titleseries {
    font-weight: 700;
    padding: 3px 0;
    font-size: 13px;
    border-bottom: 3px solid #514F4F;
    margin-bottom: 5px
}

.seriesinf {
    overflow: hidden
}

.seriesinf img {
    float: left;
    width: 110px;
    margin-right: 5px;
    height: 155px
}

.rightinf {
    overflow: hidden
}

.rightinf .inseries {
    margin-bottom: 7px
}

.rightinf .inseries p {
    margin: 0;
    overflow: hidden;
    height: 58px
}

.rightinf span {
    display: block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis
}

.related {
    margin: 0;
    float: right;
    overflow: hidden;
    width: 300px
}

.related span {
    display: block;
    font-weight: 700;
    padding: 3px 0;
    font-size: 13px;
    border-bottom: 3px solid #514F4F;
    margin-bottom: 5px
}

.black #respond, .black #respond h3 {
    color: #DDD;
}

.projectlist {
    overflow: hidden
}

.projectlist li {
    list-style: none;
    background: url(images/folder.png) no-repeat;
    background-position: 1px;
    padding-left: 18px
}

.projectlist li a {
    color: #333;
    font-weight: 700
}

.tagpost {
    font-size: 11px;
    border-top: 1px dotted #DDD;
    border-bottom: 1px dotted #DDD;
    line-height: 25px;
    margin: 15px 0 5px
}

.allgreen ul {
    margin: 0;
    padding: 0
}

.allgreen li {
    list-style: none;
    margin-bottom: 5px
}

.anipost {
    border-radius: 5px;
    background: #1b1c1d;
    font-size: 13px;
    overflow: hidden;
    padding: 6px 10px
}

.anipost .title {
    font-weight: 400;
    font-size: 13px;
    line-height: 16px;
    width: 415px;
    overflow: hidden;
    white-space: nowrap;
    color: #BEBEBE;
    text-overflow: ellipsis;
    float: left
}

.anipost .thumb {
    border-radius: 5px;
    position: relative;
    overflow: hidden;
    width: 40px;
    height: 40px;
    border: 1px solid #151414;
    float: left;
    margin-right: 7px
}

.anipost .thumb img {
    width: 100%;
    height: auto
}

.anipost .left h2 {
    font-size: 13px;
    margin-top: 3px;
    margin-bottom: 3px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis
}

.anipost .left h2 a {
    color: #7593A9
}

.genrelst li {
    width: 50%;
    float: left;
    list-style: none;
    margin-bottom: 5px
}

.genrelst .anipost {
    font-size: 13px;
    background: none;
    overflow: hidden;
    border-radius: 0;
    padding: 0;
    padding-right: 10px;
    margin-bottom: 10px
}

.genrelst .anipost .thumb {
    border-radius: 5px;
    position: relative;
    overflow: hidden;
    width: 90px;
    height: 120px;
    border: 1px solid #e4e3e3;
    float: left;
    margin-right: 7px
}

.genrelst .anipost .thumb img {
    width: 100%;
    height: auto
}

.genrelst .anipost .thumb span.hot {
    position: absolute;
    top: 6px;
    left: -15px;
    line-height: normal;
    color: #FFF;
    text-transform: uppercase;
    font-weight: 700;
    padding: 2px 18px;
    font-size: 10px;
    background: #de3b3b;
    -ms-transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg)
}

.genrelst .anipost .left {
    overflow: hidden
}

.genrelst .anipost .left .info {
    display: block
}

.genrelst .anipost .left .info span {
    display: block;
    line-height: 16px;
    margin-bottom: 5px
}

.genrelst .anipost .left .info .g a {
    color: #333
}

.waktu {
    float: right
}

.sosialshare {
    position: relative;
    display: block;
    margin-top: 5px;
    height: 22px
}

.sosialshare .right {
    float: right
}

.sosialshare a {
    color: #FFF;
    padding: 5px 8px;
    font-size: 11px;
    margin-right: 4px;
    font-family: sans-serif;
    display: inline-block;
    float: left
}

.sosialshare .fbshare {
    background: #3b5998
}

.sosialshare .twtshare {
    background: #00aced
}

.sosialshare .googleshare {
    background: #da4e3b
}

.ui-tabs {
    border: 0;
    padding: 0;
    margin: 0
}

.ui-widget {
    font-family: "Droid Sans", arial;
    font-size: 1.1em
}

.ui-widget-content {
    background: none
}

.ui-tabs .ui-tabs-panel {
    padding: 0
}

.ui-tabs .ui-tabs-nav {
    padding: 0;
    line-height: normal
}

.ui-widget-header {
    background: none;
    border: 0
}

.ui-tabs .ui-tabs-nav li.ui-tabs-active {
    margin: 0;
    padding: 0;
    border: 0;
    background: none
}

.ui-tabs .ui-tabs-nav li {
    background: none;
    border: 0;
    padding: 0;
    margin: 0
}

.ui-tabs .ui-tabs-nav .ui-tabs-anchor {
    padding: 0 1px;
    float: left
}

.infovid {
    margin-top: 5px;
    margin-bottom: 8px;
    font-size: 12px;
    font-family: "Droid Sans", arial;
    line-height: 16px;
    padding: 10px;
    border: 1px solid #282525;
    background: #111;
    color: #999
}

.infovid .left {
    float: left;
    width: 280px
}

.infovid .left span {
    display: block
}

.infovid .left span b {
    display: block;
    width: 100px;
    float: left
}

.infovid .right {
    float: right;
    position: relative
}

.infovid .right span.download {
    font-size: 12px;
    background: none;
    padding: 0;
    margin: 0;
    display: block;
    margin-top: 14px;
    border: 0
}

.infovid .right span.download a {
    background: #303030;
    color: #FFF;
    padding: 7px 10px
}

.infovid .right span.download a:hover {
    background: #414040
}

#embed_holder {
    position: relative;
    width: 650px;
    height: 370px;
    background: #000;
    background-position: 50% 150px
}

.player-embed {
    position: absolute;
    top: 0;
    left: 0;
    width: 650px;
    height: 370px
}

.lightszone {
    overflow: hidden;
    margin-bottom: 3px
}

#lightsoff {
    float: right;
    background: #ECECEC;
    font-weight: 700;
    border-radius: 3px;
    padding: 3px 5px
}

.stafflist {
    overflow: hidden;
    width: 300px;
    border: 1px solid #353434;
    margin: 6px;
    height: 96px;
    float: left
}

.stafflist img {
    width: 100px;
    float: left;
    margin-right: 10px;
    border-right: 1px solid #DDD;
    height: auto
}

.stafflist .onleft {
    overflow: hidden
}

.stafflist .onleft h2 {
    font-size: 14px;
    margin-top: 10px;
    color: #ADADAD
}

.stafflist .onleft span {
    margin-top: 5px;
    display: block;
    font-family: sans-serif;
    font-weight: 700;
    color: #777;
    font-style: italic
}

.animelistest {
    border-bottom: 1px solid #2A2929;
    padding: 10px;
    overflow: hidden;
    position: relative
}

.animelistest:nth-child(even) {
    background: #131313
}

.animelistest img {
    height: 165px;
    width: 125px;
    margin-right: 10px;
    float: left
}

.animelistest .lef {
    overflow: hidden
}

.animelistest .lef h2 {
    font-size: 14px;
    margin-bottom: 5px
}

.animelistest .lef .sinopsis {
    margin-bottom: 5px;
    text-align: justify
}

.animelistest .lef .sinopsis p {
    margin: 0;
    line-height: 15px
}

.animelistest .lef .genlist {
    font-weight: 700;
    width: 380px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap
}

.animelistest .lef .Epilist {
    position: absolute;
    right: 10px;
    top: 15px;
    width: 61px;
    background: #1D1C1C
}

.animelistest .lef .Epilist .titler {
    width: 55px;
    background: #373838;
    color: #DDD;
    font-weight: 700;
    font-size: 11px;
    display: block;
    text-align: center;
    padding: 3px
}

.animelistest .lef .Epilist .totepiso {
    width: 61px;
    font-weight: 700;
    color: #C2C2C2;
    font-size: 26px;
    display: block;
    text-align: center;
    line-height: 32px
}

.animelistest .lef .score {
    position: absolute;
    top: 75px;
    right: 10px;
    width: 61px;
    background: #1D1C1C
}

.animelistest .lef .score .titscore {
    background: #373838;
    font-family: arial;
    color: #C2C2C2;
    font-weight: 700;
    font-size: 11px;
    display: block;
    text-align: center;
    padding: 3px
}

.animelistest .lef .score .scorez {
    width: 61px;
    font-weight: 700;
    color: #C2C2C2;
    font-size: 16px;
    letter-spacing: 0;
    display: block;
    text-align: center;
    line-height: 22px
}

.animeinfo {
    overflow: hidden
}

.lm {
    float: left;
    width: 25%
}

.rm {
    padding-left: 10px;
    border-left: 1px solid #eee;
    overflow: hidden
}

.animeinfo h1 {
    font-size: 15px;
    padding: 5px 0;
    color: #333;
    border-bottom: 1px solid #eee;
    margin: 6px 0;
    margin-top: 0
}

.animeinfo .infos {
    background: #1B1B1B;
    color: #999;
    font-size: 11px;
    padding: 7px
}

.animeinfo .imgdesc {
    overflow: hidden;
    margin-right: 10px
}

.animeinfo .imgdesc img {
    width: 100%;
    border-radius: 3px;
    height: auto;
    margin-right: 10px
}

.animeinfo .imgdesc .desc {
    color: #999
}

.animeinfo .imgdesc .desc p {
    margin: 0
}

.listinfo {
    padding: 10px 0;
    overflow: hidden
}

.listinfo ul {
    margin: 0;
    padding: 0;
    list-style: none
}

.listinfo ul li {
    border-top: 0;
    line-height: 21px;
    margin-bottom: 5px;
    overflow: hidden
}

.ltsch span {
    display: block;
    overflow: hidden
}

.ltsch span a {
    display: block;
    float: left;
    background: #2f842e;
    color: #FFF;
    border-radius: 3px;
    padding: 0 5px;
    margin-right: 5px
}

.desc {
    display: block;
    margin: 10px 0;
    text-align: justify;
    line-height: 18px
}

.desc p {
    margin: 8px 0
}

.cl {
    margin: 10px 0
}

.batch {
    margin: 15px 0
}

.batch h3 {
    margin: 0;
    font-size: 13px;
    padding: 10px;
    background: #DDD
}

.batch ul {
    padding: 0;
    list-style: none;
    margin: 0
}

.batch ul li {
    overflow: hidden;
    padding: 7px 10px;
    border-bottom: 1px solid #eee
}

.offzone {
    padding: 10px;
    background: #DDD;
    overflow: hidden
}

span.leftoff {
    float: left
}

span.rightoff {
    float: right
}

.cl ul {
    list-style: none;
    overflow: hidden;
    padding: 0;
    margin: 0
}

.cl ul li {
    overflow: hidden;
    padding: 7px 10px;
    border-bottom: 1px solid #eee
}

.infodetail {
    overflow: hidden;
    margin-bottom: 5px
}

.infodetail h2 {
    font-size: 14px;
    font-weight: 700;
    font-family: helvetica;
    border-bottom: 4px solid #343434;
    margin: 0;
    overflow: hidden;
    color: #969696;
    -webkit-font-smoothing: antialiased !important;
    line-height: 22px;
    margin-bottom: 10px
}

.infodetail .top {
    overflow: hidden;
    margin-bottom: 6px
}

.infodetail .top img {
    float: left;
    margin-right: 6px;
    width: 120px;
    height: 180px;
    padding: 2px;
    border: 1px solid #333
}

.infodetail .bottom {
    border-top: 1px solid #333
}

.infodetail .bottom span {
    display: block;
    line-height: 25px;
    padding: 0 5px;
    border: 1px solid #333;
    border-top: 0
}

.infodetail .bottom span:nth-child(odd) {
    background: #1A1A1A
}

.infodetail .bottom span b {
    display: block;
    float: left;
    width: 90px
}

.pagination {
    overflow: hidden;
    line-height: normal;
    text-align: center
}

.pagination span.page-numbers.current {
    display: inline-block;
    background: #5A5A5A;
    padding: 10px;
    line-height: 5px;
    margin: 0 1px;
    border-radius: 5px;
    color: #FFF
}

.pagination a {
    display: inline-block;
    background: #f1f1f1;
    padding: 10px;
    line-height: 5px;
    margin: 0 1px;
    border-radius: 5px;
    color: #000
}

.wp-pagenavi {
    clear: both;
    float: right;
    background: #f5f5f5;
    padding: 2px 4px
}

.wp-pagenavi a, .wp-pagenavi span {
    text-decoration: none;
    border: 1px solid #CCC;
    background: #FFF;
    padding: 4px 7px;
    border-radius: 3px;
    color: #777;
    margin: 2px
}

.wp-pagenavi span.current {
    font-weight: 700
}

.wp-pagenavi a:hover, .wp-pagenavi span.current {
    border-color: #FFF;
    background: #5C91E0;
    color: #FFF
}

.genres {
    margin: 0;
    margin-bottom: 15px;
    background: #f7f7f7;
    padding: 10px;
    overflow: hidden;
    color: #999;
    border-radius: 5px
}

.genres li {
    width: 20%;
    margin-left: 25px;
    line-height: 24px;
    float: left
}

.genres li a {
    color: #333
}

.nav_apb {
    border-radius: 2px;
    background: #f7f7f7;
    padding: 5px;
    margin-bottom: 5px;
    -webkit-font-smoothing: antialiased !important;
    text-align: center
}

.nav_apb a {
    padding: 3px 0;
    width: 20px;
    margin: 2px;
    border-radius: 4px;
    text-align: center;
    display: inline-block;
    font-weight: 700;
    background: #5A5A5A;
    color: #FFF
}

.nav_apb a:hover {
    background: #FFF;
    color: #333
}

.soralist span {
    display: block;
    border-bottom: 4px solid #DDD
}

.soralist span a {
    font-weight: 700;
    font-size: 15px
}

.soralist span {
    display: block;
    border-bottom: 4px solid #DDD
}

.soralist ul {
    margin: 0;
    padding: 0;
    margin-top: 10px;
    margin-bottom: 15px;
    overflow: hidden
}

.soralist ul li {
    margin-left: 15px;
    float: left;
    line-height: 21px;
    width: 47%
}

.soralist ul li a.series {
    color: #333
}

.ongoinginfo {
    float: left;
    width: 315px;
    margin-bottom: 10px;
    overflow: hidden
}

.ongoinginfo img {
    width: 110px;
    height: 150px;
    float: left;
    margin-right: 5px;
    padding: 2px;
    border: 1px solid #3A3A3A
}

.ongoinginfo .onleft {
    padding-right: 10px
}

#animelist .ongoinginfo .onleft h2 {
    font-size: 12px;
    border: 0;
    padding: 0
}

#animelist .ongoinginfo .onleft h2 a {
    color: #B3B3B3
}

.ongoinginfo .onleft span {
    display: block;
    color: #A6A6A6;
    font-size: 11px
}

.ongoinginfo .onleft span a {
    color: #A6A6A6
}

.ongoinginfo .onleft span.sino {
    overflow: hidden;
    height: 50px
}

.ongoinginfo .onleft span.sino p {
    margin: 0
}

.allgenres {
    overflow: hidden
}

.allgenres h2 {
    font-size: 14px;
    border-bottom: 4px solid #343434;
    padding: 4px 0;
    margin-bottom: 5px
}

.allgenres ul {
    margin: 0;
    padding: 0;
    list-style: none
}

.allgenres ul li {
    float: left;
    margin: 3px
}

.allgenres ul li a {
    display: block;
    border-radius: 2px;
    padding: 5px;
    border: 1px solid #494949;
    text-align: center;
    box-shadow: 0 0 1px #000;
    width: 88px;
    font-size: 11px;
    color: #BABABA;
    background: #171616
}

.allgenres ul li a:hover {
    background: #000;
    border: 1px solid #2D2B2B;
    color: #FFF;
    text-decoration: none;
    box-shadow: 0 1px 4px #000
}

.sidebar_right {
    width: 300px;
    float: right
}

.sidebar_right li {
    margin: 0 0 5px;
    list-style: none;
    height: auto
}

.sidebar_right h2 {
    border-bottom: 4px solid #5A5A5A;
    font-size: 14px;
    padding-bottom: 8px;
    margin: 0;
    margin-bottom: 8px;
    color: #333;
    position: relative
}

.sidebar_right h2 span {
    display: block;
    float: left;
    text-transform: uppercase;
    border-right: 2px solid #4B718F;
    line-height: 35px;
    height: 35px;
    padding: 0 15px;
    color: #666;
    background-color: #f5f5f5
}

.side {
    margin-bottom: 10px;
    overflow: hidden
}

.sidebar_right ul {
    margin: 0;
    padding: 0
}

.sidebar_right ul li {
    border-top: 0;
    line-height: 17px;
    margin: 0;
    padding: 6px 0;
    border-bottom: 1px solid #f3f1f1;
    list-style: none;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap
}

.sidebar_right ul li a {
    font-size: 13px;
    color: #333
}

.sidebar_right ul li a:hover {
    text-decoration: underline
}

.textwidget {
    font-size: 12px;
    text-align: justify;
    margin-bottom: 10px;
    overflow: hidden
}

.sidebar_right a:hover {
    text-decoration: underline
}

#chatango {
    margin: -1px 0 10px
}

select#chapter {
    background: #2f2f2f;
    color: #ddd;
    border-radius: 3px;
    font-size: 12px;
    border: 0;
    padding: 1px;
    font-family: 'Open Sans', sans-serif
}

.nextprev {
    overflow: hidden;
    margin: 10px 0;
    padding: 5px 0
}

.nextprev .btn {
    margin: 0 5px;
    display: block;
    padding: 6px;
    border-radius: 3px;
    color: #DDD;
    box-shadow: 0 0 8px #000;
    border: 1px solid #353535;
    background: #272727
}

.nextprev .next {
    float: right
}

.nextprev .prev {
    float: left
}

.ads300 {
    margin-bottom: 10px;
    overflow: hidden;
    background: #FFF
}

.fanspages {
    padding: 5px;
    background: #0D0D0D;
    border: 1px solid #222
}

.limiter {
    overflow: hidden;
    height: 97px
}

.serieslist {
    overflow: hidden
}

.serieslist ul {
    overflow: hidden
}

.serieslist ul li {
    padding: 5px 0;
    border-bottom: 1px dashed #e0dddd
}

.serieslist ul li .imgseries {
    float: left;
    overflow: hidden;
    width: 40px;
    height: 60px;
    border: 1px solid #e4e3e3;
    margin-right: 8px
}

.serieslist ul li .imgseries img {
    width: 40px;
    height: auto;
    float: right;
    padding: 0;
    border: none;
    margin-right: 0;
    margin-bottom: 0
}

.serieslist ul li .leftseries span.bt {
    font-size: 11px;
    display: block;
    margin-top: 4px;
    float: left;
    padding: 2px 4px;
    background: #f5f5f5
}

.serieslist ul li .leftseries span span.lmt {
    float: left;
    max-width: 145px;
    margin-right: 3px
}

.serieslist ul li .leftseries {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap
}

.sidebar_right .serieslist ul li .leftseries h3 {
    line-height: 20px;
    margin: 0px;
}

.sidebar_right .serieslist ul li .leftseries h3 a {
    color: #5A5A5A;
    font-size: 13px
}

.serieslist ul li .leftseries span {
    display: block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    line-height: 15px
}

.stl h2{
    font-weight: 700;
    font-size: 15px;
    color: #FFF;
    border-radius: 5px;
    padding: 7px;
    background: #5A5A5A;
    text-align: center;
    margin-bottom: 5px
}

.topseries {
    overflow: hidden;
    border-top: 0;
    padding: 5px 10px;
    margin-bottom: 10px
}

.imgseries img {
    width: 92px;
    height: 125px;
    float: left;
    padding: 1px;
    border: 1px solid #222;
    margin-right: 5px;
    margin-bottom: 6px
}

.topseries h2 {
    font-size: 12px;
    margin-bottom: 5px
}

.topseries span {
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 11px;
    line-height: 14px
}

.topseries .topdesc {
    display: block;
    overflow: hidden;
    width: 96%;
    line-height: 14px;
    color: #B6B6B6;
    background: #0D0D0D;
    height: 25px;
    font-size: 11px;
    border: 1px solid #1A1A1A;
    padding: 5px
}

.topseries .topdesc p {
    margin: 0
}

.comment a {
    text-decoration: none
}

.commentlist li .avatar {
    float: right;
    background: #fff
}

.commentlist cite, .commentlist cite a {
    font-weight: 700;
    font-style: normal;
    font-size: 14px;
    color: #555
}

.commentlist p {
    font-weight: 400;
    line-height: 1.5em;
    text-transform: none
}

.commentmetadata {
    font-weight: 400
}

h3.comments {
    padding: 0;
    margin: 40px auto 20px;
    color: #444
}

h3#comments {
    padding: 0;
    margin: 10px 0;
    color: #555;
    width: 100%
}

#respond {
    margin: 0;
    padding: 0;
    color: #555;
}

h3.respond {
    padding: 0;
    margin: 10px 0;
    color: #444
}

#respond h3 {
    width: 100%;
    padding: 0;
    margin: 10px 10px 10px 0;
    color: #444
}

.alt {
    margin: 0;
    padding: 10px
}

.commentlist {
    padding: 0;
    text-align: justify;
    margin: 0;
}

.commentlist li {
    margin: 0;
    margin-bottom: 10px;
    padding: 10px;
    list-style: none
}

.black cite.fn {
    color: #DDD;
}

.black h3#comments {
    color: #DDD;
}

span.says {
    display: none;
}

.black textarea#comment {
    background: #1b1c1d;
    border: 0;
    padding: 10px;
    width: 98%;
    color: #DDD
}

.commentlist li ul li {
    margin-right: -5px;
    margin-left: 10px;
    margin-top: 10px
}

.black .commentlist li ul li {
    background-color: #1b1c1d;
}

.commentlist p {
    margin: 10px 5px 10px 0
}

.children {
    padding: 0
}

#commentform p {
    margin: 5px 0 0
}

.nocomments {
    text-align: center;
    margin: 0;
    padding: 0
}

.commentmetadata {
    margin: 0;
    display: block
}

#commentform input {
    width: 170px;
    padding: 2px;
    margin: 5px 5px 1px 0
}

#commentform {
    margin: 5px 10px 0 0
}

#commentform textarea {
    width: 99%;
    padding: 2px;
    border: 1px dotted #B8B8B8
}

#respond:after {
    content: ".";
    display: block;
    height: 0;
    clear: both;
    visibility: hidden
}

#commentform #submit {
    margin: 0 0 5px auto;
    border: 0;
    color: #FFF;
    padding: 5px;
    border-radius: 5px;
    cursor: pointer;
    background: #5A5A5A;
    font-family: "Droid Sans", arial;
    float: right
}

.reply {
    width: 44px;
    padding: 2px;
    text-align: center;
    color: #FFF;
    border: 0;
    background: #5A5A5A
}

.reply a {
    color: #FFF
}

.separator a {
    margin-left: 0 !important;
    margin-right: 0 !important
}

#footer {
    text-align: center;
    line-height: 18px;
    padding: 15px 0;
    font-size: 13px;
    color: #DDD;
    background: #222
}

#footer a {
    color: #c5c5c5
}

#footer-menu {
    clear: both;
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase
}

.footer-menu-nav {
    margin: 0 auto;
    width: 990px;
    overflow: hidden
}

.footer-menu-nav ul {
    padding: 0;
    list-style: none;
    margin: 0
}

.footer-menu-nav ul li {
    display: -webkit-inline-box;
    padding: 8px 0
}

#footer a {
    color: #868686
}

#live-search_results {
    background: #1d1d1d;
    border: 1px solid #000;
    z-index: 550 !important;
    overflow: hidden
}

.live-search_more {
    display: none
}

.live-search_header {
    display: none
}

.live-search_result_container {
    font-size: 13px;
    line-height: normal
}

.live-search_result_container ul {
    margin: 0;
    padding: 0;
    overflow: hidden
}

.live-search_result_container li {
    font-family: segoe ui;
    padding: 5px;
    border-bottom: 1px solid #222;
    overflow: hidden
}

.live-search_result_container li:hover {
    background: #111
}

.live-search_result_container li:nth-child(odd) {
    background: #222
}

.live-search_result_container li a {
    display: block
}

.live-search_result_container .post-thumbnail {
    width: 35px;
    height: 35px;
    border: 1px solid #525252;
    margin-right: 6px;
    float: left;
    overflow: hidden
}

.live-search_result_container .post-thumbnail img {
    width: 100% !important;
    height: auto !important
}

span.live-search_text {
    display: block;
    color: #FFF;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis
}

.live-search_result_container .post-meta {
    margin: 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #DDD;
    font-size: 11px;
    font-style: italic
}

#live-search_loading {
    display: block !important;
    width: 100%;
    height: 31px !important
}

.live-search_result_container a:hover {
    text-decoration: none;
    color: #999
}

ul.live-search_main {
    margin: 0;
    padding: 0;
    list-style: none
}

.shdw {
    position: relative;
    margin-bottom: 2px;
    font-size: 12px;
    height: 10px;
    color: #FFF;
    background: url(images/separator.png) no-repeat center top;
    text-indent: -1000000px
}

.footercopyright {
    color: #868686;
    width: 990px;
    margin: 0 auto
}

.pace {
    -webkit-pointer-events: none;
    pointer-events: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none
}

.pace-inactive {
    display: none
}

.pace .pace-progress {
    background: #29d;
    position: fixed;
    z-index: 2000;
    top: 0;
    left: 0;
    height: 2px;
    -webkit-transition: width 1s;
    -moz-transition: width 1s;
    -o-transition: width 1s;
    transition: width 1s
}

.pace .pace-progress-inner {
    display: block;
    position: absolute;
    right: 0;
    width: 100px;
    height: 100%;
    box-shadow: 0 0 10px #29d, 0 0 5px #29d;
    opacity: 1;
    -webkit-transform: rotate(3deg) translate(0px, -4px);
    -moz-transform: rotate(3deg) translate(0px, -4px);
    -ms-transform: rotate(3deg) translate(0px, -4px);
    -o-transform: rotate(3deg) translate(0px, -4px);
    transform: rotate(3deg) translate(0px, -4px)
}

.pace .pace-activity {
    display: block;
    position: fixed;
    z-index: 2000;
    top: 15px;
    right: 15px;
    width: 14px;
    height: 14px;
    border: solid 2px transparent;
    border-top-color: #29d;
    border-left-color: #29d;
    border-radius: 10px;
    -webkit-animation: pace-spinner 400ms linear infinite;
    -moz-animation: pace-spinner 400ms linear infinite;
    -ms-animation: pace-spinner 400ms linear infinite;
    -o-animation: pace-spinner 400ms linear infinite;
    animation: pace-spinner 400ms linear infinite
}

@-webkit-keyframes pace-spinner {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg)
    }
    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg)
    }
}

@-moz-keyframes pace-spinner {
    0% {
        -moz-transform: rotate(0deg);
        transform: rotate(0deg)
    }
    100% {
        -moz-transform: rotate(360deg);
        transform: rotate(360deg)
    }
}

@-o-keyframes pace-spinner {
    0% {
        -o-transform: rotate(0deg);
        transform: rotate(0deg)
    }
    100% {
        -o-transform: rotate(360deg);
        transform: rotate(360deg)
    }
}

@-ms-keyframes pace-spinner {
    0% {
        -ms-transform: rotate(0deg);
        transform: rotate(0deg)
    }
    100% {
        -ms-transform: rotate(360deg);
        transform: rotate(360deg)
    }
}

@keyframes pace-spinner {
    0% {
        transform: rotate(0deg);
        transform: rotate(0deg)
    }
    100% {
        transform: rotate(360deg);
        transform: rotate(360deg)
    }
}

.scrollToTop {

    width: 40px;
    height: 40px;
    position: fixed;
    bottom: 10px;
    right: 10px;
    text-indent: -99999px;
    cursor: pointer;
    background: url(../imgs/back-to-top.png) no-repeat 0 0;
    z-index: 1000;

    /*padding: 12px;*/
    /*text-align: center;*/
    /*background: #171717;*/
    /*border-radius: 5px;*/
    /*box-shadow: 0 0 10px #000;*/
    /*font-weight: 700;*/
    /*color: #676767;*/
    /*text-decoration: none;*/
    /*text-transform: uppercase;*/
    /*position: fixed;*/
    /*bottom: 25px;*/
    /*right: 40px;*/
    /*display: none*/
}

.scrollToTop:hover {
    text-decoration: none
}

.search-block .tombols {
    padding: 0 7px
}

.topseries .topdesc {
    height: 40px
}

.ongoinginfo .onleft span.sino {
    height: 45px
}

.episodelist ul li {
    font-family: 'Open Sans', sans-serif;
    font-weight: 500
}

#ssearch {
    margin: 0 -19px 0 0;
    padding: 4px
}

.search-submit {
    padding: 5px;
    border-left: 1px solid #222
}

.footer-menu-nav ul {
    overflow: hidden;
    text-align: center
}

.footer-menu-nav ul li {
    display: -moz-box
}

@media only screen and ( max-width: 768px ) {
    .logos, .ongoinglist, .anipost .thumb, .waktu, .episodelist .rightoff, .header, .popularmanga {
        display: none
    }

    .perapih {
        width: auto
    }

    #nav {
        padding: 0;
        margin: 0;
        width: 100%;
        border: 0
    }

    #nav ul {
        position: static;
        display: none
    }

    #nav ul li {
        float: none;
        position: relative;
        width: 100%;
        border-bottom: 1px solid #333
    }

    #nav ul li a {
        display: block;
        float: none;
        width: auto;
        padding: 10px;
        line-height: normal;
        text-align: left
    }

    #nav ul li ul {
        top: 35px;
        width: 100%
    }

    #nav ul li ul li {
        float: none
    }

    #nav ul li ul li a {
        width: auto
    }

    .search-block {
        float: none;
        margin-left: 0;
        margin-top: 0
    }

    .search-block #s {
        width: 100%;
        border: 1px solid #FFF;
        color: #333;
        border-radius: 0;
        background: #FFF;
        margin-bottom: 5px
    }

    .show-menu {
        display: block;
        overflow: hidden
    }

    .show-menu i {
        float: right;
        margin-right: 15px;
        line-height: 36px;
        font-size: 23px
    }

    .show-menu span {
        float: left;
        margin-left: 15px
    }

    .footercopyright {
        width: auto;
        margin: 0 auto;
        padding: 0 10px
    }

    #pusat {
        padding: 10px;
        border-radius: 0;
        width: auto
    }

    .postsbody {
        float: none;
        width: 100%;
        margin-right: 0
    }

    .sidebar_right {
        width: 100%;
        float: none
    }

    .soralist ul li {
        float: none;
        width: auto
    }

    /*.scrollToTop {*/
        /*display: none !important*/
    /*}*/

    .animeinfo .imgdesc img {
        float: none;
        width: 165px;
        height: 230px;
        display: block;
        margin: 0 auto;
        margin-bottom: 10px
    }

    .lm {
        float: none;
        width: auto
    }

    .rm {
        padding-left: 0;
        border-left: none;
        overflow: hidden
    }

    .animeinfo .imgdesc {
        overflow: hidden;
        margin-right: 0
    }

    .listinfo {
        padding-bottom: 0
    }

    .animeinfo h1 {
        text-align: center
    }

    span.rightoff {
        display: none
    }

    .genrelst li {
        width: auto;
        float: none
    }

    .genrelst .anipost {
        padding-bottom: 10px;
        border-bottom: 1px solid #DDD
    }

    .genrelst .anipost .thumb {
        display: block
    }

    .ltsc .mng .title span.post-date {
        display: none
    }

    .carousel-cell {
        width: 25%
    }

    #live-search_sb, #live-search_results {
        width: 100% !important;
        float: none
    }
}

/*@media only screen and ( min-width: 701px ) and ( max-width: 989px ) {*/
    /*div#all {*/
        /*width: 990px*/
    /*}*/

    /*.perapih {*/
        /*margin: 0 auto;*/
        /*width: auto;*/
        /*padding: 0 15px*/
    /*}*/
/*}*/

@media only screen and ( max-width: 400px ) {
    .carousel-cell {
        width: 40%;
    }
}

.pagination {
    display: inline-block;
    padding-left: 0;
    margin: 20px 0;
    border-radius: 4px
}

.pagination > li {
    display: inline
}

.pagination > li > a, .pagination > li > span {
    position: relative;
    float: left;
    padding: 6px 12px;
    margin-left: -1px;
    line-height: 1.42857143;
    color: #337ab7;
    text-decoration: none;
    background-color: #fff;
    border: 1px solid #ddd
}

.pagination > li:first-child > a, .pagination > li:first-child > span {
    margin-left: 0;
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px
}

.pagination > li:last-child > a, .pagination > li:last-child > span {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px
}

.pagination > li > a:focus, .pagination > li > a:hover, .pagination > li > span:focus, .pagination > li > span:hover {
    z-index: 2;
    color: #23527c;
    background-color: #eee;
    border-color: #ddd
}

.pagination > .active > a, .pagination > .active > a:focus, .pagination > .active > a:hover, .pagination > .active > span, .pagination > .active > span:focus, .pagination > .active > span:hover {
    z-index: 3;
    color: #fff;
    cursor: default;
    background-color: #337ab7;
    border-color: #337ab7
}

.pagination > .disabled > a, .pagination > .disabled > a:focus, .pagination > .disabled > a:hover, .pagination > .disabled > span, .pagination > .disabled > span:focus, .pagination > .disabled > span:hover {
    color: #777;
    cursor: not-allowed;
    background-color: #fff;
    border-color: #ddd
}

.pagination-lg > li > a, .pagination-lg > li > span {
    padding: 10px 16px;
    font-size: 18px;
    line-height: 1.3333333
}

.pagination-lg > li:first-child > a, .pagination-lg > li:first-child > span {
    border-top-left-radius: 6px;
    border-bottom-left-radius: 6px
}

.pagination-lg > li:last-child > a, .pagination-lg > li:last-child > span {
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px
}

.pagination-sm > li > a, .pagination-sm > li > span {
    padding: 5px 10px;
    font-size: 12px;
    line-height: 1.5
}

.pagination-sm > li:first-child > a, .pagination-sm > li:first-child > span {
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px
}

.pagination-sm > li:last-child > a, .pagination-sm > li:last-child > span {
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px
}

.pager {
    padding-left: 0;
    margin: 20px 0;
    text-align: center;
    list-style: none
}

.pager li {
    display: inline
}

.pager li > a, .pager li > span {
    display: inline-block;
    padding: 5px 14px;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 15px
}

.pager li > a:focus, .pager li > a:hover {
    text-decoration: none;
    background-color: #eee
}

.pager .next > a, .pager .next > span {
    float: right
}

.pager .previous > a, .pager .previous > span {
    float: left
}

.pager .disabled > a, .pager .disabled > a:focus, .pager .disabled > a:hover, .pager .disabled > span {
    color: #777;
    cursor: not-allowed;
    background-color: #fff
}

.tags {
    margin-bottom: 10px;
}

.tags a, a.tags-link {
    font-size: 12px;
    padding: 5px;
    line-height: 30px;
    background: #5A5A5A;
    color: #fff;
    white-space: nowrap;
    border-radius: 4px;
}

.title_mg{
    margin: 0px;
}

.releases h1 {
    border-bottom: 4px solid #ddd;
    font-size: 14px;
    padding: 8px;
    padding-top: 0;
    padding-left: 0;
    margin-bottom: 8px;
    color: #333;
    position: relative;
}
