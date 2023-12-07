<template>
  <div class="checkouts-container">
      <div class="checkouts row flex-lg-row-reverse">
        <div class="collcont d-flex d-lg-none">
          <div @click="aass" class="collbtn d-flex" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
            <span>
              {{ ariaexsummary ? 'Hide' : 'Show'}} order summary
              <font-awesome-icon v-if="ariaexsummary" icon="fa-solid fa-caret-up" />
              <font-awesome-icon v-if="!ariaexsummary" icon="fa-solid fa-caret-down" />
            </span>
            <span>{{ totalCartPrice }} LE</span>
          </div>
        </div>
        <div class="products-info collapse d-lg-block col-12 col-lg-5" id="collapseExample">
          <div class="products-content">
            <div class="products">
              <div  v-for="product in getCartBag" :key="product.id" class="product">
                <div class="prodcard">
                  <div class="prod-img">
                    <img :src="product.img" alt="">
                    <span>{{ product.count }}</span>
                  </div>
                  <div class="prodinfo">
                    <div class="prodname">{{ product.name }}</div>
                    <div class="sc">{{ product.color }} / {{ product.size }}</div>
                  </div>
                </div>
                <div class="prodprice">{{ product.discount ?  ((product.price * product.count) - (product.discount * product.count)).toFixed(2) : product.price * product.count }} LE</div>
              </div>
              <div class="controls">
              <div class="form-floating">
                <input type="text" class="form-control" id="apply" placeholder="Gift card" v-model="giftCard">
                <label for="apply">Gift card</label>
              </div>
                <button :class="applaycheck">Apply</button>
              </div>
              <div class="totals">
                <div class="subtotal">
                  <span>subtotal</span>
                  <span>{{ totalCartPrice }} LE</span>
                </div>
                <div class="shipping">
                  <span class="spicon">
                    shipping
                    <font-awesome-icon @click="openShippingPopup('open')" icon="fa-regular fa-circle-question" />
                    </span>
                  <span>Enter shipping address</span>
                </div>
                <div class="total">
                  <span>total</span>
                  <span>{{ totalCartPrice }} LE</span>
                </div>
                  <teleport to="body">
                    <transition name="popup">
                      <div v-if="shippingpopup" class="shipping-popup">
                        <div @click="openShippingPopup('close')" class="blueshadow"></div>
                        <div class="popup">
                          <div class="head">
                            <h4>Shipping policy</h4>
                            <span @click="openShippingPopup('close')">X</span>
                          </div>
                          <div class="content">
                            <div class="sec">
                              <span>Shipping</span>
                              <p>Stabraq is not responsible for return shipping costs. Every shipping has to be paid by the customer, even if the item had free shipping in the first place, the customer has to pay for the shipping in return.</p>
                            </div>
                            <div class="sec">
                              <span>Your Consent</span>
                              <p>By using our website, registering an account, or making a purchase, you hereby consent to our Return & Refund Policy and agree to its terms.</p>
                            </div>
                            <div class="sec">
                              <span>Changes To Our Return & Refund Policy</span>
                              <p>Should we update, amend or make any changes to this document so that they accurately reflect our Service and policies. Unless otherwise required by law, those changes will be prominently posted here. Then, if you continue to use the Service, you will be bound by the updated Return & Refund Policy. If you do not want to agree to this or any updated Return & Refund Policy, you can delete your account.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </transition>
                  </teleport>
              </div>
            </div>
          </div>
        </div>
        <div class="contact col-12 col-lg-7">
          <div class="contact-content">
            <div v-if="errorinput" class="alert alert-danger" role="alert">
              Your information is incorrect, please check your input fields
            </div>
            <form @submit.prevent="submitForm">
              <div class="contactcont">
                <div class="head">
                  <h2>Contact</h2>
                  <span v-if="!checkacc">Have an account? <router-link to="/AccountRegister">Log in</router-link></span>
                </div>
                <div class="form-floating" :class='{invalid: !email.isvalid.emailvalid || !email.isvalid.emptyvalid}'>
                  <input type="email" class="form-control" id="contact" placeholder="Email" v-model.trim="email.val" @blur="clearValidate('email')">
                  <label for="contact">Email</label>
                  <p v-if="!email.isvalid.emailvalid && email.isvalid.emptyvalid">Email field must be correct</p>
                  <p v-if="!email.isvalid.emptyvalid && email.isvalid.emailvalid">Email field must not be empty</p>
                  <p v-if="!email.isvalid.emptyvalid && !email.isvalid.emailvalid">Email field must not be empty or wrong</p>
                </div>
              </div>
              <div class="delivery">
                <div class="head">
                  <h2>Delivery</h2>
                </div>
                <div class="delivery-controls">
                  <div class="form-check active">
                      <input @click="delactive" class="form-check-input" type="radio" name="flexRadioDefault" value="ship" id="flexRadioDefault1" checked v-model="delivery">
                      <label @click="delactive" class="form-check-label" for="flexRadioDefault1">
                        <span>Ship</span>
                        <font-awesome-icon icon="fa-solid fa-truck-fast" />
                      </label>
                  </div>
                  <div class="form-check">
                      <input @click="delactive" class="form-check-input" type="radio" name="flexRadioDefault" value="pickup" id="flexRadioDefault2" v-model="delivery">
                      <label @click="delactive" class="form-check-label" for="flexRadioDefault2">
                        <span>Pick up</span>
                        <font-awesome-icon icon="fa-solid fa-shop" />
                      </label>
                  </div>
                </div>
                <div class="delivery-content">
                  <div v-if="delivery === 'ship'" class="ship">
                    <div class="form-floating country" :class='{invalid: !country.isvalid}'>
                      <select class="form-select" id="floatingSelect" aria-label="Floating label select example" v-model.trim="country.val">
                        <option value="EG">Egypt</option>
                        <option value="SA">Saudi Arabia</option>
                        <option disabled="" value="">---</option>
                        <option value="AL">Albania</option>
                        <option value="AT">Austria</option>
                        <option value="BH">Bahrain</option>
                        <option value="BD">Bangladesh</option>
                        <option value="BE">Belgium</option>
                        <option value="CA">Canada</option>
                        <option value="CN">China</option>
                        <option value="CO">Colombia</option>
                        <option value="HR">Croatia</option>
                        <option value="CZ">Czechia</option>
                        <option value="EC">Ecuador</option>
                        <option value="EG">Egypt</option>
                        <option value="SV">El Salvador</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                        <option value="GR">Greece</option>
                        <option value="GL">Greenland</option>
                        <option value="IS">Iceland</option>
                        <option value="IN">India</option>
                        <option value="ID">Indonesia</option>
                        <option value="IR">Iran</option>
                        <option value="IE">Ireland</option>
                        <option value="IT">Italy</option>
                        <option value="JP">Japan</option>
                        <option value="JO">Jordan</option>
                        <option value="KE">Kenya</option>
                        <option value="KW">Kuwait</option>
                        <option value="LB">Lebanon</option>
                        <option value="MY">Malaysia</option>
                        <option value="MT">Malta</option>
                        <option value="MC">Monaco</option>
                        <option value="MA">Morocco</option>
                        <option value="NL">Netherlands</option>
                        <option value="OM">Oman</option>
                        <option value="PK">Pakistan</option>
                        <option value="PS">Palestinian Territories</option>
                        <option value="PH">Philippines</option>
                        <option value="QA">Qatar</option>
                        <option value="RU">Russia</option>
                        <option value="SA">Saudi Arabia</option>
                        <option value="ES">Spain</option>
                        <option value="SD">Sudan</option>
                        <option value="TW">Taiwan</option>
                        <option value="TH">Thailand</option>
                        <option value="TN">Tunisia</option>
                        <option value="TR">Turkey</option>
                        <option value="AE">United Arab Emirates</option>
                        <option value="GB">United Kingdom</option>
                        <option value="US">United States</option>
                      </select>
                      <label for="floatingSelect">country/Region</label>
                      <p v-if="!country.isvalid">Country field must not be empty</p>
                    </div>
                    <div class="name">
                      <div class="form-floating fname" :class='{invalid: !fname.isvalid}'>
                        <input type="text" class="form-control" id="fname" placeholder="First name" v-model.trim="fname.val" @blur="clearValidate('fname')"  @keyup="clearValidate('fname')">
                        <label for="fname">First name</label>
                        <p v-if="!fname.isvalid">First name must not be empty</p>
                      </div>
                      <div class="form-floating lname" :class='{invalid: !lname.isvalid}'>
                        <input type="text" class="form-control" id="lname" placeholder="Last name" v-model.trim="lname.val" @blur="clearValidate('lname')"  @keyup="clearValidate('lname')">
                        <label for="lname">Last name</label>
                        <p v-if="!lname.isvalid">Last name must not be empty</p>
                      </div>
                    </div>
                    <div class="form-floating address" :class='{invalid: !address.isvalid}'>
                      <input type="text" class="form-control" id="address" placeholder="Address" v-model.trim="address.val" @blur="clearValidate('address')" @keyup="clearValidate('address')">
                      <label for="address">Address</label>
                      <p v-if="!address.isvalid">Address must not be empty</p>
                    </div>
                    <div class="info">
                      <div class="form-floating" :class='{invalid: !city.isvalid, countrydiff: country.val !== "EG"}'>
                        <input type="text" class="form-control" id="city" placeholder="City" v-model.trim="city.val" @blur="clearValidate('city')" @keyup="clearValidate('city')">
                        <label for="city">City</label>
                        <p v-if="!city.isvalid">City field must not be empty</p>
                      </div>
                      <div class="form-floating" v-if="country.val === 'EG'" :class='{invalid: !gover.isvalid, countrydiff: country.val !== "EG"}'>
                        <select class="form-select" id="gover" aria-label="Floating label select example" v-model="gover.val">
                          <option value="SU">6th of October</option>
                          <option value="SHR">Al Sharqia</option>
                          <option value="ALX">Alexandria</option>
                          <option value="ASN">Aswan</option>
                          <option value="AST">Asyut</option>
                          <option value="BH">Beheira</option>
                          <option value="BNS">Beni Suef</option>
                          <option value="C">Cairo</option>
                          <option value="DK">Dakahlia</option>
                          <option value="DT">Damietta</option>
                          <option value="FYM">Faiyum</option>
                          <option value="GH">Gharbia</option>
                          <option value="GZ">Giza</option>
                          <option value="HU">Helwan</option>
                          <option value="IS">Ismailia</option>
                          <option value="KFS">Kafr el-Sheikh</option>
                          <option value="LX">Luxor</option>
                          <option value="MT">Matrouh</option>
                          <option value="MN">Minya</option>
                          <option value="MNF">Monufia</option>
                          <option value="WAD">New Valley</option>
                          <option value="SIN">North Sinai</option>
                          <option value="PTS">Port Said</option>
                          <option value="KB">Qalyubia</option>
                          <option value="KN">Qena</option>
                          <option value="BA">Red Sea</option>
                          <option value="SHG">Sohag</option>
                          <option value="JS">South Sinai</option>
                          <option value="SUZ">Suez</option>
                        </select>
                        <label for="gover">Governorate</label>
                        <p v-if="!gover.isvalid">Governorate must no be empty</p>
                      </div>
                      <div class="form-floating" :class='{invalid: !postalcode.isvalid, countrydiff: country.val !== "EG"}'>
                        <input type="text" class="form-control" id="postalcode" placeholder="Postal code" v-model.trim="postalcode.val" @blur="clearValidate('postalcode')" @keyup="clearValidate('postalcode')">
                        <label for="postalcode">Postal code</label>
                        <p v-if="!postalcode.isvalid">Postal code must not be empty</p>
                      </div>
                    </div>
                    <div class="form-floating phone" :class='{invalid: !phone.isvalid}'>
                      <input type="number" class="form-control" id="Phone" placeholder="Phone" v-model.trim="phone.val" @blur="clearValidate('phone')" @keyup="clearValidate('phone')">
                      <label for="Phone">Phone</label>
                      <font-awesome-icon icon="fa-regular fa-circle-question" />
                      <span>In case we need to <br> contact you about your order</span>
                      <p v-if="!phone.isvalid">Phone must not be empty</p>
                    </div>
                    <div class="form-check saveinfo">
                      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                      <label class="form-check-label" for="flexCheckDefault">
                        Save this information for next time
                      </label>
                    </div>
                    <div class="form-check textme">
                      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                      <label class="form-check-label" for="flexCheckDefault">
                        Text me with news and offers
                      </label>
                    </div>
                    <div class="shipping-methods">
                      <h3>shipping-methods</h3>
                      <div class="form-check active">
                          <input @click="shippingmethodactive" class="form-check-input" type="radio" name="shippingmethods" value="aramexoffice" id="aram" checked v-model="shippingmethods">
                          <label @click="shippingmethodactive" class="form-check-label" for="aram">
                            <span>Aramex Office</span>
                            <span class="price">35 LE</span>
                          </label>
                      </div>
                      <div class="form-check">
                          <input @click="shippingmethodactive" class="form-check-input" type="radio" name="shippingmethods" value="doorstep" id="doorstep" v-model="shippingmethods">
                          <label @click="shippingmethodactive" class="form-check-label" for="doorstep">
                            <span>Doorstep shipping</span>
                            <span class="price">70 LE</span>
                          </label>
                      </div>
                    </div>
                  </div>
                  <div v-if="delivery === 'pickup'" class="pickup">
                    <h4>Pickup locations</h4>
                    <p>There is 1 store with stock close to your location</p>
                    <div class="onlinestore">
                      <div class="onlinehead">
                        <span>Online Store</span>
                        <p>1 Mostafa El-Nahaas, 1st Floor, C, Nasr City</p>
                      </div>
                      <div class="info">
                        <span>Free</span>
                        <p>Usually ready in 24 hours</p>
                      </div>
                    </div>
                    <div class="form-check textme">
                      <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                      <label class="form-check-label" for="flexCheckDefault">
                        Text me with news and offers
                      </label>
                    </div>
                </div>
                </div>
              </div>
              <div class="payment" id="payment">
                <h3>Payment</h3>
                <p>All transactions are secure and encrypted.</p>
                  <div class="form-check active" type="button" data-bs-toggle="collapse" data-bs-target="#collapsevisa" aria-expanded="false" aria-controls="collapsevisa">
                    <input @click="paymentmethods" class="form-check-input" type="radio" name="payment" value="visa" id="visa" checked v-model="paymentmethod">
                    <label @click="paymentmethods" class="form-check-label" for="visa">
                      <span>Pay via (Debit/Credit cards/Wallets/Installments)</span>
                    </label>
                  </div>
                  <div class="visaalert collapse show" aria-labelledby="collapsevisa" id="collapsevisa" data-bs-parent="#payment">
                    <font-awesome-icon icon="fa-regular fa-window-restore" />
                    <p>After clicking “Pay now”, you will be redirected to Pay via (Debit/Credit cards/Wallets/Installments) to complete your purchase securely.</p>
                  </div>
                  <div class="form-check" type="button" data-bs-toggle="collapse" data-bs-target="#collapsevisa2" aria-expanded="false" aria-controls="collapsevisa2">
                    <input @click="paymentmethods" class="form-check-input" type="radio" name="payment" value="cash" id="cash" v-model="paymentmethod">
                    <label @click="paymentmethods" class="form-check-label" for="cash">
                      <span>Cash on Delivery (COD)</span>
                    </label>
                  </div>
                  <div aria-labelledby="collapsevisa2" id="collapsevisa2" data-bs-parent="#payment"></div>
              </div>
              <div class="billingaddress" id="accordion">
                <h3>Billing address</h3>
                <div class="form-check active" type="button" data-bs-toggle="collapse" data-bs-target="#collapsebilling2" aria-expanded="false" aria-controls="collapsebilling2">
                  <input @click="billingmethods" class="form-check-input" type="radio" name="billing" value="sameasshipping" id="sameasshipping" checked v-model="billingmethod">
                  <label @click="billingmethods" class="form-check-label" for="sameasshipping">
                    <span>Same as shipping address</span>
                  </label>
                </div>
                <div class="collapse" aria-labelledby="collapsebilling2" id="collapsebilling2" data-bs-parent="#accordion"></div>
                <div class="form-check" type="button" data-bs-toggle="collapse" data-bs-target="#collapsebilling" aria-expanded="false" aria-controls="collapsebilling">
                  <input @click="billingmethods" class="form-check-input" type="radio" name="billing" value="useadifferent" id="useadifferent" v-model="billingmethod">
                  <label @click="billingmethods" class="form-check-label" for="useadifferent">
                    <span>Use a different billing address</span>
                  </label>
                </div>
                <div class="billingalert collapse" aria-labelledby="collapsebilling" id="collapsebilling" data-bs-parent="#accordion">
                  <div class="ship">
                    <div class="form-floating country" :class='{invalid: !billinginfo.country.isvalid}'>
                      <select class="form-select" id="floatingSelect" aria-label="Floating label select example" v-model.trim="billinginfo.country.val">
                        <option value="EG">Egypt</option>
                        <option value="SA">Saudi Arabia</option>
                        <option disabled="" value="">---</option>
                        <option value="AL">Albania</option>
                        <option value="AT">Austria</option>
                        <option value="BH">Bahrain</option>
                        <option value="BD">Bangladesh</option>
                        <option value="BE">Belgium</option>
                        <option value="CA">Canada</option>
                        <option value="CN">China</option>
                        <option value="CO">Colombia</option>
                        <option value="HR">Croatia</option>
                        <option value="CZ">Czechia</option>
                        <option value="EC">Ecuador</option>
                        <option value="EG">Egypt</option>
                        <option value="SV">El Salvador</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                        <option value="GR">Greece</option>
                        <option value="GL">Greenland</option>
                        <option value="IS">Iceland</option>
                        <option value="IN">India</option>
                        <option value="ID">Indonesia</option>
                        <option value="IR">Iran</option>
                        <option value="IE">Ireland</option>
                        <option value="IT">Italy</option>
                        <option value="JP">Japan</option>
                        <option value="JO">Jordan</option>
                        <option value="KE">Kenya</option>
                        <option value="KW">Kuwait</option>
                        <option value="LB">Lebanon</option>
                        <option value="MY">Malaysia</option>
                        <option value="MT">Malta</option>
                        <option value="MC">Monaco</option>
                        <option value="MA">Morocco</option>
                        <option value="NL">Netherlands</option>
                        <option value="OM">Oman</option>
                        <option value="PK">Pakistan</option>
                        <option value="PS">Palestinian Territories</option>
                        <option value="PH">Philippines</option>
                        <option value="QA">Qatar</option>
                        <option value="RU">Russia</option>
                        <option value="SA">Saudi Arabia</option>
                        <option value="ES">Spain</option>
                        <option value="SD">Sudan</option>
                        <option value="TW">Taiwan</option>
                        <option value="TH">Thailand</option>
                        <option value="TN">Tunisia</option>
                        <option value="TR">Turkey</option>
                        <option value="AE">United Arab Emirates</option>
                        <option value="GB">United Kingdom</option>
                        <option value="US">United States</option>
                      </select>
                      <label for="floatingSelect">country/Region</label>
                      <p v-if="!billinginfo.country.isvalid">Country field must not be empty</p>
                    </div>
                    <div class="name">
                      <div class="form-floating fname" :class='{invalid: !billinginfo.fname.isvalid}'>
                        <input type="text" class="form-control" id="fname" placeholder="First name" v-model.trim="billinginfo.fname.val" @blur="clearValidatebilling('fname')"  @keyup="clearValidatebilling('fname')">
                        <label for="fname">First name</label>
                        <p v-if="!billinginfo.fname.isvalid">First name must not be empty</p>
                      </div>
                      <div class="form-floating lname" :class='{invalid: !billinginfo.lname.isvalid}'>
                        <input type="text" class="form-control" id="lname" placeholder="Last name" v-model.trim="billinginfo.lname.val" @blur="clearValidatebilling('lname')"  @keyup="clearValidatebilling('lname')">
                        <label for="lname">Last name</label>
                        <p v-if="!billinginfo.lname.isvalid">Last name must not be empty</p>
                      </div>
                    </div>
                    <div class="form-floating address" :class='{invalid: !billinginfo.address.isvalid}'>
                      <input type="text" class="form-control" id="address" placeholder="Address" v-model.trim="billinginfo.address.val" @blur="clearValidatebilling('address')" @keyup="clearValidatebilling('address')">
                      <label for="address">Address</label>
                      <p v-if="!billinginfo.address.isvalid">Address must not be empty</p>
                    </div>
                    <div class="info">
                      <div class="form-floating" :class='{invalid: !billinginfo.city.isvalid, countrydiff: country.val !== "EG"}'>
                        <input type="text" class="form-control" id="city" placeholder="City" v-model.trim="billinginfo.city.val" @blur="clearValidatebilling('city')" @keyup="clearValidatebilling('city')">
                        <label for="city">City</label>
                        <p v-if="!billinginfo.city.isvalid">City field must not be empty</p>
                      </div>
                      <div class="form-floating" v-if="country.val === 'EG'" :class='{invalid: !billinginfo.gover.isvalid, countrydiff: country.val !== "EG"}'>
                        <select class="form-select" id="gover" aria-label="Floating label select example" v-model="billinginfo.gover.val">
                          <option value="SU">6th of October</option>
                          <option value="SHR">Al Sharqia</option>
                          <option value="ALX">Alexandria</option>
                          <option value="ASN">Aswan</option>
                          <option value="AST">Asyut</option>
                          <option value="BH">Beheira</option>
                          <option value="BNS">Beni Suef</option>
                          <option value="C">Cairo</option>
                          <option value="DK">Dakahlia</option>
                          <option value="DT">Damietta</option>
                          <option value="FYM">Faiyum</option>
                          <option value="GH">Gharbia</option>
                          <option value="GZ">Giza</option>
                          <option value="HU">Helwan</option>
                          <option value="IS">Ismailia</option>
                          <option value="KFS">Kafr el-Sheikh</option>
                          <option value="LX">Luxor</option>
                          <option value="MT">Matrouh</option>
                          <option value="MN">Minya</option>
                          <option value="MNF">Monufia</option>
                          <option value="WAD">New Valley</option>
                          <option value="SIN">North Sinai</option>
                          <option value="PTS">Port Said</option>
                          <option value="KB">Qalyubia</option>
                          <option value="KN">Qena</option>
                          <option value="BA">Red Sea</option>
                          <option value="SHG">Sohag</option>
                          <option value="JS">South Sinai</option>
                          <option value="SUZ">Suez</option>
                        </select>
                        <label for="gover">Governorate</label>
                        <p v-if="!billinginfo.gover.isvalid">Governorate must no be empty</p>
                      </div>
                      <div class="form-floating" :class='{invalid: !billinginfo.postalcode.isvalid, countrydiff: country.val !== "EG"}'>
                        <input type="text" class="form-control" id="postalcode" placeholder="Postal code" v-model.trim="billinginfo.postalcode.val" @blur="clearValidatebilling('postalcode')" @keyup="clearValidatebilling('postalcode')">
                        <label for="postalcode">Postal code</label>
                        <p v-if="!billinginfo.postalcode.isvalid">Postal code must not be empty</p>
                      </div>
                    </div>
                    <div class="form-floating phone" :class='{invalid: !billinginfo.phone.isvalid}'>
                      <input type="number" class="form-control" id="Phone" placeholder="Phone (optional)" v-model.trim="billinginfo.phone.val" @blur="clearValidate('phone')" @keyup="clearValidatebilling('phone')">
                      <label for="Phone">Phone (optional)</label>
                      <font-awesome-icon icon="fa-regular fa-circle-question" />
                      <span>In case we need to <br> contact you about your order</span>
                      <p v-if="!billinginfo.phone.isvalid">Phone must not be empty</p>
                    </div>
                  </div>
                </div>
              </div>
              <div @click="sendorder" class="submitbtn">{{ paymentmethod === 'visa'? "Pay now": 'Complete order'}}</div>
            </form>
          </div>
          <hr>
          <div class="contact-footer">
            <div class="footer">
              <router-link to="/refundPolicy">Refund policy</router-link>
              <router-link to="/checkouts">Shipping policy</router-link>
              <router-link to="/checkouts">Privacy policy</router-link>
              <router-link to="/termsOfService">Terms of service</router-link>
              <router-link to="/checkouts">Contact information</router-link>
            </div>
          </div>
        </div>
      </div>
      <teleport to="body">
        <thanku-popup :show='thankuval'></thanku-popup>
      </teleport>
  </div>
