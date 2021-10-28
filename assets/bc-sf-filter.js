// Override Settings
var bcSfFilterSettings = {
    general: {
        limit: 21,
        /* Optional */
        // loadProductFirst: true,
    }
};

var arrowLeft = '<svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="angle-left" class="svg-inline--fa fa-angle-left fa-w-6" role="img" xmlns="http://www.w3.org/2000/svg" ' +
                'viewBox="0 0 192 512"><path fill="currentColor" d="M25.1 247.5l117.8-116c4.7-4.7 12.3-4.7 17 0l7.1 7.1c4.7 4.7 4.7 12.3 0 17L64.7 256l102.2 100.4c4.7 4.7 4.7 12.3 0 17l-7.1 ' + 
                '7.1c-4.7 4.7-12.3 4.7-17 0L25 264.5c-4.6-4.7-4.6-12.3.1-17z"></path></svg>';
var arrowRight = '<svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="angle-right" class="svg-inline--fa fa-angle-right fa-w-6" role="img" xmlns="http://www.w3.org/2000/svg" ' + 
                 'viewBox="0 0 192 512"><path fill="currentColor" d="M166.9 264.5l-117.8 116c-4.7 4.7-12.3 4.7-17 0l-7.1-7.1c-4.7-4.7-4.7-12.3 0-17L127.3 256 25.1 155.6c-4.7-4.7-4.7-12.3 0-17l7' +
                 '.1-7.1c4.7-4.7 12.3-4.7 17 0l117.8 116c4.6 4.7 4.6 12.3-.1 17z"></path></svg>';

