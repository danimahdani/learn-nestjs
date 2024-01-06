'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">latihan-nestjs documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-b00a4454113dbf34617454b6874f10dc5e60f01136dfa0a4b97ffa4a8b7cd04f8cfebc6a03ffbfa7a51e8a6f6e30d976fb9d83b3d345f453ba20679a01489857"' : 'data-bs-target="#xs-controllers-links-module-AppModule-b00a4454113dbf34617454b6874f10dc5e60f01136dfa0a4b97ffa4a8b7cd04f8cfebc6a03ffbfa7a51e8a6f6e30d976fb9d83b3d345f453ba20679a01489857"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-b00a4454113dbf34617454b6874f10dc5e60f01136dfa0a4b97ffa4a8b7cd04f8cfebc6a03ffbfa7a51e8a6f6e30d976fb9d83b3d345f453ba20679a01489857"' :
                                            'id="xs-controllers-links-module-AppModule-b00a4454113dbf34617454b6874f10dc5e60f01136dfa0a4b97ffa4a8b7cd04f8cfebc6a03ffbfa7a51e8a6f6e30d976fb9d83b3d345f453ba20679a01489857"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                            <li class="link">
                                                <a href="controllers/CatsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CatsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-b00a4454113dbf34617454b6874f10dc5e60f01136dfa0a4b97ffa4a8b7cd04f8cfebc6a03ffbfa7a51e8a6f6e30d976fb9d83b3d345f453ba20679a01489857"' : 'data-bs-target="#xs-injectables-links-module-AppModule-b00a4454113dbf34617454b6874f10dc5e60f01136dfa0a4b97ffa4a8b7cd04f8cfebc6a03ffbfa7a51e8a6f6e30d976fb9d83b3d345f453ba20679a01489857"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-b00a4454113dbf34617454b6874f10dc5e60f01136dfa0a4b97ffa4a8b7cd04f8cfebc6a03ffbfa7a51e8a6f6e30d976fb9d83b3d345f453ba20679a01489857"' :
                                        'id="xs-injectables-links-module-AppModule-b00a4454113dbf34617454b6874f10dc5e60f01136dfa0a4b97ffa4a8b7cd04f8cfebc6a03ffbfa7a51e8a6f6e30d976fb9d83b3d345f453ba20679a01489857"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/CatsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CatsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-ce1b4075defafe3841bda9bc11fe5496b90fb8f65f40bfe3dbc460f77774726bce753b9c1adea074939d6752751903c8a651d79543e61be9d52c14311a9dd1aa"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-ce1b4075defafe3841bda9bc11fe5496b90fb8f65f40bfe3dbc460f77774726bce753b9c1adea074939d6752751903c8a651d79543e61be9d52c14311a9dd1aa"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-ce1b4075defafe3841bda9bc11fe5496b90fb8f65f40bfe3dbc460f77774726bce753b9c1adea074939d6752751903c8a651d79543e61be9d52c14311a9dd1aa"' :
                                            'id="xs-controllers-links-module-AuthModule-ce1b4075defafe3841bda9bc11fe5496b90fb8f65f40bfe3dbc460f77774726bce753b9c1adea074939d6752751903c8a651d79543e61be9d52c14311a9dd1aa"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-ce1b4075defafe3841bda9bc11fe5496b90fb8f65f40bfe3dbc460f77774726bce753b9c1adea074939d6752751903c8a651d79543e61be9d52c14311a9dd1aa"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-ce1b4075defafe3841bda9bc11fe5496b90fb8f65f40bfe3dbc460f77774726bce753b9c1adea074939d6752751903c8a651d79543e61be9d52c14311a9dd1aa"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-ce1b4075defafe3841bda9bc11fe5496b90fb8f65f40bfe3dbc460f77774726bce753b9c1adea074939d6752751903c8a651d79543e61be9d52c14311a9dd1aa"' :
                                        'id="xs-injectables-links-module-AuthModule-ce1b4075defafe3841bda9bc11fe5496b90fb8f65f40bfe3dbc460f77774726bce753b9c1adea074939d6752751903c8a651d79543e61be9d52c14311a9dd1aa"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CatsModule.html" data-type="entity-link" >CatsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-CatsModule-49e739a347ed2bf7cbfa4f3735b386eb5f074d7351e7f8a50c4b04e75ed04f6bb492691a905b71b3c49a28103da0f826f7bbea6bb3645bdd53e593103b9f3541"' : 'data-bs-target="#xs-controllers-links-module-CatsModule-49e739a347ed2bf7cbfa4f3735b386eb5f074d7351e7f8a50c4b04e75ed04f6bb492691a905b71b3c49a28103da0f826f7bbea6bb3645bdd53e593103b9f3541"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CatsModule-49e739a347ed2bf7cbfa4f3735b386eb5f074d7351e7f8a50c4b04e75ed04f6bb492691a905b71b3c49a28103da0f826f7bbea6bb3645bdd53e593103b9f3541"' :
                                            'id="xs-controllers-links-module-CatsModule-49e739a347ed2bf7cbfa4f3735b386eb5f074d7351e7f8a50c4b04e75ed04f6bb492691a905b71b3c49a28103da0f826f7bbea6bb3645bdd53e593103b9f3541"' }>
                                            <li class="link">
                                                <a href="controllers/CatsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CatsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-CatsModule-49e739a347ed2bf7cbfa4f3735b386eb5f074d7351e7f8a50c4b04e75ed04f6bb492691a905b71b3c49a28103da0f826f7bbea6bb3645bdd53e593103b9f3541"' : 'data-bs-target="#xs-injectables-links-module-CatsModule-49e739a347ed2bf7cbfa4f3735b386eb5f074d7351e7f8a50c4b04e75ed04f6bb492691a905b71b3c49a28103da0f826f7bbea6bb3645bdd53e593103b9f3541"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CatsModule-49e739a347ed2bf7cbfa4f3735b386eb5f074d7351e7f8a50c4b04e75ed04f6bb492691a905b71b3c49a28103da0f826f7bbea6bb3645bdd53e593103b9f3541"' :
                                        'id="xs-injectables-links-module-CatsModule-49e739a347ed2bf7cbfa4f3735b386eb5f074d7351e7f8a50c4b04e75ed04f6bb492691a905b71b3c49a28103da0f826f7bbea6bb3645bdd53e593103b9f3541"' }>
                                        <li class="link">
                                            <a href="injectables/CatsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CatsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/LatihanModule.html" data-type="entity-link" >LatihanModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-LatihanModule-8ec662eb4484562a40dc8301dd22edd9159f9a0cc55e8e909ab0cbdbd87fbce8775fd6ecaeeff919112b94a6522d7f8a27c356464950fcf6f9e38f81e4a17076"' : 'data-bs-target="#xs-controllers-links-module-LatihanModule-8ec662eb4484562a40dc8301dd22edd9159f9a0cc55e8e909ab0cbdbd87fbce8775fd6ecaeeff919112b94a6522d7f8a27c356464950fcf6f9e38f81e4a17076"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-LatihanModule-8ec662eb4484562a40dc8301dd22edd9159f9a0cc55e8e909ab0cbdbd87fbce8775fd6ecaeeff919112b94a6522d7f8a27c356464950fcf6f9e38f81e4a17076"' :
                                            'id="xs-controllers-links-module-LatihanModule-8ec662eb4484562a40dc8301dd22edd9159f9a0cc55e8e909ab0cbdbd87fbce8775fd6ecaeeff919112b94a6522d7f8a27c356464950fcf6f9e38f81e4a17076"' }>
                                            <li class="link">
                                                <a href="controllers/LatihanController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LatihanController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-LatihanModule-8ec662eb4484562a40dc8301dd22edd9159f9a0cc55e8e909ab0cbdbd87fbce8775fd6ecaeeff919112b94a6522d7f8a27c356464950fcf6f9e38f81e4a17076"' : 'data-bs-target="#xs-injectables-links-module-LatihanModule-8ec662eb4484562a40dc8301dd22edd9159f9a0cc55e8e909ab0cbdbd87fbce8775fd6ecaeeff919112b94a6522d7f8a27c356464950fcf6f9e38f81e4a17076"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-LatihanModule-8ec662eb4484562a40dc8301dd22edd9159f9a0cc55e8e909ab0cbdbd87fbce8775fd6ecaeeff919112b94a6522d7f8a27c356464950fcf6f9e38f81e4a17076"' :
                                        'id="xs-injectables-links-module-LatihanModule-8ec662eb4484562a40dc8301dd22edd9159f9a0cc55e8e909ab0cbdbd87fbce8775fd6ecaeeff919112b94a6522d7f8a27c356464950fcf6f9e38f81e4a17076"' }>
                                        <li class="link">
                                            <a href="injectables/LatihanService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LatihanService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PrismaModule.html" data-type="entity-link" >PrismaModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PrismaModule-0a30996d1235bf2604a3c3e09c8f1199d43cb26cc3a3c409db2ea23ad71bf181806b1da96cfc90d204e717a917b83b7d35bd1c8bff82b9170de5064b4a322113"' : 'data-bs-target="#xs-injectables-links-module-PrismaModule-0a30996d1235bf2604a3c3e09c8f1199d43cb26cc3a3c409db2ea23ad71bf181806b1da96cfc90d204e717a917b83b7d35bd1c8bff82b9170de5064b4a322113"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PrismaModule-0a30996d1235bf2604a3c3e09c8f1199d43cb26cc3a3c409db2ea23ad71bf181806b1da96cfc90d204e717a917b83b7d35bd1c8bff82b9170de5064b4a322113"' :
                                        'id="xs-injectables-links-module-PrismaModule-0a30996d1235bf2604a3c3e09c8f1199d43cb26cc3a3c409db2ea23ad71bf181806b1da96cfc90d204e717a917b83b7d35bd1c8bff82b9170de5064b4a322113"' }>
                                        <li class="link">
                                            <a href="injectables/PrismaService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PrismaService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SchoolModule.html" data-type="entity-link" >SchoolModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-SchoolModule-7ab72fe3ac05b352c96677580ec3d28f5580ca037e43771534ca586f37a96041c315dca8af325a296661b52f1f78720bc20c2423c7cdd1cfbe3c738ff87a509d"' : 'data-bs-target="#xs-controllers-links-module-SchoolModule-7ab72fe3ac05b352c96677580ec3d28f5580ca037e43771534ca586f37a96041c315dca8af325a296661b52f1f78720bc20c2423c7cdd1cfbe3c738ff87a509d"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-SchoolModule-7ab72fe3ac05b352c96677580ec3d28f5580ca037e43771534ca586f37a96041c315dca8af325a296661b52f1f78720bc20c2423c7cdd1cfbe3c738ff87a509d"' :
                                            'id="xs-controllers-links-module-SchoolModule-7ab72fe3ac05b352c96677580ec3d28f5580ca037e43771534ca586f37a96041c315dca8af325a296661b52f1f78720bc20c2423c7cdd1cfbe3c738ff87a509d"' }>
                                            <li class="link">
                                                <a href="controllers/SchoolController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SchoolController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-SchoolModule-7ab72fe3ac05b352c96677580ec3d28f5580ca037e43771534ca586f37a96041c315dca8af325a296661b52f1f78720bc20c2423c7cdd1cfbe3c738ff87a509d"' : 'data-bs-target="#xs-injectables-links-module-SchoolModule-7ab72fe3ac05b352c96677580ec3d28f5580ca037e43771534ca586f37a96041c315dca8af325a296661b52f1f78720bc20c2423c7cdd1cfbe3c738ff87a509d"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SchoolModule-7ab72fe3ac05b352c96677580ec3d28f5580ca037e43771534ca586f37a96041c315dca8af325a296661b52f1f78720bc20c2423c7cdd1cfbe3c738ff87a509d"' :
                                        'id="xs-injectables-links-module-SchoolModule-7ab72fe3ac05b352c96677580ec3d28f5580ca037e43771534ca586f37a96041c315dca8af325a296661b52f1f78720bc20c2423c7cdd1cfbe3c738ff87a509d"' }>
                                        <li class="link">
                                            <a href="injectables/SchoolService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SchoolService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/TaskModule.html" data-type="entity-link" >TaskModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-TaskModule-85c3558e4f625e2f5db3b158c5f7b89479344e9dc7f899f2a1bc14edb622dd1d427336f4fd0221e3f71c555fbd98a08bf6a62a0f6a27ef31b83328221bc80fe2"' : 'data-bs-target="#xs-controllers-links-module-TaskModule-85c3558e4f625e2f5db3b158c5f7b89479344e9dc7f899f2a1bc14edb622dd1d427336f4fd0221e3f71c555fbd98a08bf6a62a0f6a27ef31b83328221bc80fe2"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-TaskModule-85c3558e4f625e2f5db3b158c5f7b89479344e9dc7f899f2a1bc14edb622dd1d427336f4fd0221e3f71c555fbd98a08bf6a62a0f6a27ef31b83328221bc80fe2"' :
                                            'id="xs-controllers-links-module-TaskModule-85c3558e4f625e2f5db3b158c5f7b89479344e9dc7f899f2a1bc14edb622dd1d427336f4fd0221e3f71c555fbd98a08bf6a62a0f6a27ef31b83328221bc80fe2"' }>
                                            <li class="link">
                                                <a href="controllers/TaskController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TaskController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-TaskModule-85c3558e4f625e2f5db3b158c5f7b89479344e9dc7f899f2a1bc14edb622dd1d427336f4fd0221e3f71c555fbd98a08bf6a62a0f6a27ef31b83328221bc80fe2"' : 'data-bs-target="#xs-injectables-links-module-TaskModule-85c3558e4f625e2f5db3b158c5f7b89479344e9dc7f899f2a1bc14edb622dd1d427336f4fd0221e3f71c555fbd98a08bf6a62a0f6a27ef31b83328221bc80fe2"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-TaskModule-85c3558e4f625e2f5db3b158c5f7b89479344e9dc7f899f2a1bc14edb622dd1d427336f4fd0221e3f71c555fbd98a08bf6a62a0f6a27ef31b83328221bc80fe2"' :
                                        'id="xs-injectables-links-module-TaskModule-85c3558e4f625e2f5db3b158c5f7b89479344e9dc7f899f2a1bc14edb622dd1d427336f4fd0221e3f71c555fbd98a08bf6a62a0f6a27ef31b83328221bc80fe2"' }>
                                        <li class="link">
                                            <a href="injectables/TaskService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TaskService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#controllers-links"' :
                                'data-bs-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AuthController.html" data-type="entity-link" >AuthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/CatsController.html" data-type="entity-link" >CatsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/LatihanController.html" data-type="entity-link" >LatihanController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/SchoolController.html" data-type="entity-link" >SchoolController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/TaskController.html" data-type="entity-link" >TaskController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreateSchoolDto.html" data-type="entity-link" >CreateSchoolDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateTaskDto.html" data-type="entity-link" >CreateTaskDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/LoginDto.html" data-type="entity-link" >LoginDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/RegisterDto.html" data-type="entity-link" >RegisterDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/School.html" data-type="entity-link" >School</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateSchoolDto.html" data-type="entity-link" >UpdateSchoolDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateTask.html" data-type="entity-link" >UpdateTask</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CatsService.html" data-type="entity-link" >CatsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtStrategy.html" data-type="entity-link" >JwtStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LatihanService.html" data-type="entity-link" >LatihanService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PrismaService.html" data-type="entity-link" >PrismaService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SchoolService.html" data-type="entity-link" >SchoolService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TaskService.html" data-type="entity-link" >TaskService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Task.html" data-type="entity-link" >Task</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});