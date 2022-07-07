/* eslint-disable no-restricted-globals */
/* eslint-disable no-param-reassign */
/* global Shopify */
import { html, css, LitElement } from 'lit';
import { styleMap } from 'lit/directives/style-map.js';

const BOXER_VENDOR_HANDLE = 'GoBoxer';

export class BoxerProductOffer extends LitElement {
  static get styles() {
    return css`
      .boxer-offer-container {
        max-width: 410px;
        padding-bottom: 16px;
      }

      .boxer-offer-placeholder__content {
        border: 1px solid #00b0ff;
        border-radius: 4px;
      }

      @media only screen and (max-width: 510px) {
        .boxer-offer-container {
          max-width: calc(70% + 115px);
        }
      }

      .boxer-learn-more-modal {
        display: none;
        position: fixed;
        z-index: 99999999;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(235, 235, 235, 0.7);
        overflow: auto;
      }

      .boxer-learn-more-modal * {
        font-family: Helvetica, Arial, Sans-Serif;
        padding: 0;
        margin: 0;
        letter-spacing: -0.25px;
      }

      .boxer-learn-more-modal__content {
        background-color: #fefefe;
        display: inline-block;
        height: min-content;
        max-width: 744px;
        margin: auto auto;
        padding: 18px;
        border-radius: 12px;
      }

      .boxer-learn-more-modal__header {
        display: grid;
        grid-template-columns: auto auto;
        column-gap: 4px;
      }

      .boxer-learn-more-modal__header--heading {
        color: #1a237e;
        font-size: 36px;
        line-height: 1.2;
        letter-spacing: -2px;
        margin: 0;
      }

      .boxer-learn-more-modal__header--image {
        display: none;
      }

      .boxer-learn-more-modal__promises {
        display: grid;
        grid-template-columns: 1fr;
        row-gap: 12px;
      }

      .boxer-learn-more-modal__promises--promise {
        display: flex;
        align-items: center;
      }

      .boxer-learn-more-modal__promises--text {
        line-height: 18px;
        font-size: 14px;
        margin: 0;
        display: inline-block;
        padding-left: 12px;
        color: #1a237e;
      }

      .boxer-learn-more-modal__links {
        color: #0091ea;
        display: block;
        margin-top: 12px;
      }

      .boxer-learn-more-modal__links a {
        text-decoration: none;
      }

      .boxer-learn-more-modal__links--border {
        font-size: 14px;
        line-height: 16px;
        display: inline-block;
        border: 1px #00b0ff solid;
        padding: 12px 18px;
        border-radius: 4px;
        margin-right: 24px;
      }

      .boxer-learn-more-modal__links-container {
        white-space: nowrap;
        margin-top: 24px;
      }

      .boxer-learn-more-modal__promises--image-container {
        width: 60px;
        height: 60px;
        display: flex;
        justify-content: center;
      }

      .boxer-learn-more-modal__links--link {
        color: #0091ea;
      }

      .reset-margin {
        margin: 0;
      }

      @media screen and (min-width: 768px) {
        .boxer-learn-more-modal__container {
          padding-right: 48px;
        }

        .boxer-learn-more-modal__content {
          padding: 12px 24px 48px 48px;
        }

        .boxer-learn-more-modal__promises {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          column-gap: 6px;
        }

        .boxer-learn-more-modal__header--image {
          width: 106px;
          height: 102px;
          padding-right: 4px;
          display: block;
        }

        .boxer-learn-more-modal__links-container {
          display: inline-block;
          margin-top: 0px;
        }

        .boxer-learn-more-modal__links {
          align-items: center;
          display: inline-block;
        }
      }
    `;
  }