// Declare Templates
var bcSfFilterTemplate = {
    'soldOutClass': 'sold-out',
    'saleClass': 'on-sale',
    'soldOutLabelHtml': '<div>' + bcSfFilterConfig.label.sold_out + '</div>',
    'saleLabelHtml': '<span class="product-label product-label--on-sale global-border-radius">SALE</span>',
    'vendorHtml': '<div>{{itemVendorLabel}}</div>',

    /* Grid Template
    'productGridItemHtml': '<div class="grid__item wide--one-fifth large--one-quarter medium-down--one-half">' +
                                '<div class="{{soldOutClass}} {{saleClass}}">' +
                                    '<a href="{{itemUrl}}" class="grid-link">' +
                                        '<span class="grid-link__image {{imageSoldOutClass}} grid-link__image--product">' +
                                            '{{itemSaleLabel}}' +
                                            '{{itemSoldOutLabel}}' +
                                            '<span class="grid-link__image-centered"><img src="{{imageUrl}}" alt="{{itemTitle}}" /></span>' +
                                        '</span>' +
                                        '<p class="grid-link__title">{{itemTitle}}</p>' +
                                        '{{itemVendor}}' +
                                        '{{itemPrice}}' +
                                    '</a>' +
                                '</div>' +
                            '</div>',
    */
   'productGridItemHtml': '<div data-product-id="{{itemId}}" class="product-block one-third small-down--one-half  js-contains-quickbuy"> ' +
                            '<div class="product-block__image-container"> ' +
                            '    <div class="global-border-radius hover-images  hover-images--two same-aspect-ratio relative"> ' +
                            '        <a class="product-block__image" href="{{itemUrl}}"> ' +
                            '            <div class="image-one"> ' +
                            '               <div class="rimage-outer-wrapper" style="max-width: 1500px; max-height: 2048px"> ' +
                            '                   <div class="rimage-wrapper " style="padding-top:146.5333333%"> ' +
                            '                       <img class="rimage__image lazyload fade-in" ' +
                            '                           data-widths="[180, 220, 300, 360, 460, 540, 720, 900, 1080, 1296, 1512, 1728, 2048]" ' +
                            '                           data-aspectratio="0.732421875" data-sizes="auto" alt="{{itemTitle}}" ' +
                            '                           data-srcset="{{srcSet}}" sizes="429px" style=""> ' +
                            '                       <noscript> ' +
                            '                           <img src="{{productImage1024}}" alt="{{itemTitle}}" class="rimage__image"> ' +
                            '                       </noscript> ' +
                            '                   </div> ' +
                            '             </div> ' +
                            '           </div> ' +
                            '          <div class="image-two"> ' +
                            '               <div class="rimage-background fade-in lazyload" data-bgset="{{img2srcSet}}" ' +
                            '                    data-parent-fit="contain" style="{{img2backgroundImage}}"> ' +
                            '                    <noscript> ' +
                            '                        <img src="{{img2}}" alt="{{itemTitle}}" class="rimage-background__image"> ' +
                            '                    </noscript> ' +
                            '                    <picture class="" style="display: none;"> ' +
                            '                        <source data-srcset="{{img2srcSet}}" sizes="429px"> ' +
                            '                        <img alt="" class="lazyautosizes" data-sizes="auto" data-parent-fit="contain" sizes="429px"> ' +
                            '                    </picture> ' +
                            '                </div> ' +
                            '            </div> ' +
                            '       </a> ' +
  '        <a class="product-block__quicklook-btn {{showQuickbuy}} btn--quicklook btn btn--anatomie-white js-quickbuy-button" ' +
                            '           href="{{itemUrl}}">Quick buy</a> ' +
                            '       <script type="text/template" class="replace_with_quickbuy"></script> ' +
                            '   </div> ' +
                            '</div> ' +
                            '<div class="product-block__title"> ' +
                            '    <a href="{{itemUrl}}" class="product-block__title-link">{{itemTitle}}</a> ' +
                            '</div> ' +
                            '<div class="product-price"> ' +
                            '    <span class="theme-money">{{itemPrice}}</span> ' +
                            '</div> {{itemSaleLabel}} ' +
                            '<div class="product-swatch-inline" data-swatch-count="{{swatchCount}}"> ' +
                            '    {{productSwatches}} ' +
                            '</div> ' +
                            '<div class="theme-product-reviews-summary"> ' +
                            '    <span class="shopify-product-reviews-badge" data-id="{{itemId}}"></span> ' +
                            '</div> ' +
                            '</div> ',

    // Pagination Template
    'previousActiveHtml': '<li><a href="{{itemUrl}}">' + arrowLeft + '</a></li>',
    'previousDisabledHtml': '<li class="disabled"><span>' + arrowLeft + '</span></li>',
    'nextActiveHtml': '<li><a href="{{itemUrl}}">' + arrowRight + '</a></li>',
    'nextDisabledHtml': '<li class="disabled"><span>' + arrowRight + '</span></li>',
    'pageItemHtml': '<li><a href="{{itemUrl}}">{{itemTitle}}</a></li>',
    'pageItemSelectedHtml': '<li><span class="active">{{itemTitle}}</span></li>',
    'pageItemRemainHtml': '<li><span>{{itemTitle}}</span></li>',
    'paginateHtml': '<ul class="pagination-custom">{{previous}}{{pageItems}}{{next}}</ul>',
  
    // Sorting Template
    'sortingHtml': '<label for="bc-sf-filter-top-sorting-select" class="label--hidden">' + bcSfFilterConfig.label.sorting + '</label><select id="bc-sf-filter-top-sorting-select" class="collection-sort__input">{{sortingItems}}</select>',
};

/************************** BUILD PRODUCT LIST **************************/

function imgSrcSet(img) {
   var result = '';
    var imgUrl = img.src.split('?')[0];
    var extension = imgUrl.split('.');
    extension = extension[extension.length - 1];
    var searchTerm = new RegExp('.' + extension, 'g');

    result += imgUrl.replace(searchTerm, '_180x.' + extension + ' 180w,');
    result += imgUrl.replace(searchTerm, '_220x.' + extension + ' 220w,');
    result += imgUrl.replace(searchTerm, '_300x.' + extension + ' 300w,');
    result += imgUrl.replace(searchTerm, '_360x.' + extension + ' 360w,');
    result += imgUrl.replace(searchTerm, '_460x.' + extension + ' 460w,');
    result += imgUrl.replace(searchTerm, '_540x.' + extension + ' 540w,');
    result += imgUrl.replace(searchTerm, '_720x.' + extension + ' 720w,');
    result += imgUrl.replace(searchTerm, '_900x.' + extension + ' 900w,');
    result += imgUrl.replace(searchTerm, '_1080x.' + extension + ' 1080w,');
    result += imgUrl.replace(searchTerm, '_1296x.' + extension + ' 1296w,');
    result += imgUrl.replace(searchTerm, '_1512x.' + extension + ' 1512w,');
    result += imgUrl.replace(searchTerm, '_1728x.' + extension + ' 1728w,');
    result += imgUrl.replace(searchTerm, '_2048x.' + extension + ' 2048w');

    return result;
}

