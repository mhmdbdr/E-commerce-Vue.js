import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    global: {
      header: {
        logo: 'stabraq',
        nav: {
          men: 'Men',
          women: 'Women',
          kids: 'Kids',
          accessories: 'Accessories'
        },
        navList: {
          men: {
            allmen: 'ALL MEN',
            alltops: 'all tops',
            top: 'TOPS',
            top1: 'T-SHIRTS',
            top2: 'Graphics',
            top3: 'Grafit-tee',
            top4: 'Polo',
            top5: 'Shirts',
            top6: 'Long-Sleeves',
            top7: 'Hoodies',
            top8: 'Zippers',
            top9: 'Pullovers',
            top10: 'Jackets & Coats',
            allbott: 'all bottoms',
            bottom: 'BOTTOMS',
            bottom1: 'Jeans',
            bottom2: 'Jogger',
            bottom3: 'Sweatpants',
            bottom4: 'Shorts',
            alljil: 'all jilbab',
            jilbab: 'JILBAB',
            jilbab1: 'jilbab',
            allfeat: 'all featured',
            featured: 'FEATURED',
            shopallmen: 'SHOP ALL MEN',
            allaccess: 'all accessories',
            accessories: 'ACCESSORIES',
            accessories1: 'Socks',
            accessories2: 'Wallet',
            accessories3: 'Notebooks',
            accessories4: 'Gift Card',
            newarr: 'New Arrivals'
          },
          women: {
            allwomen: 'all women',
            alltops: 'all tops',
            top: 'TOPS',
            top1: 'Basics',
            top2: 'Graphics',
            top3: 'Zippers',
            top4: 'Pullovers',
            top5: 'Sweatshirts',
            bottom: 'BOTTOMS',
            allbottoms: 'all bottoms',
            bottom1: 'Skirts',
            dress: 'DRESSES & JUMPSITS',
            alldress: 'all dresses & jumpsuits',
            dress1: 'Dress',
            accessories: 'ACCESSORIES',
            allaccesswomen: 'all accessories',
            accessories1: 'Socks',
            accessories2: 'Scarf',
            accessories3: 'Notebooks',
            accessories4: 'Gift Card',
            featured: 'FEATURED',
            allfeatured: 'all featured',
            featured1: 'New Arrivals',
            shopallwomen: 'SHOP ALL WOMEN'
          },
          kids: {
            allkids: 'all kids',
            top1: 'Pants',
            top2: 'Graphics',
            top3: 'Zippers'
          }
        },
        cart: {
          emptyCart: {
            btn: 'CLOSE',
            header: 'YOUR BAG',
            pEmpty: 'Your cart is currently empty.',
            continueBtn: 'CONTINUE SHOPPING'
          },
          fullCart: {
            items: 'items',
            quant: 'Quantity: ',
            total: 'Total',
            shippingtitle: 'Shipping',
            shippingtaxes: 'Taxes and shipping fee will be calculated at checkout',
            checkout: 'check out',
            viewcart: 'view cart'
          }
        },
        profile: {
          login: {
            header: 'CUSTOMER LOGIN:',
            eInput: 'Email Address',
            evalid: 'email must be correct',
            pInput: 'Password',
            pvalid: 'password must not be empty or less than 8 char',
            loginInput: 'LOGIN',
            forgotP: 'Forgot your password?',
            createBtn: 'CREATE AN ACCOUNT'
          },
          logout: {
            myacc: 'MY ACCOUNT',
            logoutBtn: 'LOG OUT'
          }
        },
        mywishlist: 'MY WISH LISTS',
        lang: 'Language',
        placeholders: {
          email: 'Email Address',
          pass: 'Password'
        }
      },
      footer: {
        disc: {
          disc1: 'Stabraq Trendsetters is an all-Egyptian clothes brand. Driven by self-expression, we strive to reflect our beliefs through high quality, multi-featured products and effective and inspiring movements.',
          dics2: 'Address: 1 Mostafa El-Nahaas, Nasr City',
          dics3: 'Call us at: 01123399345',
          dics4: 'Email: Email'
        },
        shop: 'SHOP',
        info: 'INFORMATION',
        info1: 'About Us',
        info2: 'Contact Us',
        info3: 'Terms Of Service',
        info4: 'Refund Policy',
        payment: 'PAYMENT METHODS',
        rights: '2021 Stabraq TS Management Co. All Rights Reserved'
      }
    },
    homePage: {
      lookingfor: {
        title: 'I’m looking for..',
        tshirts: 'T-SHIRTS',
        pants: 'PANTS',
        women: 'WOMEN',
        kids: 'KIDS',
        bags: 'BAGS',
        accessories: 'ACCESSORIES'
      },
      newitems: {
        head: 'New items that you can’t miss out on',
        p: 'GRAPHICS COLLECTION'
      },
      trending: {
        head: 'Trending',
        sec1: 'T-SHIRTS',
        sec2: 'PANTS',
        sec3: 'ACCESSORIES'
      },
      furturetrend: {
        head: 'Furture Trendsetters',
        p: 'SHOP ALL'
      }
    },
    collectionPage: {
      sort: {
        head: 'Sort by',
        sort1: 'Featured',
        sort2: 'Price, low to high',
        sort3: 'Price, high to low',
        sort4: 'Date, old to new',
        sort5: 'Date, new to old',
        sort6: 'Best Selling',
        sort7: 'Alphabetically, A-Z',
        sort8: 'Alphabetically, Z-A'
      },
      viewas: 'View as'
    },
    checkoutPage: {
      show: 'Show',
      hide: 'Hide',
      ordersum: 'order summary',
      product: {
        giftcard: 'Gift card',
        apply: 'Apply',
        subtotal: 'subtotal',
        shipping: 'shipping',
        eshippingad: 'Enter shipping address',
        total: 'total',
        shippingpol: 'Shipping policy',
        shippingp: 'Stabraq is not responsible for return shipping costs. Every shipping has to be paid by the customer, even if the item had free shipping in the first place, the customer has to pay for the shipping in return.',
        yconsent: 'Your Consent',
        consentp: 'By using our website, registering an account, or making a purchase, you hereby consent to our Return & Refund Policy and agree to its terms.',
        refund: 'Changes To Our Return & Refund Policy',
        refundp: 'Should we update, amend or make any changes to this document so that they accurately reflect our Service and policies. Unless otherwise required by law, those changes will be prominently posted here. Then, if you continue to use the Service, you will be bound by the updated Return & Refund Policy. If you do not want to agree to this or any updated Return & Refund Policy, you can delete your account.'
      },
      forms: {
        inputerror: 'Your information is incorrect, please check your input fields',
        contact: 'Contact',
        haveacc: 'Have an account?',
        login: 'Log in',
        email: 'Email',
        emerror1: 'Email field must be correct',
        emerror2: 'Email field must not be empty',
        emerror3: 'Email field must not be empty or wrong',
        delivery: 'Delivery',
        ship: 'Ship',
        pickup: 'Pick up',
        countregion: 'country/Region',
        countregionerror: 'Country field must not be empty',
        fname: 'First name',
        fnameerror: 'First name must not be empty',
        lname: 'Last name',
        lnameerror: 'Last name must not be empty',
        address: 'Address',
        addresserror: 'Address must not be empty',
        city: 'City',
        cityerror: 'City field must not be empty',
        govern: 'Governorate',
        governerror: 'Governorate must no be empty',
        postal: 'Postal code',
        postalerror: 'Postal code must not be empty',
        phone: 'Phone',
        phoneoptional: 'Phone (optional)',
        phonemass1: 'In case we need to',
        phonemass2: 'contact you about your order',
        phoneerror: 'Phone must not be empty',
        savefornext: 'Save this information for next time',
        textme: 'Text me with news and offers',
        shippingmeth: 'shipping-methods',
        aramex: 'Aramex Office',
        doorshipp: 'Doorstep shipping',
        pickuplock: 'Pickup locations',
        pickupp: 'There is 1 store with stock close to your location',
        onlinestore: 'Online Store',
        onlinestorep: '1 Mostafa El-Nahaas, 1st Floor, C, Nasr City',
        info: 'Free',
        infop: 'Usually ready in 24 hours',
        payment: 'Payment',
        paymentp: 'All transactions are secure and encrypted.',
        cards: 'Pay via (Debit/Credit cards/Wallets/Installments)',
        cardsp: 'After clicking “Pay now”, you will be redirected to Pay via (Debit/Credit cards/Wallets/Installments) to complete your purchase securely.',
        cod: 'Cash on Delivery (COD)',
        billingad: 'Billing address',
        sameas: 'Same as shipping address',
        usediff: 'Use a different billing address',
        footer: {
          refund: 'Refund policy',
          prpol: 'Privacy policy',
          terms: 'Terms of service',
          contact: 'Contact information'
        }
      },
      placeholders: {
        email: 'Email',
        fname: 'First name',
        lname: 'Last name',
        address: 'Address',
        city: 'City',
        postalc: 'Postal code',
        phone: 'Phone',
        phoneoptional: 'Phone (optional)'
      }
    },
    cartPage: {
      head: 'My Cart',
      emptycart: 'Your cart is currently empty.',
      continuebrows: 'Continue browsing',
      here: 'here',
      prod: 'product',
      info: 'info',
      price: 'Price:',
      quan: 'Quantity:',
      total: 'Total:',
      ordersum: 'order summary',
      addcom: 'Additional comments',
      proceed: 'proceed to checkout',
      contshopping: 'continue shopping',
      related: 'Related Products',
      commentplaceh: 'Special instruction for seller'
    },
    cardInfoPage: {
      colors: 'Colors:',
      size: 'Size:',
      addtcard: 'Add to cart',
      buytnow: 'buy it now',
      pickupp1: 'PICKUP AVAILABLE AT',
      pickupp2: 'ONLINE STORE',
      pickupp3: 'Usually ready in 24 hours',
      viewinfo: 'view store info',
      onlines: 'online store',
      pickupp: 'Pickup available, usually ready in 24 hours',
      add1: '1 Mostafa El-Nahaas',
      add2: '1st Floor',
      add3: 'C',
      add4: 'Nasr City',
      add5: '4441525',
      add6: 'Egypt',
      add7: '+20222737773',
      sizechart: 'Size Chart',
      chest: 'chest',
      chestp: 'To measure the chest: First, put the product on a flat surface, then measure between the two ends below armhole.',
      length: 'length',
      lengthp: 'To measure the length of the product: First, put the product on a flat surface, then measure from the highest point of the shoulder down to the products bottom hem.',
      related: 'Related Products'
    },
    accountRegister: {
      head: 'ACCOUNT',
      newcus: 'NEW CUSTOMER',
      signupp: 'Register with us for a faster checkout, to track the status of your order and more.',
      fname: 'First Name',
      fnameerror: 'first name must not be empty',
      lname: 'Last Name',
      lnameerror: 'last name must not be empty',
      emailadd: 'Your Email Address',
      enailadderror: 'email must be correct',
      pass: 'Your Password',
      passerror: 'password must not be empty or less than 8 char',
      createacc: 'create an account',
      or: 'OR',
      returner: 'RETURNING CUSTOMER',
      signinp: 'If you already have an account, enter your email and password information.',
      uemail: 'Email Address',
      uemailerror: 'email must be correct',
      upass: 'Password',
      upasserror: 'password must not be empty or less than 8 char',
      login: 'login',
      placeholders: {
        fname: 'First Name',
        lname: 'Last Name',
        yemail: 'Your Email Address',
        ypass: 'Your Password',
        emailadd: 'Email Address',
        passadd: 'Password'
      }
    },
    accountPage: {
      head: 'MY ACCOUNT',
      orderhis: 'ORDER HISTORY',
      order: 'order',
      date: 'date',
      paymentstat: 'payment status',
      fulfillment: 'fulfillment status',
      total: 'total',
      emptyhistory: 'Your order history is currently empty.',
      contbrowsing: 'Continue browsing',
      here: 'here'
    },
    information: {
      aboutus: {
        head: 'ABOUT US',
        text1: 'Stabraq Trendsetters is the number one detail oriented all-Egyptian clothes brand.',
        text2: 'Driven by self-expression, we strive to reflect our beliefs through high quality, multi-featured products and effective and inspiring movements.',
        text3: 'Check out this video to get an idea of who we are, and how we work.'
      },
      contactus: {
        head: 'DROP US A LINE',
        haveaq: 'Have a question or comment? Use the form below to send us a message or contact us by mail at:',
        yname: 'Your Name',
        yphone: 'Your Phone',
        yemail: 'Your Email',
        ycomment: 'Your Comment',
        submit: 'submit contact',
        storeinfo: 'STORE INFORMATION',
        storeinfop1: 'We would love to hear from you - please use the',
        storeinfop2: 'form to send us your message or ideas. Or',
        storeinfop3: 'simply pop in for a cup of fresh tea and a',
        storeinfop4: 'cookie:',
        storeinfop5: 'Address: 1 Mostafa El-Nahaas, Nasr City,',
        storeinfop6: 'Cairo',
        storeinfop7: 'Email: EMAIL',
        storeinfop8: 'Mobile: 002-01123399345',
        storeinfop9: 'Opening Hours:',
        storeinfop10: 'Sunday to Thursday: 12pm - 12am',
        storeinfop11: 'Fridays: 1pm - 12am'
      },
      termsofserv: {
        head: 'Terms of service'
      },
      refundpol: {
        head: 'Refund policy'
      }
    },
    ui: {
      basesidebar: {
        close: 'CLOSE'
      },
      editex: {
        prodoptions: 'product options',
        editquan: 'Quantity:',
        editcolor: 'Colors:',
        editsize: 'Size:',
        addtocart: 'add to cart'
      },
      popup: {
        added: 'is added to your shopping cart.',
        continueshopping: 'continue shopping',
        gotocart: 'go to cart'
      },
      thanky: {
        confirmed: 'Your order is confirmed',
        confp: 'You’ll receive an email when your order is ready for pickup.',
        btn: 'continue shopping'
      }
    },
    errorAndNote: {
      collectionPage: {
        yoursearch1: 'YOUR SEARCH FOR ',
        yoursearch2: ' REVEALED THE FOLLOWING:',
        nodata1: 'Sorry, u didnt add any product to your wishlist',
        nodata2: 'Sorry, there are no products in this collection',
        nodata3: 'Sorry, there are no products match this search',
        dataerror: 'something went wrong'
      },
      accountPage: {
        loadorder: 'load orders faild'
      },
      header: {
        loadSpinLangError: 'changing lang went wrong',
        logoutError: 'logout went wrong'
      },
      store: {
        mainStore: {
          responsefiled: 'failed load products'
        },
        authModule: {
          signupfiled: 'Something went wrong please try again later',
          signinfiled: 'Incorrect email address or password, please try again'
        },
        ordersModule: {
          setorderfiled: 'failed to send order',
          fetchordersfiled: 'failed to get order'
        }
      }
    }
  },
  ar: {
    global: {
      header: {
        logo: 'stabraq',
        nav: {
          men: 'رجال',
          women: 'نساء',
          kids: 'أطفال',
          accessories: 'اكسسوارات'
        },
        navList: {
          men: {
            allmen: 'تسوق جميع منتجات الرجال',
            alltops: 'تسوق جميع الملابس العلوية',
            top: 'الملابس العلوية',
            top1: 'التي-شيرتات',
            top2: 'جرافكس',
            top3: 'جرافيتي',
            top4: 'بولو',
            top5: 'الفمصان',
            top6: 'الاكمام الطويلة',
            top7: 'الهوديات و السويتشيرتات',
            top8: 'الهودي بسوستة',
            top9: 'البلوفرات',
            top10: 'الجاكيتات و المعاطف',
            allbott: 'تسوق جميع الملابس السفلية',
            bottom: 'الملابس السفلية',
            bottom1: 'جينز',
            bottom2: 'الجوجر',
            bottom3: 'البنطلونات الرياضية',
            bottom4: 'الشورتات',
            alljil: 'تسوق جميع الجلباب',
            jilbab: 'الجلباب',
            jilbab1: 'jilbab',
            allfeat: 'تسوق كل ما وصل حديثا',
            featured: 'ما نوصي به',
            shopallmen: 'تسوق جميع منتجات الرجال',
            allaccess: 'تسوق جميع الإكسسوارات',
            accessories: 'الإكسسوارات',
            accessories1: 'الشرابات',
            accessories2: 'محفطة',
            accessories3: 'نوت بوك',
            accessories4: 'كروت الهدايا',
            newarr: 'وصل حديثا'
          },
          women: {
            allwomen: 'تسوقي جميع منتجات النساء',
            alltops: 'تسوقي جميع الملابس العلوية',
            top: 'الملابس العلوية',
            top1: 'بيسك',
            top2: 'جرافيكس',
            top3: 'الهودي بسوستة',
            top4: 'البلوفرات',
            top5: 'السويت-شيرتات',
            bottom: 'الملابس السفلية',
            allbottoms: 'تسوقي جميع الملابس السفلية',
            bottom1: 'جيبة',
            dress: 'فساتين',
            alldress: 'تسوقي جميع الفساتين',
            dress1: 'فستان',
            accessories: 'الإكسسوارات',
            allaccesswomen: 'تسوقي جميع الإكسسوارات',
            accessories1: 'الشرابات',
            accessories2: 'طرحة',
            accessories3: 'نوت بوك',
            accessories4: 'كروت الهدايا',
            featured: 'ما نوصي به',
            allfeatured: 'تسوقي كل ما وصل حديثا',
            featured1: 'وصل حديثا',
            shopallwomen: 'تسوقي جميع منتجات النساء'
          },
          kids: {
            allkids: 'تسوق جميع منتجات الاطفال',
            top1: 'البنطلونات',
            top2: 'جرافكس',
            top3: 'الهودي بسوستة'
          }
        },
        cart: {
          emptyCart: {
            btn: 'CLOSE',
            header: 'السلة',
            pEmpty: 'سلة التسوق فارغة حاليا',
            continueBtn: 'تابع التسوق'
          },
          fullCart: {
            items: 'المنتجات',
            quant: 'الكمية: ',
            total: 'المجموع',
            shippingtitle: 'الشحن',
            shippingtaxes: 'سيتم احتساب رسوم الشحن عندالدفع',
            checkout: 'الدفع',
            viewcart: 'عرض السلة'
          }
        },
        profile: {
          login: {
            header: 'تسجيل الدخول :',
            eInput: 'البريد الالكتروني',
            evalid: 'البريد الالكتروني يجب ان يكون صحيحا',
            pInput: 'كلمة السر',
            pvalid: 'كلمة السر يجب ان لا تكون فارغة اول اقل من 8 ارقام',
            loginInput: 'تسجيل الدخول',
            forgotP: 'نسيت كلمة السر؟',
            createBtn: 'انشاء حساب'
          },
          logout: {
            myacc: 'حسابي',
            logoutBtn: 'تسجيل الخروج'
          }
        },
        mywishlist: 'قائمة امنياتي',
        lang: 'اللغة',
        placeholders: {
          email: 'البريد الالكتروني',
          pass: 'كلمة السر'
        }
      },
      footer: {
        disc: {
          disc1: 'إستبرق اول براند مصري قائم على تعزيز الهوية العربية والإسلامية من خلال أعلى جودة وأدق اهتمام بالتفاصيل.',
          dics2: 'العنوان: ١ مصطفى النحاس، مدينة نصر',
          dics3: 'اتصل بنا: 01123399345',
          dics4: 'الايميل: Email'
        },
        shop: 'تسوق',
        info: 'معلومات',
        info1: 'معلومات عنا',
        info2: 'اتصل بنا',
        info3: 'Terms Of Service',
        info4: 'سياسة الاسترجاع',
        payment: 'نقبل الدفع بـــ',
        rights: ' 2021 إستبرق جميع الحقوق محفوظة.'
      }
    },
    homePage: {
      lookingfor: {
        title: 'تشكيلات إستبرق',
        tshirts: 'تي-شيرت',
        pants: 'بنطلونات',
        women: 'بناتي',
        kids: 'أطفالي',
        bags: 'حقائب',
        accessories: 'اكسسوارات'
      },
      newitems: {
        head: 'منتجات جديدة لا يمكنك تفويتها',
        p: 'GRAPHICS COLLECTION'
      },
      trending: {
        head: 'الرائج الآن',
        sec1: 'تي-شيرت',
        sec2: 'بنطلونات',
        sec3: 'الاكسسوارات'
      },
      furturetrend: {
        head: 'Furture Trendsetters',
        p: 'تسوق الان'
      }
    },
    collectionPage: {
      sort: {
        head: 'ترتيب حسب',
        sort1: 'متميز',
        sort2: 'السعر, من الارخص الي الاعلي',
        sort3: 'السعر, من الاعلي الي الارخص',
        sort4: 'التاريخ من القديم الي الجديد',
        sort5: 'التاريخ من الجديد الي القديم',
        sort6: 'افضل المبيعات',
        sort7: 'ابجديات, a-z',
        sort8: 'ابجديات, z-a'
      },
      viewas: 'العرض مثل'
    },
    checkoutPage: {
      show: 'اظهار',
      hide: 'اخفاء',
      ordersum: 'ملخص الطلب',
      product: {
        giftcard: 'بطاقة الهدية',
        apply: 'تطبيق',
        subtotal: 'المجموع الفرعي',
        shipping: 'الشحن',
        eshippingad: 'ادخل طريقة الشحن',
        total: 'المجموع',
        shippingpol: 'Shipping policy',
        shippingp: 'Stabraq is not responsible for return shipping costs. Every shipping has to be paid by the customer, even if the item had free shipping in the first place, the customer has to pay for the shipping in return.',
        yconsent: 'Your Consent',
        consentp: 'By using our website, registering an account, or making a purchase, you hereby consent to our Return & Refund Policy and agree to its terms.',
        refund: 'Changes To Our Return & Refund Policy',
        refundp: 'Should we update, amend or make any changes to this document so that they accurately reflect our Service and policies. Unless otherwise required by law, those changes will be prominently posted here. Then, if you continue to use the Service, you will be bound by the updated Return & Refund Policy. If you do not want to agree to this or any updated Return & Refund Policy, you can delete your account.'
      },
      forms: {
        inputerror: 'المعلومات غير صحيحة من فضلك تفقد المعلومات مجددا',
        contact: 'معلومات المستخدم',
        haveacc: 'لديك حساب?',
        login: 'تسجيل الدخول',
        email: 'البريد الالكتروني',
        emerror1: 'الايميل يجب ان يكون صحيحا',
        emerror2: 'الايميل يجب ان لا يكون فارغا',
        emerror3: 'الايميل يجب ان لايكون فارغا وصحيحا',
        delivery: 'الشحن',
        ship: 'Ship',
        pickup: 'Pick up',
        countregion: 'البلد',
        countregionerror: 'حقل البلد لا يجب ان يكون فارغا',
        fname: 'الاسم الاول',
        fnameerror: 'الاسم الاول يجب ان لا يكون فارغا',
        lname: 'اسم العائلة',
        lnameerror: 'اسم العائلة لا يجب ان يكون فارغا',
        address: 'العنوان',
        addresserror: 'حقل العنوان يجب ان لا يكون فارغا',
        city: 'المدينة',
        cityerror: 'حقل المدينة يجب ان لا يكون فارغا',
        govern: 'المحافطة',
        governerror: 'حقل المحافظة يجب ان لا يكون فارغا',
        postal: 'Postal code',
        postalerror: 'Postal code must not be empty',
        phone: 'الهاتف',
        phoneoptional: 'الهاتف(اختياري)',
        phonemass1: 'في حال احتجنا',
        phonemass2: 'للتواصل معك عن الطلب',
        phoneerror: 'الهاتف لا يجب ان يكون فارغا',
        savefornext: 'الاحتفاظ بالمعولمات للمرة القادمة',
        textme: 'راسلني بالعروض الجديدة',
        shippingmeth: 'طرق الشحن',
        aramex: 'Aramex Office',
        doorshipp: 'Doorstep shipping',
        pickuplock: 'Pickup locations',
        pickupp: 'There is 1 store with stock close to your location',
        onlinestore: 'Online Store',
        onlinestorep: '1 Mostafa El-Nahaas, 1st Floor, C, Nasr City',
        info: 'Free',
        infop: 'Usually ready in 24 hours',
        payment: 'الدفع',
        paymentp: 'All transactions are secure and encrypted.',
        cards: 'Pay via (Debit/Credit cards/Wallets/Installments)',
        cardsp: 'After clicking “Pay now”, you will be redirected to Pay via (Debit/Credit cards/Wallets/Installments) to complete your purchase securely.',
        cod: 'Cash on Delivery (COD)',
        billingad: 'Billing address',
        sameas: 'Same as shipping address',
        usediff: 'Use a different billing address',
        footer: {
          refund: 'سياسة الاسترجاع',
          prpol: 'سياسة الخصوصية',
          terms: 'Terms of service',
          contact: 'معلومات عنا'
        }
      },
      placeholders: {
        email: 'البريد الالكتروني',
        fname: 'الاسم الاول',
        lname: 'اسم العائلة',
        address: 'العنوان',
        city: 'المدينة',
        postalc: 'Postal code',
        phone: 'الهاتف',
        phoneoptional: 'الهاتف(اختياري)'
      }
    },
    cartPage: {
      head: 'سلة التسوق',
      emptycart: '.سلة التسوق فارغة حاليا',
      continuebrows: 'تابع التسوق',
      here: 'هنا',
      prod: 'المنتج',
      info: 'معلومات',
      price: 'السعر:',
      quan: 'الكمية:',
      total: 'المجموع:',
      ordersum: 'ملخص الطلب',
      addcom: 'تعليقات اضافية',
      proceed: 'الذهاب للدفع',
      contshopping: 'تابع التسوق',
      related: 'منتجات مشابهة',
      commentplaceh: 'تعليقات اضافية للبائع'
    },
    cardInfoPage: {
      colors: 'اللون:',
      size: 'المقاس:',
      addtcard: 'أضف الي السلة',
      buytnow: 'اشتري الان',
      pickupp1: 'PICKUP AVAILABLE AT',
      pickupp2: 'ONLINE STORE',
      pickupp3: 'Usually ready in 24 hours',
      viewinfo: 'view store info',
      onlines: 'online store',
      pickupp: 'Pickup available, usually ready in 24 hours',
      add1: '1 Mostafa El-Nahaas',
      add2: '1st Floor',
      add3: 'C',
      add4: 'Nasr City',
      add5: '4441525',
      add6: 'Egypt',
      add7: '+20222737773',
      sizechart: 'جدول المقاسات',
      chest: 'الصدر',
      chestp: 'لقياس عرض الصدر: أولًا قم بفرد المنتج علي سطح مستقيم، ثم ابدأ بقياس المسافة بين طرفي أسفل الإبط مرورًا بمنطقة الصدر (من الجزء الأمامي فقط).',
      length: 'الطول',
      lengthp: 'لقياس طول المنتج: أولًا قم بفرد المنتج على سطح مستقيم، ثم ابدأ بالقياس طولًا بدايةً من أعلى نقطة في الكتف ونزولًا إلى أسفل نقطة في ديل المنتج.',
      related: 'منتجات مشابهة'
    },
    accountRegister: {
      head: 'فتح حساب',
      newcus: 'عميل جديد',
      signupp: 'سجل معنا لتتبع طلباتك وللتسوق اسرع واكثر...',
      fname: 'الاسم الأول',
      fnameerror: 'الاسم الأول لايمكن تركه فارغا',
      lname: ' اسم العائلة',
      lnameerror: 'اسم العائلة لا يمكن تركه فارغا',
      emailadd: 'البريد الإلكتروني ',
      enailadderror: 'البريد الإلكتروني  يجب ان يكون صحيحا',
      pass: 'كلمة السر',
      passerror: 'كلمة السر يجب ان تكون صحيحة وليست اقل من 8 احرف',
      createacc: 'انشاء حساب',
      or: 'او',
      returner: 'عميل سابق',
      signinp: 'لو كان لديك حساب مسبقا, ادخل البريد الإلكتروني و كلمة السر',
      uemail: 'البريد الإلكتروني',
      uemailerror: 'البريد الإلكتروني يجب ان يكون صحيح',
      upass: 'كلمة السر',
      upasserror: 'كلمة السر يجب ان تكون صحيحة وليست اقل من 8 احرف',
      login: 'تسجيل الدخول',
      placeholders: {
        fname: 'الاسم الاول',
        lname: 'اسم العائلة',
        yemail: 'بريدك الالكتروني',
        ypass: 'كلمة السر الخاصة بك',
        emailadd: 'البريد الالكتروني',
        passadd: 'كلمة السر'
      }
    },
    accountPage: {
      head: 'حسابي',
      orderhis: 'تاريخ الطلبات',
      order: 'الطلب',
      date: 'التاريخ',
      paymentstat: 'حالة الدفع',
      fulfillment: 'حالة تجهيز الطلب',
      total: 'المجموع',
      emptyhistory: 'تاريخ الطلب لديك فارغ.',
      contbrowsing: 'تابع التسوق',
      here: 'هنا'
    },
    information: {
      aboutus: {
        head: 'عن إستبرق',
        text1: 'إستبرق اول براند مصري قائم على تعزيز الهوية العربية والإسلامية من خلال أعلى جودة وأدق اهتمام بالتفاصيل.',
        text2: 'نسعى جاهدين لعكس معتقداتنا من خلال منتجات عالية الجودة ومتعددة الميزات وحركات فعالة وملهمة.',
        text3: 'اتفرج على الفيديو ده علشان تاخد فكرة عن احنا مين وبنشتغل ازاي'
      },
      contactus: {
        head: 'شاركونا أرائكم',
        haveaq: 'نحن نرحب بكم في متجرنا في أي وقت. إذا كنت بحاجة إلى مساعدة أو لديك أي أسئلة، يرجى الاتصال بنا عن طريق ملء المعلومات التالية، إذا كان الأمر عاجلا',
        yname: 'الاسم',
        yphone: 'الهاتف',
        yemail: 'البريد الالكتروني',
        ycomment: 'تعليق',
        submit: 'ارسال جهة الاتصال',
        storeinfo: 'معلومات المتجر',
        storeinfop1: 'نحب ان نسمع اقتراحاتك',
        storeinfop2: 'ارسل لنا ارائك واقتراحاتك',
        storeinfop3: 'أو ببساطة يمكنك الاستمتاع بفنجان من الشاي الطازج  ',
        storeinfop4: 'والبسكويت معنا',
        storeinfop5: 'Address: 1 Mostafa El-Nahaas, Nasr City,',
        storeinfop6: 'Cairo',
        storeinfop7: 'Email: EMAIL',
        storeinfop8: 'Mobile: 002-01123399345',
        storeinfop9: 'مواعيد العمل:',
        storeinfop10: 'من السبت إلى الخميس: 12ظهرًا - 12منتصف الليل',
        storeinfop11: 'الجمعة: 1ظهرًا - 12منتصف الليل'
      },
      termsofserv: {
        head: 'Terms of service'
      },
      refundpol: {
        head: 'Refund policy'
      }
    },
    ui: {
      basesidebar: {
        close: 'اغلاق'
      },
      editex: {
        prodoptions: 'تعديل المنتج',
        editquan: 'الكمية:',
        editcolor: 'الالوان:',
        editsize: 'المقاس:',
        addtocart: 'أضف الي السلة'
      },
      popup: {
        added: 'أضيفت الي السلة الخاصة بك',
        continueshopping: 'تابع التسوق',
        gotocart: 'عرض السلة'
      },
      thanky: {
        confirmed: 'تم تأكيد طلبك',
        confp: 'سيصلك ايميل عندما يجهز طلبك',
        btn: 'تابع التسوق'
      }
    },
    errorAndNote: {
      collectionPage: {
        yoursearch1: 'نتائج البحث عن  ',
        yoursearch2: ':',
        nodata1: 'عذرا , انت لم تضف اي منتج الي قائمة امنياتك بعد.',
        nodata2: 'عذرا , لا يوجد منتجات في هذه المجموعة.',
        nodata3: 'عذرا , لا يوجد منتجات تطابق هذا البحث.',
        dataerror: 'عذار , حدث خطأ ما.'
      },
      accountPage: {
        loadorder: 'حدث خطأ في تحميل الطلبات'
      },
      header: {
        loadSpinLangError: 'عذرا , حدث خطأ عند تغيير اللغة , حاول لاحقا',
        logoutError: 'حدث خطأ في تسجيل الخروج , حاول لاحقا'
      },
      store: {
        mainStore: {
          responsefiled: 'حدث خطأ في تحميل المنتجات'
        },
        authModule: {
          signupfiled: 'حدث خطأ ما , من فضلك حاول لاحقا',
          signinfiled: 'البريد الالكتروني او كلمة السر غير صحيحة , من فضلك حاول مجددا'
        },
        ordersModule: {
          setorderfiled: 'حدث خطأ في ارسال الطلبات',
          fetchordersfiled: 'حدث خطأ في تحميل الطلبات'
        }
      }
    }
  }
}

const i18n = createI18n({
  locale: 'en',
  messages
})

export default i18n