  static get properties() {
    return {
      cart: { type: Object },
      product: { type: Object },
      moneyFormat: { type: String, attribute: 'money-format' },
      moneyWithCurrencyFormat: {
        type: String,
        attribute: 'money-with-currency-format',
      },
      productVariantSelector: {
        type: String,
        attribute: 'product-variant-selector',
      },
      boxerProduct: { type: Object },
      quoteOptions: { type: Array },
      selectedVariant: { type: Object },
      isPlaceholder: { type: Boolean },
      isExpanded: { type: Boolean },
      isModalOpen: { type: Boolean },
      isAddedToCart: { type: Boolean },
    };
  }

  connectedCallback() {
    super.connectedCallback();
    this.disableProductButtons();
    this.hookIntoFetch();

    const selectedVariantInput = document.querySelector(
      this.productVariantSelector
    );

    this.selectedVariant = this.product.variants.find(
      variant => variant.id.toString() === selectedVariantInput.value
    );

    selectedVariantInput.addEventListener('change', event =>
      this.handleSelectedVariantChange(event)
    );
  }

  disconnectedCallback() {
    super.disconnectedCallback();

    const selectedVariantInput = document.querySelector(
      this.productVariantSelector
    );

    selectedVariantInput.removeEventListener('change', event =>
      this.handleSelectedVariantChange(event)
    );
  }

  formatMoney(b, g) {
    if (typeof Shopify.formatMoney === 'function') {
      return Shopify.formatMoney(b, g);
    }
    if (typeof b === 'string') {
      b = b.replace('.', '');
    }
    let f = '';
    const e = /\{\{\s*(\w+)\s*\}\}/;
    const a = g || this.moneyFormat;
    function c(h, i) {
      return typeof h === 'undefined' ? i : h;
    }
    function d(m, k, l, j) {
      k = c(k, 2);
      l = c(l, ',');
      j = c(j, '.');
      if (isNaN(m) || m == null) {
        return 0;
      }
      m = (m / 100).toFixed(k);
      const n = m.split('.');
      const i = n[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, `$1${l}`);
      const h = n[1] ? j + n[1] : '';
      return i + h;
    }
    switch (a.match(e)[1]) {
      case 'amount':
        f = d(b, 2);
        break;
      case 'amount_no_decimals':
        f = d(b, 0);
        break;
      case 'amount_with_comma_separator':
        f = d(b, 2, '.', ',');
        break;
      case 'amount_no_decimals_with_comma_separator':
        f = d(b, 0, '.', ',');
        break;
      // no default
    }
    return a.replace(e, f);
  }