function swatches(data) {
    var result = {
        count: 0,
        html: ''
    };

    for (var optionCounter = 0; optionCounter < data.options_with_values.length; optionCounter++) {
        var option = data.options_with_values[optionCounter];

        if (option.name == 'color') {
            for (var valueCounter = 0; valueCounter < option.values.length; valueCounter++) {
                var value = option.values[valueCounter];
                var color = value.title.toLowerCase();
                var imageUrl = '';

                color = Shopify.handleize(color);

                imageUrl = '//cdn.shopify.com/s/files/1/0856/7558/files/color-' + color + '.png';

                result.html += '<span class="product-swatch-inline__dot bg-' + color+ '" style="background-image: url(\'' + imageUrl + '\');"></span>';

                result.count++;
            }
        }
    }

    return result;
}

Shopify.handleize = function (str) {
    return str.toLowerCase().replace(/[^\w\u00C0-\u024f]+/g, "-").replace(/^-+|-+$/g, "");
};

// Build Product Grid Item
BCSfFilter.prototype.buildProductGridItem = function(data, index) {
    /*** Prepare data ***/
    var images = data.images_info;
     // Displaying price base on the policy of Shopify, have to multiple by 100
    var soldOut = !data.available; // Check a product is out of stock
    var onSale = data.compare_at_price_min > data.price_min; // Check a product is on sale
    var priceVaries = data.price_min != data.price_max; // Check a product has many prices
    // Get First Variant (selected_or_first_available_variant)
    var firstVariant = data['variants'][0];
    if (getParam('variant') !== null && getParam('variant') != '') {
        var paramVariant = data.variants.filter(function(e) { return e.id == getParam('variant'); });
        if (typeof paramVariant[0] !== 'undefined') firstVariant = paramVariant[0];
    } else {
        for (var i = 0; i < data['variants'].length; i++) {
            if (data['variants'][i].available) {
                firstVariant = data['variants'][i];
                break;
            }
        }
    }
    /*** End Prepare data ***/

    // Get Template
    var itemHtml = bcSfFilterTemplate.productGridItemHtml;

    // Add Thumbnail
  
    var itemThumbUrl = images.length > 0 ? this.optimizeImage(images[0]['src']) : bcSfFilterConfig.general.no_image_url;
    itemHtml = itemHtml.replace(/{{itemThumbUrl}}/g, itemThumbUrl);

    // Add Price
    var itemPriceHtml = '';
    if (data.title != '')  {
        
        //itemPriceHtml += '<p class="grid-link__meta">';
        if (onSale) {
            //console.log("ON SALE", data);
            itemPriceHtml += '<s class="grid-link__sale_price">' + this.formatMoney(data.compare_at_price_min * 100) + '</s> ';
            //itemPriceHtml += this.formatMoney((data.compare_at_price_min * 100));
        }
        if (priceVaries) {
           // console.log("VARIES", data);
           itemPriceHtml += 'From ' + this.formatMoney((data.price_min * 100));
          //itemPriceHtml += ('From {{ price }}').replace(/{{ price }}/g, this.formatMoney((data.price_min * 100)));
        } else {
            itemPriceHtml += this.formatMoney((data.price_min * 100));
        }
        //itemPriceHtml += '</p>';
    }
    itemHtml = itemHtml.replace(/{{itemPrice}}/g, itemPriceHtml);

    // Add soldOut class
    var soldOutClass = soldOut ? bcSfFilterTemplate.soldOutClass : '';
    itemHtml = itemHtml.replace(/{{soldOutClass}}/g, soldOutClass);
  
    // Add onSale class
    var saleClass = onSale ? bcSfFilterTemplate.saleClass : '';
    itemHtml = itemHtml.replace(/{{saleClass}}/g, saleClass);
  
    // Add soldOut Label
    var itemSoldOutLabelHtml = soldOut ? bcSfFilterTemplate.soldOutLabelHtml : '';
    itemHtml = itemHtml.replace(/{{itemSoldOutLabel}}/g, itemSoldOutLabelHtml);

    // Add onSale Label
    var itemSaleLabelHtml = onSale ? bcSfFilterTemplate.saleLabelHtml : '';
    itemHtml = itemHtml.replace(/{{itemSaleLabel}}/g, itemSaleLabelHtml);

    // Add Vendor
    var itemVendorHtml = bcSfFilterConfig.custom.vendor_enable ? bcSfFilterTemplate.vendorHtml.replace(/{{itemVendorLabel}}/g, data.vendor) : '';
    itemHtml = itemHtml.replace(/{{itemVendor}}/g, itemVendorHtml);

    // Add main attribute (Always put at the end of this function)
    itemHtml = itemHtml.replace(/{{itemId}}/g, data.id);
    itemHtml = itemHtml.replace(/{{itemHandle}}/g, data.handle);
    itemHtml = itemHtml.replace(/{{itemTitle}}/g, data.title);
    itemHtml = itemHtml.replace(/{{itemUrl}}/g, this.buildProductItemUrl(data));

    // Add srcset for images
    itemHtml = itemHtml.replace(/{{srcSet}}/g, imgSrcSet(images[0]));
  if (images.length>1) {
    itemHtml = itemHtml.replace(/{{img2srcSet}}/g, imgSrcSet(images[1]));
  } else {
    itemHtml = itemHtml.replace(/{{img2srcSet}}/g, imgSrcSet(images[0]));
  }
    

    // Add product swatches
    var swatchElements = swatches(data);
    itemHtml = itemHtml.replace(/{{productSwatches}}/g, swatchElements.html);
    itemHtml = itemHtml.replace(/{{swatchCount}}/g, swatchElements.count)

    // Add product JSON
    itemHtml = itemHtml.replace(/{{productJson}}/g, JSON.stringify(data));
  
  
  	if(data.tags.includes('call-to-order')) {
    	//{{showQuickbuy}}
  		itemHtml = itemHtml.replace(/{{showQuickbuy}}/g, "hide-widget");
    } else {
    	//{{showQuickbuy}}
  		itemHtml = itemHtml.replace(/{{showQuickbuy}}/g, "");
    }
  	

    return itemHtml;
};