</template>

<script>
export default {
  data () {
    return {
      giftCard: '',
      shippingpopup: false,
      ariaexsummary: false,
      delivery: 'ship',
      shippingmethods: 'aram',
      paymentmethod: 'visa',
      billingmethod: 'sameasshipping',
      email: {
        val: '',
        isvalid: {
          emptyvalid: true,
          emailvalid: true
        }
      },
      country: {
        val: 'EG',
        isvalid: true
      },
      fname: {
        val: '',
        isvalid: true
      },
      lname: {
        val: '',
        isvalid: true
      },
      city: {
        val: '',
        isvalid: true
      },
      postalcode: {
        val: '',
        isvalid: true
      },
      gover: {
        val: 'SU',
        isvalid: true
      },
      phone: {
        val: '',
        isvalid: true
      },
      address: {
        val: '',
        isvalid: true
      },
      billinginfo: {
        country: {
          val: 'EG',
          isvalid: true
        },
        fname: {
          val: '',
          isvalid: true
        },
        lname: {
          val: '',
          isvalid: true
        },
        city: {
          val: '',
          isvalid: true
        },
        postalcode: {
          val: '',
          isvalid: true
        },
        gover: {
          val: '',
          isvalid: true
        },
        phone: {
          val: '',
          isvalid: true
        },
        address: {
          val: '',
          isvalid: true
        }
      },
      formvalidation: true,
      errorinput: false
    }
  },
  methods: {
    sendorder () {
      this.validateForm()
      if (this.formvalidation === true) {
        this.errorinput = false
        const date = new Date()
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        const userId = this.$store.getters['auth/userId']
        const ordernum = Math.trunc(Math.random() * 10000)
        if (userId) {
          this.$store.dispatch('orders/setorder', {
            accid: userId,
            ordernumber: ordernum,
            date: `${months[date.getMonth()]} ${date.getDate()} ${date.getFullYear()}`,
            total: this.totalCartPrice,
            paymentstatus: 'Pending',
            fulfillmentstatus: 'Fulfilled'
          })
        }
        this.$store.dispatch('popup/thankuopenbtn')
        document.body.classList.add('stop-scrolling')
        this.$store.dispatch('sidebar/clearCartBag')
        window.localStorage.removeItem('cartProducts')
      } else {
        this.errorinput = true
        window.scrollTo(0, 0)
      }
    },
    cllapseshow (val) {
      const ele = document.querySelector(`.${val} .collapse`)
      ele.classList.remove('show')
    },
    loadCardData () {
      this.$store.dispatch('fetchData')
    },
    openShippingPopup (val) {
      if (val === 'open') {
        this.shippingpopup = true
        document.body.classList.add('stop-scrolling')
      } else {
        this.shippingpopup = false
        document.body.classList.remove('stop-scrolling')
      }
    },
    aass (e) {
      this.ariaexsummary = !this.ariaexsummary
      e.target.setAttribute('aria-expanded', this.ariaexsummary)
    },
    delactive (e) {
      const delcheck = document.querySelectorAll('.delivery .delivery-controls .form-check')
      delcheck.forEach((ele) => {
        ele.classList.remove('active')
      })
      e.target.parentElement.classList.add('active')
    },
    shippingmethodactive (e) {
      const delcheck = document.querySelectorAll('.delivery .shipping-methods .form-check')
      delcheck.forEach((ele) => {
        ele.classList.remove('active')
      })
      e.target.parentElement.classList.add('active')
    },
    paymentmethods (e) {
      const delcheck = document.querySelectorAll('.contact-content .payment .form-check')
      delcheck.forEach((ele) => {
        ele.classList.remove('active')
      })
      e.target.parentElement.classList.add('active')
    },
    billingmethods (e) {
      const delcheck = document.querySelectorAll('.contact-content .billingaddress .form-check')
      delcheck.forEach((ele) => {
        ele.classList.remove('active')
      })
      e.target.parentElement.classList.add('active')
    },
    validateForm () {
      this.formvalidation = true
      if (this.fname.val === '') {
        this.fname.isvalid = false
        this.formvalidation = false
      }
      if (this.email.val === '') {
        this.email.isvalid.emptyvalid = false
        this.formvalidation = false
      }
      if ((this.email.val).match(/\w+@gmail.com/) && this.email.val !== '') {
        this.email.isvalid.emailvalid = true
        this.email.isvalid.emptyvalid = true
      } else if (!((this.email.val).match(/\w+@gmail.com/)) && this.email.val !== '') {
        this.email.isvalid.emailvalid = false
        this.email.isvalid.emptyvalid = true
        this.formvalidation = false
      } else if (((this.email.val).match(/\w+@gmail.com/)) && this.email.val === '') {
        this.email.isvalid.emailvalid = true
        this.email.isvalid.emptyvalid = false
        this.formvalidation = false
      } else {
        this.email.isvalid.emailvalid = false
        this.email.isvalid.emptyvalid = false
        this.formvalidation = false
      }
      if (this.lname.val === '') {
        this.lname.isvalid = false
        this.formvalidation = false
      }
      if (this.city.val === '') {
        this.city.isvalid = false
        this.formvalidation = false
      }
      if (this.gover.val === '') {
        this.gover.isvalid = false
        this.formvalidation = false
      }
      if (this.phone.val === '') {
        this.phone.isvalid = false
        this.formvalidation = false
      }
      if (this.postalcode.val === '') {
        this.postalcode.isvalid = false
        this.formvalidation = false
      }
      if (this.address.val === '') {
        this.address.isvalid = false
        this.formvalidation = false
      }
      if (this.country.val === '') {
        this.country.isvalid = false
        this.formvalidation = false
      }
      if (this.billingmethod === 'useadifferent') {
        if (this.billinginfo.fname.val === '') {
          this.billinginfo.fname.isvalid = false
          this.formvalidation = false
        }
        if (this.billinginfo.lname.val === '') {
          this.billinginfo.lname.isvalid = false
          this.formvalidation = false
        }
        if (this.billinginfo.city.val === '') {
          this.billinginfo.city.isvalid = false
          this.formvalidation = false
        }
        if (this.billinginfo.gover.val === '') {
          this.billinginfo.gover.isvalid = false
          this.formvalidation = false
        }
        if (this.billinginfo.postalcode.val === '') {
          this.billinginfo.postalcode.isvalid = false
          this.formvalidation = false
        }
        if (this.billinginfo.address.val === '') {
          this.billinginfo.address.isvalid = false
          this.formvalidation = false
        }
        if (this.billinginfo.country.val === '') {
          this.billinginfo.country.isvalid = false
          this.formvalidation = false
        }
      }
    },
    clearValidate (input) {
      if (input === 'email') {
        if ((this.email.val).match(/\w+@gmail.com/) && this.email.val !== '') {
          this.email.isvalid.emailvalid = true
          this.email.isvalid.emptyvalid = true
        } else if (!((this.email.val).match(/\w+@gmail.com/)) && this.email.val !== '') {
          this.email.isvalid.emailvalid = false
          this.email.isvalid.emptyvalid = true
        } else if (((this.email.val).match(/\w+@gmail.com/)) && this.email.val === '') {
          this.email.isvalid.emailvalid = true
          this.email.isvalid.emptyvalid = false
        } else {
          this.email.isvalid.emailvalid = false
          this.email.isvalid.emptyvalid = false
        }
      } else {
        if (this[input].val === '') {
          this[input].isvalid = false
          this.formvalidation = false
        } else {
          this[input].isvalid = true
        }
      }
    },
    clearValidatebilling (input) {
      if (this.billinginfo[input].val === '') {
        this.billinginfo[input].isvalid = false
        this.formvalidation = false
      } else {
        this.billinginfo[input].isvalid = true
      }
    }
  },
  computed: {
    thankuval () {
      return this.$store.getters['popup/getthankupopval']
    },
    checkacc () {
      const userid = this.$store.getters['auth/userId']
      if (userid) {
        return true
      } else {
        return false
      }
    },
    getCartBag () {
      const cartBag = this.$store.getters['sidebar/cartBag']
      return cartBag
    },
    totalCartPrice () {
      const cartBag = this.$store.getters['sidebar/cartBag']
      const prices = cartBag.map((ele) => {
        if (ele.discount) {
          return (ele.price - ele.discount).toFixed(2) * ele.count
        } else {
          return ele.price * ele.count
        }
      })
      return prices.reduce((acc, curr) => {
        return acc + curr
      }, 0).toFixed(2)
    },
    applaycheck () {
      if (this.giftCard === '') {
        return 'apply noinput'
      } else {
        return 'apply withinput'
      }
    },
    labeltyping () {
      if (this.giftCard === '') {
        return ''
      } else {
        return 'typing'
      }
    },
    infofloat () {
      if (this.country.val !== 'EG') {
        return 'form-floating countrydiff'
      } else {
        return 'form-floating'
      }
    }
  },
  created () {
    this.loadCardData()
  }
}
</script>