  fetchBoxerProduct() {
    fetch('/apps/goboxer/cost-svc/v1/my-store-quotes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        accept: 'application/json',
      },
      cache: 'no-cache',
      body: JSON.stringify({
        product_description: this.product.description,
        product_cost_currency: this.cart.currency,
        product_cost_excl_tax: this.selectedVariant.price / 100,
        product_title: this.product.title,
      }),
    })
      .then(response => response.json())
      .then(data => {
        this.quote = data;
        if (data?.quote?.[0]?.costs?.length > 0) {
          const fillInBoxerQuotes = async () =>
            Promise.allSettled(
              data.quote[0].costs.map(async quote => {
                const response = await fetch(
                  `${window.Shopify.routes.root}products/goBoxer-${String(
                    quote.cost
                  ).replace('.', '-')}.js`,
                  {
                    method: 'GET',
                    headers: {
                      accept: 'application/json',
                    },
                    cache: 'no-cache',
                  }
                );

                const product = await response.json();

                const quoteYears = quote.period_months / 12;
                const yearText = quoteYears === 1 ? 'year' : 'years';

                this.quoteOptions.push({
                  value: product.variants[quoteYears - 1].id,
                  quoteYears,
                  yearText,
                });

                return product;
              })
            );

          fillInBoxerQuotes().then(values => {
            this.boxerProduct = values[0].value;
          });
        }
      })
      .then(() => {
        this.isPlaceholder = true;
      });
  }

  disableProductButtons() {
    if (this.product.vendor === BOXER_VENDOR_HANDLE) {
      const productForm = document.getElementsByTagName('product-form')[0];
      const productFormButtons = productForm.getElementsByTagName('button');
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < productFormButtons.length; i++) {
        productFormButtons[i].disabled = true;
        productFormButtons[i].setAttribute('aria-disabled', true);
      }
    }
  }

  toggleExpand() {
    this.isExpanded = !this.isExpanded;
  }

  toggleModalOpen() {
    this.isModalOpen = !this.isModalOpen;

    if (this.isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }

  handleOutsideClick(event) {
    if (
      event.composedPath()[0] ===
      this.shadowRoot.querySelector('.boxer-learn-more-modal')
    ) {
      this.isModalOpen = false;
    }
  }

  handleSelectedVariantChange(event) {
    this.selectedVariant = this.product.variants.find(
      variant => variant.id.toString() === event.target.value
    );
  }

  handleAddToCart(event) {
    const { checked } = event.target;
    this.isAddedToCart = checked;

    if (checked) {
      this.isExpanded = true;
    }
  }

  titleTemplate() {
    return html`
      <div>
        <p style="margin: 0; line-height: 19px; font-size: 12px">
          <b
            >Add Boxer™ cover from
            ${this.boxerProduct?.price
              ? this.formatMoney(
                  this.boxerProduct?.price,
                  this.moneyWithCurrencyFormat
                )
              : '$X.XX'}</b
          >
        </p>
        <p style="margin: 0; line-height: 14px; font-size: 12px">
          Includes carbon offset on shipping.
        </p>
      </div>
    `;
  }

  hookIntoFetch() {
    const nativeFetch = window.fetch;

    window.fetch = async (...args) => {
      if (args[0] === '/cart/add' || args[0] === '/cart/add.js') {
        let productId;
        let productQuantity;
        const body =
          typeof args[1]?.body === 'string' ? JSON.parse(args[1].body) : null;
        if (body) {
          productId = body?.items[0].id;
          productQuantity = body?.items[0].quantity;
        } else {
          for (const pair of args[1]?.body?.entries()) {
            switch (pair[0]) {
              case 'id':
                // eslint-disable-next-line prefer-destructuring
                productId = pair[1];
                break;
              case 'quantity':
                // eslint-disable-next-line prefer-destructuring
                productQuantity = pair[1];
                break;
              default:
                break;
            }
          }
        }

        const boxerIdInput = this.shadowRoot.querySelector(
          "select[name='boxer_item_id']"
        );
        const associatedProductVariantId = String(this.selectedVariant.id);

        if (boxerIdInput && productId === associatedProductVariantId) {
          const modifiedFormData = new FormData();

          modifiedFormData.append('id', parseInt(boxerIdInput.value, 10));
          modifiedFormData.append('quantity', parseInt(productQuantity, 10));
          modifiedFormData.append(
            'properties[_associated_product_compare_price_amount_cents]',
            this.shadowRoot.querySelector(
              "input[name='boxer_item_associated_product_compare_price_amount_cents']"
            ).value
          );
          modifiedFormData.append(
            'properties[_associated_product_compare_price_currency_code]',
            this.shadowRoot.querySelector(
              "input[name='boxer_item_associated_product_compare_price_currency_code']"
            ).value
          );
          modifiedFormData.append(
            'properties[_associated_product_title]',
            this.shadowRoot.querySelector(
              "input[name='boxer_item_associated_product_title']"
            ).value
          );
          modifiedFormData.append(
            'properties[_associated_product_variant_id]',
            associatedProductVariantId
          );
          modifiedFormData.append(
            'properties[_boxer_cover_compare_price_amount_cents]',
            this.shadowRoot.querySelector(
              "input[name='boxer_item_boxer_cover_compare_price_amount_cents']"
            ).value
          );
          modifiedFormData.append(
            'properties[_boxer_cover_compare_price_currency_code]',
            this.shadowRoot.querySelector(
              "input[name='boxer_item_boxer_cover_compare_price_currency_code']"
            ).value
          );
          modifiedFormData.append(
            'properties[_boxer_cover_product_variant_id]',
            boxerIdInput.value
          );
          modifiedFormData.append(
            'properties[_boxer_cover_quote_id]',
            this.shadowRoot.querySelector(
              "input[name='boxer_item_boxer_cover_quote_id']"
            ).value
          );

          const boxerCoverAddData = {
            items: [
              {
                id: parseInt(boxerIdInput.value, 10),
                quantity: parseInt(productQuantity, 10),
                properties: {
                  _associated_product_compare_price_amount_cents:
                    this.shadowRoot.querySelector(
                      "input[name='boxer_item_associated_product_compare_price_amount_cents']"
                    ).value,
                  _associated_product_compare_price_currency_code:
                    this.shadowRoot.querySelector(
                      "input[name='boxer_item_associated_product_compare_price_currency_code']"
                    ).value,
                  _associated_product_title: this.shadowRoot.querySelector(
                    "input[name='boxer_item_associated_product_title']"
                  ).value,
                  _associated_product_variant_id: this.shadowRoot.querySelector(
                    "input[name='boxer_item_associated_product_variant_id']"
                  ).value,
                  _boxer_cover_compare_price_amount_cents:
                    this.shadowRoot.querySelector(
                      "input[name='boxer_item_boxer_cover_compare_price_amount_cents']"
                    ).value,
                  _boxer_cover_compare_price_currency_code:
                    this.shadowRoot.querySelector(
                      "input[name='boxer_item_boxer_cover_compare_price_currency_code']"
                    ).value,
                  _boxer_cover_product_variant_id: boxerIdInput.value,
                  _boxer_cover_quote_id: this.shadowRoot.querySelector(
                    "input[name='boxer_item_boxer_cover_quote_id']"
                  ).value,
                },
              },
            ],
          };

          const addBoxerProduct = async () =>
            fetch('/cart/add', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                accept: 'application/json',
              },
              cache: 'no-cache',
              body: JSON.stringify(boxerCoverAddData),
            });
          await addBoxerProduct();
        }
      }

      return nativeFetch.apply(window, args);
    };
  }

  constructor() {
    super();
    this.cart = {};
    this.product = {};
    this.boxerProduct = null;
    this.quote = {};
    this.quoteOptions = [];
    this.productVariantSelector = 'input[name="id"]';
    this.selectedVariant = {};
    this.selectedVariantId = '';
    this.isPlaceholder = false;
    this.isExpanded = false;
    this.isModalOpen = false;
    this.isAddedToCart = false;
  }

  render() {
    if (!this.quoteOptions.length) {
      return null;
    }

    const isPlaceholder =
      this.isPlaceholder &&
      (window.Shopify.designMode || 'PreviewBarInjector' in window.Shopify);

    return html`
      <div id="boxer-offer-container" class="boxer-offer-container">
        ${isPlaceholder
          ? html`
              <p
                style="margin: 0; line-height: 16px; font-size: 12px; color: #00B0FF;"
              >
                <b>Boxer placeholder</b>
              </p>
            `
          : null}

        <div
          style=${isPlaceholder &&
          styleMap({
            border: '1px solid #00B0FF',
            borderRadius: '4px',
          })}
        >
          <div style="padding: 6px 2px 6px 10px">
            <div
              style="
                display: grid;
                grid-column-gap: 2px;
                grid-template-columns: 32px auto;
              "
            >
              <div>
                <input
                  type="checkbox"
                  aria-label="${this.isAddedToCart
                    ? 'Uncheck to exclude Boxer cover from your product'
                    : 'Check to add Boxer cover with your product'}"
                  name="boxer-options"
                  @change="${this.handleAddToCart}"
                  ?disabled="${isPlaceholder}"
                  style="transform: scale(1.5)"
                />
              </div>
              <div>
                <div
                  style="
                    display: grid;
                    grid-column-gap: 2px;
                    grid-template-columns: auto 56px;
                  "
                >
                  ${this.titleTemplate()}
                  <div style="display: flex; flex-shrink: 0;">
                    <img
                      width="32"
                      height="32"
                      src="https://goboxer.com/shopify-app-assets/boxer-logo-tm.svg"
                      alt="Boxer logo"
                      loading="lazy"
                    />
                    <svg
                      aria-label="Click to expand Boxer offer"
                      aria-hidden="${this.isExpanded}"
                      role="button"
                      @click="${this.toggleExpand}"
                      @keydown="${this.toggleExpand}"
                      style="display: ${this.isExpanded
                        ? 'none'
                        : 'block'}; cursor: pointer;"
                      width="24"
                      height="25"
                      viewBox="0 0 24 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12.0002 16.5002C11.7442 16.5002 11.4883 16.4023 11.2933 16.2073L5.29325 10.2072C4.90225 9.81625 4.90225 9.18425 5.29325 8.79325C5.68425 8.40225 6.31625 8.40225 6.70725 8.79325L12.0002 14.0862L17.2933 8.79325C17.6842 8.40225 18.3162 8.40225 18.7072 8.79325C19.0982 9.18425 19.0982 9.81625 18.7072 10.2072L12.7073 16.2073C12.5122 16.4023 12.2562 16.5002 12.0002 16.5002Z"
                        fill="#607D8B"
                      />
                    </svg>
                    <svg
                      aria-label="Click to collapse Boxer offer"
                      aria-hidden="${!this.isExpanded}"
                      role="button"
                      @click="${this.toggleExpand}"
                      @keydown="${this.toggleExpand}"
                      style="display: ${this.isExpanded
                        ? 'block'
                        : 'none'}; cursor: pointer;"
                      width="25"
                      height="25"
                      viewBox="0 0 25 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12.001 8.53773C12.257 8.53773 12.513 8.63573 12.708 8.83073L18.708 14.8307C19.099 15.2217 19.099 15.8537 18.708 16.2447C18.317 16.6357 17.685 16.6357 17.294 16.2447L12.001 10.9517L6.70799 16.2447C6.31699 16.6357 5.68499 16.6357 5.29399 16.2447C4.90299 15.8537 4.90299 15.2217 5.29399 14.8307L11.294 8.83073C11.489 8.63573 11.745 8.53773 12.001 8.53773Z"
                        fill="#607D8B"
                      />
                    </svg>
                  </div>
                </div>
                <div
                  style="display: ${this.isExpanded ? 'block' : 'none'};"
                  aria-hidden="${!this.isExpanded}"
                >
                  <div id="boxer-options" style="margin: 6px 0px;">
                    <div
                      style="align-items: center; display: inline-flex; column-gap: 8px;"
                    >
                      <select
                        id="boxer-options-select-value"
                        name="${this.isAddedToCart ? 'boxer_item_id' : ''}"
                        style="width: 100%; font-size: 12px; line-height: 14px; padding: 4px;"
                      >
                        ${this.quoteOptions?.length
                          ? this.quoteOptions?.map(
                              ({ value, quoteYears, yearText }, index) =>
                                html`<option
                                  id="boxer-quote-${index}"
                                  value="${value}"
                                >
                                  ${quoteYears} ${yearText} Boxer cover -
                                  ${this.formatMoney(
                                    this.boxerProduct.price,
                                    this.moneyWithCurrencyFormat
                                  )}
                                </option>`
                            )
                          : html`<option>1 year Boxer cover - $X.XX</option>`}
                      </select>

                      ${this.boxerProduct
                        ? html`
                            <input
                              id="boxer-associated-product-compare-price-amount-cents"
                              type="hidden"
                              name="${this.isAddedToCart
                                ? 'boxer_item_associated_product_compare_price_amount_cents'
                                : ''}"
                              .value="${this.selectedVariant.compare_at_price}"
                            />
                            <input
                              id="boxer-associated-product-compare-price-currency-code"
                              type="hidden"
                              name="${this.isAddedToCart
                                ? 'boxer_item_associated_product_compare_price_currency_code'
                                : ''}"
                              .value="${this.cart.currency}"
                            />
                            <input
                              id="boxer-associated-product-variant-id"
                              type="hidden"
                              name="${this.isAddedToCart
                                ? 'boxer_item_associated_product_variant_id'
                                : ''}"
                              .value="${this.selectedVariant.id}"
                            />
                            <input
                              id="boxer-associated-product-title"
                              type="hidden"
                              name="${this.isAddedToCart
                                ? 'boxer_item_associated_product_title'
                                : ''}"
                              .value="${this.product.title}"
                            />
                            <input
                              id="boxer-cover-compare-price-amount-cents"
                              type="hidden"
                              name="${this.isAddedToCart
                                ? 'boxer_item_boxer_cover_compare_price_amount_cents'
                                : ''}"
                              .value="${this.boxerProduct.compare_at_price}"
                            />
                            <input
                              id="boxer-cover-compare-price-currency-code"
                              type="hidden"
                              name="${this.isAddedToCart
                                ? 'boxer_item_boxer_cover_compare_price_currency_code'
                                : ''}"
                              .value="${this.cart.currency}"
                            />
                            <input
                              id="boxer-cover-quote-id"
                              type="hidden"
                              name="${this.isAddedToCart
                                ? 'boxer_item_boxer_cover_quote_id'
                                : ''}"
                              .value="${this.quote.quote_id}"
                            />
                            <input
                              id="boxer-cover-product-variant-id"
                              type="hidden"
                              name="${this.isAddedToCart
                                ? 'boxer_item_boxer_cover_product_variant_id'
                                : ''}"
                              .value="${this.boxerProduct.variants[0].id}"
                            />
                          `
                        : null}
                    </div>
                  </div>

                  <p style="margin: 0px; line-height: 16px; font-size: 12px;">
                    <b> Shop and be sure </b> when you add Boxer cover to your
                    purchase. For a one-off fee you can count on local support
                    where you live, no matter what you are buying and where you
                    are buying from.
                    <button
                      @click="${this.toggleModalOpen}"
                      id="boxer-learn-more"
                      style="
                        margin: 0px;
                        background: none;
                        border: none;
                        padding: 0px;
                        color: #0091ea;
                        cursor: pointer;
                        border-bottom: 1px solid;
                        display: inline-block;
                        font-size: 12px;
                        line-height: 16px;
                      "
                      type="button"
                    >
                      Learn more
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="boxer-learn-more-modal"
        aria-hidden="${this.isModalOpen}"
        style="display: ${this.isModalOpen ? 'flex' : 'none'}"
        @click="${this.handleOutsideClick}"
      >
        <div class="boxer-learn-more-modal__content">
          <div style="display: flex; justify-content: end;">
            <img
              style="cursor: pointer;"
              role="button"
              aria-label="Close Boxer modal"
              @click="${this.toggleModalOpen}"
              @keydown="${this.toggleModalOpen}"
              src="https://goboxer.com/shopify-app-assets/boxer-modal-close.svg"
              alt="close modal"
            />
          </div>
          <div class="boxer-learn-more-modal__container">
            <div class="boxer-learn-more-modal__header">
              <div>
                <h1 class="boxer-learn-more-modal__header--heading">
                  <b>Go Boxer&trade; for global shopping success</b>
                </h1>
                <p
                  class="reset-margin"
                  style="margin-top: 6px; color: #455a64; font-size: 12px; line-height: 18px;"
                >
                  When you add Boxer cover to your purchase you can be confident
                  that if something unexpectedly goes wrong you can count on
                  local support where you live – even if what you’re buying
                  comes from 20,000km away.
                </p>
              </div>
              <img
                class="boxer-learn-more-modal__header--image"
                src="https://goboxer.com/shopify-app-assets/boxer-stamp.svg"
                alt="Boxer stamp"
              />
            </div>
            <div
              style="border-top-right-radius: 4px; border-top-left-radius: 4px; margin-top: 18px; padding: 12px 24px 12px 24px; background-color: rgba(128, 216, 255, .2);"
            >
              <p
                class="reset-margin"
                style="padding-bottom: 10px; color: #1a237e; font-size: 15px; line-height: 18px;"
              >
                <b>Boxer will back you up if your purchase...</b>
              </p>
              <div class="boxer-learn-more-modal__promises">
                <div class="boxer-learn-more-modal__promises--promise">
                  <div
                    class="boxer-learn-more-modal__promises--image-container"
                  >
                    <img
                      src="https://goboxer.com/shopify-app-assets/boxer-is-not-delivered.svg"
                      alt="not delivered"
                    />
                  </div>
                  <p class="boxer-learn-more-modal__promises--text">
                    <b>is not delivered</b>
                  </p>
                </div>
                <div class="boxer-learn-more-modal__promises--promise">
                  <div
                    class="boxer-learn-more-modal__promises--image-container"
                  >
                    <img
                      src="https://goboxer.com/shopify-app-assets/boxer-is-counterfeit.svg"
                      alt="not genuine"
                    />
                  </div>
                  <p class="boxer-learn-more-modal__promises--text">
                    <b>is not genuine</b>
                  </p>
                </div>
                <div class="boxer-learn-more-modal__promises--promise">
                  <div
                    class="boxer-learn-more-modal__promises--image-container"
                  >
                    <img
                      src="https://goboxer.com/shopify-app-assets/boxer-is-faulty.svg"
                      alt="faulty"
                    />
                  </div>
                  <p class="boxer-learn-more-modal__promises--text">
                    <b>is faulty</b>
                  </p>
                </div>
              </div>
              <p
                class="reset-margin"
                style="padding: 10px 0px 0px 0px; color: #1a237e; font-size: 12px; line-height: 16px;"
              >
                And if there are extra shipping costs involved to sort out your
                issue, Boxer will take care of those as well.
              </p>
            </div>
            <div
              style="border-bottom-right-radius: 4px; border-bottom-left-radius: 4px; padding: 12px 24px 12px 24px; background-color: #e4fef6; display: flex;"
            >
              <img
                height="40px"
                width="36px"
                src="https://goboxer.com/shopify-app-assets/boxer-sustainability.svg"
                alt="sustainability"
              />
              <p
                class="reset-margin"
                style="color: #033026; margin-left: 12px; font-size: 12px; line-height: 20px;"
              >
                <b
                  >Plus, for every cover added Boxer will offset the carbon cost
                  of shipping your item from our store to you.</b
                >
              </p>
            </div>
            <p
              class="reset-margin"
              style="margin-top: 12px; color: #455a64; font-size: 12px; line-height: 20px;"
            >
              Shop and be sure with Boxer to make your shopping mission a
              success.
            </p>
            <div class="boxer-learn-more-modal__links">
              <a
                class="boxer-learn-more-modal__links--border boxer-learn-more-modal__links--link"
                href="https://goboxer.com/"
                target="_blank"
                ><b>GoBoxer.com</b></a
              >
              <div class="boxer-learn-more-modal__links-container">
                <a
                  class="boxer-learn-more-modal__links--link"
                  style="margin-right: 24px; font-size: 12px; line-height: 14px;"
                  href="https://goboxer.com/info/retailer-or-marketplace-purchase-cover-terms/"
                  target="_blank"
                  >Boxer cover terms</a
                >
                <a
                  class="boxer-learn-more-modal__links--link"
                  style="font-size: 12px; line-height: 14px;"
                  href="https://goboxer.com/legals/privacy-policy"
                  target="_blank"
                  >Privacy statement</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  updated(changedProperties) {
    if (changedProperties.has('selectedVariant')) {
      this.fetchBoxerProduct();
    }
  }
}