// Build Product List Item
BCSfFilter.prototype.buildProductListItem = function(data) {
    // // Add Description
    // var itemDescription = jQ('<p>' + data.body_html + '</p>').text();
    // // Truncate by word
    // itemDescription = (itemDescription.split(" ")).length > 51 ? itemDescription.split(" ").splice(0, 51).join(" ") + '...' : itemDescription.split(" ").splice(0, 51).join(" ");
    // // Truncate by character
    // itemDescription = itemDescription.length > 350 ? itemDescription.substring(0, 350) + '...' : itemDescription.substring(0, 350);
    // itemHtml = itemHtml.replace(/{{itemDescription}}/g, itemDescription);
};

// Customize data to suit the data of Shopify API
BCSfFilter.prototype.prepareProductData = function(data) {
    for (var k in data) {
        // Add Options
        var optionsArr = [];
        for (var i in data[k]['options_with_values']) {
            optionsArr.push(data[k]['options_with_values'][i]['name']);
        }
        data[k]['options'] = optionsArr;

        // Customize variants
        for (var i in data[k]['variants']) {
            var variantOptionArr = [];
            var count = 1;
            var variant = data[k]['variants'][i];
            // Add Options
            var variantOptions = variant['merged_options'];
            if (Array.isArray(variantOptions)) {
                for (var j = 0; j < variantOptions.length; j++) {
                    var temp = variantOptions[j].split(':');
                    data[k]['variants'][i]['option' + (parseInt(j) + 1)] = temp[1];
                    data[k]['variants'][i]['option_' + temp[0]] = temp[1];
                    variantOptionArr.push(temp[1]);
                }
                data[k]['variants'][i]['options'] = variantOptionArr;
            }
            data[k]['variants'][i]['compare_at_price'] = parseFloat(data[k]['variants'][i]['compare_at_price']) * 100;
            data[k]['variants'][i]['price'] = parseFloat(data[k]['variants'][i]['price']) * 100;
        }

        // Add Description
        data[k]['description'] = data[k]['body_html'];
    }
    return data;
};

/************************** END BUILD PRODUCT LIST **************************/