<style lang="scss" scoped>
.checkouts-container{
  display: flex;
  justify-content: center;
  .form-floating{
    input{
      &:focus{
        box-shadow: none;
        border: 2px solid black;
      }
    }
  }
  .checkouts{
    width: 100%;
    .col-12{
      padding: 0;
    }
    .collcont{
      padding: 21px;
      background-color: #fafafa;
      .collbtn{
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        max-width: 600px;
        margin: auto;
        user-select: none;
        span:first-of-type{
          font-size: 14px;
          svg{
            margin-left: 5px;
          }
        }
        span:last-of-type{
          font-size: 17px;
          font-weight: 600;
        }
      }
    }
    @media (min-width: 1000px) {
      .contact{
        border-right: 1px solid #dfdfdf ;
      }
    }
    @media (max-width: 990px) {
      .products-info{
        .products-content{
          max-width: 600px !important;
          margin: auto;
          padding: 0 20px 20px 20px !important;
          .product:first-child{
            border-top: 1px solid #dfdfdf;
            margin-top: 0 !important;
            padding-top: 20px;
          }
        }
      }
    }
    .products-info{
      background-color: #fafafa;
      @media (min-width: 1023px) {
        .products-content{
          position: sticky;
          top: 0px;
        }
      }
      .products-content{
        padding: 40px;
        max-width: 455px;
        h2{
          font-size: 24px;
        }
        .products{
          .product{
            &:first-of-type{
              margin-top: 0;
            }
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin: 20px 0;
            .prodcard{
              display: flex;
              .prod-img{
                position: relative;
                margin-right: 14px;
                img{
                  width: 64px;
                  height: 64px;
                  border-radius: 6px;
                }
                span{
                  position: absolute;
                  top: -10px;
                  right: -10px;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  background-color: #0000008F;
                  color: white;
                  width: 22px;
                  height: 22px;
                  border-radius: 50%;
                  font-size: 13px;
                }
              }
              .prodinfo{
                display: flex;
                align-items: flex-start;
                flex-direction: column;
                justify-content: center;
                .prodname{
                  font-size: 14px;
                }
                .sc{
                  font-size: 13px;
                  color: #999999;
                  margin-right: 10px;
                }
              }
            }
            .prodprice{
              font-size: 14px;
              font-weight: 500;
            }
          }
          .controls{
            width: 100%;
            display: flex;
            position: relative;
            .apply{
              width: 70px;
              height: 58px;
              border-radius: 6px;
              transition-duration: 0.5s;
              &.withinput{
                background-color: #ff9800;
                border: none;
                color: white;
                &:hover{
                  background-color: #d98100;
                }
              }
              &.noinput{
                color: #6a6a6a;
                border: 1px solid #dadada;
                background-color: #f1f1f1;
                cursor: not-allowed;
              }
            }
            .form-floating{
              width: 100%;
              margin-right: 10px;
              input{
                width: 100%;
              }
            }
          }
          .totals{
            margin-top: 20px;
            position: relative;
            .subtotal{
              display: flex;
              justify-content: space-between;
              align-items: center;
              span:first-of-type{
                font-size: 15px;
                text-transform: capitalize;
              }
              span:last-of-type{
                font-size: 16px;
                font-weight: 600;
              }
            }
            .shipping{
              margin-top: 7px;
              display: flex;
              justify-content: space-between;
              align-items: center;
              span:first-of-type{
                font-size: 15px;
                text-transform: capitalize;
                svg{
                  color: #636363;
                  cursor: pointer;
                }
              }
              span:last-of-type{
                font-size: 12px;
                color: #0000008F;
              }
            }
            .total{
              margin-top: 7px;
              display: flex;
              justify-content: space-between;
              align-items: center;
              span:first-of-type{
                font-size: 18px;
                font-weight: 600;
                text-transform: capitalize;
              }
              span:last-of-type{
                font-size: 16px;
                font-weight: 600;
              }
            }
          }
        }
      }
    }
    .contact{
      @media (max-width: 990px) {
        .contact-content{
          padding: 20px !important;
          margin: auto;
        }
        .contact-footer{
          margin: auto;
          padding: 20px !important;
        }
      }
      .contact-content{
        padding: 40px;
        max-width: 650px;
        margin-left: auto;
          .ship{
            & :is(.country, .name, .info, .address, .phone){
            margin-bottom: 15px;
              select{
                box-shadow: none;
                &:focus{
                  border: 1px solid black;
                }
              }
            }
            .shipping-methods{
              h3{
                margin-top: 25px;
                margin-bottom: 20px;
                font-size: 18px;
              }
              .form-check{
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin-bottom: 0;
                border-radius: 6px;
                padding-left: 40px;
                border: 1px solid #dadada;
                .price{
                  font-weight: 600;
                }
                &.active{
                  background-color: #f6f6f6;
                  border-color: black;
                  svg{
                    color: black;
                  }
                }
                svg{
                  color: #cecbcb;
                }
                .form-check-input{
                  cursor: pointer;
                  &:checked{
                    background-color: black;
                    border-color: black;
                  }
                  &:focus{
                    box-shadow: none;
                  }
                }
                label{
                  padding: 15px 40px 15px 0;
                  width: 100%;
                  display: flex;
                  align-items: center;
                  justify-content: space-between;
                  cursor: pointer;
                }
                &:first-of-type{
                  border-bottom-right-radius: 0;
                  border-bottom-left-radius: 0;
                }
                &:last-of-type{
                  border-top-right-radius: 0;
                  border-top-left-radius: 0;
                }
              }
            }
            @media (max-width: 750px) {
              .name,
              .info{
                gap: 0;
                flex-direction: column;
                width: 100%;
                .form-floating{
                  width: 100% !important;
                }
              }
            }
            .name{
              display: flex;
              gap: 20px;
              .form-floating{
                width: calc((100% - 20px) / 2);
              }
            }
            .info{
              display: flex;
              gap: 20px;
              .form-floating{
                width: calc((100% - 20px) / 3);
                &.countrydiff{
                  width: calc((100% - 20px) / 2);
                }
              }
            }
          }
          .phone{
                position: relative;
                  svg{
                    position: absolute;
                    top: 22px;
                    right: 20px;
                    color: #0000008F;
                    cursor: pointer;
                    &:hover ~ span{
                      display: flex;
                      animation-name: smpopup;
                      animation-duration: 0.3s;
                    }
                  }
                  @media (max-width: 750px){
                    span{
                      right: -10px !important;
                      &::before{
                        right: 34px !important;
                      }
                    }
                  }
                  span{
                    position: absolute;
                    top: -75px;
                    right: -45px;
                    display: none;
                    align-items: center;
                    justify-content: center;
                    padding: 10px;
                    border-radius: 6px;
                    background-color: black;
                    color: #f6f6f6;
                    width: 150px;
                    height: 80px;
                    font-size: 12px;
                    text-align: center;
                    &::before{
                      content: '';
                      position: absolute;
                      border: 5px solid transparent;
                      border-top-color: black;
                      top: 80px;
                      right: 69px;
                    }
                  }
          }
          .invalid{
            input,
            select{
              border-color: red;
              border:  2px solid red !important;
            }
            p{
              color: red;
              font-size: 13px;
              margin-top: 5px;
              margin-bottom: 0;
            }
          }
          .head{
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 12px;
            h2{
              font-size: 24px;
            }
            span{
              color: #a5a3a3;
              font-size: 14px;
              a{
                color: black;
                text-decoration: underline;
              }
            }
          }
          .contactcont{
            margin-bottom: 32px;
          }
          .delivery{
            .delivery-controls{
              .form-check{
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin-bottom: 0;
                border-radius: 6px;
                padding-left: 40px;
                border: 1px solid #dadada;
                &.active{
                  background-color: #f6f6f6;
                  border-color: black;
                  svg{
                    color: black;
                  }
                }
                svg{
                  color: #cecbcb;
                }
                .form-check-input{
                  cursor: pointer;
                  &:checked{
                    background-color: black;
                    border-color: black;
                  }
                  &:focus{
                    box-shadow: none;
                  }
                }
                label{
                  padding: 15px 40px 15px 0;
                  width: 100%;
                  display: flex;
                  align-items: center;
                  justify-content: space-between;
                  cursor: pointer;
                }
                &:first-of-type{
                  border-bottom-right-radius: 0;
                  border-bottom-left-radius: 0;
                }
                &:last-of-type{
                  border-top-right-radius: 0;
                  border-top-left-radius: 0;
                }
              }
            }
            .delivery-content{
              margin-top: 30px;
              .textme{
                margin-top: 10px;
              }
              .saveinfo,
              .textme{
                label{
                  font-size: 14px;
                }
              .form-check-input{
                &:checked{
                  background-color: black;
                  border-color: black;
                }
                &:focus{
                  box-shadow: none;
                  border-color: black;
                }
              }
              }
              .pickup{
                h4{
                  font-size: 17px;
                  margin-bottom: 20px;
                }
                p{
                  color: #0000008F;
                  font-size: 14px;
                  margin: 0;
                }
                .onlinestore{
                  margin-top: 15px;
                  display: flex;
                  align-items: center;
                  justify-content: space-between;
                  border: 1px solid black;
                  border-radius: 6px;
                  padding: 17px;
                  background-color: #f6f6f6;
                  .onlinehead{
                    p{
                      font-size: 13px;
                    }
                  }
                  .info{
                    text-align: end;
                    span{
                      font-weight: 600;
                    }
                    p{
                      font-size: 13px;
                    }
                  }
                }
              }
            }
          }
          .payment{
            h3{
              font-size: 24px;
              margin-top: 30px;
            }
            p{
              color: #0000008F;
              margin-bottom: 10px;
              font-size: 14px;
            }
            .visaalert{
              display: flex;
              align-items: center;
              justify-content: center;
              flex-direction: column;
              background-color: #f6f6f6;
              padding: 20px;
              &.collapse:not(.show){
                display: none !important;
              }
              @media (max-width: 749px) {
                svg{
                  font-size: 100px !important;
                }
              }
              svg{
                font-size: 160px;
                color: #505050;
              }
              p{
                text-align: center;
                color: black !important;
                margin-top: 20px;
              }
            }
            .form-check{
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 0;
            border-radius: 6px;
            padding-left: 40px;
            border: 1px solid #dadada;
            .price{
              font-weight: 600;
            }
            &.active{
              background-color: #f6f6f6;
              border-color: black;
              svg{
                color: black;
              }
            }
            svg{
              color: #cecbcb;
            }
            .form-check-input{
              cursor: pointer;
              &:checked{
                background-color: black;
                border-color: black;
              }
              &:focus{
                box-shadow: none;
              }
            }
            label{
              padding: 15px 40px 15px 0;
              width: 100%;
              display: flex;
              align-items: center;
              justify-content: space-between;
              cursor: pointer;
            }
            &:first-of-type{
              border-bottom-right-radius: 0;
              border-bottom-left-radius: 0;
            }
            &:nth-last-of-type(2){
              border-top-right-radius: 0;
              border-top-left-radius: 0;
            }
          }
          }
          .billingaddress{
            h3{
              font-size: 20px;
              margin-top: 30px;
              margin-bottom: 20px;
            }
            .form-check{
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 0;
            border-radius: 6px;
            padding-left: 40px;
            border: 1px solid #dadada;
            .price{
              font-weight: 600;
            }
            &.active{
              background-color: #f6f6f6;
              border-color: black;
              svg{
                color: black;
              }
            }
            svg{
              color: #cecbcb;
            }
            .form-check-input{
              cursor: pointer;
              &:checked{
                background-color: black;
                border-color: black;
              }
              &:focus{
                box-shadow: none;
              }
            }
            label{
              padding: 15px 40px 15px 0;
              width: 100%;
              display: flex;
              align-items: center;
              justify-content: space-between;
              cursor: pointer;
            }
            &:first-of-type{
              border-bottom-right-radius: 0;
              border-bottom-left-radius: 0;
            }
            &:nth-last-of-type(2){
              border-top-right-radius: 0;
              border-top-left-radius: 0;
            }
            }
            .billingalert{
              background-color: #f6f6f6;
              padding: 20px;
            }
          }
          .submitbtn{
            width: 100%;
            height: 55px;
            margin-top: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 700;
            font-size: 17px;
            cursor: pointer;
            border-radius: 6px;
            transition-duration: 0.5s;
            background-color: #ff9800;
            border: none;
            color: white;
            &:hover{
              background-color: #d98100;
            }
          }
      }
      hr{
        margin: 0;
        border-top: 1px solid #dfdfdf;
        opacity: 1;
      }
      .contact-footer{
        padding: 20px 40px;
        max-width: 650px;
        margin-left: auto;
        .footer{
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: flex-start;
          a{
            font-size: 13px;
            text-decoration: underline;
            color: black;
            padding: 10px 10px;
          }
        }
      }
    }
  }
}
  .shipping-popup{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1000;
    @media (max-width: 766px) {
      .popup{
        width: 100% !important;
        height: 100% !important;
        max-width: none !important;
        border-radius: 0 !important;
      }
    }
    .popup{
    overflow: scroll;
    position: fixed;
    top: 50%;
    left: 50%;
    width: 90%;
    max-width: 840px;
    transform: translate(-50%, -50%);
    z-index: 1000;
    background-color: white;
    border-radius: 10px;
    padding: 20px;
    .head{
      display: flex;
      align-items: center;
      justify-content: space-between;
      span{
        font-size: 22px;
        font-weight: 600;
        cursor: pointer;
        color: #d9d9d9;
      }
    }
    .content{
      .sec{
        color: rgb(84, 84, 84);
        span{
          display: block;
          margin-bottom: 15px;
        }
        p{
          margin-bottom: 25px;
        }
      }
    }
    }
    .blueshadow{
      position: fixed;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      z-index: 1000;
      background-color: rgba(0, 0, 0, .6);
      backdrop-filter: blur(6px);
    }
  }
  .popup-enter-from,
  .popup-leave-to{
    top: calc(50% + 30px);
    opacity: 0;
  }
  .popup-leave-active{
    transition: all 0.2s ease-in;
  }
  .popup-enter-active{
    transition: all 0.2s ease-out;
  }
  .popup-leave-from,
  .popup-enter-to{
    top: calc(50%);
    opacity: 1;
  }
  @keyframes smpopup {
    0%{
      transform: scale(0.8);
    }
    100%{
      transform: scale(1);
    }
  }
</style>