// Build Pagination
BCSfFilter.prototype.buildPagination = function(totalProduct) {
    if (this.getSettingValue('general.paginationType') == 'default') {
        // Get page info
        var currentPage = parseInt(this.queryParams.page);
        var totalPage = Math.ceil(totalProduct / this.queryParams.limit);

        // If it has only one page, clear Pagination
        if (totalPage == 1) {
            jQ(this.selector.bottomPagination).html('');
            return false;
        }

        if (this.getSettingValue('general.paginationType') == 'default') {
            var paginationHtml = bcSfFilterTemplate.paginateHtml;

            // Build Previous
            var previousHtml = (currentPage > 1) ? bcSfFilterTemplate.previousActiveHtml : bcSfFilterTemplate.previousDisabledHtml;
            previousHtml = previousHtml.replace(/{{itemUrl}}/g, this.buildToolbarLink('page', currentPage, currentPage - 1));
            paginationHtml = paginationHtml.replace(/{{previous}}/g, previousHtml);

            // Build Next
            var nextHtml = (currentPage < totalPage) ? bcSfFilterTemplate.nextActiveHtml :  bcSfFilterTemplate.nextDisabledHtml;
            nextHtml = nextHtml.replace(/{{itemUrl}}/g, this.buildToolbarLink('page', currentPage, currentPage + 1));
            paginationHtml = paginationHtml.replace(/{{next}}/g, nextHtml);

            // Create page items array
            var beforeCurrentPageArr = [];
            for (var iBefore = currentPage - 1; iBefore > currentPage - 3 && iBefore > 0; iBefore--) {
                beforeCurrentPageArr.unshift(iBefore);
            }
            if (currentPage - 4 > 0) {
                beforeCurrentPageArr.unshift('...');
            }
            if (currentPage - 4 >= 0) {
                beforeCurrentPageArr.unshift(1);
            }
            beforeCurrentPageArr.push(currentPage);

            var afterCurrentPageArr = [];
            for (var iAfter = currentPage + 1; iAfter < currentPage + 3 && iAfter <= totalPage; iAfter++) {
                afterCurrentPageArr.push(iAfter);
            }
            if (currentPage + 3 < totalPage) {
                afterCurrentPageArr.push('...');
            }
            if (currentPage + 3 <= totalPage) {
                afterCurrentPageArr.push(totalPage);
            }

            // Build page items
            var pageItemsHtml = '';
            var pageArr = beforeCurrentPageArr.concat(afterCurrentPageArr);
            for (var iPage = 0; iPage < pageArr.length; iPage++) {
                if (pageArr[iPage] == '...') {
                    pageItemsHtml += bcSfFilterTemplate.pageItemRemainHtml;
                } else {
                    pageItemsHtml += (pageArr[iPage] == currentPage) ? bcSfFilterTemplate.pageItemSelectedHtml : bcSfFilterTemplate.pageItemHtml;
                }
                pageItemsHtml = pageItemsHtml.replace(/{{itemTitle}}/g, pageArr[iPage]);
                pageItemsHtml = pageItemsHtml.replace(/{{itemUrl}}/g, this.buildToolbarLink('page', currentPage, pageArr[iPage]));
            }
            paginationHtml = paginationHtml.replace(/{{pageItems}}/g, pageItemsHtml);

            jQ(this.selector.bottomPagination).html(paginationHtml);
        }
    }
};

/************************** BUILD TOOLBAR **************************/

// Build Sorting
BCSfFilter.prototype.buildFilterSorting = function() {
    if (bcSfFilterTemplate.hasOwnProperty('sortingHtml')) {
        jQ(this.selector.topSorting).html('');

        var sortingArr = this.getSortingList();
        if (sortingArr) {
            // Build content 
            var sortingItemsHtml = '';
            for (var k in sortingArr) {
                sortingItemsHtml += '<option value="' + k +'">' + sortingArr[k] + '</option>';
            }
            var html = bcSfFilterTemplate.sortingHtml.replace(/{{sortingItems}}/g, sortingItemsHtml);
            jQ(this.selector.topSorting).html(html);

            // Set current value
            jQ(this.selector.topSorting + ' select').val(this.queryParams.sort);
        }
    }
};

// Build Display type (List / Grid / Collage)
// BCSfFilter.prototype.buildFilterDisplayType = function() {
//     var itemHtml = '<a href="' + this.buildToolbarLink('display', 'list', 'grid') + '" title="Grid view" class="change-view bc-sf-filter-display-grid" data-view="grid"><span class="icon-fallback-text"><i class="fa fa-th" aria-hidden="true"></i><span class="fallback-text">Grid view</span></span></a>';
//     itemHtml += '<a href="' + this.buildToolbarLink('display', 'grid', 'list') + '" title="List view" class="change-view bc-sf-filter-display-list" data-view="list"><span class="icon-fallback-text"><i class="fa fa-list" aria-hidden="true"></i><span class="fallback-text">List view</span></span></a>';
//     jQ(this.selector.topDisplayType).html(itemHtml);

//     // Active current display type
//     jQ(this.selector.topDisplayType).find('.bc-sf-filter-display-list').removeClass('active');
//     jQ(this.selector.topDisplayType).find('.bc-sf-filter-display-grid').removeClass('active');
//     if (this.queryParams.display == 'list') {
//         jQ(this.selector.topDisplayType).find('.bc-sf-filter-display-list').addClass('active');
//     } else if (this.queryParams.display == 'grid') {
//         jQ(this.selector.topDisplayType).find('.bc-sf-filter-display-grid').addClass('active');
//     }
// };

/************************** END BUILD TOOLBAR **************************/

// Add additional feature for product list, used commonly in customizing product list
BCSfFilter.prototype.buildExtrasProductList = function(data, eventType) {};

// Build additional elements
BCSfFilter.prototype.buildAdditionalElements = function(data, eventType) {
    if (!window.quickBuyData)
        window.quickBuyData = [];

    for (var i = 0; i < data.products.length; i++) {
        var product = data.products[i];
        var productJSON = window.quickBuyData.find(function (obj) {
            return obj.id == product.id;
        });

        if (!productJSON || productJSON.length == 0) {
            getQuickBuy(product.id, product.handle);
        } else {
            // Update the Quick Buy template
            var codeBlockElement = $('.product-block[data-product-id=' + product.id + ']').find('.replace_with_quickbuy');
            codeBlockElement.replaceWith(productJSON.json);
        }
    }
};

function getQuickBuy(id, handle) {
    var productData = {
        id: id,
        json: ''
    };

    $.ajax({
        url: '/products/' + handle + '?view=quickbuy',
        success: function (data) {
            productData.json = data;
            window.quickBuyData.push(productData);

            // Update the Quick Buy template
            var codeBlockElement = $('.product-block[data-product-id=' + id + ']').find('.replace_with_quickbuy');
            codeBlockElement.replaceWith(productData.json);
        }
    });
}

BCSfFilter.prototype.getFilterData=function(eventType,errorCount){function BCSend(eventType,errorCount){var self=bcsffilter;var errorCount=typeof errorCount!=="undefined"?errorCount:0;self.showLoading();if(typeof self.buildPlaceholderProductList=="function"){self.buildPlaceholderProductList(eventType)}self.beforeGetFilterData(eventType);self.prepareRequestParams(eventType);self.queryParams["callback"]="BCSfFilterCallback";self.queryParams["event_type"]=eventType;var url=self.isSearchPage()?self.getApiUrl("search"):self.getApiUrl("filter");var script=document.createElement("script");script.type="text/javascript";var timestamp=(new Date).getTime();script.src=url+"?t="+timestamp+"&"+jQ.param(self.queryParams);script.id="bc-sf-filter-script";script.async=true;var resendAPITimer,resendAPIDuration;resendAPIDuration=2e3;script.addEventListener("error",function(e){if(typeof document.getElementById(script.id).remove=="function"){document.getElementById(script.id).remove()}else{document.getElementById(script.id).outerHTML=""}if(errorCount<3){errorCount++;if(resendAPITimer){clearTimeout(resendAPITimer)}resendAPITimer=setTimeout(self.getFilterData("resend",errorCount),resendAPIDuration)}else{self.buildDefaultElements(eventType)}});document.getElementsByTagName("head")[0].appendChild(script);script.onload=function(){if(typeof document.getElementById(script.id).remove=="function"){document.getElementById(script.id).remove()}else{document.getElementById(script.id).outerHTML=""}}}this.requestFilter(BCSend,eventType,errorCount)};BCSfFilter.prototype.requestFilter=function(sendFunc,eventType,errorCount){sendFunc(eventType,errorCount)};
